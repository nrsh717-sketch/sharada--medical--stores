import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, Phone, Search, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TranslationSchema } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  t: TranslationSchema['hero'];
  storeName: string;
  phone: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onChangeLang,
  t,
  storeName,
  phone,
}) => {
  const whatsappHref = `https://wa.me/91${phone}?text=${encodeURIComponent(
    lang === 'te'
      ? 'నమస్కారం శారద మెడికల్ స్టోర్స్, నాకు మందుల గురించి వివరాలు కావాలి.'
      : 'Hello Sharada Medical Stores, I would like to enquire about medicine availability.'
  )}`;

  return (
    <section id="home" className="border-b border-[#DCE7E0] bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8">
        {/* Utility strip inside hero (location + bilingual switcher) */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#EFF5F1] pb-4">
          <div className="flex items-center gap-2 text-sm font-medium text-[#475E53]">
            <MapPin className="h-4 w-4 shrink-0 text-[#0F764A]" aria-hidden="true" />
            <span>{t.locationTag}</span>
            <span aria-hidden="true" className="text-[#B6CBC0]">·</span>
            <span className="tabular-nums text-[#0F291E]">{phone}</span>
          </div>

          <div
            role="group"
            aria-label="Select Language"
            className="inline-flex items-center rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] p-1"
          >
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              aria-pressed={lang === 'en'}
              className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A] ${
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
              aria-pressed={lang === 'te'}
              className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A] ${
                lang === 'te'
                  ? 'bg-[#0F764A] text-white'
                  : 'text-[#475E53] hover:text-[#0F291E]'
              }`}
            >
              తెలుగు
            </button>
          </div>
        </div>

        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            {/* Brand Emblem & Welcome Kicker */}
            <div className="mb-4 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0F764A]/20 bg-[#E6F4EC] text-[#0F764A]"
              >
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold tracking-tight text-[#0F764A]">
                {t.welcomeKicker}
              </p>
            </div>

            <h1 className="font-display text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-[#0F291E] text-balance">
              {t.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475E53] sm:text-lg">
              {t.subheadline}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`tel:+91${phone}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#0F764A] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0B5D3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{t.callBtn}</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border border-[#0F764A] bg-white px-6 py-3 text-sm font-semibold text-[#0F764A] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#E6F4EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.whatsappBtn}</span>
              </a>

              <a
                href="#medicines"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#0F291E] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#EFF5F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
              >
                <Search className="h-4 w-4 shrink-0 text-[#0F764A]" aria-hidden="true" />
                <span>{t.browseMedicines}</span>
              </a>
            </div>
          </motion.div>

          {/* Pharmacy Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-[#DCE7E0] bg-[#EFF5F1] sm:min-h-[340px]">
              <ResilientImage
                src="/src/assets/images/hero_pharmacy_banner_clean_1795497368089.jpg"
                alt={t.imageAlt}
                fallbackTitle={storeName}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F291E]/40 to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width 3-Column Trust Strip below Hero */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#DCE7E0] pt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-sm font-semibold text-[#0F291E]">
              {t.trust1Title}
            </h2>
            <p className="text-sm leading-relaxed text-[#475E53]">{t.trust1Sub}</p>
          </div>
          <div className="flex flex-col gap-1 md:border-l md:border-[#DCE7E0] md:pl-8">
            <h2 className="font-display text-sm font-semibold text-[#0F291E]">
              {t.trust2Title}
            </h2>
            <p className="text-sm leading-relaxed text-[#475E53]">{t.trust2Sub}</p>
          </div>
          <div className="flex flex-col gap-1 md:border-l md:border-[#DCE7E0] md:pl-8">
            <h2 className="font-display text-sm font-semibold text-[#0F291E]">
              {t.trust3Title}
            </h2>
            <p className="text-sm leading-relaxed text-[#475E53]">{t.trust3Sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
