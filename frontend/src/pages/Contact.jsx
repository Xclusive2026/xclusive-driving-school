/*
 * Contact.jsx — Contact page. Shows phone/WhatsApp/email cards and the enquiry
 * form. Reads an optional ?lesson= query param to pre-select the lesson type.
 */

import { useSearchParams } from "react-router-dom";
import { Phone, EnvelopeSimple, WhatsappLogo, MapPin } from "@phosphor-icons/react";
import { BRAND, waLink } from "../data";
import { Reveal } from "../components/site/Reveal";
import { EnquiryForm } from "../components/site/EnquiryForm";

export default function Contact() {
  const [params] = useSearchParams();
  const initialLesson = params.get("lesson") || "";

  return (
    <div className="pt-[74px]">
      <section className="bg-[#FBF7F4] py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8">
          <Reveal>
            <span className="font-head font-semibold text-[#E4141B] text-sm uppercase tracking-wide">Contact</span>
            <h1 className="font-head font-extrabold text-4xl md:text-5xl mt-3">Ready to get started?</h1>
            <p className="font-body text-lg text-[#4B4B52] leading-relaxed mt-5 max-w-2xl">
              Let's get you behind the wheel. Whether you're a complete beginner, looking for an automatic instructor, or just want to ask a few questions, get in touch. We'll be happy to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-10">
          {/* Details */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex flex-col gap-4">
                <a href={BRAND.phoneHref} data-testid="contact-call" className="flex items-center gap-4 bg-white border border-[#ECE6E2] rounded-2xl p-5 soft-shadow hover:border-[#E4141B]/40 transition">
                  <span className="w-12 h-12 rounded-xl bg-[#E4141B]/10 grid place-items-center"><Phone size={22} weight="fill" className="text-[#E4141B]" /></span>
                  <span>
                    <span className="block font-head font-semibold text-sm text-[#4B4B52]">Call us</span>
                    <span className="block font-head font-bold text-lg">{BRAND.phone}</span>
                  </span>
                </a>
                <a href={BRAND.phone2Href} data-testid="contact-call-2" className="flex items-center gap-4 bg-white border border-[#ECE6E2] rounded-2xl p-5 soft-shadow hover:border-[#E4141B]/40 transition">
                  <span className="w-12 h-12 rounded-xl bg-[#E4141B]/10 grid place-items-center"><Phone size={22} weight="fill" className="text-[#E4141B]" /></span>
                  <span>
                    <span className="block font-head font-semibold text-sm text-[#4B4B52]">Or call</span>
                    <span className="block font-head font-bold text-lg">{BRAND.phone2}</span>
                  </span>
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp" className="flex items-center gap-4 bg-white border border-[#ECE6E2] rounded-2xl p-5 soft-shadow hover:border-[#25D366]/50 transition">
                  <span className="w-12 h-12 rounded-xl bg-[#25D366]/12 grid place-items-center"><WhatsappLogo size={22} weight="fill" className="text-[#25D366]" /></span>
                  <span>
                    <span className="block font-head font-semibold text-sm text-[#4B4B52]">Message us on WhatsApp</span>
                    <span className="block font-head font-bold text-lg">{BRAND.phone2}</span>
                  </span>
                </a>
                <a href={BRAND.emailHref} data-testid="contact-email" className="flex items-center gap-4 bg-white border border-[#ECE6E2] rounded-2xl p-5 soft-shadow hover:border-[#E4141B]/40 transition">
                  <span className="w-12 h-12 rounded-xl bg-[#E4141B]/10 grid place-items-center"><EnvelopeSimple size={22} weight="fill" className="text-[#E4141B]" /></span>
                  <span>
                    <span className="block font-head font-semibold text-sm text-[#4B4B52]">Email</span>
                    <span className="block font-head font-bold text-lg break-all">{BRAND.email}</span>
                  </span>
                </a>
                <a href={BRAND.email2Href} data-testid="contact-email-2" className="flex items-center gap-4 bg-white border border-[#ECE6E2] rounded-2xl p-5 soft-shadow hover:border-[#E4141B]/40 transition">
                  <span className="w-12 h-12 rounded-xl bg-[#E4141B]/10 grid place-items-center"><EnvelopeSimple size={22} weight="fill" className="text-[#E4141B]" /></span>
                  <span>
                    <span className="block font-head font-semibold text-sm text-[#4B4B52]">Or email</span>
                    <span className="block font-head font-bold text-lg break-all">{BRAND.email2}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 bg-white border border-[#ECE6E2] rounded-2xl p-5 soft-shadow">
                  <span className="w-12 h-12 rounded-xl bg-[#E4141B]/10 grid place-items-center"><MapPin size={22} weight="fill" className="text-[#E4141B]" /></span>
                  <span>
                    <span className="block font-head font-semibold text-sm text-[#4B4B52]">Service areas</span>
                    <span className="block font-head font-bold text-lg">{BRAND.areas}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <div className="bg-white border border-[#ECE6E2] rounded-[28px] p-6 md:p-10 soft-shadow">
                <h2 className="font-head font-extrabold text-2xl mb-1">Send us an enquiry</h2>
                <p className="font-body text-[#4B4B52] mb-7">Fill in a few details and we'll get back to you as soon as possible.</p>
                <EnquiryForm initialLesson={initialLesson} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
