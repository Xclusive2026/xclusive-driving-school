import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "@phosphor-icons/react";
import { PACKAGES } from "../../data";

export const Packages = ({ onSelect }) => {
  return (
    <section id="packages" data-testid="packages-section" className="relative bg-[#141414] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="font-mono2 text-xs uppercase tracking-[0.25em] text-[#FF2A2A]">/ Packages & Pricing</span>
            <h2 className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl mt-5">
              Pick your<br />pace.
            </h2>
          </div>
          <p className="font-body text-[#A3A3A3] max-w-sm leading-relaxed">
            Transparent pricing. No hidden fees. Every package includes the car, fuel and a fully qualified instructor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-white/10">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`package-${p.name.toLowerCase().replace(/\s/g, "-")}`}
              className={`relative border-b border-r border-white/10 p-8 md:p-10 flex flex-col ${
                p.featured ? "bg-[#FF2A2A] text-white" : "bg-transparent"
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className={`font-mono2 text-[10px] uppercase tracking-[0.2em] ${p.featured ? "text-white/80" : "text-[#FF2A2A]"}`}>
                  {p.tag}
                </span>
                <span className={`font-mono2 text-xs ${p.featured ? "text-white/60" : "text-white/40"}`}>0{i + 1}</span>
              </div>

              <h3 className="font-display uppercase text-4xl md:text-5xl tracking-tight leading-none">{p.name}</h3>

              <div className="flex items-baseline gap-2 mt-6">
                <span className="font-sub font-light text-xl">£</span>
                <span className="font-display text-6xl md:text-7xl leading-none">{p.price}</span>
                <span className={`font-mono2 text-xs ${p.featured ? "text-white/70" : "text-[#A3A3A3]"}`}>/ {p.hours} hrs</span>
              </div>

              <ul className="mt-10 space-y-4 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={18} weight="bold" className={p.featured ? "text-white mt-0.5" : "text-[#FF2A2A] mt-0.5"} />
                    <span className={`font-body text-sm ${p.featured ? "text-white/90" : "text-[#A3A3A3]"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                data-testid={`select-package-${p.name.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => onSelect(p.name)}
                className={`group mt-10 inline-flex items-center justify-between font-mono2 text-xs uppercase tracking-[0.2em] px-6 py-5 transition-colors duration-300 ${
                  p.featured
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "border border-white/30 text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A]"
                }`}
              >
                Choose {p.name}
                <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
