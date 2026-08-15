import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GearSix, SteeringWheel, MapPin, UserCircle, Translate, Heart,
  CheckCircle, Star, ArrowRight, CarProfile,
} from "@phosphor-icons/react";
import { BRAND, IMAGES, WHY, SERVICES } from "../data";
import { Reveal } from "../components/site/Reveal";
import { BookButton, WhatsAppButton, OutlineButton } from "../components/site/Buttons";

const ICONS = { GearSix, SteeringWheel, MapPin, UserCircle, Translate, Heart };

const HIGHLIGHTS = ["Automatic & Manual", "Female Instructors Available", "Bilingual Instructors Available"];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FBF7F4] pt-[74px]">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center py-14 md:py-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E4141B]/10 text-[#E4141B] font-head font-semibold text-sm px-4 py-2">
                <CarProfile size={18} weight="fill" /> Sheffield &amp; Rotherham
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-head font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6">
                Learn to Drive with <span className="text-[#E4141B]">Confidence</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-6 max-w-xl">
                Learning to drive can be exciting, but we know it can also feel nerve-wracking. At Xclusive Driving School, we'll help you feel comfortable behind the wheel, build your confidence and work towards becoming a safe, independent driver.
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

          <Reveal delay={0.15}>
            <div className="relative">
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[28px] overflow-hidden soft-shadow-lg aspect-[4/5] sm:aspect-[5/5]"
              >
                <img src={IMAGES.hero} alt="Happy learner driver" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -bottom-5 -left-2 sm:left-6 bg-white rounded-2xl soft-shadow px-5 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#E4141B]/10 grid place-items-center">
                  <Star size={22} weight="fill" className="text-[#E4141B]" />
                </div>
                <div>
                  <div className="font-head font-bold text-lg leading-none">Friendly &amp; patient</div>
                  <div className="font-body text-sm text-[#4B4B52] mt-1">Learn at your own pace</div>
                </div>
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
            {SERVICES.slice(0, 3).map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <Link to="/driving-lessons" className="group block bg-white rounded-3xl overflow-hidden border border-[#ECE6E2] soft-shadow hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={IMAGES[s.img]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    {s.tag && <span className="font-head font-semibold text-xs text-[#E4141B] uppercase tracking-wide">{s.tag}</span>}
                    <h3 className="font-head font-bold text-xl mt-1">{s.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-head font-extrabold text-2xl text-[#E4141B]">{s.price}</span>
                      <span className="inline-flex items-center gap-1 font-head font-semibold text-sm text-[#17171A] group-hover:text-[#E4141B] transition-colors">
                        Learn more <ArrowRight size={15} weight="bold" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <div className="bg-[#17171A] rounded-[32px] p-10 md:p-16 text-center text-white relative overflow-hidden">
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={26} weight="fill" className="text-[#E4141B]" />
                ))}
              </div>
              <h2 className="font-head font-extrabold text-3xl md:text-4xl">Don't just take our word for it</h2>
              <p className="font-body text-lg text-white/70 max-w-xl mx-auto mt-4">
                We're proud of the relationships we build with our learners. See what our students say over on Facebook.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <a href={BRAND.facebookReviews} target="_blank" rel="noopener noreferrer" data-testid="home-fb-reviews" className="inline-flex items-center gap-2 rounded-full bg-white text-[#17171A] px-7 py-4 font-head font-semibold hover:bg-white/90 transition">
                  Read Our Facebook Reviews
                </a>
                <OutlineButton to="/reviews" label="Reviews page" className="!border-white/30 !text-white hover:!text-[#E4141B]" testid="home-reviews-page" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREAS PREVIEW */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-[#FBF7F4] rounded-[32px] overflow-hidden border border-[#ECE6E2]">
            <div className="p-10 md:p-14">
              <Reveal>
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
              </Reveal>
            </div>
            <div className="h-64 lg:h-full min-h-[280px]">
              <img src={IMAGES.areaSheffield} alt="Sheffield streets" className="w-full h-full object-cover" />
            </div>
          </div>
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
