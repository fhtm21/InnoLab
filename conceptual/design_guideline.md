# Design Guideline Draft (Reference: https://sis.binus.ac.id/)
This document reverse-engineers **visual and layout patterns** from the SIS BINUS site as a reference baseline for InnoLab’s microsite.

Source reference captured in [`conceptual/sis_home.png`](conceptual/sis_home.png:1).  
Note: Direct CSS/HTML token extraction was not available in this environment, so **hex values and font names below are best-effort approximations** derived from the rendered UI. Replace with exact tokens once CSS access is available.

---

## 1) Brand feel and design principles (observed)
- **Clean academic + modern corporate**: lots of white space, crisp typography, strong hero imagery.
- **Blue-forward identity**: blue is used for headings, accents, and brand cues.
- **High-contrast CTA**: orange button stands out strongly against white/blue.
- **Sectioned storytelling**: homepage is a sequence of large “bands” (hero, program, faculty, partnership, achievements, updates, etc.).
- **Card-based content**: repeated use of tiles/cards for programs, posts, and highlights.

---

## 2) Color system (approximate)
### 2.1 Primary palette (approx.)
These are the most prominent colors visible in the header/hero.

- **Primary Blue (brand/heading)**: approx `#2F6FAE` to `#3A7DBA`
  - Used for: large headings (e.g., SCHOOL OF INFORMATION SYSTEMS PROGRAM), links, accents.
- **Deep Blue (hero overlay / gradients)**: approx `#0B4F7A` to `#0A6AA0`
  - Used for: hero image overlay and large background bands.
- **CTA Orange (primary button)**: approx `#F39A1E` to `#F6A623`
  - Used for: “MULAI DARI SINI” button.
- **White**: `#FFFFFF`
  - Used for: page background, header background, content areas.

### 2.2 Neutral palette (approx.)
- **Text (primary)**: approx `#1F2A37` (dark gray)
- **Text (secondary)**: approx `#6B7280` (mid gray)
- **Borders/dividers**: approx `#E5E7EB` (light gray)
- **Muted background**: approx `#F7F8FA` (very light gray)

### 2.3 Usage guidance
- Use **blue** for headings, links, and key UI accents.
- Use **orange** only for primary CTAs (1 per screen where possible).
- Keep backgrounds mostly **white**; use **light gray** for section separation.
- Ensure contrast meets WCAG AA (especially blue text on white and white text on blue overlays).

---

## 3) Typography (observed)
Exact font family cannot be confirmed here; the visual style suggests a modern sans-serif.

### 3.1 Font families (recommended to match the look)
- **Primary UI font**: a clean sans-serif such as `Inter`, `Roboto`, or `Helvetica Neue`.
- **Fallback stack**:
  - `Inter, Roboto, Helvetica Neue, Arial, sans-serif`

### 3.2 Type scale (recommended)
Based on the strong hierarchy seen on the homepage:

- **H1 (hero title)**: 40–56px, semi-bold, letter spacing slightly expanded for uppercase headings
- **H2 (section title)**: 28–36px, semi-bold
- **H3 (card title)**: 18–22px, semi-bold
- **Body**: 14–16px, regular
- **Small/meta**: 12–13px, regular

### 3.3 Text styling patterns
- Headings often appear **uppercase** or **title case** with strong tracking.
- Body text is short and scannable; avoid long paragraphs.
- Links and key labels use the **primary blue**.

---

## 4) Layout and grid (observed)
### 4.1 Page structure
- **Sticky/large header** with:
  - left: BINUS + unit identity
  - right: utility icons and a prominent CTA button
  - below: multi-level navigation (top links + dropdown menus)
- **Hero band**: large, full-width, with a centered heading and a carousel below.

### 4.2 Grid and spacing (recommended)
- Use a **12-column grid** with a max content width (e.g., 1140–1280px).
- Spacing scale (8px base):
  - 8, 16, 24, 32, 48, 64
- Section padding:
  - top/bottom: 48–80px depending on density
- Card gutters:
  - 16–24px

### 4.3 Responsive behavior (recommended)
- Desktop: full nav + CTA visible.
- Tablet: nav collapses partially; keep CTA accessible.
- Mobile: hamburger menu; CTA becomes a smaller button or a prominent menu item.

---

## 5) Components (observed patterns)
### 5.1 Header / navigation
- White header background, minimal borders.
- Multi-level dropdown menus with clear grouping.
- Search icon in the top bar.

Guideline for InnoLab:
- Keep top nav to 6–7 items (as in microsite concept).
- Provide a single primary CTA (Collaborate / Contact).

### 5.2 Primary CTA button
- Rounded pill shape.
- High-contrast orange fill.
- White text, medium weight.
- Right arrow icon.

Guideline:
- Use one primary CTA style across the site.
- Provide hover state: slightly darker orange or subtle shadow.

### 5.3 Section headers
- Large icon/illustration above section title (SIS uses big section label images).
- Title + short description + “View more” link.

Guideline:
- For InnoLab, replace decorative section images with:
  - a small icon + label, or
  - a consistent section header component (title + subtitle + optional CTA).

### 5.4 Cards (programs, posts, highlights)
Common card anatomy:
- Image thumbnail (optional)
- Title
- Short description or metadata
- Link/CTA

Guideline:
- Standardize card sizes per section.
- Use consistent hover: raise + shadow, or underline title.

### 5.5 Carousel / slider (hero)
- Large hero carousel with left/right controls.
- Overlay text on image.

Guideline:
- If used for InnoLab:
  - keep slides to 3–5
  - ensure text remains readable (use gradient overlay)
  - provide accessible controls and keyboard navigation

---

## 6) Imagery and iconography (observed)
- Strong use of **photography** and **banner-style visuals**.
- Icons are simple and functional (search, arrows, etc.).
- Background overlays used to ensure text readability.

Guideline for InnoLab:
- Prefer:
  - lab photos (seminars, equipment, team)
  - research visuals (diagrams, abstract AI imagery) sparingly
- Always apply:
  - consistent aspect ratios for thumbnails
  - alt text for images

---

## 7) Content layout patterns to reuse for InnoLab
From SIS homepage structure, the following “bands” map well to InnoLab:

1. **Hero**: InnoLab positioning + 1–2 CTAs
2. **Quick facts**: facilities, themes, number of projects/publications (if available)
3. **Research themes**: 4-card grid
4. **Featured projects**: 2–4 cards
5. **People spotlight**: leadership + key lecturers
6. **Updates**: news/events tabs
7. **Footer**: contact + social + quick links

---

## 8) Accessibility and UX notes (recommended)
- Ensure CTA contrast (white on orange) meets AA.
- Avoid placing small text directly on busy images without overlay.
- Provide focus states for nav and buttons.
- Keep line length comfortable (60–80 characters).

---

## 9) Next steps to make this guideline “exact”
To convert approximations into exact tokens:
- Extract CSS variables and computed styles (colors, font-family, font-size, spacing).
- List actual font files (woff/woff2) and weights used.
- Capture component states (hover/active/focus) for buttons, links, nav items.

Deliverables to add later:
- Final token table (CSS variables)
- Component spec sheets (button, card, nav, tabs)
- Responsive breakpoints and layout rules