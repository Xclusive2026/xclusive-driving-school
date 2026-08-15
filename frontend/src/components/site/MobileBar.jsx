import { Link } from "react-router-dom";
import { WhatsappLogo, CalendarCheck } from "@phosphor-icons/react";
import { waLink } from "../../data";

export const MobileBar = () => (
  <div
    data-testid="mobile-sticky-bar"
    className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[#ECE6E2] soft-shadow-lg grid grid-cols-2 gap-2 p-3"
  >
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="mobile-whatsapp"
      className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-head font-semibold text-white text-sm"
    >
      <WhatsappLogo size={19} weight="fill" /> WhatsApp
    </a>
    <Link
      to="/contact"
      data-testid="mobile-book"
      className="flex items-center justify-center gap-2 rounded-full bg-[#E4141B] py-3 font-head font-semibold text-white text-sm"
    >
      <CalendarCheck size={19} weight="fill" /> Book a Lesson
    </Link>
  </div>
);
