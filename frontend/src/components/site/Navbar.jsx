/*
 * Navbar.jsx — Fixed top navigation. Shows logo + bold company name, page links,
 * social icons (desktop), a phone link and "Book a Lesson" button. Collapses into
 * a hamburger menu on mobile. Adds a subtle shadow/blur once the page is scrolled.
 */

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Phone } from "@phosphor-icons/react";
import { BRAND } from "../../data";
import { BookButton } from "./Buttons";
import { Socials, SOCIAL_LINKS } from "./Socials";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Driving Lessons", to: "/driving-lessons" },
  { label: "Reviews", to: "/reviews" },
  { label: "Areas We Cover", to: "/areas-we-cover" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md soft-shadow" : "bg-white"
      }`}
    >
      <nav className="max-w-[1240px] mx-auto px-4 md:px-8 h-[74px] flex items-center justify-between gap-4">
        <Link to="/" data-testid="nav-logo" onClick={() => setOpen(false)} className="flex items-center gap-2.5 shrink-0">
          <img src={BRAND.logo} alt="Xclusive Driving School" className="h-12 md:h-14 w-auto object-contain" />
          <span className="hidden sm:block font-head font-extrabold text-[#17171A] leading-none text-base lg:text-xl whitespace-nowrap">
            Xclusive <span className="text-[#E4141B]">Driving School</span>
          </span>
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className={({ isActive }) =>
                `font-head text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                  isActive ? "text-[#E4141B]" : "text-[#17171A] hover:text-[#E4141B]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Socials className="hidden xl:flex mr-1" size={16} btn="w-8 h-8" />
          <a
            href={BRAND.phoneHref}
            data-testid="nav-phone"
            className="hidden md:inline-flex xl:hidden items-center gap-2 font-head font-semibold text-sm text-[#17171A] hover:text-[#E4141B] transition-colors mr-1"
          >
            <Phone size={17} weight="fill" />
            {BRAND.phone}
          </a>
          <BookButton className="hidden sm:inline-flex" testid="nav-book-btn" />
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#17171A]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#ECE6E2]"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-head font-semibold text-lg py-3 border-b border-[#F2EEEA] ${
                      isActive ? "text-[#E4141B]" : "text-[#17171A]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={BRAND.phoneHref} className="font-head font-semibold text-lg py-3 text-[#17171A] flex items-center gap-2">
                <Phone size={18} weight="fill" /> {BRAND.phone}
              </a>
              <div className="flex items-center gap-3 pt-4">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 rounded-full bg-[#FBF7F4] grid place-items-center text-[#17171A]">
                    <Icon size={22} weight="fill" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
