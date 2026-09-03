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
    name:'Extractor Cross Blade — Compatible with NutriBullet 600W / 900W',
    seoTitle:'Extractor Cross Blade Replacement | Compatible with NutriBullet 600W / 900W',
    fits:'Fits NutriBullet 600W and Pro 900 (NB-101B).',
    kw:'NutriBullet extractor blade, NutriBullet 600W blade, NutriBullet 900W replacement, NB-101B blade, blender blade replacement',
    meta:'Premium stainless-steel extractor blade compatible with NutriBullet 600W and Pro 900. Smooth blending performance, leak-proof seal, BPA-free materials.',
    art:'blade', badge:'Best Seller', price:15.99, compareAt:22.99,
    blurb:'Precision-engineered stainless-steel blade for smooth, consistent blending.',
    desc:'Upgrade your NutriBullet with a precision-engineered extractor blade designed for smoother blends and long-lasting durability. Built from reinforced stainless steel and paired with a leak-proof silicone gasket, this compatible blade restores your blender’s original performance at a fraction of OEM cost. Perfect for smoothies, shakes, frozen fruit and daily meal prep.',
    points:['Precision-engineered stainless-steel blade','Exact-fit for NutriBullet 600W / 900W','Leak-proof silicone gasket included','BPA-free, food-safe materials','Ideal for smoothies, shakes and frozen fruit'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900 (NB-101B)'],['What’s Included','Cross / extractor blade + gasket'],['Blade','6-fin stainless steel'],['Gasket','Food-grade silicone O-ring'],['Material','Food-safe, BPA-free'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-32', brand:'NutriBullet', category:'Cups & Lids',
    name:'32oz Tall Cup — Compatible with NutriBullet 600W / 900W',
    seoTitle:'32oz Tall Cup Replacement | Compatible with NutriBullet 600W / 900W',
    fits:'Fits NutriBullet 600W / 900W',
    kw:'NutriBullet 32oz cup, NutriBullet tall cup replacement, NutriBullet 600W cup, BPA-free blender cup',
    meta:'Durable BPA-free 32oz tall cup compatible with NutriBullet 600W and Pro 900. Perfect for smoothies, shakes and daily blending.',
    art:'cup', badge:'', price:11.99, compareAt:0,
    blurb:'Durable BPA-free tall cup designed for larger smoothies and meal blends.',
    desc:'A durable, BPA-free 32oz tall cup designed for larger smoothies and full-size blends. Crack-resistant, dishwasher-safe and perfectly compatible with NutriBullet 600W and Pro 900 models.',
    points:['Large 32oz capacity','BPA-free Tritan material','Crack-resistant and dishwasher-safe','Fits NutriBullet 600W / 900W','Ideal for daily meal prep'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','32oz tall cup'],['Capacity','32 oz (946 ml)'],['Material','BPA-free Tritan'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-24', brand:'NutriBullet', category:'Cups & Lids',
    name:'24oz Cup — Compatible with NutriBullet 600W / 900W',
    seoTitle:'24oz Cup Replacement | Compatible with NutriBullet 600W / 900W',
    fits:'Fits NutriBullet 600W / 900W',
    kw:'NutriBullet 24oz cup, NutriBullet replacement cup, single-serve blender cup',
    meta:'Lightweight BPA-free 24oz cup designed for single-serve smoothies. Fits NutriBullet 600W and Pro 900 models.',
    art:'cup', badge:'', price:10.99, compareAt:0,
    blurb:'Lightweight BPA-free cup perfect for single-serve smoothies and quick blends.',
    desc:'Perfect for single-serve smoothies and quick blends, this BPA-free 24oz cup is lightweight, durable and fully compatible with NutriBullet 600W and 900W models.',
    points:['Ideal single-serve size','BPA-free and durable','Easy to clean','Fits NutriBullet 600W / 900W','Great for quick blends'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','24oz cup'],['Capacity','24 oz (710 ml)'],['Material','BPA-free, food-grade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-cup-18', brand:'NutriBullet', category:'Cups & Lids',
    name:'18oz Short Cup — Compatible with NutriBullet 600W / 900W',
    seoTitle:'18oz Short Cup Replacement | Compatible with NutriBullet 600W / 900W',
    fits:'Fits NutriBullet 600W / 900W',
    kw:'NutriBullet 18oz cup, NutriBullet short cup, blender cup replacement',
    meta:'Compact BPA-free 18oz cup ideal for small blends, sauces and quick prep. Compatible with NutriBullet 600W and Pro 900.',
    art:'cup', badge:'', price:9.99, compareAt:0,
    blurb:'Compact BPA-free cup ideal for small blends, sauces and quick prep.',
    desc:'A compact BPA-free 18oz cup designed for sauces, dips, small smoothies and everyday convenience. Fully compatible with NutriBullet 600W and 900W.',
    points:['Compact size for small blends','BPA-free Tritan','Fits NutriBullet 600W / 900W','Dishwasher-safe','Perfect for everyday use'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','18oz short cup'],['Capacity','18 oz (530 ml)'],['Material','BPA-free Tritan'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-blade-cup-set', brand:'NutriBullet', category:'Bundles',
    name:'Blade + 32oz Cup Bundle — Compatible with NutriBullet 600W / 900W',
    seoTitle:'NutriBullet Blade + 32oz Cup Bundle | Compatible with 600W / 900W',
    fits:'Fits NutriBullet 600W / 900W',
    kw:'NutriBullet bundle, NutriBullet blade set, NutriBullet cup and blade',
    meta:'Best-value NutriBullet bundle including extractor blade and BPA-free 32oz tall cup. Fits NutriBullet 600W and Pro 900.',
    art:'set', badge:'Save 20%', price:27.99, compareAt:32.99,
    blurb:'Best-value bundle including extractor blade and BPA-free tall cup.',
    desc:'The best-value upgrade for your NutriBullet. This bundle includes a stainless-steel extractor blade and a BPA-free 32oz tall cup — everything you need to restore full blending performance.',
    points:['Best-value upgrade set','Stainless-steel extractor blade','BPA-free tall cup','Fits NutriBullet 600W / 900W','Great for replacing worn parts'],
    specs:[['Compatible With','NutriBullet 600W / Pro 900'],['What’s Included','Blade + 32oz cup + gasket'],['Material','Food-safe, BPA-free'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-lid', brand:'NutriBullet', category:'Cups & Lids',
    name:'To-Go Lid — Compatible with NutriBullet Cups',
    seoTitle:'NutriBullet To-Go Lid Replacement | Fits 18oz / 24oz / 32oz Cups',
    fits:'Fits NutriBullet 18oz, 24oz and 32oz cups.',
    kw:'NutriBullet lid, NutriBullet to-go lid, blender lid replacement',
    meta:'Leak-proof resealable to-go lid compatible with NutriBullet cups. Perfect for smoothies on the go.',
    art:'lid', badge:'', price:8.99, compareAt:0,
    blurb:'Leak-proof resealable lid for smoothies on the go.',
    desc:'A leak-proof, resealable to-go lid designed for NutriBullet cups. Perfect for commuting, travel and smoothies on the go.',
    points:['Leak-proof design','Fits 18oz / 24oz / 32oz cups','Perfect for travel','BPA-free','Easy snap-seal closure'],
    specs:[['Compatible With','NutriBullet 18 / 24 / 32oz cups'],['What’s Included','Flip-top to-go lid'],['Material','BPA-free, food-grade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'nb-gasket', brand:'NutriBullet', category:'Replacement Parts',
    name:'Silicone Gasket Seal — Compatible with NutriBullet Blades',
    seoTitle:'NutriBullet Silicone Gasket Seal | Compatible with All Blade Assemblies',
    fits:'Compatible with all NutriBullet blade assemblies.',
    kw:'NutriBullet gasket, blender seal ring, NutriBullet rubber ring',
    meta:'Leak-proof silicone gasket replacement for NutriBullet blade assemblies. Restores proper sealing and prevents spills.',
    art:'gasket', badge:'', price:5.99, compareAt:0,
    blurb:'Leak-proof silicone gasket designed for all NutriBullet blade assemblies.',
    desc:'Restore your NutriBullet’s leak-proof performance with a high-quality silicone gasket compatible with all blade assemblies.',
    points:['Restores leak-proof sealing','Compatible with all NutriBullet blades','High-quality silicone','Easy to install','Prevents spills and leaks'],
    specs:[['Compatible With','NutriBullet blade assemblies'],['What’s Included','2 pieces'],['Material','Food-grade silicone'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-wet-blade', brand:'Vitamix', category:'Blades',
    name:'Wet Blade Assembly — Compatible with Vitamix 5200 / 5000 / 6300',
    seoTitle:'Vitamix Wet Blade Assembly Replacement | Fits 5200 / 5000 / 6300',
    fits:'Compatible with Vitamix 5200, 5000 and 6300.',
    kw:'Vitamix wet blade, Vitamix blade replacement, Vitamix 5200 blade',
    meta:'Stainless-steel wet blade assembly engineered for smooth blending. Compatible with Vitamix 5200, 5000 and 6300.',
    art:'blade', badge:'High Demand', price:34.99, compareAt:44.99,
    blurb:'Stainless-steel wet blade engineered for smooth, consistent blending.',
    desc:'A premium stainless-steel wet blade assembly engineered for smooth, consistent blending. Perfect for soups, smoothies, sauces and daily use.',
    points:['Stainless-steel wet blade','Compatible with Vitamix 5200 / 5000 / 6300','Smooth blending performance','Durable and long-lasting','Ideal for soups, smoothies and sauces'],
    specs:[['Compatible With','Vitamix 5200 / 5000 / 6300 (C-Series)'],['Ref Part','1151 / 1152 / STM102R'],['What’s Included','Wet blade assembly'],['Blade','Stainless steel wet blade'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-64oz-container', brand:'Vitamix', category:'Containers',
    name:'64oz Tall Container + Lid — Compatible with Vitamix C-Series',
    seoTitle:'64oz Tall Container Replacement | Compatible with Vitamix C-Series',
    fits:'Fits Vitamix C-Series.',
    kw:'Vitamix 64oz container, Vitamix replacement jar, Vitamix C-Series container',
    meta:'BPA-free Tritan 64oz tall container with secure lid. Compatible with Vitamix C-Series blenders.',
    art:'container', badge:'', price:29.99, compareAt:0,
    blurb:'BPA-free Tritan container with secure lid and stainless-steel blades.',
    desc:'A BPA-free Tritan 64oz tall container designed for large batches and daily blending. Includes a secure lid and stainless-steel blades.',
    points:['BPA-free Tritan construction','Stainless-steel blades','Fits Vitamix C-Series','Large 64oz capacity','Perfect for family-size blending'],
    specs:[['Compatible With','Vitamix C-Series (tall) 5200 / 5000 / 6300'],['What’s Included','64oz tall container + lid'],['Capacity','64 oz (2 L)'],['Material','BPA-free Tritan'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'vm-tamper', brand:'Vitamix', category:'Replacement Parts',
    name:'Tamper — Compatible with Vitamix Standard Containers',
    seoTitle:'Vitamix Tamper Replacement | Fits Standard 64oz Containers',
    fits:'Compatible with standard 64oz containers.',
    kw:'Vitamix tamper, blender tamper replacement, Vitamix accessories',
    meta:'Durable Vitamix-compatible tamper designed for safe, efficient blending. Helps push ingredients toward the blade.',
    art:'tamper', badge:'', price:12.99, compareAt:0,
    blurb:'Durable tamper designed for safe, efficient blending.',
    desc:'A durable tamper designed for safe, efficient blending. Helps push ingredients toward the blade for smoother results.',
    points:['Helps push ingredients toward blade','Compatible with standard 64oz containers','Durable construction','Safe and easy to use','Improves blending efficiency'],
    specs:[['Compatible With','Vitamix standard (tall) containers'],['What’s Included','1 tamper'],['Material','BPA-free plastic'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'ninja-blade', brand:'Ninja', category:'Blades',
    name:'Extractor Blade — Compatible with Ninja BL610 / BL642',
    seoTitle:'Ninja Extractor Blade Replacement | Fits BL610 / BL642',
    fits:'Fits Ninja BL610, BL642 and similar models.',
    kw:'Ninja blade replacement, Ninja BL610 blade, Ninja extractor blade',
    meta:'Reinforced stainless-steel extractor blade compatible with Ninja BL610 and BL642. Ideal for ice crushing and smoothie blending.',
    art:'ninja', badge:'', price:24.99, compareAt:0,
    blurb:'Reinforced stainless-steel blade for powerful ice crushing and smoothie blending.',
    desc:'A reinforced stainless-steel extractor blade designed for powerful ice crushing and smoothie blending. Compatible with Ninja BL610 and BL642.',
    points:['Reinforced stainless-steel fins','Fits Ninja BL610 / BL642','Powerful ice-crushing performance','Includes rubber gasket','Ideal for smoothies and frozen drinks'],
    specs:[['Compatible With','Ninja Professional BL610 / BL642'],['What’s Included','Blade assembly'],['Blade','Stainless steel'],['Type','Compatible replacement (non-OEM)']]
  },
  {
    id:'ninja-jar', brand:'Ninja', category:'Containers',
    name:'72oz Jar + Lid — Compatible with Ninja BL610 / BL642 / BL770',
    seoTitle:'72oz Jar Replacement + Lid | Compatible with Ninja BL610 / BL642 / BL770',
    fits:'Fits Ninja BL610 / BL642 / BL770.',
    kw:'Ninja 72oz jar, Ninja replacement pitcher, Ninja blender container',
    meta:'Large BPA-free 72oz jar with secure lid. Compatible with Ninja BL610, BL642 and BL770 series blenders.',
    art:'jar', badge:'', price:26.99, compareAt:0,
    blurb:'Large BPA-free jar with secure lid for family-size blending.',
    desc:'A large BPA-free 72oz jar designed for family-size blending. Includes a secure locking lid and fits Ninja BL610, BL642 and BL770.',
    points:['Large 72oz capacity','BPA-free Tritan','Fits Ninja BL610 / BL642 / BL770','Secure locking lid','Perfect for big batches'],
    specs:[['Compatible With','Ninja Professional BL610 / BL642 / BL770'],['What’s Included','72oz jar + lid'],['Capacity','72 oz'],['Material','BPA-free Tritan'],['Type','Compatible replacement (non-OEM)']]
  }
];

const CATEGORIES = ['All', 'Blades', 'Cups & Lids', 'Containers', 'Replacement Parts', 'Bundles'];

const BRAND_INTROS = {
  All: {
    title:'Browse All Compatible Parts',
    text:'High-quality compatible replacement parts for the blenders you already own. Exact-fit blades, cups and containers for Vitamix, NutriBullet and Ninja.'
  },
  NutriBullet: {
    title:'NutriBullet Compatible Parts',
    text:'Exact-fit blades, cups, lids and gaskets for NutriBullet 600W and Pro 900.'
  },
  Vitamix: {
    title:'Vitamix Compatible Parts',
    text:'Premium blade assemblies, containers and tampers for Vitamix C-Series blenders.'
  },
  Ninja: {
    title:'Ninja Compatible Parts',
    text:'Durable blades, jars and cups engineered for Ninja BL6xx series.'
  }
};
