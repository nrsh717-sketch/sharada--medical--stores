export type Language = 'en' | 'te';

export type ServiceIconKey =
  | 'prescription'
  | 'otc'
  | 'wellness'
  | 'first-aid'
  | 'personal-care'
  | 'baby-care';

export interface ServiceItem {
  id: string;
  iconKey: ServiceIconKey;
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  descriptionTe: string;
  noteEn?: string;
  noteTe?: string;
  visible: boolean;
}

export type MedicineCategory =
  | 'prescription'
  | 'otc'
  | 'wellness'
  | 'first-aid'
  | 'personal-care'
  | 'baby-care';

export type AvailabilityStatus = 'available' | 'limited' | 'out-of-stock' | null;

export interface MedicineItem {
  id: string;
  category: MedicineCategory;
  nameEn: string;
  nameTe: string;
  descriptionEn: string;
  descriptionTe: string;
  requiresPrescription: boolean;
  availabilityUpdatedByShop: boolean;
  availabilityStatus: AvailabilityStatus;
  availabilityUpdatedAt?: string;
}

export interface StoreInfo {
  nameEn: string;
  nameTe: string;
  addressEn: string;
  addressTe: string;
  landmarkEn: string;
  landmarkTe: string;
  phone: string;
  openingHoursEn: string;
  openingHoursTe: string;
  aboutHeadingEn: string;
  aboutHeadingTe: string;
  aboutBodyEn: string;
  aboutBodyTe: string;
  mapsUrl: string;
}

export interface PersistedStoreState {
  storeInfo: StoreInfo;
  services: ServiceItem[];
  medicines: MedicineItem[];
}
