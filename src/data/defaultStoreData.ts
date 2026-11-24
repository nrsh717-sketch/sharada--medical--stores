import { PersistedStoreState } from '../types';

export const STORE_STORAGE_KEY = 'sharada_medical_stores_data_v1';

export const DEFAULT_STORE_STATE: PersistedStoreState = {
  storeInfo: {
    nameEn: 'SHARADA MEDICAL STORES',
    nameTe: 'శారద మెడికల్ స్టోర్స్',
    addressEn: 'Sharada Medical Stores, Choutuppal, Telangana, India',
    addressTe: 'శారద మెడికల్ స్టోర్స్, చౌటుప్పల్, తెలంగాణ, భారతదేశం',
    landmarkEn: '',
    landmarkTe: '',
    phone: '8328020387',
    openingHoursEn: 'Store hours can be updated by the shop — Call 8328020387 to confirm',
    openingHoursTe: 'దుకాణం వేళలను స్టోర్ వారు మార్చుకోవచ్చు — నిర్ధారణకు 8328020387 కు కాల్ చేయండి',
    aboutHeadingEn: 'Dependable pharmacy care for families in Choutuppal',
    aboutHeadingTe: 'చౌటుప్పల్ కుటుంబాలకు నమ్మకమైన ఫార్మసీ సేవలు',
    aboutBodyEn:
      'Sharada Medical Stores serves Choutuppal and nearby communities with genuine medicines, careful prescription verification, and everyday healthcare essentials. Our focus is straightforward: authentic products stored properly, respectful guidance at the counter, and attentive support whenever you call or visit.',
    aboutBodyTe:
      'శారద మెడికల్ స్టోర్స్ చౌటుప్పల్ మరియు పరిసర ప్రాంత ప్రజలకు నాణ్యమైన మందులు, ఖచ్చితమైన ప్రిస్క్రిప్షన్ పరిశీలన మరియు రోజువారీ ఆరోగ్య అవసరాలను అందిస్తుంది. సరైన నిల్వ విధానంతో అసలైన మందులు, కౌంటర్ వద్ద శ్రద్ధతో కూడిన సహాయం మరియు ఫోన్ లేదా సందర్శన ద్వారా నమ్మకమైన సేవ అందించడమే మా లక్ష్యం.',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sharada+Medical+Stores+Choutuppal+Telangana+India',
  },
  services: [
    {
      id: 'srv-prescription',
      iconKey: 'prescription',
      titleEn: 'Prescription Medicines',
      titleTe: 'ప్రిస్క్రిప్షన్ మందులు',
      descriptionEn:
        'Dispensed strictly in-store against a valid medical practitioner prescription after careful verification at our counter.',
      descriptionTe:
        'అర్హత కలిగిన వైద్యుల చెల్లుబాటు అయ్యే ప్రిస్క్రిప్షన్‌ను కౌంటర్ వద్ద పరిశీలించిన తర్వాత మాత్రమే మందులు ఇవ్వబడతాయి.',
      noteEn: 'In-store verification required',
      noteTe: 'దుకాణంలో ప్రిస్క్రిప్షన్ పరిశీలన తప్పనిసరి',
      visible: true,
    },
    {
      id: 'srv-otc',
      iconKey: 'otc',
      titleEn: 'OTC Medicines',
      titleTe: 'ఓటీసీ (సాధారణ) మందులు',
      descriptionEn:
        'Everyday over-the-counter relief for common fever, cold, acidity, headaches, and seasonal discomfort with usage guidance.',
      descriptionTe:
        'సాధారణ జ్వరం, జలుబు, ఎసిడిటీ, తలనొప్పి మరియు సీజనల్ ఇబ్బందులకు ఉపయోగపడే సాధారణ మందులు మరియు వినియోగ సూచనలు.',
      visible: true,
    },
    {
      id: 'srv-wellness',
      iconKey: 'wellness',
      titleEn: 'Health & Wellness Products',
      titleTe: 'ఆరోగ్య మరియు వెల్‌నెస్ ఉత్పత్తులు',
      descriptionEn:
        'Daily vitamins, mineral supplements, oral rehydration salts, glucometer strips, and home monitoring essentials.',
      descriptionTe:
        'రోజువారీ విటమిన్లు, మినరల్ సప్లిమెంట్లు, ఓఆర్ఎస్ ప్యాకెట్లు, షుగర్ పరీక్ష స్ట్రిప్స్ మరియు ఇంటి ఆరోగ్య పర్యవేక్షణ పరికరాలు.',
      visible: true,
    },
    {
      id: 'srv-first-aid',
      iconKey: 'first-aid',
      titleEn: 'First Aid Products',
      titleTe: 'ప్రథమ చికిత్స ఉత్పత్తులు',
      descriptionEn:
        'Sterile gauze, adhesive bandages, antiseptic solutions, cotton rolls, medical tapes, and household emergency kits.',
      descriptionTe:
        'స్టెరైల్ గాజుగుడ్డ, బ్యాండేజీలు, యాంటీసెప్టిక్ ద్రావణాలు, కాటన్ రోల్స్, మెడికల్ టేపులు మరియు ప్రథమ చికిత్స కిట్లు.',
      visible: true,
    },
    {
      id: 'srv-personal-care',
      iconKey: 'personal-care',
      titleEn: 'Personal Care Products',
      titleTe: 'వ్యక్తిగత సంరక్షణ ఉత్పత్తులు',
      descriptionEn:
        'Dermatologist-recommended cleansers, medicated soaps, oral hygiene essentials, moisturizers, and everyday hygiene items.',
      descriptionTe:
        'చర్మ సంరక్షణ క్లెన్సర్లు, మెడికేటెడ్ సబ్బులు, దంత సంరక్షణ ఉత్పత్తులు, మాయిశ్చరైజర్లు మరియు రోజువారీ శుభ్రత వస్తువులు.',
      visible: true,
    },
    {
      id: 'srv-baby-care',
      iconKey: 'baby-care',
      titleEn: 'Baby Care Products',
      titleTe: 'శిశు సంరక్షణ ఉత్పత్తులు',
      descriptionEn:
        'Gentle infant diapers, rash creams, mild baby washes, feeding essentials, and pediatric care items.',
      descriptionTe:
        'శిశువుల డైపర్లు, రాష్ క్రీములు, మృదువైన బేబీ వాష్‌లు, ఫీడింగ్ అవసరాలు మరియు పిల్లల సంరక్షణ ఉత్పత్తులు.',
      visible: true,
    },
  ],
  medicines: [
    {
      id: 'med-paracetamol',
      category: 'otc',
      nameEn: 'Paracetamol 500 mg / 650 mg Tablets',
      nameTe: 'పారాసెటమాల్ 500 mg / 650 mg మాత్రలు',
      descriptionEn:
        'Commonly used over-the-counter analgesic and antipyretic for mild fever and body aches. Ask our pharmacist for dosage clarity.',
      descriptionTe:
        'సాధారణ జ్వరం మరియు ఒంటి నొప్పుల ఉపశమనానికి ఉపయోగించే ఓటీసీ మాత్రలు. సరైన మోతాదు కోసం ఫార్మసిస్ట్‌ను సంప్రదించండి.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-ors',
      category: 'wellness',
      nameEn: 'Oral Rehydration Salts (ORS) Sachets',
      nameTe: 'ఓఆర్ఎస్ (ORS) ప్యాకెట్లు',
      descriptionEn:
        'WHO-formula electrolyte powder sachets to help restore hydration and essential salts during heat or stomach upset.',
      descriptionTe:
        'వేసవి నీరసం లేదా కడుపు అస్వస్థత సమయంలో శరీరంలో నీరు మరియు లవణాలను సమతుల్యం చేసే ఎలక్ట్రోలైట్ పొడి.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-bp-care',
      category: 'prescription',
      nameEn: 'Antihypertensive & Cardiac Formulations',
      nameTe: 'రక్తపోటు మరియు గుండె సంబంధిత మందులు',
      descriptionEn:
        'Scheduled blood pressure and cardiac maintenance medicines. Dispensed strictly against a valid doctor prescription at the store.',
      descriptionTe:
        'రక్తపోటు మరియు గుండె ఆరోగ్య నిర్వహణకు సంబంధించిన మందులు. వైద్యుల చెల్లుబాటు ప్రిస్క్రిప్షన్‌తోనే దుకాణంలో ఇవ్వబడతాయి.',
      requiresPrescription: true,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-diabetes-care',
      category: 'prescription',
      nameEn: 'Glycemic & Diabetes Management Medicines',
      nameTe: 'మధుమేహం (షుగర్) నియంత్రణ మందులు',
      descriptionEn:
        'Oral hypoglycemic tablets and insulin cold-chain supplies. Requires original prescription verification before dispensing.',
      descriptionTe:
        'మధుమేహ నియంత్రణ మాత్రలు మరియు కోల్డ్-చైన్ ఇన్సులిన్ అవసరాలు. అసలు ప్రిస్క్రిప్షన్ పరిశీలన తర్వాత మాత్రమే అందించబడతాయి.',
      requiresPrescription: true,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-antibiotic',
      category: 'prescription',
      nameEn: 'Schedule H Antibiotic Formulations',
      nameTe: 'షెడ్యూల్ H యాంటీబయాటిక్ మందులు',
      descriptionEn:
        'Prescription-only antibacterial medicines. Never sold without an authorised physician prescription presented in person.',
      descriptionTe:
        'వైద్యుల ప్రిస్క్రిప్షన్‌తో మాత్రమే ఇచ్చే యాంటీబయాటిక్ మందులు. ప్రిస్క్రిప్షన్ లేకుండా విక్రయించబడవు.',
      requiresPrescription: true,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-antacid',
      category: 'otc',
      nameEn: 'Digestive Antacid Syrup & Chewables',
      nameTe: 'గ్యాస్ మరియు ఎసిడిటీ సిరప్ / మాత్రలు',
      descriptionEn:
        'Over-the-counter soothing suspension and tablets for occasional heartburn, acidity, and indigestion relief.',
      descriptionTe:
        'కడుపు మంట, ఎసిడిటీ మరియు అజీర్తి ఉపశమనానికి ఉపయోగించే సాధారణ సిరప్ మరియు మాత్రలు.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-antiseptic',
      category: 'first-aid',
      nameEn: 'Antiseptic Liquid & Sterile Bandages',
      nameTe: 'యాంటీసెప్టిక్ లిక్విడ్ మరియు స్టెరైల్ బ్యాండేజీలు',
      descriptionEn:
        'Wound-cleansing antiseptic solution, sterile gauze pads, cotton rolls, and adhesive dressing strips for minor cuts.',
      descriptionTe:
        'చిన్న గాయాలను శుభ్రం చేసే యాంటీసెప్టిక్ ద్రావణం, స్టెరైల్ గాజుగుడ్డ, కాటన్ మరియు డ్రెస్సింగ్ బ్యాండేజీలు.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-thermometer',
      category: 'first-aid',
      nameEn: 'Digital Thermometer & Adhesive Plasters',
      nameTe: 'డిజిటల్ థర్మామీటర్ మరియు ప్లాస్టర్లు',
      descriptionEn:
        'Essential home first-aid kit items including digital clinical thermometers, crepe bandages, and waterproof plasters.',
      descriptionTe:
        'ఇంటి ప్రథమ చికిత్స కిట్ కోసం డిజిటల్ థర్మామీటర్లు, క్రేప్ బ్యాండేజీలు మరియు వాటర్‌ప్రూఫ్ ప్లాస్టర్లు.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-multivitamin',
      category: 'wellness',
      nameEn: 'Multivitamin, Calcium & Vitamin D3',
      nameTe: 'మల్టీవిటమిన్, కాల్షియం మరియు విటమిన్ D3',
      descriptionEn:
        'Nutritional supplement tablets and capsules supporting bone strength, daily energy, and general immunity.',
      descriptionTe:
        'ఎముకల బలం, రోజువారీ శక్తి మరియు రోగనిరోధక శక్తికి తోడ్పడే పోషక సప్లిమెంట్ మాత్రలు.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-medicated-skin',
      category: 'personal-care',
      nameEn: 'Medicated Skin Wash & Gentle Moisturizers',
      nameTe: 'మెడికేటెడ్ స్కిన్ వాష్ మరియు మాయిశ్చరైజర్లు',
      descriptionEn:
        'Fragrance-free daily cleansers, antifungal dusting powders, and barrier lotions for sensitive skin.',
      descriptionTe:
        'సున్నితమైన చర్మానికి సువాసన లేని క్లెన్సర్లు, యాంటీ ఫంగల్ పౌడర్లు మరియు మాయిశ్చరైజింగ్ లోషన్లు.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-oral-hygiene',
      category: 'personal-care',
      nameEn: 'Sensitive Toothpaste & Antiseptic Mouthwash',
      nameTe: 'సెన్సిటివ్ టూత్‌పేస్ట్ మరియు మౌత్‌వాష్',
      descriptionEn:
        'Fluoride dental care pastes, soft-bristle brushes, and gum-care mouth rinses for everyday oral health.',
      descriptionTe:
        'చిగుళ్లు మరియు దంతాల ఆరోగ్యానికి ఫ్లోరైడ్ టూత్‌పేస్ట్‌లు, మృదువైన బ్రష్‌లు మరియు మౌత్‌వాష్‌లు.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
    {
      id: 'med-baby-diapers',
      category: 'baby-care',
      nameEn: 'Infant Diapers, Rash Cream & Baby Wipes',
      nameTe: 'శిశు డైపర్లు, రాష్ క్రీమ్ మరియు బేబీ వైప్స్',
      descriptionEn:
        'Soft, breathable newborn and infant diapers, zinc-oxide rash barrier creams, and alcohol-free water wipes.',
      descriptionTe:
        'నవజాత శిశువులకు మృదువైన డైపర్లు, జింక్-ఆక్సైడ్ రాష్ క్రీములు మరియు ఆల్కహాల్ లేని బేబీ వైప్స్.',
      requiresPrescription: false,
      availabilityUpdatedByShop: false,
      availabilityStatus: null,
    },
  ],
};
