import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Phone,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import {
  AvailabilityStatus,
  Language,
  MedicineCategory,
  MedicineItem,
} from '../types';
import { TranslationSchema } from '../data/translations';

interface MedicinesSectionProps {
  lang: Language;
  t: TranslationSchema['medicines'];
  medicines: MedicineItem[];
  phone: string;
  onUpdateAvailability: (id: string, status: AvailabilityStatus) => void;
  onOpenStoreEditor: () => void;
}

const CATEGORY_ORDER: Array<'all' | MedicineCategory> = [
  'all',
  'prescription',
  'otc',
  'wellness',
  'first-aid',
  'personal-care',
  'baby-care',
];

export const MedicinesSection: React.FC<MedicinesSectionProps> = ({
  lang,
  t,
  medicines,
  phone,
  onUpdateAvailability,
  onOpenStoreEditor,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | MedicineCategory>('all');
  const [shopQuickUpdateMode, setShopQuickUpdateMode] = useState(false);

  const filteredMedicines = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return medicines.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;

      const haystack = [
        item.nameEn,
        item.nameTe,
        item.descriptionEn,
        item.descriptionTe,
        t.categories[item.category],
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [medicines, searchQuery, selectedCategory, t.categories]);

  const buildWhatsappEnquiry = (item: MedicineItem) => {
    const name = lang === 'te' ? item.nameTe : item.nameEn;
    const text =
      lang === 'te'
        ? `నమస్కారం శారద మెడికల్ స్టోర్స్, "${name}" దుకాణంలో అందుబాటులో ఉందో లేదో తెలుసుకోవాలనుకుంటున్నాను.${
            item.requiresPrescription ? ' (నా వద్ద డాక్టర్ ప్రిస్క్రిప్షన్ ఉంది)' : ''
          }`
        : `Hello Sharada Medical Stores, I would like to enquire about the availability of "${name}" at your Choutuppal store.${
            item.requiresPrescription ? ' (I have a doctor prescription for verification at the counter.)' : ''
          }`;

    return `https://wa.me/91${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="medicines" className="border-b border-[#DCE7E0] bg-[#F7FAF8] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0F764A]">{t.sectionLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F291E] text-balance sm:text-3xl">
              {t.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475E53]">{t.subheading}</p>
          </div>

          <button
            type="button"
            onClick={() => setShopQuickUpdateMode((prev) => !prev)}
            className={`inline-flex min-h-[42px] items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A] ${
              shopQuickUpdateMode
                ? 'border-[#0F764A] bg-[#0F764A] text-white'
                : 'border-[#DCE7E0] bg-white text-[#0F291E] hover:border-[#0F764A]/40 hover:text-[#0F764A]'
            }`}
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            <span>{t.updateAvailabilityBtn}</span>
          </button>
        </div>

        {/* Compliance & No Online Checkout Notice */}
        <div className="mt-7 flex items-start gap-3.5 rounded-2xl border border-[#0F764A]/25 bg-[#E6F4EC]/75 p-5">
          <ClipboardCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-[#0F764A]"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-display text-sm font-semibold text-[#0F291E]">
              {t.complianceTitle}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[#2F4A3E]">{t.complianceBody}</p>
          </div>
        </div>

        {/* Search Input + Category Filter Tabs */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-[#475E53]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="min-h-[48px] w-full rounded-xl border border-[#DCE7E0] bg-white pr-20 pl-11 text-sm text-[#0F291E] placeholder:text-[#6B8277] focus:border-[#0F764A] focus:outline-none sm:text-base"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 right-3 inline-flex min-h-[34px] -translate-y-1/2 items-center gap-1 rounded-lg px-2.5 text-xs font-semibold text-[#475E53] hover:bg-[#EFF5F1] hover:text-[#0F291E]"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.clearSearch}</span>
              </button>
            )}
          </div>

          <div
            role="tablist"
            aria-label="Medicine Categories"
            className="flex items-center gap-1.5 overflow-x-auto rounded-xl border border-[#DCE7E0] bg-white p-1.5"
          >
            {CATEGORY_ORDER.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A] sm:text-sm ${
                    active
                      ? 'bg-[#0F764A] text-white'
                      : 'text-[#475E53] hover:bg-[#EFF5F1] hover:text-[#0F291E]'
                  }`}
                >
                  {t.categories[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Medicines Grid */}
        {filteredMedicines.length === 0 ? (
          <div className="mt-8 flex flex-col items-center rounded-2xl border border-[#DCE7E0] bg-white px-6 py-12 text-center">
            <p className="font-display text-lg font-semibold text-[#0F291E]">
              {t.noResultsTitle}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#475E53]">
              {t.noResultsSub}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="min-h-[42px] rounded-xl bg-[#0F764A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0B5D3A]"
              >
                {t.showAllBtn}
              </button>
              <a
                href={`tel:+91${phone}`}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#DCE7E0] bg-white px-5 py-2 text-sm font-semibold text-[#0F291E] hover:bg-[#EFF5F1]"
              >
                <Phone className="h-4 w-4 text-[#0F764A]" aria-hidden="true" />
                <span className="tabular-nums">{phone}</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredMedicines.map((item) => {
              const name = lang === 'te' ? item.nameTe : item.nameEn;
              const desc = lang === 'te' ? item.descriptionTe : item.descriptionEn;
              const categoryLabel = t.categories[item.category];
              const showShopAvailability =
                item.availabilityUpdatedByShop && item.availabilityStatus !== null;

              return (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#DCE7E0] bg-white p-6 transition-colors hover:border-[#0F764A]/35"
                >
                  <div>
                    {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#475E53]">
                      <span className="text-[#0F764A]">{categoryLabel}</span>
                      <span aria-hidden="true" className="text-[#B6CBC0]">
                        ·
                      </span>
                      <span>
                        {item.requiresPrescription ? t.rxLabel : t.otcLabel}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-[#0F291E]">
                      {name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#475E53]">{desc}</p>
                  </div>

                  <div className="mt-5 border-t border-[#EFF5F1] pt-4">
                    {/* Availability: ONLY rendered when updated by the shop */}
                    {showShopAvailability && item.availabilityStatus ? (
                      <div className="mb-4 flex items-start gap-2 text-xs">
                        {item.availabilityStatus === 'available' ? (
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#0F764A]"
                            aria-hidden="true"
                          />
                        ) : (
                          <AlertCircle
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              item.availabilityStatus === 'limited'
                                ? 'text-amber-700'
                                : 'text-rose-700'
                            }`}
                            aria-hidden="true"
                          />
                        )}
                        <div>
                          <p
                            className={`font-semibold ${
                              item.availabilityStatus === 'available'
                                ? 'text-[#0F764A]'
                                : item.availabilityStatus === 'limited'
                                  ? 'text-amber-800'
                                  : 'text-rose-800'
                            }`}
                          >
                            {t.availabilityLabels[item.availabilityStatus]}
                          </p>
                          {item.availabilityUpdatedAt && (
                            <p className="mt-0.5 text-[#6B8277] tabular-nums">
                              {t.updatedByShopPrefix}: {item.availabilityUpdatedAt}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <p className="mb-4 text-xs leading-relaxed text-[#6B8277]">
                        {t.availabilityNotUpdated}
                      </p>
                    )}

                    {/* Shop Quick Update Controls (Visible only when shop toggles editor mode) */}
                    {shopQuickUpdateMode && (
                      <div className="mb-4 rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] p-3">
                        <p className="mb-2 text-xs font-semibold text-[#0F291E]">
                          {t.quickSetLabel}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {(
                            ['available', 'limited', 'out-of-stock'] as Array<
                              Exclude<AvailabilityStatus, null>
                            >
                          ).map((st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() => onUpdateAvailability(item.id, st)}
                              className={`min-h-[32px] rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
                                item.availabilityUpdatedByShop &&
                                item.availabilityStatus === st
                                  ? 'border-[#0F764A] bg-[#0F764A] text-white'
                                  : 'border-[#DCE7E0] bg-white text-[#0F291E] hover:border-[#0F764A]/40'
                              }`}
                            >
                              {t.availabilityLabels[st]}
                            </button>
                          ))}
                          {item.availabilityUpdatedByShop && (
                            <button
                              type="button"
                              onClick={() => onUpdateAvailability(item.id, null)}
                              className="min-h-[32px] rounded-lg border border-[#DCE7E0] bg-white px-2.5 py-1 text-xs font-medium text-[#475E53] hover:text-[#0F291E]"
                            >
                              {t.clearStatusBtn}
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Direct Enquiry Actions (No Cart / No Online Purchase) */}
                    <div className="flex items-center gap-2">
                      <a
                        href={buildWhatsappEnquiry(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#0F764A] px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#0B5D3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
                      >
                        <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{t.enquireWhatsapp}</span>
                      </a>
                      <a
                        href={`tel:+91${phone}`}
                        className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border border-[#DCE7E0] bg-white px-3.5 py-2 text-xs font-semibold text-[#0F291E] whitespace-nowrap transition-colors hover:bg-[#EFF5F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0 text-[#0F764A]" aria-hidden="true" />
                        <span>{t.callStore}</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {shopQuickUpdateMode && (
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onOpenStoreEditor}
              className="text-sm font-semibold text-[#0F764A] underline-offset-4 hover:underline"
            >
              {lang === 'te'
                ? 'పూర్తి స్టోర్ ఎడిటర్‌లో కొత్త మందులు చేర్చండి'
                : 'Add or remove medicines in full Store Editor'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
