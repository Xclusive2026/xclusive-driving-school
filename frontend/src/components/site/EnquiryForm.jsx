import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { PaperPlaneRight, CheckCircle } from "@phosphor-icons/react";
import { LESSON_OPTIONS } from "../../data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const EnquiryForm = ({ initialLesson = "" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    lesson_type: initialLesson,
    preferred_instructor: "No preference",
    contact_method: "Phone",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (initialLesson) setForm((f) => ({ ...f, lesson_type: initialLesson }));
  }, [initialLesson]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please add your name and phone number.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      setDone(true);
      toast.success("Thanks! We've received your enquiry.");
    } catch {
      toast.error("Something went wrong — please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <motion.div
        data-testid="enquiry-success"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#FBF7F4] border border-[#ECE6E2] rounded-3xl p-10 text-center"
      >
        <CheckCircle size={56} weight="fill" className="text-[#25D366] mx-auto" />
        <h3 className="font-head font-bold text-2xl mt-5">Thanks for getting in touch!</h3>
        <p className="font-body text-[#4B4B52] mt-3 max-w-md mx-auto leading-relaxed">
          We've received your enquiry and will get back to you as soon as possible.
        </p>
        <button
          data-testid="send-another"
          onClick={() => {
            setDone(false);
            setForm({ name: "", phone: "", email: "", lesson_type: "", preferred_instructor: "No preference", contact_method: "Phone", message: "" });
          }}
          className="mt-6 rounded-full border-2 border-[#17171A]/15 px-6 py-3 font-head font-semibold text-sm hover:border-[#E4141B] hover:text-[#E4141B] transition-colors"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  const Label = ({ children }) => (
    <label className="font-head font-semibold text-sm text-[#17171A] mb-2 block">{children}</label>
  );

  return (
    <form onSubmit={submit} data-testid="enquiry-form" className="grid sm:grid-cols-2 gap-5">
      <div>
        <Label>Name *</Label>
        <input data-testid="field-name" className="field" placeholder="Your name" value={form.name} onChange={set("name")} />
      </div>
      <div>
        <Label>Phone Number *</Label>
        <input data-testid="field-phone" className="field" placeholder="07…" value={form.phone} onChange={set("phone")} />
      </div>
      <div className="sm:col-span-2">
        <Label>Email</Label>
        <input data-testid="field-email" type="email" className="field" placeholder="you@email.com" value={form.email} onChange={set("email")} />
      </div>
      <div>
        <Label>Lesson Type</Label>
        <select data-testid="field-lesson" className="field cursor-pointer" value={form.lesson_type} onChange={set("lesson_type")}>
          <option value="">Please choose…</option>
          {LESSON_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <Label>Preferred Instructor</Label>
        <select data-testid="field-instructor" className="field cursor-pointer" value={form.preferred_instructor} onChange={set("preferred_instructor")}>
          <option>No preference</option>
          <option>Female instructor</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label>Preferred Contact Method</Label>
        <div className="flex flex-wrap gap-2" data-testid="field-contact-method">
          {["Phone", "WhatsApp", "Email"].map((m) => (
            <button
              type="button"
              key={m}
              onClick={() => setForm({ ...form, contact_method: m })}
              className={`rounded-full px-5 py-2.5 font-head font-semibold text-sm border-2 transition-colors ${
                form.contact_method === m
                  ? "bg-[#E4141B] border-[#E4141B] text-white"
                  : "border-[#ECE6E2] text-[#17171A] hover:border-[#E4141B]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      <div className="sm:col-span-2">
        <Label>Message</Label>
        <textarea data-testid="field-message" rows={4} className="field resize-none" placeholder="Tell us a little about what you're looking for and your availability…" value={form.message} onChange={set("message")} />
      </div>
      <button
        data-testid="submit-enquiry"
        type="submit"
        disabled={loading}
        className="sm:col-span-2 group inline-flex items-center justify-center gap-2 rounded-full bg-[#E4141B] px-8 py-4 font-head font-semibold text-white hover:bg-[#B70F15] transition-colors disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Enquiry"}
        <PaperPlaneRight size={18} weight="fill" className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};
