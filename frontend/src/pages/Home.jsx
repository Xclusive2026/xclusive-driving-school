import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  GearSix, SteeringWheel, MapPin, UserCircle, Translate, Heart,
  CheckCircle, Star, ArrowRight, CarProfile, ArrowsClockwise, Lightning, Medal, GoogleLogo, Quotes,
} from "@phosphor-icons/react";
import { BRAND, WHY, SERVICES, HERO_IMAGE } from "../data";
import { Reveal } from "../components/site/Reveal";
import { BookButton, WhatsAppButton, OutlineButton } from "../components/site/Buttons";

const ICONS = { GearSix, SteeringWheel, MapPin, UserCircle, Translate, Heart, ArrowsClockwise, Lightning, Medal, CarProfile };
const HIGHLIGHTS = ["Automatic Specialists", "Male & Female ADI Instructors", "Bilingual Instructors Available"];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FBF7F4] pt-[74px]">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#E4141B]/8 blur-2xl" />
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center py-14 md:py-24 relative">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E4141B]/10 text-[#E4141B] font-head font-semibold text-sm px-4 py-2">
                <CarProfile size={18} weight="fill" /> Sheffield &amp; Rotherham
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-head font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6">
                <span className="text-[#E4141B] text-[1.5em] leading-none align-[-0.08em] mr-0.5">L</span>earn to Drive with <span className="text-[#E4141B]">Xclusive Driving School</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-6 max-w-xl">
                Learning to drive should be an exciting journey, not something to feel anxious about. At <strong className="font-bold text-[#17171A]">Xclusive Driving School</strong>, we specialise in helping nervous and anxious learners feel comfortable behind the wheel. With patient, supportive tuition tailored to you, we'll build your confidence step by step and help you become a safe, confident and independent driver.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex flex-wrap gap-2 mt-7">
                {HIGHLIGHTS.map((h) => (
                  <span key={h} className="inline-flex items-center gap-2 rounded-full bg-white border border-[#ECE6E2] px-4 py-2 font-head font-semibold text-sm text-[#17171A]">
                    <CheckCircle size={16} weight="fill" className="text-[#25D366]" /> {h}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3 mt-8">
                <BookButton className="px-7 py-4 text-base" testid="hero-book" />
                <WhatsAppButton className="px-7 py-4 text-base" testid="hero-whatsapp" />
              </div>
            </Reveal>
          </div>

          {/* Decorative brand panel (no photos) */}
          {/* Hero image panel */}
          <Reveal delay={0.15}>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[32px] soft-shadow-lg overflow-hidden aspect-[4/5] sm:aspect-square"
              >
                <img src={HERO_IMAGE} alt="Inside one of our automatic Toyota driving school cars" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute top-5 left-5 bg-white rounded-2xl px-3 py-2 soft-shadow">
                  <img src={BRAND.logo} alt="Xclusive Driving School" className="h-9 w-auto object-contain" />
                </div>

                <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
                  {[
                    { icon: GearSix, label: "Automatic" },
                    { icon: UserCircle, label: "Male & female ADI" },
                    { icon: Translate, label: "Bilingual" },
                  ].map((c) => (
                    <span key={c.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-head font-semibold text-xs px-3 py-2">
                      <c.icon size={16} weight="fill" className="text-white" /> {c.label}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-5 -left-2 sm:left-6 bg-white rounded-2xl soft-shadow px-5 py-4 flex items-center gap-3"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} weight="fill" className="text-[#E4141B]" />)}
                </div>
                <div className="font-head font-bold text-sm leading-tight">Loved by<br />our learners</div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STAR REVIEW TRUST BAND */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="relative bg-white border border-[#ECE6E2] rounded-[32px] soft-shadow overflow-hidden">
              <div className="grid md:grid-cols-[auto_1fr] items-center gap-8 p-8 md:p-12">
                {/* Big score */}
                <div className="flex items-center gap-6 md:pr-12 md:border-r border-[#ECE6E2]">
                  <div className="text-center">
                    <div className="font-head font-extrabold text-6xl md:text-7xl leading-none text-[#17171A]">5.0</div>
                    <div className="flex justify-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 260, damping: 14 }}
                        >
                          <Star size={26} weight="fill" className="text-[#FBBC05]" />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/12 text-[#1a9c4b] font-head font-semibold text-sm px-4 py-1.5">
                    <CheckCircle size={16} weight="fill" /> Rated Excellent by our learners
                  </div>
                  <h2 className="font-head font-extrabold text-2xl md:text-3xl mt-4 leading-snug">
                    Loved by drivers across Sheffield &amp; Rotherham
                  </h2>
                  <p className="font-body text-[#4B4B52] mt-2 max-w-xl">
                    First-time passes, friendly instructors and a whole lot of happy faces on our Pass Wall — rated 5 stars on Google &amp; Facebook.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-5">
                    <span className="inline-flex items-center gap-2 font-head font-semibold text-sm text-[#17171A]">
                      <GoogleLogo size={20} weight="fill" className="text-[#4285F4]" /> Google 5.0
                    </span>
                    <Link to="/reviews" data-testid="starband-reviews" className="inline-flex items-center gap-1.5 font-head font-semibold text-sm text-[#E4141B] hover:underline">
                      See all reviews <ArrowRight size={15} weight="bold" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* marquee strip */}
              <div className="bg-[#E4141B] py-3">
                <Marquee speed={55} gradient={false} autoFill>
                  {["FIRST-TIME PASSES", "FRIENDLY & PATIENT INSTRUCTORS", "AUTOMATIC SPECIALISTS", "5-STAR RATED", "SHEFFIELD & ROTHERHAM"].map((w) => (
                    <span key={w} className="inline-flex items-center gap-3 px-6 font-head font-bold text-white text-sm uppercase tracking-wide">
                      <Star size={15} weight="fill" /> {w}
                    </span>
                  ))}
                </Marquee>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">Why choose us</span>
              <h2 className="font-head font-extrabold text-3xl md:text-4xl mt-3 leading-tight">
                Learning to drive should feel comfortable, not stressful.
              </h2>
              <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-4">
                Everyone learns differently. Some people pick it up quickly, while others need a little more time and reassurance — and that's completely fine. We'll work with you at your own pace and help you feel more confident with every lesson.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {WHY.map((w, i) => {
              const Icon = ICONS[w.icon];
              return (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="h-full bg-white border border-[#ECE6E2] rounded-3xl p-7 hover:border-[#E4141B]/40 hover:-translate-y-1 transition-all duration-300 soft-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-[#E4141B]/10 grid place-items-center">
                      <Icon size={26} weight="duotone" className="text-[#E4141B]" />
                    </div>
                    <h3 className="font-head font-bold text-xl mt-5">{w.title}</h3>
                    <p className="font-body text-[#4B4B52] leading-relaxed mt-3">{w.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 md:py-28 bg-[#FBF7F4]">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-xl">
                <span className="font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">Our lessons</span>
                <h2 className="font-head font-extrabold text-3xl md:text-4xl mt-3">Lessons to suit you</h2>
                <p className="font-body text-lg text-[#4B4B52] mt-4">
                  Whether you're behind the wheel for the first time or getting back into driving, we've got a lesson to suit you.
                </p>
              </div>
              <OutlineButton to="/driving-lessons" label="View all lessons" testid="home-view-lessons" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {SERVICES.slice(0, 3).map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.id} delay={i * 0.06}>
                  <Link to={`/contact?lesson=${encodeURIComponent(s.lessonType)}`} className="group block h-full bg-white rounded-3xl overflow-hidden border border-[#ECE6E2] soft-shadow hover:-translate-y-1 transition-transform duration-300">
                    <div className="p-7">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-[#E4141B] grid place-items-center">
                          <Icon size={28} weight="fill" className="text-white" />
                        </div>
                        {s.tag && <span className="font-head font-semibold text-xs text-[#E4141B] uppercase tracking-wide bg-[#E4141B]/10 rounded-full px-3 py-1.5">{s.tag}</span>}
                      </div>
                      <h3 className="font-head font-bold text-xl mt-6">{s.title}</h3>
                      <p className="font-body text-sm text-[#4B4B52] leading-relaxed mt-2 line-clamp-3">{s.blurb}</p>
                      <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#F2EEEA]">
                        <span className="font-head font-extrabold text-2xl text-[#E4141B]">{s.price}</span>
                        <span className="inline-flex items-center gap-1 font-head font-semibold text-sm text-[#17171A] group-hover:text-[#E4141B] transition-colors">
                          Book now <ArrowRight size={15} weight="bold" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOTTO */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="relative bg-[#17171A] rounded-[32px] p-10 md:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              <Quotes size={56} weight="fill" className="text-[#E4141B] mx-auto relative" />
              <p className="relative font-head font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-[1.15] mt-6 max-w-4xl mx-auto">
                It's not how it goes wrong,<br className="hidden sm:block" /> it's <span className="text-[#E4141B]">how we fix it.</span>
              </p>
              <p className="relative font-body text-white/60 mt-6 max-w-lg mx-auto">
                Every learner hits a tricky moment — that's normal. What matters is how we work through it together, calmly and at your pace.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="bg-[#17171A] rounded-[32px] p-10 md:p-16 text-center text-white relative overflow-hidden">
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={26} weight="fill" className="text-[#FBBC05]" />
                ))}
              </div>
              <h2 className="font-head font-extrabold text-3xl md:text-4xl">Don't just take our word for it</h2>
              <p className="font-body text-lg text-white/70 max-w-xl mx-auto mt-4">
                We're proud of every learner who passes with us. Rated <span className="text-white font-semibold">5.0 on Google</span> — see our Pass Wall and read genuine reviews.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link to="/reviews" data-testid="home-reviews-page" className="inline-flex items-center gap-2 rounded-full bg-white text-[#17171A] px-7 py-4 font-head font-semibold hover:bg-white/90 transition">
                  See our Pass Wall
                </Link>
                <a href={BRAND.google} target="_blank" rel="noopener noreferrer" data-testid="home-google-reviews" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 text-white px-7 py-4 font-head font-semibold hover:text-[#E4141B] transition">
                  Google Reviews
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREAS PREVIEW */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="bg-[#FBF7F4] rounded-[32px] border border-[#ECE6E2] p-10 md:p-14">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">
                    <MapPin size={16} weight="fill" /> Areas we cover
                  </span>
                  <h2 className="font-head font-extrabold text-3xl md:text-4xl mt-3">Driving lessons around Sheffield &amp; Rotherham</h2>
                  <p className="font-body text-lg text-[#4B4B52] mt-4 leading-relaxed">
                    Based in the local area, we make it easier to learn around your home, work, college or university. Not sure if we cover your area? Just ask — we'll be happy to check.
                  </p>
                  <div className="mt-7">
                    <OutlineButton to="/areas-we-cover" label="Check Availability" testid="home-check-area" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Sheffield", "Rotherham"].map((a) => (
                    <div key={a} className="bg-white border border-[#ECE6E2] rounded-3xl p-8 text-center soft-shadow">
                      <MapPin size={34} weight="fill" className="text-[#E4141B] mx-auto" />
                      <div className="font-head font-bold text-2xl mt-4">{a}</div>
                      <div className="font-body text-sm text-[#4B4B52] mt-1">Lessons available</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="bg-[#E4141B] rounded-[32px] p-10 md:p-16 text-center text-white">
              <h2 className="font-head font-extrabold text-3xl md:text-4xl">Ready to get started?</h2>
              <p className="font-body text-lg text-white/85 mt-4 max-w-lg mx-auto">
                Let's get you behind the wheel. Book a lesson, give us a call or drop us a message on WhatsApp.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link to="/contact" data-testid="cta-book" className="rounded-full bg-white text-[#E4141B] px-7 py-4 font-head font-semibold hover:bg-white/90 transition">Book a Lesson</Link>
                <WhatsAppButton className="px-7 py-4" testid="cta-whatsapp" />
                <a href={BRAND.phoneHref} data-testid="cta-call" className="rounded-full border-2 border-white/40 text-white px-7 py-4 font-head font-semibold hover:bg-white/10 transition">Call {BRAND.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
