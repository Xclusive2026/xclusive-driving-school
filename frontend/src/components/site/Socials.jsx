/*
 * Socials.jsx — Social media links config and a compact icon row (WhatsApp,
 * Instagram, TikTok, Google, Facebook) used in the navbar header.
 */

import { InstagramLogo, TiktokLogo, GoogleLogo, FacebookLogo, WhatsappLogo } from "@phosphor-icons/react";
import { BRAND, waLink } from "../../data";

export const SOCIAL_LINKS = [
  { label: "Instagram", href: BRAND.instagram, Icon: InstagramLogo },
  { label: "TikTok", href: BRAND.tiktok, Icon: TiktokLogo },
  { label: "Google", href: BRAND.google, Icon: GoogleLogo },
  { label: "Facebook", href: BRAND.facebookReviews, Icon: FacebookLogo },
];

// Compact social icon row for the header
export const Socials = ({ size = 18, btn = "w-9 h-9", className = "", variant = "light" }) => {
  const base =
    variant === "dark"
      ? "bg-white/10 text-white hover:bg-white/20"
      : "bg-[#FBF7F4] text-[#17171A] hover:bg-[#E4141B] hover:text-white";
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="header-social-whatsapp"
        aria-label="WhatsApp"
        className={`${btn} rounded-full grid place-items-center transition-colors bg-[#25D366] text-white hover:brightness-95`}
      >
        <WhatsappLogo size={size} weight="fill" />
      </a>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`header-social-${label.toLowerCase()}`}
          aria-label={label}
          className={`${btn} rounded-full grid place-items-center transition-colors ${base}`}
        >
          <Icon size={size} weight="fill" />
        </a>
      ))}
    </div>
  );
};
