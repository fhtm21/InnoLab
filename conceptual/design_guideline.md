# SIS BINUS (sis.binus.ac.id) — Design Guideline (Reference)

> Source: computed styles and loaded resources observed on `https://sis.binus.ac.id/`.
>
> Scope: reusable design tokens and component cues for the InnoLab microsite (not a pixel-perfect clone).

---

## 1) Brand and visual direction (observed)
- Overall feel: clean, academic-corporate, content-first
- Primary typeface: Open Sans (Google Fonts)
- Primary accent: blue used for key headings
- Primary CTA: warm orange pill button
- Secondary utility widget: light blue pill with shadow

---

## 2) Verified resources (loaded on page)

### 2.1 Stylesheets
- https://sis.binus.ac.id/wp-content/themes/binus-2022-271-core/compiled/binus-2025-464-sisprogram/css/is_home/external.css?ver=5.5.6
- https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap
- https://sis.binus.ac.id/wp-content/themes/binus-2022-271-core/compiled/binus-2025-464-sisprogram/svg/is_home/icons.data.svg.css?v=5.5.6

### 2.2 Fonts
- Family: `Open Sans`
- Weights observed in computed styles: `200`, `400`, `600`

---

## 3) Design tokens (computed styles)

> Notes:
> - Values below are computed on the inspected page.
> - Some values (e.g., `line-height: 16px` on body) may be influenced by specific theme rules; treat as reference, not universal best practice.

### 3.1 Typography

#### Base body
- Font family: `Open Sans`
- Font size: `16px`
- Font weight: `400`
- Line height: `16px`
- Text color: `rgb(94, 94, 94)`

#### Hero H1 (top headline)
- Font family: `Open Sans`
- Font size: `28px`
- Font weight: `600`
- Line height: `31.5px`
- Color: `rgb(59, 125, 192)`

#### Section H1 (example: ABOUT THE PROGRAM)
- Font family: `Open Sans`
- Font size: `32px`
- Font weight: `600`
- Line height: `42px`
- Color: `rgb(255, 255, 255)`

#### Navigation link (example: Home)
- Font family: `Open Sans`
- Font size: `12px`
- Font weight: `200`
- Line height: `12px`
- Color: `rgb(94, 94, 94)`

#### Utility link (example: VIEW MORE)
- Font family: `Open Sans`
- Font size: `14px`
- Font weight: `400`
- Line height: `19px`
- Color: `rgb(102, 102, 102)`

#### Tab link (example: News)
- Font family: `Open Sans`
- Font size: `14px`
- Font weight: `400`
- Line height: `14px`
- Color: `rgb(94, 94, 94)`

### 3.2 Color palette (derived from computed styles)

| Token | Value | Where observed |
|---|---|---|
| Text / Neutral 600 | `rgb(94, 94, 94)` | body text, nav links |
| Text / Neutral 650 | `rgb(102, 102, 102)` | VIEW MORE link |
| Accent / Blue | `rgb(59, 125, 192)` | hero H1 |
| CTA / Orange | `rgb(243, 147, 27)` | primary CTA background |
| Surface / Light Blue | `rgb(222, 239, 251)` | floating consultation widget |
| White | `rgb(255, 255, 255)` | section H1 text |

### 3.3 Radius, shadow, spacing cues

#### Primary CTA pill (MULAI DARI SINI)
- Background: `rgb(243, 147, 27)`
- Border radius: `24px`
- Box shadow: `none`
- Note: inspected element was a wrapper; clickable ancestor may apply additional padding/hover styles

#### Floating consultation widget
- Background: `rgb(222, 239, 251)`
- Border radius: `16px 0px 0px 16px`
- Padding: `19px 9px` (top/bottom 19px, left/right 9px)
- Shadow: `rgba(0, 0, 0, 0.15) 0px 2px 6px 0px`

---

## 4) CSS variables (present on :root)
The inspected page exposes WordPress preset variables (Gutenberg). These are not necessarily the site’s bespoke design tokens, but they can inform a baseline.

### 4.1 Notable presets
- `--wp--preset--color--white: #ffffff`
- `--wp--preset--color--black: #000000`
- `--wp--preset--color--vivid-cyan-blue: #0693e3`
- `--wp--preset--color--luminous-vivid-orange: #ff6900`
- `--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2)`
- `--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4)`
- `--wp--preset--font-size--small: 13px`
- `--wp--preset--font-size--medium: 20px`
- `--wp--preset--font-size--large: 36px`
- `--wp--preset--font-size--x-large: 42px`

---

## 5) Practical guidance for InnoLab microsite (how to reuse)

### 5.1 Recommended token mapping
- Body text: `Open Sans`, 16px, weight 400, neutral gray similar to `rgb(94, 94, 94)`
- Headings: weight 600; use a BINUS-like blue accent similar to `rgb(59, 125, 192)` for key titles
- Primary CTA: orange pill button with radius ~24px
- Secondary CTA / utility: light blue surface with subtle shadow

### 5.2 Component patterns to adopt
- Top navigation: small, lightweight links (12px, weight 200) for a clean header
- Section headers: larger, bold headings (32px, weight 600) with strong contrast (white on dark/colored backgrounds)
- Content lists: “VIEW MORE” style links (14px) for section-level navigation

---

## 6) Gaps / next extraction (optional)
If we want to be more exact for implementation, we can extract:
- Hover/active states for nav links and CTAs
- Exact padding/margins for CTA clickable ancestor (not just inner wrapper)
- Grid/container widths and breakpoints
- Card styles (borders, shadows, spacing)