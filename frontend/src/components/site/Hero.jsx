import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";
import { BRAND, IMAGES } from "../../data";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const MaskLine = ({ children, i, className = "" }) => (
  <span className="block overflow-hidden">
    <motion.span custom={i} variants={line} initial="hidden" animate="show" className={`block ${className}`}>
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={IMAGES.hero} alt="Steering wheel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </motion.div>

      {/* Top mono labels */}
      <motion.div
        style={{ opacity }}
        className="absolute top-[92px] left-5 md:left-10 right-5 md:right-10 flex justify-between font-mono2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60 z-10"
      >
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {BRAND.est}
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }}>
          Manual / Automatic / Intensive
        </motion.span>
      </motion.div>

      {/* Headline */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-24"
      >
        <h1 className="font-display uppercase leading-[0.82] tracking-tight text-[19vw] md:text-[15vw] lg:text-[13vw]">
          <MaskLine i={0}>Master</MaskLine>
          <MaskLine i={1}>
            The <span className="text-[#FF2A2A]">Road.</span>
          </MaskLine>
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-body text-[#A3A3A3] text-base md:text-lg max-w-md leading-relaxed"
          >
            Premium driving tuition engineered for confidence, control and a first-time pass. No shouting. No shortcuts. Just results.
          </motion.p>

          <motion.button
            data-testid="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            onClick={() => document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-4 font-mono2 text-xs uppercase tracking-[0.2em] px-8 py-5 bg-[#FF2A2A] text-white hover:bg-[#CC1F1F] transition-colors duration-300 self-start"
          >
            View Packages
            <ArrowDown size={16} weight="bold" className="group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
