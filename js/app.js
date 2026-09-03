// BlendCraft — shared app logic
/* ---------- constants & helpers ---------- */
const CART_KEY = 'bc_cart';
const money = n => '$' + n.toFixed(2);
const el = (sel, ctx) => (ctx || document).querySelector(sel);
const els = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
const byId = id => PRODUCTS.find(p => p.id === id);
const artFor = id => (ART[id] || '');
const PRODUCT_IMG = {
  'nb-cross-blade':'images/nb_blade.jpg','nb-cup-32':'images/nb_cup_32.jpg','nb-cup-24':'images/nb_cup_24.jpg','nb-cup-18':'images/nb_cup_18.jpg','nb-blade-cup-set':'images/nb_bundle.jpg','nb-lid':'images/nb_lid.jpg','nb-gasket':'images/nb_gasket.jpg','vm-wet-blade':'images/vm_wet_blade.jpg','vm-64oz-container':'images/vm_container.jpg','vm-tamper':'images/vm_tamper.jpg','ninja-blade':'images/ninja_blade.jpg','ninja-jar':'images/ninja_jar.jpg'
};
const mediaFor = p => PRODUCT_IMG[p.id]
  ? `<img class="media-img" src="${PRODUCT_IMG[p.id]}" alt="${p.name}" loading="lazy">`
  : artFor(p.art);

/* ---------- header / footer ---------- */
const NAV = [
  ['Home','index.html'],['Shop','shop.html'],['About','about.html'],
  ['Shipping & Returns','shipping.html'],['FAQ','faq.html'],['Contact','contact.html']
];
function announceHTML(){
  return `<div class="announce">🚚 Free shipping over $50 &nbsp;·&nbsp; 🔄 30-day hassle-free returns &nbsp;·&nbsp; 💬 Real human support on WhatsApp</div>`;
}
function headerHTML(){
  const links = NAV.map(([t,h])=>`<a href="${h}">${t}</a>`).join('');
  return `<div class="container header-inner">
    <a class="logo" href="index.html"><span class="dot"></span>BlendCraft<small style="margin-top:3px">compatible blender parts</small></a>
    <nav class="nav" id="nav">${links}
      <a href="https://github.com/tcx0001" style="display:none"></a>
    </nav>
    <div style="display:flex;align-items:center;gap:10px">
      <a href="https://wa.me/8613980077660" target="_blank" rel="noopener" title="Chat on WhatsApp" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:#25D366;color:#fff;flex-shrink:0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm5.3 14.3c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.7-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.1-1.5-1.1-2.8s.7-1.9.9-2.2c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5s.9 2.1 1 2.2c0 .2.1.4 0 .6-.4.8-.9 1-.6 1.5.6 1.1 1.6 2.2 2.6 2.9.5.4.8.3 1 .2.3-.1.7-.4 1-.7.3-.3.5-.6.7-.4l1.6.8c.2.1.4.2.5.3.1.2.1.7-.1 1.2Z"/></svg>
      </a>
      <button class="cart-btn" onclick="location.href='cart.html'">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6 5 3H2"/></svg>
        Cart <span class="cart-count" id="cart-count">0</span>
      </button>
      <button class="menu-toggle" id="menu-toggle" aria-label="menu">&#9776;</button>
    </div>
  </div>`;
}
function footerHTML(){
  return `<div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">BlendCraft</div>
        <p style="font-size:14px">Premium compatible replacement parts for Vitamix, NutriBullet and Ninja. Quality you can trust, at a fraction of the OEM price.</p>
      </div>
      <div><h4>Shop</h4><a href="shop.html">Browse All Compatible Parts</a><a href="shop.html?brand=NutriBullet">NutriBullet</a><a href="shop.html?brand=Vitamix">Vitamix</a><a href="shop.html?brand=Ninja">Ninja</a></div>
      <div><h4>Help</h4><a href="shipping.html">Shipping & Returns</a><a href="faq.html">FAQ</a><a href="privacy.html">Privacy</a><a href="contact.html">Contact Us</a><a href="about.html">About</a></div>
      <div><h4>Contact</h4><a href="mailto:275364182@qq.com">275364182@qq.com</a><a class="footer-phone" href="https://wa.me/8613980077660" target="_blank" rel="noopener">WhatsApp: +86 139 8007 7660</a><a href="contact.html">Real human support — we reply within 24–48 hours</a></div>
    </div>
    <div class="footer-bottom">
      <div>© ${new Date().getFullYear()} BlendCraft. All rights reserved.</div>
      <div class="disclaimer">All brand names, trademarks and logos are the property of their respective owners. Products sold on this site are compatible replacement parts and are not original equipment manufacturer (OEM) products. We are not affiliated with, or endorsed by, any of the brands mentioned.</div>
    </div>
  </div>`;
}
const STORE_EMAIL = '275364182@qq.com';
const STORE_WHATSAPP = '8613980077660';

const PRODUCT_FILES = {
  'nutribullet-replacement-blade.html':'nb-cross-blade',
  'nutribullet-replacement-cup.html':'nb-cup-32',
  'nutribullet-24oz-cup.html':'nb-cup-24',
  'nutribullet-18oz-cup.html':'nb-cup-18',
  'nutribullet-blade-cup-bundle.html':'nb-blade-cup-set',
  'nutribullet-replacement-lid.html':'nb-lid',
  'nutribullet-gasket-seal.html':'nb-gasket',
  'vitamix-5200-replacement-blade.html':'vm-wet-blade',
  'vitamix-64oz-container.html':'vm-64oz-container',
  'vitamix-tamper.html':'vm-tamper',
  'ninja-replacement-blade.html':'ninja-blade',
  'ninja-72oz-container.html':'ninja-jar'
};
function shortName(name){
  return String(name).replace(/\s+[—–-]\s+Compatible with.*$/i, '').trim() || name;
}
function crumbsHTML(items){
  const sep = '<span class="crumbs-sep" aria-hidden="true">›</span>';
  return `<nav class="crumbs" aria-label="Breadcrumb">${items.map((it,i)=>{
    const last = i===items.length-1 || !it[1];
    return last ? `<span class="crumbs-current">${it[0]}</span>` : `<a href="${it[1]}">${it[0]}</a>`;
  }).join(sep)}</nav>`;
}
function pageCrumbs(){
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase() || 'index.html';
  if(file==='index.html') return null;
  if(file==='shop.html'){
    const brand = new URLSearchParams(location.search).get('brand') || '';
    const items = [['Home','index.html'],['Shop', brand ? 'shop.html' : '']];
    if(brand) items.push([brand,'']);
    return items;
  }
  if(file==='product.html'){
    const p = byId(new URLSearchParams(location.search).get('id'));
    if(!p) return [['Home','index.html'],['Shop','shop.html']];
    return [['Home','index.html'],['Shop','shop.html'],[p.brand,'shop.html?brand='+encodeURIComponent(p.brand)],[shortName(p.name),'']];
  }
  const simple = {
    'about.html':'About','shipping.html':'Shipping & Returns','faq.html':'FAQ',
    'contact.html':'Contact','privacy.html':'Privacy','cart.html':'Cart','checkout.html':'Checkout'
  };
  if(simple[file]) return [['Home','index.html'],[simple[file],'']];
  const p = byId(PRODUCT_FILES[file]);
  if(p) return [['Home','index.html'],['Shop','shop.html'],[p.brand,'shop.html?brand='+encodeURIComponent(p.brand)],[shortName(p.name),'']];
  return null;
}
function crumbsBarHTML(items){
  return `<div class="crumbs-bar"><div class="container">${crumbsHTML(items)}</div></div>`;
}
function placeCrumbs(items){
  const html = crumbsBarHTML(items);
  const existing = el('.crumbs-bar');
  if(existing){ existing.outerHTML = html; return; }
  const hero = el('.page-hero');
  if(hero){ hero.insertAdjacentHTML('afterend', html); return; }
  const section = el('section.section');
  if(section) section.insertAdjacentHTML('beforebegin', html);
}
function injectCrumbs(){
  const items = pageCrumbs();
  if(!items) return;
  placeCrumbs(items);
}
function updateShopCrumbs(brand){
  const items = [['Home','index.html'],['Shop', brand ? 'shop.html' : '']];
  if(brand) items.push([brand,'']);
  placeCrumbs(items);
}
function injectShell(){
  if(!el('link[rel="icon"]')){
    const l = document.createElement('link'); l.rel='icon'; l.type='image/svg+xml';
    l.href='data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#f97316"/><path d="M16 7 11 15h10z" fill="#fff"/><path d="M9 15h14l-2 12H11z" fill="#fff" opacity=".92"/></svg>');
    document.head.appendChild(l);
  }
  const h = el('#site-header');
  if(h){
    if(!el('.announce')) h.insertAdjacentHTML('beforebegin', announceHTML());
    h.classList.add('site-header');
    h.innerHTML = headerHTML();
  }
  const f = el('#site-footer'); if(f) f.innerHTML = footerHTML();
  renderCartCount();
  const mt = el('#menu-toggle'), nav = el('#nav');
  if(mt && nav){
    const closeNav = ()=> nav.classList.remove('open');
    mt.addEventListener('click', e=>{
      e.stopPropagation();
      nav.classList.toggle('open');
    });
    nav.addEventListener('click', e=>{
      if(e.target.closest('a')) closeNav();
    });
    document.addEventListener('click', e=>{
      if(!nav.classList.contains('open')) return;
      if(e.target.closest('#nav') || e.target.closest('#menu-toggle')) return;
      closeNav();
    });
    let startY = 0;
    document.addEventListener('touchstart', e=>{
      startY = e.touches[0].clientY;
    }, {passive:true});
    document.addEventListener('touchmove', e=>{
      if(!nav.classList.contains('open')) return;
      if(Math.abs(e.touches[0].clientY - startY) > 20) closeNav();
    }, {passive:true});
    window.addEventListener('scroll', ()=>{
      if(nav.classList.contains('open')) closeNav();
    }, {passive:true});
  }
}

/* ---------- cart ---------- */
function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }catch(e){ return []; } }
function setCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCartCount(); }
function cartCount(){ return getCart().reduce((a,i)=>a+i.qty,0); }
function renderCartCount(){ const c = el('#cart-count'); if(c) c.textContent = cartCount(); }
function addToCart(id, qty=1){
  const c = getCart();
  const it = c.find(i=>i.id===id);
  if(it) it.qty += qty; else c.push({id, qty});
  setCart(c);
  toast('Added to cart ✓');
  renderCartCount();
}
function updateQty(id, qty){
  let c = getCart();
  if(qty <= 0){ c = c.filter(i=>i.id!==id); } else { const it=c.find(i=>i.id===id); if(it) it.qty=qty; }
  setCart(c); renderCartCount(); renderCartPage();
}
function removeItem(id){ setCart(getCart().filter(i=>i.id!==id)); renderCartCount(); renderCartPage(); }
function cartTotal(){ return getCart().reduce((a,i)=>{ const p=byId(i.id); return a + (p?p.price*i.qty:0);},0); }

/* ---------- cart page render ---------- */
function renderCartPage(){
  const wrap = el('#cart-wrap'); if(!wrap) return;
  const c = getCart();
  if(c.length===0){ wrap.innerHTML = `<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg><h3>Your cart is empty</h3><p>Browse our compatible blender parts to get started.</p><br><a class="btn btn-primary" href="shop.html">Browse All Compatible Parts</a></div>`; return; }
  const rows = c.map(i=>{ const p=byId(i.id); if(!p) return '';
    return `<div class="cart-item">
      <div class="thumb">${mediaFor(p)}</div>
      <div><h4>${p.name}</h4><div class="muted">${p.fits}</div><div style="margin-top:8px;color:var(--brand);font-weight:700">${money(p.price)}</div></div>
      <div style="text-align:right">
        <div class="qty" style="margin-left:auto"><button onclick="updateQty('${p.id}',${i.qty-1})">−</button><span>${i.qty}</span><button onclick="updateQty('${p.id}',${i.qty+1})">+</button></div>
        <button onclick="removeItem('${p.id}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:13px;margin-top:10px">Remove</button>
      </div>
    </div>`;
  }).join('');
  const sub = cartTotal();
  const shipping = sub >= 50 ? 0 : 6.99;
  const total = sub + shipping;
  wrap.innerHTML = `<div class="cart-layout">
    <div>${rows}</div>
    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="sum-row"><span>Subtotal</span><b>${money(sub)}</b></div>
      <div class="sum-row"><span>Shipping<br><small style="color:var(--muted);font-weight:400">Free over $50</small></span><span>${shipping===0?'FREE':money(shipping)}</span></div>
      <div class="sum-row total"><span>Total</span><b>${money(total)}</b></div>
      <a class="btn btn-primary" style="width:100%;justify-content:center;margin-top:18px" href="checkout.html">Proceed to Checkout</a>
      <a class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:10px;background:var(--bg-soft);color:var(--ink);border-color:var(--line)" href="shop.html">Continue Shopping</a>
    </div>
  </div>`;
}

/* ---------- product grid ---------- */
function productCard(p){
  return `<article class="product-card">
    <div class="product-media">${p.badge?`<span class="product-badge">${p.badge}</span>`:''}${mediaFor(p)}</div>
    <div class="product-body">
      <span class="cat">${p.brand} · ${p.category}</span>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="fits">${p.blurb || p.fits}</div>
      <div class="product-foot">
        <span class="price">${money(p.price)}${p.compareAt?`<s>${money(p.compareAt)}</s>`:''}</span>
        <button class="add-btn" onclick="addToCart('${p.id}')">Add to Cart</button>
      </div>
    </div>
  </article>`;
}
function renderGrid(filter, hold, brand){
  const wrap = el('#grid' + (hold||'')); if(!wrap) return;
  let list = PRODUCTS;
  if(brand) list = list.filter(p=>p.brand===brand);
  if(filter && filter!=='All') list = list.filter(p=>p.category===filter || p.brand===filter);
  wrap.innerHTML = list.map(productCard).join('') || `<div class="empty" style="grid-column:1/-1"><p>No products found.</p></div>`;
}

/* ---------- product detail ---------- */
function renderProductDetail(){
  const wrap = el('#product-detail'); if(!wrap) return;
  const id = new URLSearchParams(location.search).get('id');
  const p = byId(id);
  if(!p){ wrap.innerHTML = `<div class="empty"><h3>Product not found</h3><a class="btn btn-primary" href="shop.html">Back to Shop</a></div>`; return; }
  const specs = (p.specs||[]).map(s=>`<div><span>${s[0]}</span><span>${s[1]}</span></div>`).join('');
  document.title = (p.seoTitle || p.name) + ' — BlendCraft';
  const related = PRODUCTS.filter(x=>x.brand===p.brand && x.id!==p.id).slice(0,4);
  const relHTML = related.length ? `<div class="section related"><div class="sec-head"><h2>You may also like</h2></div><div class="grid" id="related-grid"></div></div>` : '';
  // JSON-LD for SEO
  const ld = { '@context':'https://schema.org','@type':'Product', name:p.name, image:PRODUCT_IMG[p.id]?location.origin+location.pathname.replace(/[^/]*$/,'')+PRODUCT_IMG[p.id]:'', description:p.meta||p.desc, brand:{'@type':'Brand',name:'BlendCraft'}, sku:p.id, offers:{'@type':'Offer', priceCurrency:'USD', price:p.price, availability:'https://schema.org/InStock'}};
  const oldLd = el('#product-ld'); if(oldLd) oldLd.remove();
  const s = document.createElement('script'); s.id='product-ld'; s.type='application/ld+json'; s.textContent=JSON.stringify(ld); document.head.appendChild(s);
  const points = (p.points||[]).map(x=>`<li>${x}</li>`).join('');
  const meta = document.querySelector('meta[name="description"]');
  if(meta) meta.setAttribute('content', p.meta || p.desc);
  let kw = document.querySelector('meta[name="keywords"]');
  if(p.kw){
    if(!kw){ kw = document.createElement('meta'); kw.setAttribute('name','keywords'); document.head.appendChild(kw); }
    kw.setAttribute('content', p.kw);
  }
  wrap.innerHTML = `<div class="pd">
    <div class="pd-media">${mediaFor(p)}</div>
    <div class="pd-info">
      <span class="cat" style="color:var(--brand);font-weight:700;text-transform:uppercase;font-size:13px">${p.brand} · ${p.category}</span>
      <h1>${p.name}</h1>
      <div class="sub">${p.fits}</div>
      <div class="pd-price">${money(p.price)}${p.compareAt?`<s>${money(p.compareAt)}</s>`:''}</div>
      <div class="pd-desc">${p.desc}</div>
      ${points?`<ul class="pd-points">${points}</ul>`:''}
      <p class="pd-disclaimer">This is a compatible replacement part, not an OEM ${p.brand} product.</p>
      <div class="specs">${specs}</div>
      <div style="font-size:14px;color:var(--muted);margin-bottom:16px">🚚 Tracked worldwide shipping · processed in 1–2 business days · 🔄 30-day hassle-free returns</div>
      <div class="pd-actions">
        <div class="quantity"><button onclick="qtyStep(-1)">−</button><input id="qty" value="1"><button onclick="qtyStep(1)">+</button></div>
        <button class="buy-btn" onclick="addToCart('${p.id}', parseInt(el('#qty').value)||1); location.href='checkout.html'">Buy Now</button>
        <button class="add-btn" style="padding:14px 22px;font-size:15px" onclick="addToCart('${p.id}', parseInt(el('#qty').value)||1)">Add to Cart</button>
      </div>
      <div class="notice"><b>Important — fit first:</b> Please double-check that this part matches your exact blender model before ordering. If you are unsure, <a href="contact.html">contact us</a> — we are happy to help you confirm.</div>
    </div>
  </div>
  <div class="content faq-block">
    <h2>How to confirm this part fits</h2>
    <p>Check your blender model number (usually printed under the base). <b>${p.fits}</b> If your model is not listed, message us on WhatsApp — we reply within 24–48 hours.</p>
    <h2>Frequently asked questions</h2>
    <h3>Are these original OEM parts?</h3>
    <p>No. BlendCraft parts are compatible replacement parts, engineered to match OEM performance at a lower cost.</p>
    <h3>Are your materials food-safe?</h3>
    <p>Yes. All cups, containers and gaskets are BPA-free and food-safe.</p>
    <h3>Do your parts fit exactly like the original?</h3>
    <p>Yes. Every part is designed for exact-fit compatibility with the blender models listed.</p>
    <h3>Do you offer returns?</h3>
    <p>Yes. We offer 30-day hassle-free returns.</p>
    <h3>How long does shipping take?</h3>
    <p>Orders are processed within 1–2 business days. Most orders arrive within 5–10 business days in the US, or 7–15 business days internationally. All orders include tracked worldwide shipping.</p>
  </div>
  ${relHTML}`;
  if(relHTML){
    const rg = el('#related-grid'); if(rg) rg.innerHTML = related.map(productCard).join('');
  }
}
function qtyStep(d){ const i = el('#qty'); if(i){ let v = parseInt(i.value)||1; v = Math.max(1, v+d); i.value = v; } }

/* ---------- checkout ---------- */
function renderCheckout(){
  const wrap = el('#checkout'); if(!wrap) return;
  const c = getCart();
  const sub = cartTotal();
  const shipping = sub>=50?0:6.99;
  const total = sub+shipping;
  const items = c.map(i=>{ const p=byId(i.id); return p?`<div class="sum-row"><span>${p.name} × ${i.qty}</span><span>${money(p.price*i.qty)}</span></div>`:''; }).join('');
  if(c.length===0){ wrap.innerHTML = `<div class="empty"><h3>Your cart is empty</h3><a class="btn btn-primary" href="shop.html">Browse All Compatible Parts</a></div>`; return; }
  wrap.innerHTML = `<div class="cart-layout">
    <div class="form">
      <h3 style="margin-bottom:20px">Billing & Shipping</h3>
      <div class="f-group"><label>Full name</label><input id="co-name" placeholder="Jane Doe" required></div>
      <div class="f-group"><label>Email</label><input id="co-email" type="email" placeholder="you@email.com" required></div>
      <div class="f-group"><label>Street address</label><input id="co-addr" placeholder="123 Main St" required></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div class="f-group"><label>City</label><input id="co-city" required></div>
        <div class="f-group"><label>Postcode / ZIP</label><input id="co-zip" required></div>
      </div>
      <div class="f-group"><label>Country</label><select id="co-country"><option>United States</option><option>United Kingdom</option><option>Canada</option><option>Germany</option><option>France</option><option>Australia</option><option>Other</option></select></div>
      <div class="f-group"><label>Payment method</label>
        <select id="co-pay"><option value="bank">Bank transfer (T/T)</option><option value="paypal">PayPal</option><option value="western">Western Union</option><option value="other">Other — we'll confirm</option></select>
      </div>
      <div class="promo" style="background:var(--bg-soft);border:1px solid var(--line);border-left:4px solid var(--brand);border-radius:8px;padding:12px 16px;font-size:13px;color:#374151">
        <b>How your order works (offline payment):</b> After you send your order via <b>WhatsApp</b> (fastest) or email, we'll confirm availability, send you our payment details (bank transfer / PayPal / Western Union), and ship within 1–2 business days with tracking.
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:20px" onclick="placeOrder()">Place Order · ${money(total)}</button>
    </div>
    <div class="cart-summary">
      <h3>Your Order</h3>
      ${items}
      <div class="sum-row"><span>Shipping</span><span>${shipping===0?'FREE':money(shipping)}</span></div>
      <div class="sum-row total"><span>Total</span><b>${money(total)}</b></div>
    </div>
  </div>`;
}
function placeOrder(){
  const name = ((el('#co-name')||{}).value||'').trim();
  const email = ((el('#co-email')||{}).value||'').trim();
  if(!name){ toast('Please enter your name'); return; }
  if(!email || email.indexOf('@')<0){ toast('Please enter a valid email'); return; }
  const c = getCart();
  const sub = cartTotal();
  const shipping = sub>=50?0:6.99;
  const total = sub+shipping;
  const lines = c.map(i=>{ const p=byId(i.id); return p?`- ${p.name} × ${i.qty} = ${money(p.price*i.qty)}`:''; }).join('\n');
  const orderText = encodeURIComponent(`New order from ${name} (${email})\n\n${lines}\n\nSubtotal: ${money(sub)}\nShipping: ${shipping===0?'FREE':money(shipping)}\nTotal: ${money(total)}\n\nShipping to: ${((el('#co-addr')||{}).value||'')}, ${((el('#co-city')||{}).value||'')} ${((el('#co-zip')||{}).value||'')}, ${((el('#co-country')||{}).value||'')}`);
  const emailLink = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent('Order from ' + name)}&body=${orderText}`;
  const waLink = `https://wa.me/${STORE_WHATSAPP}?text=${orderText}`;
  setCart([]);
  el('#checkout').innerHTML = `<div class="empty" style="padding:80px 20px">
    <div style="width:76px;height:76px;border-radius:50%;background:var(--teal);color:#fff;display:grid;place-items:center;margin:0 auto 20px"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div>
    <h3>Thank you, ${name}!</h3>
    <p style="color:var(--muted);max-width:460px;margin:10px auto">Your compatible-parts order (${money(total)}, incl. shipping) is prepared. Send it to us and we'll confirm payment and ship within 1–2 business days.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px">
      <a class="btn btn-primary" href="${emailLink}">Send via Email</a>
      <a class="btn btn-primary" style="background:#25D366" href="${waLink}" target="_blank" rel="noopener">Send via WhatsApp</a>
    </div>
    <br style="margin-top:10px"><a href="shop.html" style="color:var(--muted);font-size:14px">Continue Shopping</a>
  </div>`;
  toast('Order ready ✓');
}

/* ---------- contact / misc ---------- */
function initContact(){
  const f = el('#contact-form'); if(!f) return;
  f.addEventListener('submit', e=>{
    e.preventDefault();
    const n=(el('#ct-name')||{}).value||'', em=(el('#ct-email')||{}).value||'', mo=(el('#ct-model')||{}).value||'', msg=(el('#ct-msg')||{}).value||'';
    const body = encodeURIComponent(`From ${n} (${em})\nBlender: ${mo}\n\n${msg}`);
    location.href = `mailto:275364182@qq.com?subject=${encodeURIComponent('Inquiry from ' + n)}&body=${body}`;
    toast('Opening your email…');
    f.reset();
  });
}
function initNewsletter(){
  const f = el('#newsletter-form'); if(!f) return;
  f.addEventListener('submit', e=>{ e.preventDefault(); toast('Subscribed ✓'); f.reset(); });
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg){
  let t = el('.toast'); if(!t){ t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=> t.classList.remove('show'), 2200);
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  injectShell();
  injectCrumbs();
  if(el('#grid') && !el('#brand-filters')) renderGrid(el('#grid').dataset.filter || 'All', '');
  if(el('#featured-grid')) renderGrid('All','-featured'); // placeholder, overridden below
  if(el('#product-detail')) renderProductDetail();
  if(el('#cart-wrap')) renderCartPage();
  if(el('#checkout')) renderCheckout();
  initContact();
  initNewsletter();
  renderCartCount();
});

// ensure related grid renders after content ready
window.renderGrid = renderGrid;
window.addToCart = addToCart;
window.updateQty = updateQty;
window.removeItem = removeItem;
window.qtyStep = qtyStep;
window.placeOrder = placeOrder;
window.toast = toast;
window.updateShopCrumbs = updateShopCrumbs;
