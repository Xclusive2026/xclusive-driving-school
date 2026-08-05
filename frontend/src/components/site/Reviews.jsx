import { motion } from "framer-motion";
import { Star, Quotes } from "@phosphor-icons/react";
import { REVIEWS } from "../../data";

export const Reviews = () => {
  return (
    <section id="reviews" data-testid="reviews-section" className="relative bg-[#0A0A0A] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="font-mono2 text-xs uppercase tracking-[0.25em] text-[#FF2A2A]">/ Reviews</span>
            <h2 className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl mt-5">
              They<br />passed.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} weight="fill" className="text-[#FF2A2A]" />
              ))}
            </div>
            <span className="font-mono2 text-xs uppercase tracking-[0.2em] text-[#A3A3A3]">4.9 / 5 · 2,400+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`review-${i}`}
              className="group relative bg-[#141414] border border-white/10 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
                <Quotes size={44} weight="fill" className="absolute top-6 right-6 text-[#FF2A2A]" />
              </div>
              <figcaption className="p-8">
                <p className="font-body text-white/90 leading-relaxed mb-6">“{r.text}”</p>
                <div className="font-sub font-bold text-lg">{r.name}</div>
                <div className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#FF2A2A] mt-1">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
