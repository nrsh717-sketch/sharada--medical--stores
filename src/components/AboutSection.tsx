import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Pencil, ShieldCheck, Thermometer } from 'lucide-react';
import { Language, StoreInfo } from '../types';
import { TranslationSchema } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  lang: Language;
  t: TranslationSchema['about'];
  storeInfo: StoreInfo;
  onOpenStoreEditor: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  t,
  storeInfo,
  onOpenStoreEditor,
}) => {
  const heading = lang === 'te' ? storeInfo.aboutHeadingTe : storeInfo.aboutHeadingEn;
  const body = lang === 'te' ? storeInfo.aboutBodyTe : storeInfo.aboutBodyEn;
  const storeName = lang === 'te' ? storeInfo.nameTe : storeInfo.nameEn;

  const pillars = [
    {
      icon: HeartHandshake,
      title: t.pillar1Title,
      description: t.pillar1Desc,
    },
    {
      icon: Thermometer,
      title: t.pillar2Title,
      description: t.pillar2Desc,
    },
    {
      icon: ShieldCheck,
      title: t.pillar3Title,
      description: t.pillar3Desc,
    },
  ];

  return (
    <section id="about" className="border-b border-[#DCE7E0] bg-[#F7FAF8] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="h-full min-h-[260px] overflow-hidden rounded-2xl border border-[#DCE7E0] bg-white">
              <ResilientImage
                src="/src/assets/images/about_pharmacy_care_1795497354543.jpg"
                alt={t.imageAlt}
                fallbackTitle={storeName}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Editorial Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#0F764A]">{t.sectionLabel}</p>
              <button
                type="button"
                onClick={onOpenStoreEditor}
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#DCE7E0] bg-white px-3 py-1.5 text-xs font-medium text-[#475E53] whitespace-nowrap shrink-0 transition-colors hover:border-[#0F764A]/40 hover:text-[#0F764A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
              >
                <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.editBtn}</span>
              </button>
            </div>

            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F291E] text-balance sm:text-3xl">
              {heading}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475E53]">
              {body}
            </p>

            {/* Three Quality & Customer Service Pillars */}
            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-[#DCE7E0] pt-7 sm:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex flex-col gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6F4EC] text-[#0F764A]">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-[#0F291E]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#475E53]">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
