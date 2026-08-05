import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight } from "@phosphor-icons/react";
import { PACKAGES, BRAND } from "../../data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = ({ selectedPackage, setSelectedPackage }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/enquiries`, { ...form, package: selectedPackage || null });
      setDone(true);
      toast.success("Enquiry sent — we'll be in touch shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSelectedPackage("");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative bg-[#141414] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="font-mono2 text-xs uppercase tracking-[0.25em] text-[#FF2A2A]">/ Enquire</span>
          <h2 className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-7xl mt-5">
            Let's get<br />you <span className="text-[#FF2A2A]">driving.</span>
          </h2>
          <p className="font-body text-[#A3A3A3] leading-relaxed mt-8 max-w-md">
            Drop us your details and we'll match you with the right instructor and slot. No obligation, no pressure.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <div className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">Call</div>
              <a href={`tel:${BRAND.phone}`} className="font-sub text-xl hover:text-[#FF2A2A] transition-colors">{BRAND.phone}</a>
            </div>
            <div>
              <div className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">Email</div>
              <a href={`mailto:${BRAND.email}`} className="font-sub text-xl hover:text-[#FF2A2A] transition-colors">{BRAND.email}</a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          {done ? (
            <div data-testid="contact-success" className="border border-[#FF2A2A]/40 bg-black/30 p-12 h-full flex flex-col justify-center">
              <div className="font-display uppercase text-4xl md:text-5xl text-[#FF2A2A]">Thank you.</div>
              <p className="font-body text-[#A3A3A3] mt-4 max-w-md">
                Your enquiry has landed. One of our team will reach out within 24 hours to lock in your first lesson.
              </p>
              <button
                data-testid="send-another-btn"
                onClick={() => setDone(false)}
                className="mt-8 self-start font-mono2 text-xs uppercase tracking-[0.2em] px-6 py-4 border border-white/30 hover:bg-[#FF2A2A] hover:border-[#FF2A2A] transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} data-testid="contact-form" className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              <div className="sm:col-span-1">
                <label className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">Full Name</label>
                <input data-testid="input-name" className="brutal-input mt-2" placeholder="Jane Doe" value={form.name} onChange={update("name")} />
              </div>
              <div className="sm:col-span-1">
                <label className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">Phone</label>
                <input data-testid="input-phone" className="brutal-input mt-2" placeholder="07700 900000" value={form.phone} onChange={update("phone")} />
              </div>
              <div className="sm:col-span-2">
                <label className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">Email</label>
                <input data-testid="input-email" type="email" className="brutal-input mt-2" placeholder="jane@email.com" value={form.email} onChange={update("email")} />
              </div>
              <div className="sm:col-span-2">
                <label className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">Package of Interest</label>
                <select
                  data-testid="select-package"
                  className="brutal-input mt-2 cursor-pointer"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                >
                  <option value="" className="bg-[#141414]">Not sure yet</option>
                  {PACKAGES.map((p) => (
                    <option key={p.name} value={p.name} className="bg-[#141414]">{p.name} — £{p.price}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">Message</label>
                <textarea data-testid="input-message" rows={3} className="brutal-input mt-2 resize-none" placeholder="Tell us about your experience & availability..." value={form.message} onChange={update("message")} />
              </div>
              <button
                data-testid="submit-enquiry-btn"
                type="submit"
                disabled={loading}
                className="group sm:col-span-2 inline-flex items-center justify-center gap-4 font-mono2 text-sm uppercase tracking-[0.25em] px-8 py-6 bg-[#FF2A2A] text-white hover:bg-[#CC1F1F] transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Enquiry"}
                <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
