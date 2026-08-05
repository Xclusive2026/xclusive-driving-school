import { BRAND } from "../../data";

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="relative bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <img src={BRAND.logo} alt="Xclusive" className="w-11 h-11 object-contain" />
              <span className="font-display text-2xl uppercase tracking-tight">Xclusive</span>
            </div>
            <p className="font-body text-[#A3A3A3] max-w-sm leading-relaxed">
              Premium driving tuition. Manual, automatic and intensive courses delivered by fully qualified, DVSA-approved instructors.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">Explore</div>
            <ul className="space-y-3 font-body text-[#A3A3A3]">
              {["Method", "Packages", "Reviews", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-[#FF2A2A] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">Get in touch</div>
            <ul className="space-y-3 font-body text-[#A3A3A3]">
              <li><a href={`tel:${BRAND.phone}`} className="hover:text-[#FF2A2A] transition-colors">{BRAND.phone}</a></li>
              <li><a href={`mailto:${BRAND.email}`} className="hover:text-[#FF2A2A] transition-colors">{BRAND.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="font-display uppercase leading-[0.85] tracking-tight text-[16vw] md:text-[13vw] text-outline select-none pointer-events-none">
          Xclusive
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/10 mt-8">
          <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">
            © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
          </span>
          <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/40">{BRAND.est} · Drive with confidence</span>
        </div>
      </div>
    </footer>
  );
};
