import React, { useEffect, useState } from 'react';
import { Check, Plus, RotateCcw, Trash2, X } from 'lucide-react';
import {
  AvailabilityStatus,
  Language,
  MedicineCategory,
  MedicineItem,
  PersistedStoreState,
  ServiceItem,
  StoreInfo,
} from '../types';
import { TranslationSchema } from '../data/translations';

interface StoreEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  t: TranslationSchema['editor'];
  medT: TranslationSchema['medicines'];
  srvT: TranslationSchema['services'];
  storeState: PersistedStoreState;
  onSaveStoreInfo: (info: StoreInfo) => void;
  onSaveServices: (services: ServiceItem[]) => void;
  onUpdateMedicineAvailability: (id: string, status: AvailabilityStatus) => void;
  onAddMedicine: (med: MedicineItem) => void;
  onRemoveMedicine: (id: string) => void;
  onResetAll: () => void;
}

type EditorTab = 'store' | 'services' | 'medicines';

export const StoreEditorModal: React.FC<StoreEditorModalProps> = ({
  isOpen,
  onClose,
  lang,
  t,
  medT,
  srvT,
  storeState,
  onSaveStoreInfo,
  onSaveServices,
  onUpdateMedicineAvailability,
  onAddMedicine,
  onRemoveMedicine,
  onResetAll,
}) => {
  const [activeTab, setActiveTab] = useState<EditorTab>('store');
  const [infoDraft, setInfoDraft] = useState<StoreInfo>(storeState.storeInfo);
  const [servicesDraft, setServicesDraft] = useState<ServiceItem[]>(storeState.services);
  const [savedNotice, setSavedNotice] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  // Add Medicine form state
  const [newMedNameEn, setNewMedNameEn] = useState('');
  const [newMedNameTe, setNewMedNameTe] = useState('');
  const [newMedDescEn, setNewMedDescEn] = useState('');
  const [newMedDescTe, setNewMedDescTe] = useState('');
  const [newMedCat, setNewMedCat] = useState<MedicineCategory>('otc');
  const [newMedRx, setNewMedRx] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setInfoDraft(storeState.storeInfo);
      setServicesDraft(storeState.services);
      setConfirmReset(false);
      setSavedNotice(false);
    }
  }, [isOpen, storeState.storeInfo, storeState.services]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerSaved = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const handleSaveStoreTab = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveStoreInfo(infoDraft);
    triggerSaved();
  };

  const handleSaveServicesTab = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveServices(servicesDraft);
    triggerSaved();
  };

  const handleCreateMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMedNameEn.trim() && !newMedNameTe.trim()) return;
    const item: MedicineItem = {
      id: `med-${Date.now()}`,
      category: newMedCat,
      nameEn: newMedNameEn.trim() || newMedNameTe.trim(),
      nameTe: newMedNameTe.trim() || newMedNameEn.trim(),
      descriptionEn:
        newMedDescEn.trim() || 'Added by Sharada Medical Stores. Call or WhatsApp for details.',
      descriptionTe:
        newMedDescTe.trim() || 'శారద మెడికల్ స్టోర్స్ ద్వారా చేర్చబడింది. వివరాలకు కాల్ లేదా వాట్సాప్ చేయండి.',
      requiresPrescription: newMedCat === 'prescription' ? true : newMedRx,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    };
    onAddMedicine(item);
    setNewMedNameEn('');
    setNewMedNameTe('');
    setNewMedDescEn('');
    setNewMedDescTe('');
    setNewMedRx(false);
    triggerSaved();
  };

  const handleResetConfirm = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    onResetAll();
    setConfirmReset(false);
    triggerSaved();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-editor-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F291E]/60 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#DCE7E0] bg-white">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#DCE7E0] px-6 py-5">
          <div>
            <h2
              id="store-editor-title"
              className="font-display text-xl font-bold text-[#0F291E]"
            >
              {t.modalTitle}
            </h2>
            <p className="mt-1 text-sm text-[#475E53]">{t.modalSubtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DCE7E0] text-[#475E53] hover:bg-[#EFF5F1] hover:text-[#0F291E]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-[#DCE7E0] bg-[#F7FAF8] px-6 py-3 overflow-x-auto">
          {(
            [
              { id: 'store', label: t.tabStore },
              { id: 'services', label: t.tabServices },
              { id: 'medicines', label: t.tabMedicines },
            ] as Array<{ id: EditorTab; label: string }>
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[38px] rounded-lg px-4 py-1.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#0F764A] text-white'
                  : 'text-[#475E53] hover:bg-white hover:text-[#0F291E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {savedNotice && (
            <div
              role="status"
              className="mb-5 flex items-center gap-2 rounded-xl border border-[#0F764A]/30 bg-[#E6F4EC] px-4 py-3 text-sm font-medium text-[#0F764A]"
            >
              <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.savedToast}</span>
            </div>
          )}

          {activeTab === 'store' && (
            <form onSubmit={handleSaveStoreTab} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.landmarkEnLabel}
                  </label>
                  <input
                    type="text"
                    value={infoDraft.landmarkEn}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, landmarkEn: e.target.value })
                    }
                    placeholder="e.g. Main Road, Near Bus Stand"
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.landmarkTeLabel}
                  </label>
                  <input
                    type="text"
                    value={infoDraft.landmarkTe}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, landmarkTe: e.target.value })
                    }
                    placeholder="ఉదా. మెయిన్ రోడ్, బస్టాండ్ దగ్గర"
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.hoursEnLabel}
                  </label>
                  <input
                    type="text"
                    value={infoDraft.openingHoursEn}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, openingHoursEn: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.hoursTeLabel}
                  </label>
                  <input
                    type="text"
                    value={infoDraft.openingHoursTe}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, openingHoursTe: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.aboutHeadingEnLabel}
                  </label>
                  <input
                    type="text"
                    value={infoDraft.aboutHeadingEn}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, aboutHeadingEn: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.aboutHeadingTeLabel}
                  </label>
                  <input
                    type="text"
                    value={infoDraft.aboutHeadingTe}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, aboutHeadingTe: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.aboutBodyEnLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={infoDraft.aboutBodyEn}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, aboutBodyEn: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                    {t.aboutBodyTeLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={infoDraft.aboutBodyTe}
                    onChange={(e) =>
                      setInfoDraft({ ...infoDraft, aboutBodyTe: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-[#0F291E]">
                  {t.mapsUrlLabel}
                </label>
                <input
                  type="url"
                  value={infoDraft.mapsUrl}
                  onChange={(e) => setInfoDraft({ ...infoDraft, mapsUrl: e.target.value })}
                  className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-3.5 py-2.5 text-sm text-[#0F291E] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#0F764A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0B5D3A]"
                >
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <span>{t.saveAll}</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'services' && (
            <form onSubmit={handleSaveServicesTab} className="space-y-5">
              {servicesDraft.map((srv, idx) => (
                <div
                  key={srv.id}
                  className="rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] p-4 space-y-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-sm font-semibold text-[#0F291E]">
                      {String(idx + 1).padStart(2, '0')}.{' '}
                      {lang === 'te' ? srv.titleTe : srv.titleEn}
                    </span>
                    <label className="flex items-center gap-2 text-xs font-medium text-[#0F291E]">
                      <input
                        type="checkbox"
                        checked={srv.visible}
                        onChange={(e) => {
                          const next = [...servicesDraft];
                          next[idx] = { ...srv, visible: e.target.checked };
                          setServicesDraft(next);
                        }}
                        className="h-4 w-4 accent-[#0F764A]"
                      />
                      <span>{srvT.visibleLabel}</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs text-[#475E53]">
                        {srvT.titleEnLabel}
                      </label>
                      <input
                        type="text"
                        value={srv.titleEn}
                        onChange={(e) => {
                          const next = [...servicesDraft];
                          next[idx] = { ...srv, titleEn: e.target.value };
                          setServicesDraft(next);
                        }}
                        className="w-full rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-[#475E53]">
                        {srvT.titleTeLabel}
                      </label>
                      <input
                        type="text"
                        value={srv.titleTe}
                        onChange={(e) => {
                          const next = [...servicesDraft];
                          next[idx] = { ...srv, titleTe: e.target.value };
                          setServicesDraft(next);
                        }}
                        className="w-full rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs text-[#475E53]">
                        {srvT.descEnLabel}
                      </label>
                      <textarea
                        rows={2}
                        value={srv.descriptionEn}
                        onChange={(e) => {
                          const next = [...servicesDraft];
                          next[idx] = { ...srv, descriptionEn: e.target.value };
                          setServicesDraft(next);
                        }}
                        className="w-full rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-[#475E53]">
                        {srvT.descTeLabel}
                      </label>
                      <textarea
                        rows={2}
                        value={srv.descriptionTe}
                        onChange={(e) => {
                          const next = [...servicesDraft];
                          next[idx] = { ...srv, descriptionTe: e.target.value };
                          setServicesDraft(next);
                        }}
                        className="w-full rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#0F764A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0B5D3A]"
              >
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{t.saveAll}</span>
              </button>
            </form>
          )}

          {activeTab === 'medicines' && (
            <div className="space-y-8">
              {/* Add Medicine Form */}
              <form
                onSubmit={handleCreateMedicine}
                className="rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] p-4 space-y-3"
              >
                <h3 className="font-display text-sm font-semibold text-[#0F291E]">
                  {t.addMedicineHeading}
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    value={newMedNameEn}
                    onChange={(e) => setNewMedNameEn(e.target.value)}
                    placeholder={t.medNameEn}
                    className="rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                  />
                  <input
                    type="text"
                    value={newMedNameTe}
                    onChange={(e) => setNewMedNameTe(e.target.value)}
                    placeholder={t.medNameTe}
                    className="rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                  />
                  <input
                    type="text"
                    value={newMedDescEn}
                    onChange={(e) => setNewMedDescEn(e.target.value)}
                    placeholder={t.medDescEn}
                    className="rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                  />
                  <input
                    type="text"
                    value={newMedDescTe}
                    onChange={(e) => setNewMedDescTe(e.target.value)}
                    placeholder={t.medDescTe}
                    className="rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <select
                    value={newMedCat}
                    onChange={(e) => setNewMedCat(e.target.value as MedicineCategory)}
                    aria-label={t.medCategory}
                    className="rounded-lg border border-[#DCE7E0] bg-white px-3 py-2 text-sm text-[#0F291E]"
                  >
                    {(
                      [
                        'prescription',
                        'otc',
                        'wellness',
                        'first-aid',
                        'personal-care',
                        'baby-care',
                      ] as MedicineCategory[]
                    ).map((cat) => (
                      <option key={cat} value={cat}>
                        {medT.categories[cat]}
                      </option>
                    ))}
                  </select>

                  <label className="flex items-center gap-2 text-xs font-medium text-[#0F291E]">
                    <input
                      type="checkbox"
                      checked={newMedCat === 'prescription' ? true : newMedRx}
                      disabled={newMedCat === 'prescription'}
                      onChange={(e) => setNewMedRx(e.target.checked)}
                      className="h-4 w-4 accent-[#0F764A]"
                    />
                    <span>{t.medRequiresRx}</span>
                  </label>

                  <button
                    type="submit"
                    className="ml-auto inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#0F764A] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0B5D3A]"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    <span>{t.addMedicineBtn}</span>
                  </button>
                </div>
              </form>

              {/* Existing Medicines Availability List */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#475E53]">
                  {t.availabilityLabel}
                </p>
                {storeState.medicines.map((med) => (
                  <div
                    key={med.id}
                    className="flex flex-col justify-between gap-3 rounded-xl border border-[#DCE7E0] bg-white p-4 sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-sm font-semibold text-[#0F291E]">
                        {lang === 'te' ? med.nameTe : med.nameEn}
                      </p>
                      <p className="text-xs text-[#475E53]">
                        {medT.categories[med.category]}
                        {med.availabilityUpdatedByShop && med.availabilityStatus
                          ? ` · ${medT.availabilityLabels[med.availabilityStatus]}`
                          : ''}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {(
                        ['available', 'limited', 'out-of-stock'] as Array<
                          Exclude<AvailabilityStatus, null>
                        >
                      ).map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => onUpdateMedicineAvailability(med.id, st)}
                          className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                            med.availabilityUpdatedByShop && med.availabilityStatus === st
                              ? 'border-[#0F764A] bg-[#0F764A] text-white'
                              : 'border-[#DCE7E0] bg-[#F7FAF8] text-[#0F291E] hover:border-[#0F764A]/40'
                          }`}
                        >
                          {medT.availabilityLabels[st]}
                        </button>
                      ))}
                      {med.availabilityUpdatedByShop && (
                        <button
                          type="button"
                          onClick={() => onUpdateMedicineAvailability(med.id, null)}
                          className="rounded-lg border border-[#DCE7E0] px-2.5 py-1.5 text-xs text-[#475E53] hover:text-[#0F291E]"
                        >
                          {medT.clearStatusBtn}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => onRemoveMedicine(med.id)}
                        aria-label={`${t.removeBtn} ${med.nameEn}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#DCE7E0] text-rose-700 hover:bg-rose-50"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#DCE7E0] bg-[#F7FAF8] px-6 py-4">
          <button
            type="button"
            onClick={handleResetConfirm}
            className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors ${
              confirmReset
                ? 'border-rose-700 bg-rose-700 text-white'
                : 'border-[#DCE7E0] bg-white text-[#475E53] hover:text-[#0F291E]'
            }`}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {confirmReset
                ? lang === 'te'
                  ? 'నిర్ధారించడానికి మళ్ళీ క్లిక్ చేయండి'
                  : 'Click again to confirm reset'
                : t.resetAll}
            </span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] rounded-xl border border-[#DCE7E0] bg-white px-5 py-2 text-sm font-semibold text-[#0F291E] hover:bg-[#EFF5F1]"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
