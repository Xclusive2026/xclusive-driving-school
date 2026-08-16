/*
 * Buttons.jsx — Reusable button components used across the site:
 *   BookButton     — red pill link to the Contact page ("Book a Lesson").
 *   WhatsAppButton — green pill link that opens a pre-filled WhatsApp chat.
 *   OutlineButton  — outlined pill (link or onClick) for secondary actions.
 */

import { Link } from "react-router-dom";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react";
import { waLink } from "../../data";

export const BookButton = ({ className = "", label = "Book a Lesson", to = "/contact", testid = "book-btn" }) => (
  <Link
    to={to}
    data-testid={testid}
    className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#E4141B] px-6 py-3 font-head font-semibold text-white text-sm hover:bg-[#B70F15] transition-colors duration-300 ${className}`}
  >
    {label}
    <ArrowRight size={17} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
  </Link>
);

export const WhatsAppButton = ({ className = "", label = "WhatsApp Us", text, testid = "whatsapp-btn" }) => (
  <a
    href={waLink(text)}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-head font-semibold text-white text-sm hover:brightness-95 transition-all duration-300 ${className}`}
  >
    <WhatsappLogo size={19} weight="fill" />
    {label}
  </a>
);

export const OutlineButton = ({ className = "", label, to, onClick, testid }) => {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#17171A]/15 px-6 py-3 font-head font-semibold text-[#17171A] text-sm hover:border-[#E4141B] hover:text-[#E4141B] transition-colors duration-300 ${className}`;
  if (to)
    return (
      <Link to={to} data-testid={testid} className={cls}>
        {label}
      </Link>
    );
  return (
    <button onClick={onClick} data-testid={testid} className={cls}>
      {label}
    </button>
  );
};
