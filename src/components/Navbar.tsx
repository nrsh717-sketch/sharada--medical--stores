import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Language } from '../types';
import { TranslationSchema } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  t: TranslationSchema['nav'];
  storeName: string;
  phone: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onChangeLang,
  t,
  storeName,
  phone,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#services', label: t.services },
    { href: '#medicines', label: t.medicines },
    { href: '#contact', label: t.contact },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#DCE7E0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-[#0F291E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F764A] sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F764A] text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4.5 w-4.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.5 3h5v6.5H21v5h-6.5V21h-5v-6.5H3v-5h6.5V3z" />
            </svg>
          </span>
          <span>{storeName}</span>
        </a>

        {/* Zone 2: Concise Single-Line Nav Links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#475E53]"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0F764A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F764A] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#0F764A] after:transition-transform after:duration-150 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:+91${phone}`}
            className="hidden sm:inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#0F764A] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0B5D3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{t.callNow}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.menuClose : t.menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#DCE7E0] bg-white text-[#0F291E] transition-colors hover:bg-[#EFF5F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div className="border-t border-[#DCE7E0] bg-white px-4 py-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-base font-medium text-[#0F291E] transition-colors hover:bg-[#EFF5F1] hover:text-[#0F764A]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#DCE7E0] pt-4">
            <div
              role="group"
              aria-label="Language"
              className="inline-flex rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] p-1"
            >
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`min-h-[36px] rounded-md px-3 text-xs font-semibold whitespace-nowrap transition-colors ${
                  lang === 'en'
                    ? 'bg-[#0F764A] text-white'
                    : 'text-[#475E53] hover:text-[#0F291E]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('te')}
                className={`min-h-[36px] rounded-md px-3 text-xs font-semibold whitespace-nowrap transition-colors ${
                  lang === 'te'
                    ? 'bg-[#0F764A] text-white'
                    : 'text-[#475E53] hover:text-[#0F291E]'
                }`}
              >
                తెలుగు
              </button>
            </div>

            <a
              href={`tel:+91${phone}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F764A] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="tabular-nums">{phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
