# Sagrada Cura 🌿

**Find your balance in life**

Sagrada Cura is a digital platform dedicated to helping you find the perfect balance in your daily life. A space where wellness, spirituality, and self-care meet.

## What you'll find

- **Blog** - Inspiring articles about wellness and personal growth
- **Shop** - Carefully selected products for your balance
- **Community** - Connect with people who share your journey
- **Resources** - Guides, tips, and tools for your well-being

## Environment Variables

- `SHOP_ENABLED` — feature flag controlling the shop (`/tienda/*` routes, nav link, cart icon, sitemap/robots entries). **Default OFF, strict**: only the exact value `true` enables the shop. Any other value (or omitting it) hides the shop entirely (`/tienda/*` returns 404). **Must be set to `true` in any environment (prod/staging/local) where the shop should be live** — this is required as part of deployment, not optional. Note: `.env.example` could not be edited (permission denied) — this is the canonical reference for this variable until that file is updated.

## Visit the site

🌐 [www.sagradacura.com](https://www.sagradacura.com)

---

*Version 2.1.0*
