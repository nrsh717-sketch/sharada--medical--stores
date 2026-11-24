import React, { useState } from 'react';
import { Check, Clock, MapPin, Pencil, Phone, Settings2, X } from 'lucide-react';
import { Language, StoreInfo } from '../types';
import { TranslationSchema } from '../data/translations';

interface FooterProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  t: TranslationSchema['footer'];
  navT: TranslationSchema['nav'];
  storeInfo: StoreInfo;
  onUpdateHours: (hoursEn: string, hoursTe: string) => void;
  onOpenStoreEditor: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onChangeLang,
  t,
  navT,
  storeInfo,
  onUpdateHours,
  onOpenStoreEditor,
}) => {
  const [editingHours, setEditingHours] = useState(false);
  const [hoursEnDraft, setHoursEnDraft] = useState(storeInfo.openingHoursEn);
  const [hoursTeDraft, setHoursTeDraft] = useState(storeInfo.openingHoursTe);

  const storeName = lang === 'te' ? storeInfo.nameTe : storeInfo.nameEn;
  const address = lang === 'te' ? storeInfo.addressTe : storeInfo.addressEn;
  const landmark = lang === 'te' ? storeInfo.landmarkTe : storeInfo.landmarkEn;
  const hours = lang === 'te' ? storeInfo.openingHoursTe : storeInfo.openingHoursEn;

  const startEditHours = () => {
    setHoursEnDraft(storeInfo.openingHoursEn);
    setHoursTeDraft(storeInfo.openingHoursTe);
    setEditingHours(true);
  };

  const saveHours = () => {
    onUpdateHours(
      hoursEnDraft.trim() || storeInfo.openingHoursEn,
      hoursTeDraft.trim() || storeInfo.openingHoursTe
    );
    setEditingHours(false);
  };

  return (
    <footer className="bg-[#0F291E] text-[#E6F4EC]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Store Details */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F764A] text-white"
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
              <span className="font-display text-lg font-bold tracking-tight text-white">
                {storeName}
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-[#CBE0D4]">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#52B788]" aria-hidden="true" />
                <span>
                  {address}
                  {landmark ? ` — ${landmark}` : ''}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#52B788]" aria-hidden="true" />
                <a
                  href={`tel:+91${storeInfo.phone}`}
                  className="font-semibold tabular-nums text-white hover:underline"
                >
                  +91 {storeInfo.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">
              {t.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#CBE0D4]">
              <li>
                <a href="#home" className="hover:text-white hover:underline">
                  {navT.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline">
                  {navT.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline">
                  {navT.services}
                </a>
              </li>
              <li>
                <a href="#medicines" className="hover:text-white hover:underline">
                  {navT.medicines}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline">
                  {navT.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Editable Opening Hours */}
          <div className="md:col-span-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                <Clock className="h-4 w-4 text-[#52B788]" aria-hidden="true" />
                <span>{t.openingHours}</span>
              </h3>
              {!editingHours && (
                <button
                  type="button"
                  onClick={startEditHours}
                  className="inline-flex items-center gap-1 rounded-md border border-white/20 px-2.5 py-1 text-xs font-medium text-[#E6F4EC] transition-colors hover:bg-white/10"
                >
                  <Pencil className="h-3 w-3" aria-hidden="true" />
                  <span>{t.editHoursBtn}</span>
                </button>
              )}
            </div>

            {editingHours ? (
              <div className="mt-3 space-y-2.5 rounded-xl border border-white/15 bg-white/5 p-3">
                <div>
                  <label className="mb-1 block text-xs text-[#CBE0D4]">English</label>
                  <input
                    type="text"
                    value={hoursEnDraft}
                    onChange={(e) => setHoursEnDraft(e.target.value)}
                    placeholder="e.g. Mon–Sun: 8:00 AM – 10:00 PM"
                    className="w-full rounded-lg border border-white/20 bg-[#0B1F17] px-3 py-1.5 text-xs text-white focus:border-[#52B788] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-[#CBE0D4]">తెలుగు</label>
                  <input
                    type="text"
                    value={hoursTeDraft}
                    onChange={(e) => setHoursTeDraft(e.target.value)}
                    placeholder="ఉదా. సోమ–ఆది: ఉదయం 8:00 – రాత్రి 10:00"
                    className="w-full rounded-lg border border-white/20 bg-[#0B1F17] px-3 py-1.5 text-xs text-white focus:border-[#52B788] focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={saveHours}
                    className="inline-flex items-center gap-1 rounded-lg bg-[#0F764A] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#13915B]"
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Save</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingHours(false)}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-medium text-[#CBE0D4] hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-[#CBE0D4]">{hours}</p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <div
                role="group"
                aria-label="Language"
                className="inline-flex rounded-lg border border-white/20 p-0.5"
              >
                <button
                  type="button"
                  onClick={() => onChangeLang('en')}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === 'en'
                      ? 'bg-[#0F764A] text-white'
                      : 'text-[#CBE0D4] hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => onChangeLang('te')}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === 'te'
                      ? 'bg-[#0F764A] text-white'
                      : 'text-[#CBE0D4] hover:text-white'
                  }`}
                >
                  తెలుగు
                </button>
              </div>

              <button
                type="button"
                onClick={onOpenStoreEditor}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-medium text-[#CBE0D4] transition-colors hover:bg-white/10 hover:text-white"
              >
                <Settings2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.storeEditorBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Compliance Line */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/15 pt-8 text-xs text-[#9BB8A8] md:flex-row md:items-center">
          <p>{t.copyright}</p>
          <p className="max-w-xl leading-relaxed">{t.complianceFootnote}</p>
        </div>
      </div>
    </footer>
  );
};
