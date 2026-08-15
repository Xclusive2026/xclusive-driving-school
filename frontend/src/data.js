const WA_NUMBER = "447814129029";

export const BRAND = {
  name: "Xclusive Driving School",
  short: "Xclusive",
  logo: "https://customer-assets-lqy194kg.emergentagent.net/job_drive-school-6/artifacts/md4o03gs_Exclusive_Logo.jpg",
  phone: "07814 129029",
  phoneHref: "tel:+447814129029",
  email: "ishie677@gmail.com",
  emailHref: "mailto:ishie677@gmail.com",
  areas: "Sheffield & Rotherham",
  facebookReviews: "https://www.facebook.com/profile.php?id=100091924760890&sk=reviews",
};

export const waLink = (text = "Hi Xclusive Driving School, I'd like to book a driving lesson.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1597724903770-41afe05361ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwyfHxsZWFybmVyJTIwZHJpdmVyJTIwaGFwcHklMjBzbWlsaW5nJTIwY2FyJTIwbGVzc29ufGVufDB8fHx3aGl0ZXwxNzg2Nzg5ODk3fDA&ixlib=rb-4.1.0&q=85",
  whyChoose: "https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nJTIwc3R1ZGVudCUyMGNhcnxlbnwwfHx8fDE3ODY3ODk4OTZ8MA&ixlib=rb-4.1.0&q=85",
  manual: "https://images.unsplash.com/photo-1611508106567-6218ae6c5f6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxkcml2aW5nJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nJTIwc3R1ZGVudCUyMGNhcnxlbnwwfHx8fDE3ODY3ODk4OTZ8MA&ixlib=rb-4.1.0&q=85",
  automatic: "https://images.unsplash.com/photo-1592632789037-50d9f2be5c3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHw0fHxsZWFybmVyJTIwZHJpdmVyJTIwaGFwcHklMjBzbWlsaW5nJTIwY2FyJTIwbGVzc29ufGVufDB8fHx3aGl0ZXwxNzg2Nzg5ODk3fDA&ixlib=rb-4.1.0&q=85",
  refresher: "https://images.unsplash.com/photo-1537211790624-e6f568af4b13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHw0fHxkcml2aW5nJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nJTIwc3R1ZGVudCUyMGNhcnxlbnwwfHx8fDE3ODY3ODk4OTZ8MA&ixlib=rb-4.1.0&q=85",
  road: "https://images.unsplash.com/photo-1663513819140-4033b7913a97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxjYXIlMjBkcml2aW5nJTIwb3BlbiUyMHJvYWQlMjB1ayUyMGNvdW50cnlzaWRlfGVufDB8fHx8MTc4Njc4OTkxOXww&ixlib=rb-4.1.0&q=85",
  areaSheffield: "https://images.unsplash.com/photo-1668443326322-c4cdefb0c1c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxTaGVmZmllbGQlMjBFbmdsYW5kJTIwY2l0eSUyMHN0cmVldHxlbnwwfHx8fDE3ODY3ODk5MTl8MA&ixlib=rb-4.1.0&q=85",
};

export const LESSON_OPTIONS = [
  "Manual — £37.50",
  "Automatic — £40",
  "Refresher — £37.50 Manual / £40 Automatic",
  "Intensive Course — £600",
  "Advanced Training — £40",
];

export const SERVICES = [
  {
    id: "manual",
    title: "Manual Driving Lessons",
    price: "£37.50",
    priceNote: "per hour",
    blurb: "Learn how to confidently handle a manual car, from your first clutch control lesson to getting ready for your test.",
    cta: "Book a Manual Lesson",
    lessonType: "Manual — £37.50",
    img: "manual",
  },
  {
    id: "automatic",
    title: "Automatic Driving Lessons",
    price: "£40",
    priceNote: "per hour",
    tag: "Our speciality",
    blurb: "If you don't want to worry about gears and clutch control, automatic lessons let you focus on the road and build your confidence.",
    cta: "Book an Automatic Lesson",
    lessonType: "Automatic — £40",
    img: "automatic",
  },
  {
    id: "refresher",
    title: "Refresher Lessons",
    price: "£37.50 / £40",
    priceNote: "manual / automatic",
    blurb: "Haven't driven for a while? Whether you've recently passed your test or haven't driven in years, we'll help you get comfortable behind the wheel again.",
    cta: "Book a Refresher Lesson",
    lessonType: "Refresher — £37.50 Manual / £40 Automatic",
    img: "refresher",
  },
  {
    id: "intensive",
    title: "Intensive Driving Course",
    price: "£600",
    priceNote: "course",
    blurb: "Want to get your lessons done in a shorter period? Our intensive course gives you a more focused way to work towards your driving goals.",
    cta: "Enquire About Intensive Courses",
    lessonType: "Intensive Course — £600",
    img: "road",
  },
  {
    id: "advanced",
    title: "Advanced Training",
    price: "£40",
    priceNote: "per hour",
    blurb: "Already driving but want to improve? Our advanced training can help you become more confident in different road conditions, improve your awareness and sharpen your driving skills.",
    cta: "Enquire About Advanced Training",
    lessonType: "Advanced Training — £40",
    img: "whyChoose",
  },
];

export const WHY = [
  {
    title: "Automatic Specialists",
    body: "Prefer an automatic? That's what we specialise in. No clutch or gear changes to worry about — just concentrate on the road and enjoy learning.",
    icon: "GearSix",
  },
  {
    title: "Manual Lessons",
    body: "Want to learn in a manual? We'll help you get comfortable with clutch control, gears, manoeuvres and everything else you need to become a confident driver.",
    icon: "SteeringWheel",
  },
  {
    title: "Sheffield & Rotherham",
    body: "We provide driving lessons across Sheffield and Rotherham, making it easier to learn around your home, work, college or university.",
    icon: "MapPin",
  },
  {
    title: "Female Instructors Available",
    body: "If you'd feel more comfortable learning with a female instructor, just let us know when you enquire.",
    icon: "UserCircle",
  },
  {
    title: "Bilingual Instructors Available",
    body: "We have bilingual instructors available, so if you'd prefer some support in another language, let us know.",
    icon: "Translate",
  },
  {
    title: "Learn At Your Own Pace",
    body: "Everyone learns differently. We'll work with you at your own pace, explain things clearly and help you feel more confident with every lesson.",
    icon: "Heart",
  },
];
