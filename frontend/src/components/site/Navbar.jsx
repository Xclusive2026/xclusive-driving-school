import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { BRAND } from "../../data";

const LINKS = [
  { label: "Method", href: "#method" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-testid="site-navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
        <button onClick={() => go("#top")} data-testid="nav-logo" className="flex items-center gap-3 group">
          <img src={BRAND.logo} alt="Xclusive" className="w-9 h-9 object-contain" />
          <span className="font-display text-xl tracking-tight uppercase leading-none">
            Xclusive
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={() => go(l.href)}
              className="font-mono2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-[#FF2A2A] transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          data-testid="nav-cta"
          onClick={() => go("#contact")}
          className="hidden md:block font-mono2 text-xs uppercase tracking-[0.2em] px-6 py-3 border border-white/30 text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] transition-colors duration-300"
        >
          Book a Lesson
        </button>

        <button data-testid="mobile-menu-toggle" className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 border-b border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="font-display text-3xl uppercase text-left tracking-tight"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go("#contact")}
                className="font-mono2 text-xs uppercase tracking-[0.2em] px-6 py-4 bg-[#FF2A2A] text-white mt-2"
              >
                Book a Lesson
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
