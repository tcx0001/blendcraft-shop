// BlendCraft — product catalog & SVG artwork
// All items are COMPATIBLE replacement parts, not OEM.

const ART = {
  blade: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="128" rx="62" ry="20" fill="#cbd5e1"/>
    <path d="M100 60 L60 118 L140 118 Z" fill="#94a3b8"/>
    <path d="M100 60 C84 88 84 108 100 118 L100 60 Z" fill="#64748b"/>
    <path d="M100 60 C116 88 116 108 100 118 L100 60 Z" fill="#475569"/>
    <ellipse cx="100" cy="118" rx="16" ry="26" fill="#e2e8f0"/>
    <circle cx="100" cy="88" r="4" fill="#94a3b8"/>
    <path d="M100 60 C95 100 95 120 100 128" stroke="#cbd5e1" stroke-width="3" fill="none"/>
    <ellipse cx="100" cy="150" rx="46" ry="9" fill="#94a3b8"/>
    <rect x="70" y="150" width="14" height="8" rx="3" fill="#64748b"/>
    <rect x="116" y="150" width="14" height="8" rx="3" fill="#64748b"/>
  </svg>`,
  cup: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M62 70 L74 176 Q75 184 83 184 L117 184 Q125 184 126 176 L138 70 Z" fill="#cbd5e1"/>
    <path d="M66 70 L78 176 Q79 182 86 182 L100 182 L100 70 Z" fill="#e2e8f0"/>
    <ellipse cx="100" cy="70" rx="38" ry="12" fill="#94a3b8"/>
    <rect x="112" y="90" width="26" height="8" rx="4" fill="#94a3b8"/>
    <rect x="112" y="112" width="22" height="8" rx="4" fill="#94a3b8"/>
  </svg>`,
  jar: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M66 58 L58 176 Q57 184 66 184 L134 184 Q143 184 142 176 L134 58 Q133 52 126 52 L74 52 Q67 52 66 58 Z" fill="#cbd5e1"/>
    <path d="M70 58 L62 176 Q61 182 68 182 L100 182 L100 58 Z" fill="#e2e8f0"/>
    <ellipse cx="100" cy="52" rx="30" ry="9" fill="#94a3b8"/>
    <rect x="70" y="40" width="60" height="14" rx="6" fill="#64748b"/>
    <path d="M100 70 L112 92 M100 70 L88 92" stroke="#94a3b8" stroke-width="3" fill="none"/>
    <circle cx="100" cy="72" r="6" fill="#94a3b8"/>
    <path d="M82 120 Q100 116 118 120 L116 150 Q100 146 84 150 Z" fill="#e2e8f0"/>
  </svg>`,
  lid: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="120" rx="70" ry="20" fill="#cbd5e1"/>
    <ellipse cx="100" cy="112" rx="70" ry="18" fill="#e2e8f0"/>
    <rect x="56" y="82" width="88" height="24" rx="12" fill="#94a3b8"/>
    <circle cx="100" cy="82" r="10" fill="#64748b"/>
    <path d="M136 96 Q152 96 154 104" stroke="#64748b" stroke-width="4" fill="none"/>
  </svg>`,
  gasket: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="108" rx="66" ry="30" fill="#94a3b8"/>
    <ellipse cx="100" cy="104" rx="66" ry="28" fill="#cbd5e1"/>
    <ellipse cx="100" cy="104" rx="40" ry="16" fill="#e2e8f0"/>
    <ellipse cx="100" cy="100" rx="40" ry="15" fill="#f1f5f9"/>
  </svg>`,
  tamper: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="92" y="40" width="16" height="96" rx="8" fill="#94a3b8"/>
    <path d="M84 46 Q92 40 100 40 Q108 40 116 46 L110 56 Q104 52 100 52 Q96 52 90 56 Z" fill="#64748b"/>
    <ellipse cx="100" cy="140" rx="26" ry="10" fill="#cbd5e1"/>
    <rect x="74" y="132" width="52" height="14" rx="7" fill="#64748b"/>
  </svg>`,
  container: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M62 44 L56 176 Q55 184 64 184 L136 184 Q145 184 144 176 L138 44 Q137 38 130 38 L70 38 Q63 38 62 44 Z" fill="#cbd5e1"/>
    <path d="M67 44 L62 176 Q61 181 68 181 L100 181 L100 44 Z" fill="#e2e8f0"/>
    <rect x="66" y="34" width="68" height="12" rx="6" fill="#64748b"/>
    <path d="M150 62 L172 68 L150 74 Z" fill="#64748b"/>
    <path d="M150 62 L172 68 L150 74" fill="#94a3b8"/>
    <path d="M80 96 Q100 90 120 96" stroke="#94a3b8" stroke-width="3" fill="none"/>
  </svg>`,
  set: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 60 L62 168 Q61 176 70 176 L118 176 Q127 176 126 168 L118 60 Q117 54 110 54 L78 54 Q71 54 70 60 Z" fill="#cbd5e1"/>
    <path d="M74 60 L68 168 Q67 173 74 173 L96 173 L96 60 Z" fill="#e2e8f0"/>
    <ellipse cx="94" cy="56" rx="26" ry="8" fill="#94a3b8"/>
    <path d="M134 66 L120 96 L148 96 Z" fill="#94a3b8"/>
    <path d="M134 66 C124 84 124 94 134 96 L134 66 Z" fill="#64748b"/>
    <ellipse cx="134" cy="98" rx="12" ry="18" fill="#e2e8f0"/>
  </svg>`,
  ninja: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="95" y="30" width="10" height="80" rx="5" fill="#94a3b8"/>
    <path d="M100 34 L72 74 L128 74 Z" fill="#94a3b8"/>
    <path d="M100 34 C86 52 86 64 100 70 L100 34 Z" fill="#64748b"/>
    <path d="M100 34 C114 52 114 64 100 70 L100 34 Z" fill="#475569"/>
    <path d="M100 34 L100 80" stroke="#cbd5e1" stroke-width="3"/>
    <ellipse cx="100" cy="120" rx="40" ry="12" fill="#cbd5e1"/>
    <rect x="60" y="120" width="18" height="9" rx="4" fill="#64748b"/>
    <rect x="122" y="120" width="18" height="9" rx="4" fill="#64748b"/>
  </svg>`
};

const PRODUCTS = [
  {
    id:'nb-cross-blade', brand:'NutriBullet', category:'Blades',
    name:'Compatible Cross & Extractor Blade', fits:'Fits NutriBullet 600W / Pro 900 (NB-101B)',
    art:'blade', badge:'Best Seller', rating:'4.8 (1,204)', price:15.99, compareAt:22.99,
    desc:'Premium compatible cross/extractor blade engineered to fit your NutriBullet 600W or Pro 900 blender. 6-fin stainless steel blade with a food-grade silicone gasket for a tight, leak-free seal.',
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['Blade','6-fin stainless steel'],['Gasket','Food-grade silicone O-ring'],['Material','Food-safe, BPA-free'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-32', brand:'NutriBullet', category:'Cups & Lids',
    name:'Compatible 32oz Tall Cup', fits:'Fits NutriBullet 600W / Pro 900',
    art:'cup', badge:'', rating:'4.7 (612)', price:11.99, compareAt:0,
    desc:'Spare 32oz tall cup, perfect as a back-up or for extra servings. Food-grade, BPA-free plastic that screws securely onto your blade assembly.',
    specs:[['Capacity','32 oz (946 ml)'],['Material','BPA-free, food-grade'],['Compatible With','NutriBullet 600W / Pro 900'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-24', brand:'NutriBullet', category:'Cups & Lids',
    name:'Compatible 24oz Cup', fits:'Fits NutriBullet 600W / Pro 900',
    art:'cup', badge:'', rating:'4.6 (388)', price:10.99, compareAt:0,
    desc:'Replacement 24oz cup for NutriBullet 600W/Pro 900. Measuring marks and a secure thread that matches your original blade.',
    specs:[['Capacity','24 oz (710 ml)'],['Material','BPA-free, food-grade'],['Compatible With','NutriBullet 600W / Pro 900'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-18', brand:'NutriBullet', category:'Cups & Lids',
    name:'Compatible 18oz Short Cup', fits:'Fits NutriBullet 600W / Pro 900',
    art:'cup', badge:'', rating:'4.6 (277)', price:9.99, compareAt:0,
    desc:'Replacement 18oz short cup for NutriBullet 600W/Pro 900. Ideal for single servings and smaller smoothies.',
    specs:[['Capacity','18 oz (530 ml)'],['Material','BPA-free, food-grade'],['Compatible With','NutriBullet 600W / Pro 900'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-blade-cup-set', brand:'NutriBullet', category:'Bundles',
    name:'Blade + 32oz Cup Bundle', fits:'Fits NutriBullet 600W / Pro 900',
    art:'set', badge:'Save 20%', rating:'4.9 (455)', price:27.99, compareAt:32.99,
    desc:'Everything you need to keep blending: a compatible cross/extractor blade assembly plus a spare 32oz tall cup, at a bundle price.',
    specs:[['Includes','Blade + 32oz cup + gasket'],['Compatible With','NutriBullet 600W / Pro 900'],['Material','Food-safe, BPA-free'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-lid', brand:'NutriBullet', category:'Cups & Lids',
    name:'Compatible To-Go & Resealable Lid', fits:'Fits 18 / 24 / 32oz NutriBullet cups',
    art:'lid', badge:'', rating:'4.5 (203)', price:8.99, compareAt:0,
    desc:'A resealable lid with a flip-top to-go spout, letting you take your smoothie on the go. Fits NutriBullet 18/24/32oz cups.',
    specs:[['Compatible With','NutriBullet 18/24/32oz cups'],['Type','Flip-top to-go lid'],['Material','BPA-free, food-grade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-gasket', brand:'NutriBullet', category:'Replacement Parts',
    name:'Compatible Silicone Gasket (Seal)', fits:'Fits NutriBullet blade assemblies',
    art:'gasket', badge:'', rating:'4.8 (500)', price:5.99, compareAt:0,
    desc:'Food-grade silicone gasket that keeps your blade and cup sealed tight — the small part that prevents messy leaks.',
    specs:[['Material','Food-grade silicone'],['Compatible With','NutriBullet blade assemblies'],['Pack','2 pieces'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-wet-blade', brand:'Vitamix', category:'Blades',
    name:'Compatible Wet Blade Assembly', fits:'Fits Vitamix 5200 / 5000 / 6300 (C-Series)',
    art:'blade', badge:'High Demand', rating:'4.8 (900)', price:34.99, compareAt:44.99,
    desc:'Compatible wet blade assembly designed for classic Vitamix C-series (5200, 5000, 6300). Precision stainless steel blades and a secure drive fit.',
    specs:[['Compatible With','Vitamix 5200 / 5000 / 6300'],['Ref Part','1151 / 1152 / STM102R'],['Blade','Stainless steel wet blade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-64oz-container', brand:'Vitamix', category:'Containers',
    name:'Compatible 64oz Tall Container + Lid', fits:'Fits Vitamix C-Series (5200 / 5000 / 6300)',
    art:'container', badge:'', rating:'4.7 (300)', price:29.99, compareAt:0,
    desc:'Replacement 64oz (2L) tall container with lid for the classic Vitamix C-series. Food-grade, impact-resistant, with a precise fit.',
    specs:[['Capacity','64 oz (2 L)'],['Fits','Vitamix C-Series (tall)'],['Material','Food-grade, impact-resistant'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-tamper', brand:'Vitamix', category:'Replacement Parts',
    name:'Compatible Tamper', fits:'Fits Vitamix standard containers',
    art:'tamper', badge:'', rating:'4.6 (120)', price:12.99, compareAt:0,
    desc:'Replacement tamper for standard Vitamix containers. Helps press ingredients toward the blades for extra-smooth results.',
    specs:[['Compatible With','Vitamix standard containers'],['Material','BPA-free plastic'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'ninja-blade', brand:'Ninja', category:'Blades',
    name:'Compatible Replacement Blade', fits:'Fits Ninja Professional (BL610 / BL642)',
    art:'ninja', badge:'', rating:'4.6 (280)', price:24.99, compareAt:0,
    desc:'Compatible blade assembly for Ninja Professional blenders. Precisely engineered to fit and perform like the original.',
    specs:[['Compatible With','Ninja Professional BL610 / BL642'],['Blade','Stainless steel'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'ninja-jar', brand:'Ninja', category:'Containers',
    name:'Compatible 72oz Jar + Lid', fits:'Fits Ninja Professional (BL610 / BL642 / BL770)',
    art:'jar', badge:'', rating:'4.5 (190)', price:26.99, compareAt:0,
    desc:'Replacement 72oz jar with lid for Ninja Professional blenders. A great spare or replacement for a cracked jar.',
    specs:[['Capacity','72 oz'],['Compatible With','Ninja Professional BL610 / BL642 / BL770'],['Type','Compatible replacement (non-OEM)']]
  }
];

// categories for shop filter
const CATEGORIES = ['All', 'Blades', 'Cups & Lids', 'Containers', 'Replacement Parts', 'Bundles'];
