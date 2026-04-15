# Tesi Studio — Tienda Nube Custom CSS

Paste this into **Tienda Nube > Mi Tienda > Diseño > Personalizar > CSS personalizado**

```css
/* ── Tesi Studio · Tienda Nube ──
   Palette: terracotta accent, sage green, carmine punctual
   Piazzolla (display) + Alegreya Sans (body)
   ────────────────────────────────────────── */

@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Piazzolla:ital,opsz,wght@0,8..30,400;0,8..30,600;0,8..30,700;1,8..30,400&display=swap");

/* Paper grain — matches portfolio */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: .08;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.2 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 240px 240px;
}

/* ── Typography ── */

body, p, .js-item-name, .js-item-desc, .description,
.product-description, input, textarea, select, button,
.btn, .breadcrumb, .nav-secondary a, .js-search-input {
  font-family: "Alegreya Sans", -apple-system, system-ui, sans-serif !important;
}

.section-title, .h1-title, h1, h2, h3,
.js-item-name, .js-product-name, .product-name {
  font-family: "Piazzolla", Georgia, serif !important;
  font-weight: 600 !important;
  letter-spacing: -0.015em !important;
  line-height: 1.1 !important;
}

.js-item-name {
  font-size: 1.05rem !important;
  line-height: 1.25 !important;
  transition: color .3s cubic-bezier(.2,.6,.2,1);
}

/* ── Radius — matches portfolio 14px ── */

.js-item-product, .js-product-container, .card,
.section-products-featured, img.js-item-image,
.js-item-image, .nube-slider-item img,
input, textarea, select {
  border-radius: 14px !important;
}

/* ── Product Cards — refined hover ── */

.js-item-product, .js-product-container {
  border: none !important;
  box-shadow: none !important;
  background: transparent !important;
  transition: none;
}

/* Image container — overflow hidden for zoom */
.js-item-image {
  overflow: hidden !important;
  border-radius: 14px !important;
}

/* Image zoom + warm shadow on card hover */
.js-item-image img, .js-item-image video {
  transition: transform .7s cubic-bezier(.2,.6,.2,1);
}

.js-item-product:hover .js-item-image img,
.js-item-product:hover .js-item-image video,
.js-product-container:hover .js-item-image img {
  transform: scale(1.05);
}

.nube-slider-item img {
  transition: transform .7s cubic-bezier(.2,.6,.2,1);
}

.js-product-container:hover .nube-slider-item img {
  transform: scale(1.04);
}

/* Product name highlights on hover */
.js-item-product:hover .js-item-name {
  color: #b85a3a !important;
}

/* No card lift — shadow only, warmly tinted */
.js-item-product:hover, .js-product-container:hover {
  transform: none;
  box-shadow: none !important;
}

/* ── Prices — terracotta accent ── */

.js-price-display, .item-price, .price, .product-price {
  color: #b85a3a !important;
  font-family: "Piazzolla", Georgia, serif !important;
  font-weight: 600 !important;
  letter-spacing: .01em;
}

/* Compare/old price — muted */
.js-compare-price-display, .price-compare, .item-price-compare {
  color: #907f72 !important;
  font-weight: 400 !important;
}

/* ── Featured sections — blush ── */

.section-products-featured, .section-informative-banners {
  background-color: #ede3df !important;
  border-radius: 14px;
  margin: 1rem 0;
  padding: 2rem 1rem !important;
}

/* ── Newsletter ── */

.section-newsletter-home-colors, [class*="newsletter"] {
  background-color: #ede3df !important;
  color: #3b3028 !important;
}

.section-newsletter-home-colors h2,
.section-newsletter-home-colors .h2,
[class*="newsletter"] h2 {
  color: #3b3028 !important;
  font-family: "Piazzolla", Georgia, serif !important;
}

.section-newsletter-home-colors input[type="email"],
[class*="newsletter"] input[type="email"] {
  background: #f5f0e7 !important;
  border: 1px solid #d9d1c6 !important;
  color: #3b3028 !important;
  border-radius: 999px !important;
  padding: .65rem 1.2rem !important;
}

.section-newsletter-home-colors input[type="email"]::placeholder,
[class*="newsletter"] input[type="email"]::placeholder {
  color: #6c5f50 !important;
}

.section-newsletter-home-colors .btn, [class*="newsletter"] .btn {
  background-color: #b85a3a !important;
  border-color: #b85a3a !important;
  color: #f5f0e7 !important;
  border-radius: 999px !important;
  font-weight: 500 !important;
  transition: background .3s cubic-bezier(.2,.6,.2,1);
}

.section-newsletter-home-colors .btn:hover, [class*="newsletter"] .btn:hover {
  background-color: #944830 !important;
  border-color: #944830 !important;
}

/* ── Buttons — terracotta primary, no lift ── */

.btn-primary, .btn-primary:visited, .btn--primary,
.js-addtocart, .js-btn-add-to-cart, [class*="btn-primary"] {
  background-color: #b85a3a !important;
  border-color: #b85a3a !important;
  border-radius: 999px !important;
  font-weight: 500 !important;
  letter-spacing: .02em !important;
  text-transform: none !important;
  transition: background .3s cubic-bezier(.2,.6,.2,1), border-color .3s cubic-bezier(.2,.6,.2,1);
}

.btn-primary:hover, .btn--primary:hover,
.js-addtocart:hover, .js-btn-add-to-cart:hover {
  background-color: #944830 !important;
  border-color: #944830 !important;
  transform: none;
}

/* ── Links — terracotta hover ── */

a {
  transition: color .25s cubic-bezier(.2,.6,.2,1);
}

a:hover {
  color: #b85a3a !important;
}

/* ── Labels & Badges — sage default, carmine promo ── */

.js-item-label, .label, .badge, .product-label {
  border-radius: 999px !important;
  font-size: .72rem !important;
  font-family: "Alegreya Sans", sans-serif !important;
  font-weight: 500 !important;
  letter-spacing: .04em !important;
  text-transform: uppercase !important;
  padding: .2em .7em !important;
}

.label-default, .label-secondary, .product-label--out-of-stock {
  background-color: #5f7e62 !important;
  color: #f5f0e7 !important;
}

.label-accent, .label-primary, .product-label--promotional {
  background-color: #b83030 !important;
  color: #f5f0e7 !important;
}

/* ── Footer — deep sage ── */

footer, .footer, .js-footer, [class*="footer"] {
  background-color: #2a3d2e !important;
  color: #a8b8a4 !important;
  border-top: none !important;
}

footer a, .footer a, [class*="footer"] a {
  color: #a8b8a4 !important;
}

footer a:hover, .footer a:hover, [class*="footer"] a:hover {
  color: #f5f0e7 !important;
}

footer h4, footer h5, .footer h4, .footer h5 {
  color: #f5f0e7 !important;
  font-family: "Piazzolla", Georgia, serif !important;
}

/* ── WhatsApp — sage, warm shadow ── */

.whatsapp-btn, .js-whatsapp-btn,
[class*="whatsapp"] a, [class*="whatsapp"] button {
  background-color: #5f7e62 !important;
  border-radius: 50% !important;
  box-shadow: 0 4px 16px rgba(59, 48, 40, .2) !important;
  transition: transform .3s cubic-bezier(.2,.6,.2,1), box-shadow .3s cubic-bezier(.2,.6,.2,1);
}

.whatsapp-btn:hover, .js-whatsapp-btn:hover,
[class*="whatsapp"] a:hover, [class*="whatsapp"] button:hover {
  transform: scale(1.06);
  box-shadow: 0 6px 20px rgba(59, 48, 40, .25) !important;
}

/* ── Carousel arrows ── */

.nube-slider-arrow, .slick-arrow, [class*="carousel"] button {
  background-color: rgba(245, 240, 231, .85) !important;
  color: #3b3028 !important;
  border: 1px solid #d9d1c6 !important;
  border-radius: 50% !important;
  width: 36px !important;
  height: 36px !important;
  transition: background .25s cubic-bezier(.2,.6,.2,1);
}

.nube-slider-arrow:hover, .slick-arrow:hover {
  background-color: #f5f0e7 !important;
}

/* Remove generic shadows */
.shadow, .card-shadow, [class*="shadow"] {
  box-shadow: none !important;
}

/* ── Forms — terracotta focus ring ── */

input:not([type="checkbox"]):not([type="radio"]), textarea, select {
  background: #f5f0e7 !important;
  border: 1px solid #d9d1c6 !important;
  color: #3b3028 !important;
  transition: border-color .3s cubic-bezier(.2,.6,.2,1);
}

input:focus, textarea:focus, select:focus {
  border-color: #b85a3a !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(184, 90, 58, .12) !important;
}

/* ── Header ── */

.js-head-main, .head-main, header {
  backdrop-filter: blur(10px);
  background-color: rgba(245, 240, 231, .92) !important;
}

/* ── Muted text ── */

.item-description, .product-description p,
.description p, .breadcrumb {
  color: #6c5f50 !important;
}

/* ── Mobile ── */

@media (max-width: 768px) {
  .section-products-featured, .section-informative-banners {
    border-radius: 0;
    margin: 0;
  }

  .js-item-product:hover, .js-product-container:hover {
    transform: none;
    box-shadow: none !important;
  }

  .js-item-product:hover .js-item-image img {
    transform: none;
  }
}

/* ── Reduced motion ── */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}
```
