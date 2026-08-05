import { motion } from "framer-motion";
import { STATS, CHAPTERS, IMAGES } from "../../data";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

export const Manifesto = () => {
  return (
    <section id="method" data-testid="manifesto-section" className="relative bg-[#0A0A0A] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Section head */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-20 md:mb-32">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-mono2 text-xs uppercase tracking-[0.25em] text-[#FF2A2A]"
            >
              / The Method
            </motion.span>
            <motion.h2
              variants={reveal} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl mt-5"
            >
              Built to make<br />you <span className="text-outline-red">pass.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={reveal} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="md:col-span-4 font-body text-[#A3A3A3] leading-relaxed"
          >
            Three principles run through every lesson we teach. This is how we turn nervous first-timers into calm, capable drivers.
          </motion.p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10 mb-24 md:mb-32">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={reveal} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
              data-testid={`stat-${i}`}
              className="border-b border-r border-white/10 p-6 md:p-10"
            >
              <div className="font-display text-5xl md:text-7xl leading-none text-white">{s.value}</div>
              <div className="font-mono2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#A3A3A3] mt-4">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chapters + image */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col">
            {CHAPTERS.map((c, i) => (
              <motion.div
                key={c.n}
                variants={reveal} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                data-testid={`chapter-${c.n}`}
                className="group grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-10 border-t border-white/10 last:border-b"
              >
                <div className="font-display text-outline text-6xl md:text-8xl leading-none group-hover:text-outline-red transition-colors">
                  {c.n}
                </div>
                <div>
                  <h3 className="font-sub font-bold text-2xl md:text-3xl tracking-tight mb-3">{c.title}</h3>
                  <p className="font-body text-[#A3A3A3] leading-relaxed max-w-xl">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative min-h-[400px] lg:min-h-full"
          >
            <img src={IMAGES.interior} alt="Cockpit" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            <div className="absolute bottom-6 left-6 font-mono2 text-xs uppercase tracking-[0.2em] text-white/80">
              Dual-control fleet
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
