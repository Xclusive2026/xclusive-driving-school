import { Link } from "react-router-dom";
import { Phone, EnvelopeSimple, WhatsappLogo, FacebookLogo, MapPin } from "@phosphor-icons/react";
import { BRAND, waLink } from "../../data";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Driving Lessons", to: "/driving-lessons" },
  { label: "Reviews", to: "/reviews" },
  { label: "Areas We Cover", to: "/areas-we-cover" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-[#17171A] text-white">
    <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-16 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="bg-white rounded-2xl p-3 inline-block">
          <img src={BRAND.logo} alt="Xclusive Driving School" className="h-14 w-auto object-contain" />
        </div>
        <p className="font-body text-white/70 leading-relaxed mt-6 max-w-sm">
          Friendly driving lessons across Sheffield &amp; Rotherham. Automatic &amp; manual, female and bilingual instructors available.
        </p>
        <div className="flex items-center gap-3 mt-6">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp" className="w-11 h-11 rounded-full bg-[#25D366] grid place-items-center hover:brightness-95 transition">
            <WhatsappLogo size={22} weight="fill" />
          </a>
          <a href={BRAND.facebookReviews} target="_blank" rel="noopener noreferrer" data-testid="footer-facebook" className="w-11 h-11 rounded-full bg-white/10 grid place-items-center hover:bg-white/20 transition">
            <FacebookLogo size={22} weight="fill" />
          </a>
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="font-head font-semibold text-sm uppercase tracking-wide text-white/50 mb-5">Explore</div>
        <ul className="space-y-3 font-body">
          {NAV.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-white/80 hover:text-[#E4141B] transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-4">
        <div className="font-head font-semibold text-sm uppercase tracking-wide text-white/50 mb-5">Get in touch</div>
        <ul className="space-y-4 font-body">
          <li>
            <a href={BRAND.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-[#E4141B] transition-colors">
              <Phone size={18} weight="fill" /> {BRAND.phone}
            </a>
          </li>
          <li>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-[#25D366] transition-colors">
              <WhatsappLogo size={18} weight="fill" /> {BRAND.phone}
            </a>
          </li>
          <li>
            <a href={BRAND.emailHref} className="flex items-center gap-3 text-white/80 hover:text-[#E4141B] transition-colors">
              <EnvelopeSimple size={18} weight="fill" /> {BRAND.email}
            </a>
          </li>
          <li className="flex items-center gap-3 text-white/80">
            <MapPin size={18} weight="fill" /> {BRAND.areas}
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 font-body text-sm text-white/50">
        <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
        <a href={BRAND.facebookReviews} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          Read our Facebook reviews
        </a>
      </div>
    </div>
  </footer>
);
