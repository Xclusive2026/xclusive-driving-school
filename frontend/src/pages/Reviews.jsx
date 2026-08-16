/*
 * Reviews.jsx — Reviews page. Shows a 5.0 Google rating badge, testimonial cards
 * (live Google reviews if the backend is configured, else the built-in ones),
 * a "Pass Wall" masonry gallery of real learner photos with a lightbox, and
 * links to Google/Facebook/Instagram/TikTok.
 */

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FacebookLogo, GoogleLogo, InstagramLogo, TiktokLogo, Star, Quotes, X, CaretLeft, CaretRight, SealCheck } from "@phosphor-icons/react";
import { BRAND } from "../data";
import { Reveal } from "../components/site/Reveal";
import { BookButton } from "../components/site/Buttons";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const PASS_IMAGES = Array.from({ length: 24 }, (_, i) => `/reviews/pass-${i + 1}.jpg`);

const TESTIMONIALS = [
  {
    text: "Ishie is an amazing driving instructor who helped me pass first time with 0 minors! She is very kind, patient, and knowledgeable and knows exactly what the examiners are looking for, and explains things in detail as well as their reasoning. I would recommend her and Xclusive Driving School to everyone!",
    tag: "Passed first time · 0 minors",
    instructor: "Ishie",
  },
  {
    text: "Really enjoyed my lessons and couldn't have asked for a better instructor. Khurram was always patient and easy to get along with, and helped me feel so much more confident driving. Passed first time, so couldn't be happier. Would definitely recommend.",
    tag: "Passed first time",
    instructor: "Khurram",
  },
  {
    text: "I had an excellent experience learning with this driving school. The instructor was patient, professional, and explained everything clearly, which helped me build my confidence behind the wheel.",
    tag: "Confident new driver",
    instructor: "Xclusive",
  },
];

export default function Reviews() {
  const [lightbox, setLightbox] = useState(null);
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    axios.get(`${API}/google-reviews`).then((r) => setGoogle(r.data)).catch(() => {});
  }, []);

  const live = google && google.configured && Array.isArray(google.reviews) && google.reviews.length > 0;
  const ratingText = live && google.rating ? Number(google.rating).toFixed(1) : "5.0";
  const ratingCount = live && google.user_rating_count ? google.user_rating_count : null;
  const cards = live
    ? google.reviews.map((r) => ({
        text: r.text,
        name: r.author || "Google user",
        tag: r.relative_time || "Google review",
        rating: Math.round(r.rating || 5),
        uri: r.google_maps_uri,
      }))
    : TESTIMONIALS.map((t) => ({
        text: t.text,
        name: "Verified learner",
        tag: `${t.tag} · Posted on Google`,
        rating: 5,
        uri: BRAND.google,
      }));

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % PASS_IMAGES.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + PASS_IMAGES.length) % PASS_IMAGES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="pt-[74px]">
      {/* Header */}
      <section className="py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <Reveal>
            <span className="font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">Reviews</span>
            <h1 className="font-head font-extrabold text-4xl md:text-5xl mt-3">Don't just take our word for it</h1>
            <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-5">
              We're proud of the relationships we build with our learners — and even prouder of every test pass. Here's some of the happy faces and kind words from people we've helped across Sheffield &amp; Rotherham with <strong className="font-bold text-[#17171A]">Xclusive Driving School</strong>.
            </p>
          </Reveal>

          {/* Google 5-star badge */}
          <Reveal delay={0.08}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-[#ECE6E2] rounded-3xl px-8 py-6 mt-9 soft-shadow">
              <div className="flex items-center gap-3">
                <GoogleLogo size={34} weight="fill" className="text-[#4285F4]" />
                <span className="font-head font-bold text-lg">Rated on Google</span>
              </div>
              <span className="hidden sm:block w-px h-10 bg-[#ECE6E2]" />
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2">
                  <span className="font-head font-extrabold text-3xl text-[#17171A]">{ratingText}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" className="text-[#FBBC05]" />)}
                  </div>
                </div>
                <a href={BRAND.google} target="_blank" rel="noopener noreferrer" data-testid="google-rating-link" className="font-head font-semibold text-sm text-[#E4141B] hover:underline mt-1">
                  {ratingCount ? `Read our ${ratingCount} Google reviews →` : "Read our Google reviews →"}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-6 md:pb-10">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <div className="h-full bg-white border border-[#ECE6E2] rounded-3xl p-7 soft-shadow flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={18} weight="fill" className={s < c.rating ? "text-[#FBBC05]" : "text-[#E4E0DC]"} />
                    ))}
                  </div>
                  <GoogleLogo size={24} weight="fill" className="text-[#4285F4]" />
                </div>
                <Quotes size={34} weight="fill" className="text-[#E4141B]/20 mt-4" />
                <p className="font-body text-[#17171A] leading-relaxed mt-2 flex-1">{c.text}</p>
                <div className="mt-6 pt-5 border-t border-[#F2EEEA] flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#E4141B]/10 grid place-items-center">
                    <SealCheck size={20} weight="fill" className="text-[#E4141B]" />
                  </span>
                  <span>
                    <span className="block font-head font-bold text-sm">{c.name}</span>
                    <span className="block font-body text-xs text-[#4B4B52]">{c.tag}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pass Wall */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <span className="font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">Our Pass Wall</span>
                <h2 className="font-head font-extrabold text-3xl md:text-4xl mt-2">Faces that passed with us</h2>
                <p className="font-body text-[#4B4B52] mt-2">Real learners, real passes. Tap any photo to take a closer look.</p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#25D366]/12 text-[#1a9c4b] font-head font-semibold text-sm px-4 py-2">
                <SealCheck size={18} weight="fill" /> {PASS_IMAGES.length}+ recent passes
              </span>
            </div>
          </Reveal>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {PASS_IMAGES.map((src, i) => (
              <motion.button
                key={src}
                type="button"
                data-testid={`pass-photo-${i}`}
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl bg-[#FBF7F4] break-inside-avoid soft-shadow"
              >
                <img
                  src={src}
                  alt={`Xclusive Driving School learner pass ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17171A]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 font-head font-semibold text-xs text-[#E4141B] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <SealCheck size={14} weight="fill" /> Passed!
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Social + CTA */}
      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="bg-[#17171A] rounded-[32px] p-10 md:p-14 text-center text-white">
              <h2 className="font-head font-extrabold text-2xl md:text-3xl">Follow us &amp; read more reviews</h2>
              <p className="font-body text-lg text-white/70 mt-3 max-w-lg mx-auto">
                See more happy learners and genuine reviews across our social channels — then start your own journey with us.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <a href={BRAND.google} target="_blank" rel="noopener noreferrer" data-testid="reviews-google-btn" className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#17171A] px-6 py-3.5 font-head font-semibold hover:bg-white/90 transition">
                  <GoogleLogo size={20} weight="fill" className="text-[#4285F4]" /> Google Reviews
                </a>
                <a href={BRAND.facebookReviews} target="_blank" rel="noopener noreferrer" data-testid="reviews-fb-btn" className="inline-flex items-center gap-2.5 rounded-full bg-[#1877F2] text-white px-6 py-3.5 font-head font-semibold hover:brightness-95 transition">
                  <FacebookLogo size={20} weight="fill" /> Facebook
                </a>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" data-testid="reviews-instagram-btn" className="inline-flex items-center gap-2.5 rounded-full text-white px-6 py-3.5 font-head font-semibold transition" style={{ background: "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)" }}>
                  <InstagramLogo size={20} weight="fill" /> Instagram
                </a>
                <a href={BRAND.tiktok} target="_blank" rel="noopener noreferrer" data-testid="reviews-tiktok-btn" className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 text-white px-6 py-3.5 font-head font-semibold hover:bg-white/20 transition">
                  <TiktokLogo size={20} weight="fill" /> TikTok
                </a>
              </div>
              <div className="mt-8">
                <BookButton className="px-7 py-4 text-base" testid="reviews-book" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            data-testid="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              data-testid="lightbox-close"
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition"
            >
              <X size={24} weight="bold" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + PASS_IMAGES.length) % PASS_IMAGES.length); }}
              className="absolute left-3 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition"
            >
              <CaretLeft size={26} weight="bold" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              src={PASS_IMAGES[lightbox]}
              alt={`Pass ${lightbox + 1}`}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % PASS_IMAGES.length); }}
              className="absolute right-3 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition"
            >
              <CaretRight size={26} weight="bold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
