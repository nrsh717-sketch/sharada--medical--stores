import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Baby,
  Bandage,
  Check,
  ClipboardList,
  Eye,
  EyeOff,
  HeartPulse,
  Pencil,
  Pill,
  Plus,
  RotateCcw,
  Sparkles,
  X,
} from 'lucide-react';
import { Language, ServiceIconKey, ServiceItem } from '../types';
import { TranslationSchema } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  lang: Language;
  t: TranslationSchema['services'];
  services: ServiceItem[];
  onUpdateService: (updated: ServiceItem) => void;
  onAddService: (created: ServiceItem) => void;
  onResetServices: () => void;
}

const SERVICE_ICONS: Record<ServiceIconKey, React.ComponentType<{ className?: string }>> = {
  prescription: ClipboardList,
  otc: Pill,
  wellness: HeartPulse,
  'first-aid': Bandage,
  'personal-care': Sparkles,
  'baby-care': Baby,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  t,
  services,
  onUpdateService,
  onAddService,
  onResetServices,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<ServiceItem | null>(null);

  const visibleServices = editMode ? services : services.filter((s) => s.visible);

  const startEdit = (service: ServiceItem) => {
    setEditingId(service.id);
    setDraft({ ...service });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft(null);
  };

  const saveDraft = () => {
    if (!draft) return;
    if (!draft.titleEn.trim() && !draft.titleTe.trim()) return;
    onUpdateService(draft);
    setEditingId(null);
    setDraft(null);
  };

  const handleAddNew = () => {
    const newItem: ServiceItem = {
      id: `srv-${Date.now()}`,
      iconKey: 'wellness',
      titleEn: 'New Pharmacy Service',
      titleTe: 'కొత్త ఫార్మసీ సేవ',
      descriptionEn: 'Enter service details here.',
      descriptionTe: 'ఇక్కడ సేవ వివరాలను నమోదు చేయండి.',
      visible: true,
    };
    onAddService(newItem);
    setEditingId(newItem.id);
    setDraft(newItem);
  };

  return (
    <section id="services" className="border-b border-[#DCE7E0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Editable Toggle */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#EFF5F1] pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0F764A]">{t.sectionLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F291E] text-balance sm:text-3xl">
              {t.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475E53]">{t.subheading}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                setEditMode((prev) => !prev);
                cancelEdit();
              }}
              className={`inline-flex min-h-[42px] items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A] ${
                editMode
                  ? 'border-[#0F764A] bg-[#0F764A] text-white hover:bg-[#0B5D3A]'
                  : 'border-[#DCE7E0] bg-[#F7FAF8] text-[#0F291E] hover:border-[#0F764A]/40 hover:text-[#0F764A]'
              }`}
            >
              {editMode ? (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <span>{t.doneEditingBtn}</span>
                </>
              ) : (
                <>
                  <Pencil className="h-4 w-4" aria-hidden="true" />
                  <span>{t.editServicesBtn}</span>
                </>
              )}
            </button>

            {editMode && (
              <>
                <button
                  type="button"
                  onClick={handleAddNew}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-[#DCE7E0] bg-white px-3.5 py-2 text-sm font-medium text-[#0F291E] whitespace-nowrap shrink-0 hover:bg-[#EFF5F1]"
                >
                  <Plus className="h-4 w-4 text-[#0F764A]" aria-hidden="true" />
                  <span>{t.addServiceBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={onResetServices}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-[#DCE7E0] bg-white px-3.5 py-2 text-sm font-medium text-[#475E53] whitespace-nowrap shrink-0 hover:text-[#0F291E]"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{t.resetDefaultsBtn}</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Asymmetric Layout: Showcase Visual + Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Featured Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#DCE7E0] bg-[#F7FAF8] lg:col-span-4"
          >
            <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#DCE7E0] bg-white">
              <ResilientImage
                src="/src/assets/images/services_wellness_display_1795497355053.jpg"
                alt={t.imageAlt}
                fallbackTitle="Sharada Medical Stores"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-xs font-semibold text-[#0F764A]">
                  {lang === 'te' ? 'నాణ్యమైన ఆరోగ్య శ్రేణి' : 'Curated Medical Care'}
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-[#0F291E]">
                  {t.imageCaption}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#475E53]">
                {lang === 'te'
                  ? 'అన్ని సేవల వివరాలు దుకాణ అవసరాలకు అనుగుణంగా ఎప్పుడైనా మార్చుకోవచ్చు.'
                  : 'All service titles and descriptions are directly editable to reflect updated store offerings.'}
              </p>
            </div>
          </motion.div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
            {visibleServices.map((service, index) => {
              const Icon = SERVICE_ICONS[service.iconKey] || Pill;
              const isEditingThis = editingId === service.id && draft;
              const title = lang === 'te' ? service.titleTe : service.titleEn;
              const desc = lang === 'te' ? service.descriptionTe : service.descriptionEn;
              const note = lang === 'te' ? service.noteTe : service.noteEn;
              const numLabel = String(index + 1).padStart(2, '0');

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.04, 0.2),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`flex flex-col justify-between rounded-2xl border p-6 transition-colors ${
                    !service.visible && editMode
                      ? 'border-dashed border-[#B6CBC0] bg-[#F7FAF8]/60 opacity-75'
                      : 'border-[#DCE7E0] bg-white hover:border-[#0F764A]/35'
                  }`}
                >
                  {isEditingThis && draft ? (
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#475E53]">
                          {t.titleEnLabel}
                        </label>
                        <input
                          type="text"
                          value={draft.titleEn}
                          onChange={(e) => setDraft({ ...draft, titleEn: e.target.value })}
                          className="w-full rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] px-3 py-2 text-sm text-[#0F291E] focus:border-[#0F764A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#475E53]">
                          {t.titleTeLabel}
                        </label>
                        <input
                          type="text"
                          value={draft.titleTe}
                          onChange={(e) => setDraft({ ...draft, titleTe: e.target.value })}
                          className="w-full rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] px-3 py-2 text-sm text-[#0F291E] focus:border-[#0F764A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#475E53]">
                          {t.descEnLabel}
                        </label>
                        <textarea
                          rows={2}
                          value={draft.descriptionEn}
                          onChange={(e) =>
                            setDraft({ ...draft, descriptionEn: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] px-3 py-2 text-sm text-[#0F291E] focus:border-[#0F764A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#475E53]">
                          {t.descTeLabel}
                        </label>
                        <textarea
                          rows={2}
                          value={draft.descriptionTe}
                          onChange={(e) =>
                            setDraft({ ...draft, descriptionTe: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] px-3 py-2 text-sm text-[#0F291E] focus:border-[#0F764A] focus:outline-none"
                        />
                      </div>
                      <label className="flex items-center gap-2 text-xs font-medium text-[#0F291E]">
                        <input
                          type="checkbox"
                          checked={draft.visible}
                          onChange={(e) => setDraft({ ...draft, visible: e.target.checked })}
                          className="h-4 w-4 accent-[#0F764A]"
                        />
                        <span>{t.visibleLabel}</span>
                      </label>
                      <div className="mt-1 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={saveDraft}
                          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#0F764A] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#0B5D3A]"
                        >
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{t.saveChangesBtn}</span>
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#DCE7E0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#475E53] hover:text-[#0F291E]"
                        >
                          <X className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{t.cancelBtn}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F4EC] text-[#0F764A]">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-medium tabular-nums text-[#6B8277]">
                              {numLabel}
                            </span>
                            {editMode && (
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    onUpdateService({
                                      ...service,
                                      visible: !service.visible,
                                    })
                                  }
                                  aria-label={
                                    service.visible ? 'Hide service' : 'Show service'
                                  }
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] text-[#475E53] hover:text-[#0F764A]"
                                >
                                  {service.visible ? (
                                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                                  ) : (
                                    <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                                  )}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => startEdit(service)}
                                  aria-label={`Edit ${title}`}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] text-[#0F764A] hover:bg-[#E6F4EC]"
                                >
                                  <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        <h3 className="mt-4 font-display text-lg font-semibold text-[#0F291E]">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#475E53]">{desc}</p>
                      </div>

                      {note && (
                        <p className="mt-4 border-t border-[#EFF5F1] pt-3 text-xs font-medium text-[#0F764A]">
                          {note}
                        </p>
                      )}
                    </>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
