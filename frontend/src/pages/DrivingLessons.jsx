import { Link } from "react-router-dom";
import {
  ArrowRight, WhatsappLogo, SteeringWheel, GearSix, ArrowsClockwise, Lightning, Medal, CheckCircle,
} from "@phosphor-icons/react";
import { SERVICES, waLink } from "../data";
import { Reveal } from "../components/site/Reveal";

const ICONS = { SteeringWheel, GearSix, ArrowsClockwise, Lightning, Medal };

export default function DrivingLessons() {
  return (
    <div className="pt-[74px]">
      {/* Header */}
      <section className="bg-[#FBF7F4] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <span className="font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">Driving Lessons</span>
            <h1 className="font-head font-extrabold text-4xl md:text-5xl mt-3">Lessons to suit you</h1>
            <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-5 max-w-2xl">
              Whether you're sitting behind the wheel for the first time, getting back into driving after a few years, or simply want to improve your skills, we've got a lesson to suit you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.id}>
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 items-center bg-white border border-[#ECE6E2] rounded-[28px] p-7 md:p-10 soft-shadow">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#E4141B] grid place-items-center shrink-0">
                        <Icon size={28} weight="fill" className="text-white" />
                      </div>
                      {s.tag && (
                        <span className="inline-block rounded-full bg-[#E4141B]/10 text-[#E4141B] font-head font-semibold text-xs uppercase tracking-wide px-3 py-1.5">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <h2 className="font-head font-extrabold text-2xl md:text-3xl mt-5">{s.title}</h2>
                    <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-3">{s.blurb}</p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <Link
                        to={`/contact?lesson=${encodeURIComponent(s.lessonType)}`}
                        data-testid={`lesson-book-${s.id}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-[#E4141B] px-6 py-3.5 font-head font-semibold text-white hover:bg-[#B70F15] transition-colors"
                      >
                        {s.cta}
                        <ArrowRight size={17} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href={waLink(`Hi, I'd like to enquire about ${s.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`lesson-whatsapp-${s.id}`}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] text-[#1a9c4b] px-6 py-3.5 font-head font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
                      >
                        <WhatsappLogo size={18} weight="fill" /> WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Price panel */}
                  <div className="rounded-3xl bg-[#FBF7F4] border border-[#ECE6E2] p-8 text-center">
                    <span className="font-head font-semibold text-sm text-[#4B4B52] uppercase tracking-wide">Price</span>
                    <div className="font-head font-extrabold text-4xl md:text-5xl text-[#E4141B] mt-2">{s.price}</div>
                    <div className="font-body text-[#4B4B52] mt-1">{s.priceNote}</div>
                    <div className="flex items-center justify-center gap-2 mt-5 font-body text-sm text-[#17171A]">
                      <CheckCircle size={18} weight="fill" className="text-[#25D366]" /> Car &amp; instructor included
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <div className="bg-[#17171A] rounded-[32px] p-10 md:p-14 text-center text-white">
            <h2 className="font-head font-extrabold text-2xl md:text-3xl">Not sure which lesson is right for you?</h2>
            <p className="font-body text-lg text-white/70 mt-3 max-w-lg mx-auto">
              Get in touch and we'll help you pick the best option — no pressure, just friendly advice.
            </p>
            <Link to="/contact" data-testid="lessons-cta-contact" className="inline-flex mt-7 rounded-full bg-[#E4141B] px-7 py-4 font-head font-semibold hover:bg-[#B70F15] transition-colors">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
