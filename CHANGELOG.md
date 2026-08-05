# Changelog

## 1.0.0 — V1 / V1.1 Production Ready (2026-08-04)

First production release of the Florida Service Areas corporate dashboard.

### Added

- Interactive Leaflet map of Florida counties (Carto Positron basemap)
- Right-hand details panel (no Leaflet popups)
- Company configuration isolated in `data.js` (brand, colors, copy, stats, counties)
- Logo support: text, image URL, or inline SVG
- Autocomplete county search with aliases, keyboard navigation, and mouse selection
- Unified county selection path for map click and search
- Floating map legend and coverage badge
- Header dashboard stats driven by `data.js`
- Responsive layout for desktop, tablet, and mobile / iframe embeds
- Smooth UI and county style transitions (respects `prefers-reduced-motion`)
- Accessibility basics: skip link, ARIA search combobox, focus-visible, labels
- Map `invalidateSize` handling for Wix iframe resize behavior
- SEO meta description + theme-color from `data.js`
- Inline SVG favicon (avoids 404 console noise)
- CDN preconnect hints for Leaflet and map tiles
- Professional README and this changelog

### Production hardening (V1.1)

- Removed third-party placeholder hero image
- Consolidated theme boot into `app.js` (single init path)
- Removed unused path className / redundant CSS
- Compacted stylesheet weight
- Debounced resize → `invalidateSize` for iframe embeds
- Console clean (no application errors)

### Active service areas (default client)

- Pinellas
- Hillsborough
- Pasco
- Manatee

### Technical notes

- Static site only: `index.html`, `style.css`, `app.js`, `data.js`, GeoJSON
- No CSS frameworks, no bundler
- Leaflet 1.9.4 via pinned CDN URL
- Must be served over HTTP(S); GeoJSON fetch will not work on `file://`

### Lighthouse (lab)

| Category | Desktop | Mobile |
|----------|---------|--------|
| Performance | 95 | ~87* |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

\*Mobile Performance is limited by Leaflet + tile network under Lighthouse throttling. Not a functional defect.
