# BlendCraft — Compatible Blender Replacement Parts

A polished, responsive, static e-commerce storefront hosted on **GitHub Pages**.
Compatible replacement blades, cups, lids, containers and parts for Vitamix, NutriBullet and Ninja blenders.

> **Public URL:** `https://tcx0001.github.io/blendcraft-shop/`

---

## What's included

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, shop-by-brand, featured products, value props, trust badges |
| `shop.html` | Full catalog with brand/category filters |
| `product.html?id=<id>` | Product detail — price, specs, add-to-cart, related items |
| `cart.html` | Shopping cart (client-side, `localStorage`) |
| `checkout.html` | Order form → sends order to the store email (via mailto) |
| `about.html` · `shipping.html` · `contact.html` | Trust & support pages |

**Data & logic:**
- `js/data.js` — `PRODUCTS` (catalog), `ART` (SVG artwork), `CATEGORIES`
- `js/app.js` — header/footer shell, cart, checkout, product rendering, toasts
- `css/styles.css` — full responsive design system

---

## How to operate this store

### 1. Change products / prices
Edit `js/data.js`. Each product is an object:
```js
{ id:'nb-cross-blade', brand:'NutriBullet', category:'Blades', name:'...', fits:'...',
  art:'blade', badge:'Best Seller', rating:'4.8 (1,204)', price:15.99, compareAt:22.99,
  desc:'...', specs:[['Label','value']] }
```
- `price` / `compareAt` — set prices (USD).
- `art` — use one of the SVG keys: `blade`, `cup`, `jar`, `lid`, `gasket`, `tamper`, `container`, `set`, `ninja`.
- Add/remove products freely; the catalog renders automatically.

### 2. Product images
Real product photographs are now in place in `images/` (mapped in `js/app.js` -> `PRODUCT_IMG` and referenced via the product's `img`). These are real part photos:
- `nb_blade.jpg`, `nb_cup_*.jpg`, `nb_lid.jpg`, `nb_gasket.jpg`, `nb_bundle.jpg`
- `vm_wet_blade.jpg`, `vm_container.jpg`, `vm_tamper.jpg`
- `ninja_blade.jpg`, `ninja_jar.jpg`

To use your factory's own photos (recommended for the production version), replace the files in `images/` (keep the same filenames), or point a product to a new file via `PRODUCT_IMG` in `js/app.js`. New images must exist locally — nothing is remote-linked, so nothing can break.

### 3. Connect real payments (to make checkout fully automated)
The demo checkout sends the order to the store email. To take payments automatically, connect a provider:
- **Stripe Payment Links**: create a payment link per checkout and replace the `mailto` in `placeOrder()` (`js/app.js`).
- **Stripe Checkout / PayPal / Ecwid / Snipcart**: point the checkout submit to your hosted checkout.
Set your store address in `app.js`:
```js
const STORE_EMAIL = 'you@yourstore.com';   // customer orders are emailed here
```

### 4. Update brand / contact info
- Brand name & logo: `index.html` + `js/app.js` (logo, footer, `<title>`).
- Contact email/times: `contact.html`, footer in `js/app.js`.
- Legal disclaimers already included in the footer (compatible parts, non-OEM, brand ownership).

### 5. Redeploy after edits
Commit and push the changes to `main`; GitHub Pages rebuilds automatically:
```bash
git add -A && git commit -m "update" && git push origin main
```

---

## Compliance notes (already built in)
- All products are described as **compatible / aftermarket replacement** parts.
- Footer disclaimer states products are **not OEM** and the store is **not affiliated** with the brands.
- No brand logos used — only the store's own branding.

## About the tech
Hand-written HTML/CSS/JS, no build step, fully client-side cart via `localStorage`,
Google Fonts loaded from CDN, responsive design (desktop/tablet/mobile).
