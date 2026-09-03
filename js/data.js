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
    name:'Replacement Blade Compatible with NutriBullet 600 / Pro 900',
    fits:'Compatible with NutriBullet 600W / Pro 900 (NB-101B)',
    kw:'nutribullet replacement blade',
    art:'blade', badge:'Best Seller', price:15.99, compareAt:22.99,
    desc:'Keep your NutriBullet 600 / Pro 900 blending like new. This compatible replacement blade is precision-designed to fit NutriBullet 600W and Pro 900 blenders — a cost-effective replacement that delivers the performance you expect.',
    points:['Exact-fit compatible with NutriBullet 600W / Pro 900 (NB-101B)','Made from quality, food-safe stainless steel with a food-grade silicone gasket','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900 (NB-101B)'],['What’s Included','Cross / extractor blade + gasket'],['Blade','6-fin stainless steel'],['Gasket','Food-grade silicone O-ring'],['Material','Food-safe, BPA-free'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-32', brand:'NutriBullet', category:'Cups & Lids',
    name:'Replacement 32oz Cup Compatible with NutriBullet 600 / Pro 900',
    fits:'Compatible with NutriBullet 600W / Pro 900',
    kw:'nutribullet 32 oz cup',
    art:'cup', badge:'', price:11.99, compareAt:0,
    desc:'Keep your NutriBullet 600 / Pro 900 blending like new. This compatible 32oz replacement cup is precision-designed to fit your NutriBullet blade assembly — a cost-effective spare for extra servings or a cracked cup.',
    points:['Exact-fit compatible with NutriBullet 600W / Pro 900','Made from quality, food-grade BPA-free plastic','Easy to install — screws onto your blade assembly','Quality checked before dispatch'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','32oz tall cup'],['Capacity','32 oz (946 ml)'],['Material','BPA-free, food-grade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-24', brand:'NutriBullet', category:'Cups & Lids',
    name:'Replacement 24oz Cup Compatible with NutriBullet 600 / Pro 900',
    fits:'Compatible with NutriBullet 600W / Pro 900',
    kw:'nutribullet 24 oz cup',
    art:'cup', badge:'', price:10.99, compareAt:0,
    desc:'Keep your NutriBullet 600 / Pro 900 blending like new. This compatible 24oz replacement cup is precision-designed to fit your NutriBullet blade assembly — a cost-effective everyday cup size.',
    points:['Exact-fit compatible with NutriBullet 600W / Pro 900','Made from quality, food-grade BPA-free plastic','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','24oz cup'],['Capacity','24 oz (710 ml)'],['Material','BPA-free, food-grade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-18', brand:'NutriBullet', category:'Cups & Lids',
    name:'Replacement 18oz Cup Compatible with NutriBullet 600 / Pro 900',
    fits:'Compatible with NutriBullet 600W / Pro 900',
    kw:'nutribullet replacement cup',
    art:'cup', badge:'', price:9.99, compareAt:0,
    desc:'Keep your NutriBullet 600 / Pro 900 blending like new. This compatible 18oz short cup is precision-designed to fit your NutriBullet blade assembly — ideal for single servings.',
    points:['Exact-fit compatible with NutriBullet 600W / Pro 900','Made from quality, food-grade BPA-free plastic','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','18oz short cup'],['Capacity','18 oz (530 ml)'],['Material','BPA-free, food-grade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-blade-cup-set', brand:'NutriBullet', category:'Bundles',
    name:'Replacement Blade + Cup Set Compatible with NutriBullet 600 / Pro 900',
    fits:'Compatible with NutriBullet 600W / Pro 900',
    kw:'nutribullet replacement cup and blade',
    art:'set', badge:'Save 20%', price:27.99, compareAt:32.99,
    desc:'Keep your NutriBullet 600 / Pro 900 blending like new. This compatible blade and 32oz cup set is precision-designed to fit your model — a cost-effective way to replace a worn blade and add a spare cup.',
    points:['Exact-fit compatible with NutriBullet 600W / Pro 900','Made from quality, food-safe materials','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','Blade + 32oz cup + gasket'],['Material','Food-safe, BPA-free'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-lid', brand:'NutriBullet', category:'Cups & Lids',
    name:'Replacement To-Go Lid Compatible with NutriBullet Cups',
    fits:'Compatible with NutriBullet 18 / 24 / 32oz cups',
    kw:'nutribullet to go cup',
    art:'lid', badge:'', price:8.99, compareAt:0,
    desc:'Keep your NutriBullet blending on the go. This compatible resealable lid with a flip-top spout is precision-designed to fit NutriBullet 18, 24, and 32oz cups.',
    points:['Exact-fit compatible with NutriBullet 18 / 24 / 32oz cups','Made from quality, food-grade BPA-free plastic','Easy to use — flip-top to-go spout','Quality checked before dispatch'],
    specs:[['Compatible With','NutriBullet 18 / 24 / 32oz cups'],['What’s Included','Flip-top to-go lid'],['Material','BPA-free, food-grade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-gasket', brand:'NutriBullet', category:'Replacement Parts',
    name:'Replacement Silicone Gasket Compatible with NutriBullet Blades',
    fits:'Compatible with NutriBullet blade assemblies',
    kw:'nutribullet gasket',
    art:'gasket', badge:'', price:5.99, compareAt:0,
    desc:'Keep your NutriBullet sealed tight. This compatible food-grade silicone gasket is precision-designed to fit NutriBullet blade assemblies — the small part that helps prevent leaks.',
    points:['Exact-fit compatible with NutriBullet blade assemblies','Made from quality, food-grade silicone','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','NutriBullet blade assemblies'],['What’s Included','2 pieces'],['Material','Food-grade silicone'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-wet-blade', brand:'Vitamix', category:'Blades',
    name:'Replacement Blade Assembly Compatible with Vitamix 5200',
    fits:'Compatible with Vitamix 5200 / 5000 / 6300 (C-Series)',
    kw:'vitamix 5200 replacement blade',
    art:'blade', badge:'High Demand', price:34.99, compareAt:44.99,
    desc:'Keep your Vitamix 5200 blending like new. This compatible wet blade assembly is precision-designed to fit classic Vitamix C-series models (5200, 5000, 6300) — a cost-effective replacement for a worn blade.',
    points:['Exact-fit compatible with Vitamix 5200 / 5000 / 6300 (C-Series)','Made from quality, food-safe stainless steel','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','Vitamix 5200 / 5000 / 6300 (C-Series)'],['Ref Part','1151 / 1152 / STM102R'],['What’s Included','Wet blade assembly'],['Blade','Stainless steel wet blade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-64oz-container', brand:'Vitamix', category:'Containers',
    name:'Replacement 64oz Container Compatible with Vitamix 5200',
    fits:'Compatible with Vitamix C-Series (5200 / 5000 / 6300)',
    kw:'vitamix 64 oz container',
    art:'container', badge:'', price:29.99, compareAt:0,
    desc:'Keep your Vitamix 5200 blending like new. This compatible 64oz (2L) tall container with lid is precision-designed to fit classic Vitamix C-series machines — a cost-effective replacement for a cracked jar.',
    points:['Exact-fit compatible with Vitamix C-Series 5200 / 5000 / 6300 (tall)','Made from quality, food-grade, impact-resistant materials','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','Vitamix C-Series (tall) 5200 / 5000 / 6300'],['What’s Included','64oz tall container + lid'],['Capacity','64 oz (2 L)'],['Material','Food-grade, impact-resistant'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-tamper', brand:'Vitamix', category:'Replacement Parts',
    name:'Replacement Tamper Compatible with Vitamix Containers',
    fits:'Compatible with Vitamix standard (tall) containers',
    kw:'vitamix tamper',
    art:'tamper', badge:'', price:12.99, compareAt:0,
    desc:'Keep your Vitamix blending smoothly. This compatible tamper is precision-designed for standard Vitamix containers — use it to press ingredients toward the blades.',
    points:['Exact-fit compatible with Vitamix standard (tall) containers','Made from quality, BPA-free plastic','Easy to use — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','Vitamix standard (tall) containers'],['What’s Included','1 tamper'],['Material','BPA-free plastic'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'ninja-blade', brand:'Ninja', category:'Blades',
    name:'Replacement Blade Compatible with Ninja Professional',
    fits:'Compatible with Ninja Professional BL610 / BL642',
    kw:'ninja blender replacement blade',
    art:'ninja', badge:'', price:24.99, compareAt:0,
    desc:'Keep your Ninja Professional blending like new. This compatible replacement blade is precision-designed to fit Ninja Professional BL610 and BL642 blenders — a cost-effective replacement for a worn or damaged blade.',
    points:['Exact-fit compatible with Ninja Professional BL610 / BL642','Made from quality, food-safe stainless steel','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','Ninja Professional BL610 / BL642'],['What’s Included','Blade assembly'],['Blade','Stainless steel'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'ninja-jar', brand:'Ninja', category:'Containers',
    name:'Replacement 72oz Jar Compatible with Ninja Professional',
    fits:'Compatible with Ninja Professional BL610 / BL642 / BL770',
    kw:'ninja blender replacement jar',
    art:'jar', badge:'', price:26.99, compareAt:0,
    desc:'Keep your Ninja Professional blending like new. This compatible 72oz jar with lid is precision-designed to fit Ninja Professional BL610, BL642, and BL770 — a cost-effective replacement for a cracked jar.',
    points:['Exact-fit compatible with Ninja Professional BL610 / BL642 / BL770','Made from quality, food-grade materials','Easy to install — no special tools needed','Quality checked before dispatch'],
    specs:[['Compatible With','Ninja Professional BL610 / BL642 / BL770'],['What’s Included','72oz jar + lid'],['Capacity','72 oz'],['Type','Compatible replacement (non-OEM)']]
  }
];

const CATEGORIES = ['All', 'Blades', 'Cups & Lids', 'Containers', 'Replacement Parts', 'Bundles'];

const BRAND_INTROS = {
  All: {
    title:'Shop Replacement Parts',
    text:'Exact-fit compatible replacements for Vitamix, NutriBullet, and Ninja blenders. Precisely engineered to fit your model, made from quality food-safe materials, and priced at a fraction of the original.'
  },
  NutriBullet: {
    title:'NutriBullet Replacement Parts',
    text:'Keep your NutriBullet blending like new. We stock compatible replacement blades, cups, lids, and gaskets for the NutriBullet 600W and Pro 900 series. Exact-fit parts designed to match your model — without the OEM price.'
  },
  Vitamix: {
    title:'Vitamix Replacement Parts',
    text:'Upgrade or repair your Vitamix. Our compatible replacement blade assemblies and containers are designed to fit the classic C-series models (5200, 5000, 6300) and more. Durable, food-safe, and precision-checked.'
  },
  Ninja: {
    title:'Ninja Replacement Parts',
    text:'Compatible replacement jars, blades, and cups for Ninja Professional blenders. Find the exact part to fit your model and get blending again.'
  }
};
