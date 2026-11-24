import { useEffect, useState } from 'react';
import { DEFAULT_STORE_STATE, STORE_STORAGE_KEY } from './data/defaultStoreData';
import { TRANSLATIONS } from './data/translations';
import {
  AvailabilityStatus,
  Language,
  MedicineItem,
  PersistedStoreState,
  ServiceItem,
  StoreInfo,
} from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MedicinesSection } from './components/MedicinesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StoreEditorModal } from './components/StoreEditorModal';

const LANG_STORAGE_KEY = 'sharada_medical_lang_v1';

function loadInitialStoreState(): PersistedStoreState {
  try {
    const raw = localStorage.getItem(STORE_STORAGE_KEY);
    if (!raw) return DEFAULT_STORE_STATE;
    const parsed = JSON.parse(raw) as Partial<PersistedStoreState>;
    return {
      storeInfo: { ...DEFAULT_STORE_STATE.storeInfo, ...(parsed.storeInfo || {}) },
      services: Array.isArray(parsed.services)
        ? parsed.services
        : DEFAULT_STORE_STATE.services,
      medicines: Array.isArray(parsed.medicines)
        ? parsed.medicines
        : DEFAULT_STORE_STATE.medicines,
    };
  } catch {
    return DEFAULT_STORE_STATE;
  }
}

function loadInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    return saved === 'te' ? 'te' : 'en';
  } catch {
    return 'en';
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>(loadInitialLanguage);
  const [storeState, setStoreState] = useState<PersistedStoreState>(loadInitialStoreState);
  const [editorOpen, setEditorOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage quota errors
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_STORAGE_KEY, JSON.stringify(storeState));
    } catch {
      // Ignore storage quota errors
    }
  }, [storeState]);

  const storeName = lang === 'te' ? storeState.storeInfo.nameTe : storeState.storeInfo.nameEn;

  const handleUpdateService = (updated: ServiceItem) => {
    setStoreState((prev) => ({
      ...prev,
      services: prev.services.map((s) => (s.id === updated.id ? updated : s)),
    }));
  };

  const handleAddService = (created: ServiceItem) => {
    setStoreState((prev) => ({
      ...prev,
      services: [...prev.services, created],
    }));
  };

  const handleResetServices = () => {
    setStoreState((prev) => ({
      ...prev,
      services: DEFAULT_STORE_STATE.services,
    }));
  };

  const handleUpdateMedicineAvailability = (id: string, status: AvailabilityStatus) => {
    const formattedDate = new Intl.DateTimeFormat(lang === 'te' ? 'te-IN' : 'en-IN', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date());

    setStoreState((prev) => ({
      ...prev,
      medicines: prev.medicines.map((m) =>
        m.id === id
          ? {
              ...m,
              availabilityUpdatedByShop: status !== null,
              availabilityStatus: status,
              availabilityUpdatedAt: status !== null ? formattedDate : undefined,
            }
          : m
      ),
    }));
  };

  const handleAddMedicine = (med: MedicineItem) => {
    setStoreState((prev) => ({
      ...prev,
      medicines: [med, ...prev.medicines],
    }));
  };

  const handleRemoveMedicine = (id: string) => {
    setStoreState((prev) => ({
      ...prev,
      medicines: prev.medicines.filter((m) => m.id !== id),
    }));
  };

  const handleSaveStoreInfo = (info: StoreInfo) => {
    setStoreState((prev) => ({
      ...prev,
      storeInfo: info,
    }));
  };

  const handleSaveServices = (services: ServiceItem[]) => {
    setStoreState((prev) => ({
      ...prev,
      services,
    }));
  };

  const handleUpdateHours = (openingHoursEn: string, openingHoursTe: string) => {
    setStoreState((prev) => ({
      ...prev,
      storeInfo: {
        ...prev.storeInfo,
        openingHoursEn,
        openingHoursTe,
      },
    }));
  };

  const handleResetAll = () => {
    setStoreState(DEFAULT_STORE_STATE);
    try {
      localStorage.removeItem(STORE_STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAF8] text-[#0F291E]">
      <Navbar
        lang={lang}
        onChangeLang={setLang}
        t={t.nav}
        storeName={storeName}
        phone={storeState.storeInfo.phone}
      />

      <main>
        <HeroSection
          lang={lang}
          onChangeLang={setLang}
          t={t.hero}
          storeName={storeName}
          phone={storeState.storeInfo.phone}
        />

        <AboutSection
          lang={lang}
          t={t.about}
          storeInfo={storeState.storeInfo}
          onOpenStoreEditor={() => setEditorOpen(true)}
        />

        <ServicesSection
          lang={lang}
          t={t.services}
          services={storeState.services}
          onUpdateService={handleUpdateService}
          onAddService={handleAddService}
          onResetServices={handleResetServices}
        />

        <MedicinesSection
          lang={lang}
          t={t.medicines}
          medicines={storeState.medicines}
          phone={storeState.storeInfo.phone}
          onUpdateAvailability={handleUpdateMedicineAvailability}
          onOpenStoreEditor={() => setEditorOpen(true)}
        />

        <ContactSection lang={lang} t={t.contact} storeInfo={storeState.storeInfo} />
      </main>

      <Footer
        lang={lang}
        onChangeLang={setLang}
        t={t.footer}
        navT={t.nav}
        storeInfo={storeState.storeInfo}
        onUpdateHours={handleUpdateHours}
        onOpenStoreEditor={() => setEditorOpen(true)}
      />

      <StoreEditorModal
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        lang={lang}
        t={t.editor}
        medT={t.medicines}
        srvT={t.services}
        storeState={storeState}
        onSaveStoreInfo={handleSaveStoreInfo}
        onSaveServices={handleSaveServices}
        onUpdateMedicineAvailability={handleUpdateMedicineAvailability}
        onAddMedicine={handleAddMedicine}
        onRemoveMedicine={handleRemoveMedicine}
        onResetAll={handleResetAll}
      />
    </div>
  );
}
