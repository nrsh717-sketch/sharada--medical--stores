import React, { useState } from 'react';
import {
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { Language, StoreInfo } from '../types';
import { TranslationSchema } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
  t: TranslationSchema['contact'];
  storeInfo: StoreInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  t,
  storeInfo,
}) => {
  const [name, setName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [sentNote, setSentNote] = useState('');

  const address = lang === 'te' ? storeInfo.addressTe : storeInfo.addressEn;
  const landmark = lang === 'te' ? storeInfo.landmarkTe : storeInfo.landmarkEn;
  const hours = lang === 'te' ? storeInfo.openingHoursTe : storeInfo.openingHoursEn;

  const directWhatsappUrl = `https://wa.me/91${storeInfo.phone}?text=${encodeURIComponent(
    lang === 'te'
      ? 'నమస్కారం శారద మెడికల్ స్టోర్స్, నాకు ఒక విచారణ ఉంది.'
      : 'Hello Sharada Medical Stores, I have an enquiry.'
  )}`;

  const composedMessage = [
    lang === 'te' ? 'నమస్కారం శారద మెడికల్ స్టోర్స్,' : 'Hello Sharada Medical Stores,',
    name.trim() ? `${lang === 'te' ? 'పేరు' : 'Name'}: ${name.trim()}` : '',
    visitorPhone.trim()
      ? `${lang === 'te' ? 'ఫోన్' : 'Mobile'}: ${visitorPhone.trim()}`
      : '',
    message.trim() ? `${lang === 'te' ? 'విచారణ' : 'Enquiry'}: ${message.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const composedWhatsappUrl = `https://wa.me/91${storeInfo.phone}?text=${encodeURIComponent(
    composedMessage
  )}`;

  const handleAnchorSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!name.trim()) {
      e.preventDefault();
      setErrorMsg(t.validationName);
      setSentNote('');
      return;
    }
    if (!message.trim()) {
      e.preventDefault();
      setErrorMsg(t.validationMessage);
      setSentNote('');
      return;
    }
    setErrorMsg('');
    setSentNote(t.sentSuccess);
  };

  return (
    <section id="contact" className="border-b border-[#DCE7E0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0F764A]">{t.sectionLabel}</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F291E] text-balance sm:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#475E53]">{t.subheading}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Store Contact Info & Action Cards */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#DCE7E0] bg-[#F7FAF8] p-6 sm:p-8 lg:col-span-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0F764A] border border-[#DCE7E0]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-[#0F291E]">
                    {t.addressTitle}
                  </h3>
                  <p className="mt-1 text-base text-[#0F291E]">{address}</p>
                  {landmark && (
                    <p className="mt-0.5 text-sm text-[#475E53]">{landmark}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-[#DCE7E0] pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0F764A] border border-[#DCE7E0]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-[#0F291E]">
                    {t.phoneTitle}
                  </h3>
                  <a
                    href={`tel:+91${storeInfo.phone}`}
                    className="mt-1 inline-block font-display text-xl font-bold tabular-nums text-[#0F764A] hover:underline"
                  >
                    +91 {storeInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-[#DCE7E0] pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0F764A] border border-[#DCE7E0]">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-[#0F291E]">
                    {t.hoursTitle}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#475E53]">{hours}</p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 gap-3 border-t border-[#DCE7E0] pt-6 sm:grid-cols-2">
              <a
                href={`tel:+91${storeInfo.phone}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#0F764A] px-4 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#0B5D3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{t.callNowBtn}</span>
              </a>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#0F764A] bg-white px-4 py-3 text-sm font-semibold text-[#0F764A] whitespace-nowrap transition-colors hover:bg-[#E6F4EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.whatsappEnquiryBtn}</span>
              </a>

              <a
                href={storeInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-[#DCE7E0] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F291E] whitespace-nowrap transition-colors hover:bg-[#EFF5F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A] sm:col-span-2"
              >
                <ExternalLink className="h-4 w-4 shrink-0 text-[#0F764A]" aria-hidden="true" />
                <span>{t.googleMapsBtn}</span>
              </a>
            </div>
          </div>

          {/* Right WhatsApp Quick Enquiry Composer */}
          <div className="rounded-2xl border border-[#DCE7E0] bg-white p-6 sm:p-8 lg:col-span-6">
            <h3 className="font-display text-xl font-bold text-[#0F291E]">{t.formTitle}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#475E53]">
              {t.formSubtitle}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="mb-1.5 block text-sm font-medium text-[#0F291E]"
                >
                  {t.nameLabel}
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="min-h-[46px] w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-4 py-2.5 text-sm text-[#0F291E] placeholder:text-[#6B8277] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="mb-1.5 block text-sm font-medium text-[#0F291E]"
                >
                  {t.phoneLabel}
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  value={visitorPhone}
                  onChange={(e) => setVisitorPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="min-h-[46px] w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-4 py-2.5 text-sm tabular-nums text-[#0F291E] placeholder:text-[#6B8277] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-message"
                  className="mb-1.5 block text-sm font-medium text-[#0F291E]"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-xl border border-[#DCE7E0] bg-[#F7FAF8] px-4 py-3 text-sm text-[#0F291E] placeholder:text-[#6B8277] focus:border-[#0F764A] focus:bg-white focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p role="alert" className="text-sm font-medium text-rose-700">
                  {errorMsg}
                </p>
              )}
              {sentNote && (
                <p role="status" className="text-sm font-medium text-[#0F764A]">
                  {sentNote}
                </p>
              )}

              <a
                href={composedWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAnchorSubmit}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#0F764A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B5D3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F764A]"
              >
                <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.sendWhatsappBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
