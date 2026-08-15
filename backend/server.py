from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import time
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Annotated, Any
from pydantic.functional_validators import BeforeValidator
from bson import ObjectId
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


def _to_str(v: Any) -> Any:
    return str(v) if isinstance(v, ObjectId) else v


PyObjectId = Annotated[str, BeforeValidator(_to_str)]


# ---- Models ----
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class EnquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    lesson_type: Optional[str] = None
    preferred_instructor: Optional[str] = None
    contact_method: Optional[str] = None
    message: Optional[str] = None


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    lesson_type: Optional[str] = None
    preferred_instructor: Optional[str] = None
    contact_method: Optional[str] = None
    message: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ReviewCreate(BaseModel):
    name: str
    rating: int = 5
    text: str


class Review(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    rating: int = 5
    text: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---- Routes ----
@api_router.get("/")
async def root():
    return {"message": "Xclusive Driving School API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(input: EnquiryCreate):
    enquiry = Enquiry(**input.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
    logger.info(f"New enquiry from {enquiry.name} ({enquiry.email})")
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    docs = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Enquiry(**d) for d in docs]


@api_router.post("/reviews", response_model=Review)
async def create_review(input: ReviewCreate):
    rating = max(1, min(5, int(input.rating)))
    review = Review(name=input.name.strip(), rating=rating, text=input.text.strip())
    await db.reviews.insert_one(review.model_dump())
    logger.info(f"New review from {review.name} ({rating}★)")
    return review


@api_router.get("/reviews", response_model=List[Review])
async def list_reviews():
    docs = await db.reviews.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Review(**d) for d in docs]


# ---- Google Reviews (Places API New) with in-memory cache ----
_reviews_cache = {"ts": 0, "data": None}
_REVIEWS_TTL = 3600  # 1 hour


@api_router.get("/google-reviews")
async def google_reviews():
    api_key = os.environ.get("GOOGLE_MAPS_API_KEY")
    place_id = os.environ.get("GOOGLE_PLACE_ID")

    if not api_key or not place_id:
        return {"configured": False, "rating": None, "user_rating_count": None, "reviews": []}

    now = time.time()
    if _reviews_cache["data"] is not None and (now - _reviews_cache["ts"]) < _REVIEWS_TTL:
        return _reviews_cache["data"]

    url = f"https://places.googleapis.com/v1/places/{place_id.strip()}"
    field_mask = "id,displayName,rating,userRatingCount,reviews"
    try:
        async with httpx.AsyncClient(timeout=httpx.Timeout(8.0, connect=3.0)) as client_http:
            resp = await client_http.get(
                url,
                headers={"X-Goog-Api-Key": api_key, "X-Goog-FieldMask": field_mask},
            )
    except httpx.HTTPError:
        logger.warning("Google Places request failed")
        return {"configured": True, "error": True, "rating": None, "user_rating_count": None, "reviews": []}

    if resp.status_code >= 400:
        logger.warning(f"Google Places returned {resp.status_code}")
        return {"configured": True, "error": True, "rating": None, "user_rating_count": None, "reviews": []}

    data = resp.json()
    reviews = []
    for r in data.get("reviews", []):
        author = r.get("authorAttribution") or {}
        text = (r.get("text") or {}).get("text") or (r.get("originalText") or {}).get("text") or ""
        reviews.append({
            "rating": r.get("rating", 0),
            "text": text,
            "author": author.get("displayName", "Google user"),
            "author_uri": author.get("uri"),
            "author_photo": author.get("photoUri"),
            "relative_time": r.get("relativePublishTimeDescription"),
            "google_maps_uri": r.get("googleMapsUri"),
        })

    result = {
        "configured": True,
        "business_name": (data.get("displayName") or {}).get("text"),
        "rating": data.get("rating"),
        "user_rating_count": data.get("userRatingCount"),
        "reviews": reviews,
    }
    _reviews_cache["ts"] = now
    _reviews_cache["data"] = result
    return result


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
