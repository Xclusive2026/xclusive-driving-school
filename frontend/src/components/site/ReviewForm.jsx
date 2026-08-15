import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Star, PaperPlaneRight, CheckCircle } from "@phosphor-icons/react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const ReviewForm = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      toast.error("Please add your name and a short review.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/reviews`, { name: name.trim(), rating, text: text.trim() });
      onSuccess?.(data);
      setDone(true);
      toast.success("Thank you for your review!");
    } catch {
      toast.error("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div data-testid="review-success" className="bg-[#FBF7F4] border border-[#ECE6E2] rounded-3xl p-10 text-center">
        <CheckCircle size={52} weight="fill" className="text-[#25D366] mx-auto" />
        <h3 className="font-head font-bold text-2xl mt-4">Thank you!</h3>
        <p className="font-body text-[#4B4B52] mt-2 max-w-md mx-auto">Your review has been posted and now appears above. We really appreciate you taking the time.</p>
        <button
          data-testid="review-another"
          onClick={() => { setDone(false); setName(""); setText(""); setRating(5); }}
          className="mt-6 rounded-full border-2 border-[#17171A]/15 px-6 py-3 font-head font-semibold text-sm hover:border-[#E4141B] hover:text-[#E4141B] transition-colors"
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid="review-form" className="bg-white border border-[#ECE6E2] rounded-3xl p-7 md:p-9 soft-shadow">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-head font-semibold text-sm text-[#17171A] mb-2 block">Your name</label>
          <input data-testid="review-name" className="field" placeholder="e.g. Sarah H." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="font-head font-semibold text-sm text-[#17171A] mb-2 block">Your rating</label>
          <div className="flex items-center gap-1.5 h-[52px]" data-testid="review-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                type="button"
                key={n}
                onClick={() => setRating(n)}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(0)}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                className="transition-transform hover:scale-110"
              >
                <Star size={30} weight="fill" className={n <= (hover || rating) ? "text-[#FBBC05]" : "text-[#E4E0DC]"} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <label className="font-head font-semibold text-sm text-[#17171A] mb-2 block">Your review</label>
        <textarea data-testid="review-text" rows={4} className="field resize-none" placeholder="Tell others about your experience with Xclusive Driving School…" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button
        data-testid="review-submit"
        type="submit"
        disabled={loading}
        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#E4141B] px-8 py-4 font-head font-semibold text-white hover:bg-[#B70F15] transition-colors disabled:opacity-60"
      >
        {loading ? "Posting…" : "Post Review"}
        <PaperPlaneRight size={18} weight="fill" className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};
