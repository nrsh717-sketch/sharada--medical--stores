import { AvailabilityStatus, Language, MedicineCategory } from '../types';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    medicines: string;
    contact: string;
    callNow: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    locationTag: string;
    welcomeKicker: string;
    headline: string;
    subheadline: string;
    callBtn: string;
    whatsappBtn: string;
    browseMedicines: string;
    trust1Title: string;
    trust1Sub: string;
    trust2Title: string;
    trust2Sub: string;
    trust3Title: string;
    trust3Sub: string;
    imageAlt: string;
  };
  about: {
    sectionLabel: string;
    editBtn: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    imageAlt: string;
  };
  services: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    editServicesBtn: string;
    doneEditingBtn: string;
    addServiceBtn: string;
    resetDefaultsBtn: string;
    titleEnLabel: string;
    titleTeLabel: string;
    descEnLabel: string;
    descTeLabel: string;
    visibleLabel: string;
    saveChangesBtn: string;
    cancelBtn: string;
    imageAlt: string;
    imageCaption: string;
  };
  medicines: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    complianceTitle: string;
    complianceBody: string;
    searchPlaceholder: string;
    clearSearch: string;
    updateAvailabilityBtn: string;
    categories: Record<'all' | MedicineCategory, string>;
    rxLabel: string;
    otcLabel: string;
    availabilityNotUpdated: string;
    updatedByShopPrefix: string;
    availabilityLabels: Record<Exclude<AvailabilityStatus, null>, string>;
    enquireWhatsapp: string;
    callStore: string;
    noResultsTitle: string;
    noResultsSub: string;
    showAllBtn: string;
    quickSetLabel: string;
    clearStatusBtn: string;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    addressTitle: string;
    phoneTitle: string;
    hoursTitle: string;
    callNowBtn: string;
    whatsappEnquiryBtn: string;
    googleMapsBtn: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendWhatsappBtn: string;
    validationName: string;
    validationMessage: string;
    sentSuccess: string;
  };
  footer: {
    quickLinks: string;
    storeDetails: string;
    openingHours: string;
    editHoursBtn: string;
    storeEditorBtn: string;
    copyright: string;
    complianceFootnote: string;
  };
  editor: {
    modalTitle: string;
    modalSubtitle: string;
    tabStore: string;
    tabServices: string;
    tabMedicines: string;
    saveAll: string;
    resetAll: string;
    close: string;
    savedToast: string;
    landmarkEnLabel: string;
    landmarkTeLabel: string;
    hoursEnLabel: string;
    hoursTeLabel: string;
    aboutHeadingEnLabel: string;
    aboutHeadingTeLabel: string;
    aboutBodyEnLabel: string;
    aboutBodyTeLabel: string;
    mapsUrlLabel: string;
    addMedicineHeading: string;
    medNameEn: string;
    medNameTe: string;
    medDescEn: string;
    medDescTe: string;
    medCategory: string;
    medRequiresRx: string;
    addMedicineBtn: string;
    removeBtn: string;
    availabilityLabel: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      medicines: 'Medicines',
      contact: 'Contact',
      callNow: 'Call Now',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      locationTag: 'Choutuppal, Telangana, India',
      welcomeKicker: 'Welcome to Sharada Medical Stores',
      headline: 'Trusted neighbourhood pharmacy care in Choutuppal.',
      subheadline:
        'Genuine prescription and over-the-counter medicines, wellness essentials, first aid, personal care, and baby care—supported by attentive counter service.',
      callBtn: 'Call 8328020387',
      whatsappBtn: 'WhatsApp Enquiry',
      browseMedicines: 'Search Medicines',
      trust1Title: 'Verified Dispensing',
      trust1Sub: 'Prescription medicines dispensed only after in-store verification',
      trust2Title: 'Genuine Stock',
      trust2Sub: 'Properly stored formulations and everyday family care items',
      trust3Title: 'Direct Enquiry',
      trust3Sub: 'Speak directly with the store via phone or WhatsApp',
      imageAlt: 'Sharada Medical Stores clean green and white pharmacy counter and shelves',
    },
    about: {
      sectionLabel: 'About Us',
      editBtn: 'Edit Store Info',
      pillar1Title: 'Customer-First Guidance',
      pillar1Desc:
        'Clear dosage instructions, patient listening, and respectful assistance for elders and families in Choutuppal.',
      pillar2Title: 'Strict Quality & Storage',
      pillar2Desc:
        'Every product is sourced through authorised pharmaceutical channels and stored cleanly to preserve potency.',
      pillar3Title: 'Responsible Dispensing',
      pillar3Desc:
        'No online self-checkout shortcuts. Scheduled medicines require a valid doctor prescription presented at our store.',
      imageAlt: 'Pharmacy dispensing counter with sealed medicines and prescription clipboard',
    },
    services: {
      sectionLabel: 'Our Services',
      heading: 'Complete family healthcare essentials under one roof',
      subheading:
        'From verified prescription dispensing to daily wellness and infant supplies. Shop administrators can edit or update any service description below.',
      editServicesBtn: 'Edit Services',
      doneEditingBtn: 'Done Editing',
      addServiceBtn: 'Add Service',
      resetDefaultsBtn: 'Reset Defaults',
      titleEnLabel: 'Service Title (English)',
      titleTeLabel: 'Service Title (Telugu)',
      descEnLabel: 'Description (English)',
      descTeLabel: 'Description (Telugu)',
      visibleLabel: 'Show on website',
      saveChangesBtn: 'Save Service',
      cancelBtn: 'Cancel',
      imageAlt: 'Clean pharmacy shelf displaying baby care, first aid, and health wellness products',
      imageCaption: 'Organised shelves for wellness, first aid, and infant care essentials',
    },
    medicines: {
      sectionLabel: 'Medicines & Catalogue',
      heading: 'Search medicine categories & enquire directly',
      subheading:
        'Browse common pharmacy categories and product references. Availability is displayed only when explicitly updated by Sharada Medical Stores.',
      complianceTitle: 'Prescription Safety & No Online Checkout Notice',
      complianceBody:
        'Online medicine purchases are not available on this website. Prescription medicines are never sold or dispensed without in-person verification of a valid doctor prescription at our Choutuppal counter.',
      searchPlaceholder: 'Search medicines by name, symptom, or category...',
      clearSearch: 'Clear',
      updateAvailabilityBtn: 'Shop Availability Editor',
      categories: {
        all: 'All Categories',
        prescription: 'Prescription',
        otc: 'OTC Medicines',
        wellness: 'Health & Wellness',
        'first-aid': 'First Aid',
        'personal-care': 'Personal Care',
        'baby-care': 'Baby Care',
      },
      rxLabel: 'Prescription Verification Required',
      otcLabel: 'Over-the-Counter / General',
      availabilityNotUpdated: 'Availability not updated online — Call or WhatsApp to confirm',
      updatedByShopPrefix: 'Updated by store',
      availabilityLabels: {
        available: 'Available at Store',
        limited: 'Limited Stock',
        'out-of-stock': 'Currently Out of Stock',
      },
      enquireWhatsapp: 'Enquire on WhatsApp',
      callStore: 'Call Store',
      noResultsTitle: 'No matching medicines listed',
      noResultsSub:
        'Try another keyword or enquire directly on WhatsApp or phone—our counter stocks additional formulations.',
      showAllBtn: 'Show All Items',
      quickSetLabel: 'Shop update:',
      clearStatusBtn: 'Hide status',
    },
    contact: {
      sectionLabel: 'Contact Us',
      heading: 'Visit or contact Sharada Medical Stores',
      subheading:
        'Reach out directly by phone or WhatsApp to check medicine availability, ask about store hours, or get directions to Choutuppal.',
      addressTitle: 'Store Address',
      phoneTitle: 'Phone & WhatsApp',
      hoursTitle: 'Opening Hours',
      callNowBtn: 'Call 8328020387',
      whatsappEnquiryBtn: 'Chat on WhatsApp',
      googleMapsBtn: 'Open in Google Maps',
      formTitle: 'Send a WhatsApp Enquiry',
      formSubtitle:
        'Compose your message below and open it directly in WhatsApp—no account or payment required.',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your name',
      phoneLabel: 'Your Mobile Number (Optional)',
      phonePlaceholder: 'e.g. 98XXXXXXXX',
      messageLabel: 'Medicine or General Enquiry',
      messagePlaceholder: 'Ask about medicine availability, prescription queries, or store timings...',
      sendWhatsappBtn: 'Send via WhatsApp',
      validationName: 'Please enter your name.',
      validationMessage: 'Please enter your enquiry message.',
      sentSuccess: 'Opening WhatsApp with your enquiry to Sharada Medical Stores.',
    },
    footer: {
      quickLinks: 'Navigation',
      storeDetails: 'Store Information',
      openingHours: 'Opening Hours',
      editHoursBtn: 'Edit Hours',
      storeEditorBtn: 'Store Editor',
      copyright: '© 2026 Sharada Medical Stores, Choutuppal. All rights reserved.',
      complianceFootnote:
        'Information on this site is for store reference only. No online medicine sales; prescription medicines require valid verification at the counter.',
    },
    editor: {
      modalTitle: 'Store Information & Availability Editor',
      modalSubtitle:
        'Update store hours, address landmark, service descriptions, or medicine availability. Changes save locally in this browser.',
      tabStore: 'Store & Hours',
      tabServices: 'Services',
      tabMedicines: 'Medicine Availability',
      saveAll: 'Save Changes',
      resetAll: 'Reset All to Default',
      close: 'Close',
      savedToast: 'Store updates saved locally.',
      landmarkEnLabel: 'Shop No. / Street Landmark (English, optional)',
      landmarkTeLabel: 'దుకాణం నం. / చిరునామా వివరము (Telugu, optional)',
      hoursEnLabel: 'Opening Hours (English)',
      hoursTeLabel: 'దుకాణం వేళలు (Telugu)',
      aboutHeadingEnLabel: 'About Heading (English)',
      aboutHeadingTeLabel: 'మా గురించి శీర్షిక (Telugu)',
      aboutBodyEnLabel: 'About Description (English)',
      aboutBodyTeLabel: 'మా గురించి వివరణ (Telugu)',
      mapsUrlLabel: 'Google Maps Link',
      addMedicineHeading: 'Add Medicine / Product Reference',
      medNameEn: 'Product Name (English)',
      medNameTe: 'Product Name (Telugu)',
      medDescEn: 'Description (English)',
      medDescTe: 'Description (Telugu)',
      medCategory: 'Category',
      medRequiresRx: 'Requires Prescription Verification',
      addMedicineBtn: 'Add Item',
      removeBtn: 'Remove',
      availabilityLabel: 'Shop Availability Status',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      services: 'సేవలు',
      medicines: 'మందులు',
      contact: 'సంప్రదించండి',
      callNow: 'కాల్ చేయండి',
      menuOpen: 'మెనూ తెరవండి',
      menuClose: 'మెనూ మూసివేయండి',
    },
    hero: {
      locationTag: 'చౌటుప్పల్, తెలంగాణ, భారతదేశం',
      welcomeKicker: 'శారద మెడికల్ స్టోర్స్‌కు స్వాగతం',
      headline: 'చౌటుప్పల్‌లో నమ్మకమైన ఫార్మసీ మరియు ఆరోగ్య సంరక్షణ.',
      subheadline:
        'అసలైన ప్రిస్క్రిప్షన్ మరియు సాధారణ మందులు, ఆరోగ్య ఉత్పత్తులు, ప్రథమ చికిత్స, వ్యక్తిగత సంరక్షణ మరియు శిశు సంరక్షణ వస్తువులు — శ్రద్ధగల సేవతో.',
      callBtn: '8328020387 కు కాల్ చేయండి',
      whatsappBtn: 'వాట్సాప్ విచారణ',
      browseMedicines: 'మందులు వెతకండి',
      trust1Title: 'ప్రిస్క్రిప్షన్ పరిశీలన',
      trust1Sub: 'డాక్టర్ ప్రిస్క్రిప్షన్ పరిశీలన తర్వాతే మందులు ఇవ్వబడతాయి',
      trust2Title: 'నాణ్యమైన మందులు',
      trust2Sub: 'సరైన ఉష్ణోగ్రత మరియు పరిశుభ్రతతో నిల్వ చేసిన మందులు',
      trust3Title: 'నేరుగా సంప్రదించండి',
      trust3Sub: 'ఫోన్ లేదా వాట్సాప్ ద్వారా మందుల లభ్యత తెలుసుకోండి',
      imageAlt: 'శారద మెడికల్ స్టోర్స్ పరిశుభ్రమైన గ్రీన్ మరియు వైట్ ఫార్మసీ కౌంటర్',
    },
    about: {
      sectionLabel: 'మా గురించి',
      editBtn: 'వివరాలు మార్చండి',
      pillar1Title: 'కస్టమర్ సేవకు ప్రాధాన్యత',
      pillar1Desc:
        'చౌటుప్పల్ మరియు పరిసర గ్రామాల కుటుంబాలకు, పెద్దలకు మందుల వినియోగంపై స్పష్టమైన సహాయం.',
      pillar2Title: 'నాణ్యత మరియు సురక్షిత నిల్వ',
      pillar2Desc:
        'ప్రతి మందు అధికారిక ఫార్మా పంపిణీదారుల నుండి సేకరించి నాణ్యతా ప్రమాణాలతో నిల్వ చేయబడుతుంది.',
      pillar3Title: 'బాధ్యతాయుతమైన మందుల పంపిణీ',
      pillar3Desc:
        'ఆన్‌లైన్ విక్రయాలు లేవు. ప్రిస్క్రిప్షన్ మందులు కేవలం కౌంటర్ వద్ద అసలు ప్రిస్క్రిప్షన్ పరిశీలించాకే ఇవ్వబడతాయి.',
      imageAlt: 'మందుల ప్యాకెట్లు మరియు ప్రిస్క్రిప్షన్ పరిశీలన ఫార్మసీ కౌంటర్',
    },
    services: {
      sectionLabel: 'మా సేవలు',
      heading: 'కుటుంబ ఆరోగ్య అవసరాలన్నీ ఒకే చోట',
      subheading:
        'ప్రిస్క్రిప్షన్ మందుల నుండి రోజువారీ ఆరోగ్య మరియు శిశు సంరక్షణ ఉత్పత్తుల వరకు. స్టోర్ నిర్వాహకులు ఈ సేవల వివరాలను మార్చుకోవచ్చు.',
      editServicesBtn: 'సేవలు మార్చండి',
      doneEditingBtn: 'మార్పులు పూర్తయ్యాయి',
      addServiceBtn: 'కొత్త సేవ చేర్చండి',
      resetDefaultsBtn: 'పాత వివరాలకు మార్చండి',
      titleEnLabel: 'సేవ పేరు (English)',
      titleTeLabel: 'సేవ పేరు (తెలుగు)',
      descEnLabel: 'వివరణ (English)',
      descTeLabel: 'వివరణ (తెలుగు)',
      visibleLabel: 'వెబ్‌సైట్‌లో చూపించు',
      saveChangesBtn: 'సేవ్ చేయండి',
      cancelBtn: 'రద్దు',
      imageAlt: 'శిశు సంరక్షణ, ప్రథమ చికిత్స మరియు ఆరోగ్య ఉత్పత్తుల షెల్ఫ్',
      imageCaption: 'ఆరోగ్య, ప్రథమ చికిత్స మరియు శిశు సంరక్షణ ఉత్పత్తుల విభాగం',
    },
    medicines: {
      sectionLabel: 'మందులు మరియు కేటగిరీలు',
      heading: 'మందుల వివరాలు వెతకండి మరియు విచారించండి',
      subheading:
        'మందుల కేటగిరీలు మరియు వివరాలను చూడండి. దుకాణం వారు అప్‌డేట్ చేసినప్పుడు మాత్రమే మందుల లభ్యత కనిపిస్తుంది.',
      complianceTitle: 'ప్రిస్క్రిప్షన్ భద్రత & ఆన్‌లైన్ కొనుగోలు లేకపోవడం గమనిక',
      complianceBody:
        'ఈ వెబ్‌సైట్‌లో ఆన్‌లైన్ మందుల కొనుగోలు సదుపాయం లేదు. ప్రిస్క్రిప్షన్ మందులు చౌటుప్పల్ కౌంటర్ వద్ద వైద్యుల చెల్లుబాటు అయ్యే ప్రిస్క్రిప్షన్ పరిశీలన లేకుండా ఎట్టి పరిస్థితుల్లోనూ విక్రయించబడవు.',
      searchPlaceholder: 'మందు పేరు, లక్షణం లేదా కేటగిరీ ద్వారా వెతకండి...',
      clearSearch: 'తొలగించు',
      updateAvailabilityBtn: 'లభ్యత అప్‌డేట్ (స్టోర్)',
      categories: {
        all: 'అన్ని కేటగిరీలు',
        prescription: 'ప్రిస్క్రిప్షన్ మందులు',
        otc: 'ఓటీసీ మందులు',
        wellness: 'ఆరోగ్య & వెల్‌నెస్',
        'first-aid': 'ప్రథమ చికిత్స',
        'personal-care': 'వ్యక్తిగత సంరక్షణ',
        'baby-care': 'శిశు సంరక్షణ',
      },
      rxLabel: 'ప్రిస్క్రిప్షన్ పరిశీలన అవసరం',
      otcLabel: 'సాధారణ / ఓటీసీ విభాగం',
      availabilityNotUpdated: 'లభ్యత ఆన్‌లైన్‌లో అప్‌డేట్ చేయబడలేదు — ఫోన్ లేదా వాట్సాప్‌లో నిర్ధారించుకోండి',
      updatedByShopPrefix: 'స్టోర్ అప్‌డేట్',
      availabilityLabels: {
        available: 'దుకాణంలో అందుబాటులో ఉంది',
        limited: 'పరిమిత స్టాక్ మాత్రమే',
        'out-of-stock': 'ప్రస్తుతం స్టాక్ లేదు',
      },
      enquireWhatsapp: 'వాట్సాప్‌లో అడగండి',
      callStore: 'కాల్ చేయండి',
      noResultsTitle: 'సరిపోయే మందులు కనిపించలేదు',
      noResultsSub:
        'మరో పేరుతో వెతకండి లేదా నేరుగా ఫోన్ / వాట్సాప్ ద్వారా స్టోర్‌ను సంప్రదించండి.',
      showAllBtn: 'అన్నీ చూపించు',
      quickSetLabel: 'స్టోర్ అప్‌డేట్:',
      clearStatusBtn: 'స్థితి దాచు',
    },
    contact: {
      sectionLabel: 'సంప్రదించండి',
      heading: 'శారద మెడికల్ స్టోర్స్‌ను సంప్రదించండి',
      subheading:
        'మందుల లభ్యత, దుకాణం వేళలు లేదా చౌటుప్పల్ చిరునామా వివరాల కోసం నేరుగా కాల్ చేయండి లేదా వాట్సాప్ పంపండి.',
      addressTitle: 'దుకాణం చిరునామా',
      phoneTitle: 'ఫోన్ & వాట్సాప్',
      hoursTitle: 'దుకాణం వేళలు',
      callNowBtn: '8328020387 కు కాల్ చేయండి',
      whatsappEnquiryBtn: 'వాట్సాప్‌లో మెసేజ్ చేయండి',
      googleMapsBtn: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
      formTitle: 'వాట్సాప్ విచారణ పంపండి',
      formSubtitle:
        'క్రింది వివరాలను నమోదు చేసి నేరుగా వాట్సాప్ ద్వారా సందేశం పంపండి — లాగిన్ లేదా చెల్లింపు అవసరం లేదు.',
      nameLabel: 'మీ పేరు',
      namePlaceholder: 'మీ పేరు నమోదు చేయండి',
      phoneLabel: 'మీ మొబైల్ నంబర్ (ఐచ్ఛికం)',
      phonePlaceholder: 'ఉదా. 98XXXXXXXX',
      messageLabel: 'మందు లేదా సాధారణ విచారణ',
      messagePlaceholder: 'మందు లభ్యత, ప్రిస్క్రిప్షన్ లేదా వేళల గురించి అడగండి...',
      sendWhatsappBtn: 'వాట్సాప్ ద్వారా పంపండి',
      validationName: 'దయచేసి మీ పేరు నమోదు చేయండి.',
      validationMessage: 'దయచేసి మీ విచారణ వివరాలు నమోదు చేయండి.',
      sentSuccess: 'శారద మెడికల్ స్టోర్స్ వాట్సాప్ చాట్ తెరవబడుతోంది.',
    },
    footer: {
      quickLinks: 'విభాగాలు',
      storeDetails: 'దుకాణం వివరాలు',
      openingHours: 'దుకాణం వేళలు',
      editHoursBtn: 'వేళలు మార్చండి',
      storeEditorBtn: 'స్టోర్ ఎడిటర్',
      copyright: '© 2026 శారద మెడికల్ స్టోర్స్, చౌటుప్పల్. సర్వ హక్కులు ప్రత్యేకించబడినవి.',
      complianceFootnote:
        'ఈ వెబ్‌సైట్‌లోని సమాచారం అవగాహన కోసం మాత్రమే. ఆన్‌లైన్ మందుల విక్రయాలు లేవు; ప్రిస్క్రిప్షన్ మందులు కౌంటర్ వద్ద పరిశీలన తర్వాతే ఇవ్వబడతాయి.',
    },
    editor: {
      modalTitle: 'దుకాణం వివరాలు & మందుల లభ్యత ఎడిటర్',
      modalSubtitle:
        'దుకాణం వేళలు, చిరునామా, సేవలు లేదా మందుల లభ్యతను ఇక్కడ మార్చుకోవచ్చు. మార్పులు ఈ బ్రౌజర్‌లో సేవ్ అవుతాయి.',
      tabStore: 'దుకాణం & వేళలు',
      tabServices: 'సేవలు',
      tabMedicines: 'మందుల లభ్యత',
      saveAll: 'మార్పులు సేవ్ చేయండి',
      resetAll: 'అన్నీ పాత స్థితికి మార్చండి',
      close: 'మూసివేయండి',
      savedToast: 'స్టోర్ వివరాలు సేవ్ చేయబడ్డాయి.',
      landmarkEnLabel: 'షాప్ నం. / ల్యాండ్‌మార్క్ (English, ఐచ్ఛికం)',
      landmarkTeLabel: 'షాప్ నం. / సమీప గుర్తు (తెలుగు, ఐచ్ఛికం)',
      hoursEnLabel: 'దుకాణం వేళలు (English)',
      hoursTeLabel: 'దుకాణం వేళలు (తెలుగు)',
      aboutHeadingEnLabel: 'మా గురించి శీర్షిక (English)',
      aboutHeadingTeLabel: 'మా గురించి శీర్షిక (తెలుగు)',
      aboutBodyEnLabel: 'మా గురించి వివరణ (English)',
      aboutBodyTeLabel: 'మా గురించి వివరణ (తెలుగు)',
      mapsUrlLabel: 'గూగుల్ మ్యాప్స్ లింక్',
      addMedicineHeading: 'కొత్త మందు / ఉత్పత్తి చేర్చండి',
      medNameEn: 'ఉత్పత్తి పేరు (English)',
      medNameTe: 'ఉత్పత్తి పేరు (తెలుగు)',
      medDescEn: 'వివరణ (English)',
      medDescTe: 'వివరణ (తెలుగు)',
      medCategory: 'కేటగిరీ',
      medRequiresRx: 'ప్రిస్క్రిప్షన్ పరిశీలన అవసరం',
      addMedicineBtn: 'చేర్చండి',
      removeBtn: 'తొలగించు',
      availabilityLabel: 'దుకాణంలో లభ్యత స్థితి',
    },
  },
};
