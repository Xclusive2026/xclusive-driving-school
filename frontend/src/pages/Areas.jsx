import { MapPin, CheckCircle, WhatsappLogo } from "@phosphor-icons/react";
import { BRAND, IMAGES, waLink } from "../data";
import { Reveal } from "../components/site/Reveal";
import { BookButton } from "../components/site/Buttons";

const POINTS = [
  "Learn around your home, work, college or university",
  "Automatic & manual lessons available in both areas",
  "Female and bilingual instructors available on request",
];

export default function Areas() {
  return (
    <div className="pt-[74px]">
      <section className="py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">
                <MapPin size={16} weight="fill" /> Areas We Cover
              </span>
              <h1 className="font-head font-extrabold text-4xl md:text-5xl mt-3 leading-tight">
                Driving lessons around Sheffield &amp; Rotherham
              </h1>
              <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-5">
                Based in the local area, we provide driving lessons across Sheffield and Rotherham.
              </p>

              <div className="flex flex-col gap-3 mt-8">
                {POINTS.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle size={22} weight="fill" className="text-[#25D366] mt-0.5 shrink-0" />
                    <span className="font-body text-[#17171A]">{p}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FBF7F4] border border-[#ECE6E2] rounded-2xl p-6 mt-8">
                <p className="font-head font-semibold text-lg">Not sure if we cover your area?</p>
                <p className="font-body text-[#4B4B52] mt-1">Just ask — we'll be happy to check.</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <BookButton label="Check Availability" testid="areas-check" />
                  <a href={waLink("Hi, do you cover my area for driving lessons?")} target="_blank" rel="noopener noreferrer" data-testid="areas-whatsapp" className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] text-[#1a9c4b] px-6 py-3 font-head font-semibold hover:bg-[#25D366] hover:text-white transition-colors">
                    <WhatsappLogo size={18} weight="fill" /> Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <div className="rounded-[28px] overflow-hidden soft-shadow aspect-[16/11]">
                <img src={IMAGES.areaSheffield} alt="Sheffield" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                {["Sheffield", "Rotherham"].map((a) => (
                  <div key={a} className="bg-white border border-[#ECE6E2] rounded-2xl p-6 text-center soft-shadow">
                    <MapPin size={28} weight="fill" className="text-[#E4141B] mx-auto" />
                    <div className="font-head font-bold text-xl mt-3">{a}</div>
                    <div className="font-body text-sm text-[#4B4B52] mt-1">Lessons available</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
