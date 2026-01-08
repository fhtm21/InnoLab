# InnoLab Microsite (Static Vue SPA) — Requirements Backlog + Acceptance Criteria

Source references:
- Visual tokens and component cues: [`conceptual/design_guideline.md`](../conceptual/design_guideline.md)
- SIS global template elements inventory: [`conceptual/information_elements.json`](../conceptual/information_elements.json)
- Microsite IA, templates, and content guidance: [`conceptual/microsite_concept.md`](../conceptual/microsite_concept.md)

Scope:
- Static deployment as a Vue 3 SPA (Vite + Vue Router). No server-side rendering.
- Content is stored locally (JSON/Markdown) and bundled at build time.

Backlog conventions:
- Each RB item is a requirement with acceptance criteria.
- Routes are aligned to the IA in [`conceptual/microsite_concept.md`](../conceptual/microsite_concept.md).
- Optional items are explicitly marked as optional.

---

## RB-00 — Project scaffolding (Vue 3 + Vite + Router) — **PARTIAL**

**Requirement**
Create a Vue 3 SPA project using Vite with Vue Router configured for clean routes matching the microsite IA.

**Acceptance criteria**
- A Vite + Vue 3 project exists and runs locally.
- Vue Router is installed and configured with routes for all pages listed in this backlog.
- Navigation between routes works without full page reload.
- A production build can be generated (static assets output).

---

## RB-01 — Design system tokens and base styles — **DONE**

**Requirement**
Implement a minimal design system aligned to SIS cues (typography, colors, radii, shadows) as reusable tokens and base styles.

**Acceptance criteria**
- Open Sans is loaded and used as the default font family.
- CSS variables (or equivalent) exist for:
  - Neutral text colors: `rgb(94, 94, 94)` and `rgb(102, 102, 102)`
  - Accent blue: `rgb(59, 125, 192)`
  - CTA orange: `rgb(243, 147, 27)`
  - Light blue surface: `rgb(222, 239, 251)`
  - Pill radius: `24px`
  - Widget radius: `16px 0 0 16px`
  - Widget shadow: `0 2px 6px rgba(0,0,0,0.15)`
- Base typography matches the guideline intent:
  - Body: 16px, weight 400, neutral gray
  - Headings: weight 600, accent blue for key titles
  - Utility nav links: 12px, weight 200
- A primary CTA button style exists as an orange pill (radius ~24px).

---

## RB-01A — Layout system (grid, container, spacing) — **PARTIAL**

**Requirement**
Implement a consistent layout system (container width, grid, spacing) to support scannable sections and consistent page composition.

**Acceptance criteria**
- A max content width container exists and is used across pages.
- A responsive grid system exists (e.g., 12-column or equivalent) and is used for card layouts.
- Spacing utilities or section spacing rules exist to keep consistent vertical rhythm.
- Pages follow the “content-first, scannable” guidance (headings, short paragraphs, bullets, cards).

---

## RB-01B — Reusable UI components (cards, CTA band, section header) — **PARTIAL**

**Requirement**
Create reusable UI components to implement the page templates consistently.

**Acceptance criteria**
- A card component exists and is used for themes, projects, people, and articles.
- A CTA band component exists and is used on landing pages (Join, Collaborate, Request access).
- A section header pattern exists (title + optional intro + optional “view more” link).
- Components support keyboard focus states and accessible markup.

---

## RB-02 — Global layout: two-tier header — **DONE**

**Requirement**
Implement a reusable two-tier header consistent with the SIS pattern: utility links row + main navigation row + primary CTA + optional search trigger.

**Acceptance criteria**
- Header appears on all routes.
- Utility links row exists and is visually distinct (small, lightweight links).
- Main navigation row exists with links to: Home, About, Research, Facilities, People, Articles, Collaborate/Contact.
- A primary CTA button is present in the header (orange pill style).
- Header is responsive: navigation remains usable on smaller screens (e.g., collapses to a menu toggle).

---

## RB-02A — Header information architecture alignment — **PARTIAL**

**Requirement**
Ensure the header navigation matches the microsite IA and provides clear pathways to key sections.

**Acceptance criteria**
- Top navigation contains 6–7 items maximum (per IA guidance).
- “Collaborate” and “Contact” are reachable from the top navigation (either combined or separate routes).
- Active route state is visible for the current section.
- Navigation labels are consistent across header and footer.

---

## RB-02B — Optional search trigger behavior (v0.1 optional) — **PARTIAL**

**Requirement**
Provide an optional search trigger in the header, aligned with the SIS pattern, with a defined v0.1 behavior.

**Acceptance criteria**
- Search trigger can be enabled/disabled via configuration.
- If enabled, clicking the search trigger opens either:
  - a simple client-side search overlay for Articles and People, or
  - navigates to a dedicated search route.
- If disabled, header layout remains visually balanced.

---

## RB-03 — Global layout: footer — **DONE**

**Requirement**
Implement a reusable footer with quick links, policies, social links, and address/location.

**Acceptance criteria**
- Footer appears on all routes.
- Footer includes quick links to primary sections.
- Footer includes placeholders for policies (Privacy, Terms, Accessibility).
- Footer includes placeholders for social links (LinkedIn, YouTube, GitHub as applicable).
- Footer includes address/location placeholder and a map link placeholder.

---

## RB-03A — Footer navigation completeness — **DONE**

**Requirement**
Ensure footer navigation supports the IA and provides quick access to key pages.

**Acceptance criteria**
- Footer quick links include: About, Research, Facilities, People, Articles, Contact.
- Footer includes a copyright line.
- Footer links are keyboard accessible and have visible focus states.

---

## RB-04 — Optional global widget: floating consultation CTA — **DONE**

**Requirement**
Implement an optional fixed-position side CTA widget styled as a light-blue pill with subtle shadow.

**Acceptance criteria**
- Widget can be enabled/disabled via configuration.
- When enabled, widget is fixed on the right side and remains visible during scroll.
- Widget uses light-blue surface token and the specified radius/shadow cues.
- Widget click action is configurable (route to contact page or external link).

---

## RB-05 — Content data layer (static) — **NOT DONE**

**Requirement**
Create a static content layer (local JSON/Markdown) for themes, projects, people, and articles, and wire pages to render from this data.

**Acceptance criteria**
- Content is stored in versioned files (e.g., `content/*.json` and/or `content/*.md`).
- Home, Research, People, and Articles pages render lists from the content layer (not hardcoded in templates).
- Detail pages (theme/project/person/article) resolve by `:slug` and render the correct content.
- Build output includes the content (no runtime API dependency).

---

## RB-05A — Content model definitions (themes, projects, people, articles) — **NOT DONE**

**Requirement**
Define minimal content schemas to support the page templates and cross-linking.

**Acceptance criteria**
- Theme content includes: slug, title, overview, focus areas, example outputs, related people slugs, related project slugs.
- Project content includes: slug, title, status, theme slugs, summary, team person slugs, partner (optional), outputs links.
- Person content includes: slug, name, title, affiliation, bio, expertise tags, links (email/Scholar/ORCID/LinkedIn), selected outputs/projects.
- Article content includes: slug, title, date, author, category, tags, summary, body content, related links.

---

## RB-05B — Cross-linking rules — **NOT DONE**

**Requirement**
Ensure cross-linking between themes, projects, people, and articles is consistent and discoverable.

**Acceptance criteria**
- Theme pages link to related projects and people.
- Project pages link to team member profiles and related themes.
- Person pages link to selected projects and publications/outputs.
- Article pages link to related themes/projects/people when tagged.

---

## RB-06 — Home page (`/`) — **PARTIAL**

**Requirement**
Implement the Home page per the recommended layout: hero, highlights, themes, featured projects, latest articles, people spotlight, optional partners, contact teaser.

**Acceptance criteria**
- Home page includes:
  - Hero section with a clear positioning statement and 1–2 CTAs.
  - Highlights section with 3–6 cards linking to key areas.
  - Research themes grid with 4 theme cards.
  - Featured projects section (at least 2 items).
  - Latest articles section (3–5 items).
  - People spotlight section (leadership or featured lecturers).
  - Contact teaser with email/location placeholders and link to contact.
- Primary CTA(s) are visible above the fold on typical desktop viewport.
- Sections are scannable (headings, short paragraphs, cards).

---

## RB-06A — Home success criteria alignment — **DONE**

**Requirement**
Ensure the Home page meets the “10 seconds understanding” success criterion.

**Acceptance criteria**
- The hero H1 clearly states what InnoLab is (university-wide AI research lab).
- The hero includes a 1–2 sentence supporting statement.
- The hero includes clear CTAs to Research and Collaborate/Contact.
- The first screen (above the fold) contains the positioning statement and at least one CTA.

---

## RB-07 — About landing page (`/about`) — **PARTIAL**

**Requirement**
Implement an About landing page that introduces the lab and links to About subpages.

**Acceptance criteria**
- Page has a single H1 and a short intro.
- Page provides navigation cards/links to:
  - Lab Profile
  - Vision & Mission
  - Leadership & Governance
  - History & Milestones
  - Partners & Affiliations
  - FAQ
- Page includes a CTA band (Collaborate / Join / Contact).

---

## RB-08 — About: Lab Profile (`/about/profile`) — **NOT DONE**

**Requirement**
Implement the Lab Profile page with overview, differentiators, and CTA.

**Acceptance criteria**
- Page includes overview content (what InnoLab does).
- Page includes 3–5 differentiator bullets/cards.
- Page includes a CTA band linking to Collaborate/Contact and/or Join.

---

## RB-09 — About: Vision & Mission (`/about/vision-mission`) — **NOT DONE**

**Requirement**
Implement Vision & Mission page.

**Acceptance criteria**
- Page includes a Vision statement section.
- Page includes Mission bullets section.
- Page includes a CTA band.

---

## RB-10 — About: Leadership & Governance (`/about/governance`) — **NOT DONE**

**Requirement**
Implement Leadership & Governance page.

**Acceptance criteria**
- Page includes leadership cards (director, deputy, etc.) from the People content layer.
- Page includes governance structure description (steering committee, advisory board optional).
- Page includes a CTA band.

---

## RB-11 — About: History & Milestones (`/about/milestones`) — **NOT DONE**

**Requirement**
Implement History & Milestones page with a timeline component.

**Acceptance criteria**
- Page includes a timeline list rendered from static content.
- Timeline is readable and accessible (keyboard navigable, semantic markup).
- Page includes a CTA band.

---

## RB-12 — About: Partners & Affiliations (`/about/partners`) — **NOT DONE**

**Requirement**
Implement Partners & Affiliations page.

**Acceptance criteria**
- Page includes partner lists grouped by category (internal/external).
- Partner logos (if present) include alt text.
- Page includes a CTA to propose collaboration.

---

## RB-13 — About: FAQ (`/about/faq`) — **NOT DONE**

**Requirement**
Implement FAQ page with expandable items.

**Acceptance criteria**
- FAQ items are rendered from static content.
- Accordion behavior is keyboard accessible.
- Page includes a CTA to contact.

---

## RB-14 — Research landing page (`/research`) — **PARTIAL**

**Requirement**
Implement Research landing page with philosophy, themes, featured projects, outputs preview, and CTA.

**Acceptance criteria**
- Page includes research philosophy bullets.
- Page includes theme cards linking to theme detail routes.
- Page includes featured projects section.
- Page includes outputs preview linking to Publications & Outputs.
- Page includes CTA for collaboration and/or student opportunities.

---

## RB-14A — Research themes listing completeness — **PARTIAL**

**Requirement**
Ensure the Research Themes listing includes the four v0.1 themes and supports navigation to each theme detail.

**Acceptance criteria**
- Themes listed include: NLP, Computer Vision, AI for Education, Responsible AI.
- Each theme card links to `/research/themes/:slug`.
- Theme cards show a short summary or focus areas preview.

---

## RB-15 — Research theme detail pages (`/research/themes/:slug`) — **NOT DONE**

**Requirement**
Implement theme detail pages for each research theme.

**Acceptance criteria**
- Route resolves theme by `:slug` from static content.
- Page includes:
  - Theme overview
  - Key problems
  - Methods/approaches
  - Example projects list filtered by theme
  - Outputs list (papers/demos/code links)
  - People involved list filtered by theme
  - CTA band
- Invalid `:slug` shows a not-found state.

---

## RB-16 — Projects listing (`/research/projects`) — **NOT DONE**

**Requirement**
Implement a projects listing page with basic filters.

**Acceptance criteria**
- Projects list is rendered from static content.
- Filters exist for at least: status (Active/Completed) and theme.
- Each project card links to its detail page.

---

## RB-16A — Projects information completeness — **NOT DONE**

**Requirement**
Ensure each project card provides enough information to decide whether to click.

**Acceptance criteria**
- Project card shows: title, status, theme tags, 1–2 sentence summary.
- Project card includes at least one “output” indicator if outputs exist (e.g., icons/labels for paper/code/demo).

---

## RB-17 — Project detail (`/research/projects/:slug`) — **NOT DONE**

**Requirement**
Implement project detail pages.

**Acceptance criteria**
- Route resolves project by `:slug` from static content.
- Page includes:
  - Title, status, theme tags
  - Summary
  - Team members with links to person profiles
  - Outputs links (paper/demo/code)
  - Related items (projects/articles) if available
- Invalid `:slug` shows a not-found state.

---

## RB-18 — Publications & Outputs (`/research/outputs`) — **NOT DONE**

**Requirement**
Implement Publications & Outputs page.

**Acceptance criteria**
- Outputs are rendered from static content and grouped by year.
- Output types are distinguishable (publication, prototype/demo, dataset, open-source).
- Links are valid and open in a new tab when external.

---

## RB-18A — Outputs discoverability — **NOT DONE**

**Requirement**
Make outputs discoverable and easy to scan.

**Acceptance criteria**
- Outputs can be filtered by type (publication/demo/code/dataset) or grouped with clear headings.
- Each output item includes: title, year, type, and at least one link.
- If an output is associated with a project/theme, it links back to that page.

---

## RB-19 — Facilities landing (`/facilities`) — **PARTIAL**

**Requirement**
Implement Facilities landing page with overview and links to subpages.

**Acceptance criteria**
- Page includes facilities overview.
- Page includes cards/links to:
  - Compute
  - Collaboration Space
  - Tools & Software
  - Access & Usage Policy
- Page includes a Request Access CTA.

---

## RB-20 — Facilities: Compute (`/facilities/compute`) — **NOT DONE**

**Requirement**
Implement Compute page.

**Acceptance criteria**
- Page includes compute capabilities list and usage principles.
- Page includes Request Access CTA.

---

## RB-21 — Facilities: Collaboration Space (`/facilities/space`) — **NOT DONE**

**Requirement**
Implement Collaboration Space page.

**Acceptance criteria**
- Page includes description and optional media placeholders.
- Page includes contact/booking CTA.

---

## RB-22 — Facilities: Tools & Software (`/facilities/tools`) — **NOT DONE**

**Requirement**
Implement Tools & Software page.

**Acceptance criteria**
- Page lists tools grouped by category (frameworks, tracking, collaboration, etc.).
- Page content is rendered from static content.

---

## RB-23 — Facilities: Access & Usage Policy (`/facilities/policy`) — **NOT DONE**

**Requirement**
Implement Access & Usage Policy page.

**Acceptance criteria**
- Page includes policy summary and a placeholder link to a full policy document (optional).
- Page includes contact CTA.

---

## RB-24 — People landing (`/people`) — **PARTIAL**

**Requirement**
Implement People landing page with leadership and directory entry points.

**Acceptance criteria**
- Page includes leadership cards (from static content).
- Page includes a preview of lecturers/researchers and link to full directory.
- Page includes Join Us CTA.

---

## RB-24A — People directory layout rules — **NOT DONE**

**Requirement**
Implement the People directory layout guidance: filters at top, grid of person cards, click-through to profile.

**Acceptance criteria**
- Filters appear above the grid on directory pages.
- Person cards include photo placeholder, name, title, tags, and quick links (if available).
- Clicking a card navigates to the person profile route.

---

## RB-25 — Lecturers directory (`/people/lecturers`) — **NOT DONE**

**Requirement**
Implement a filterable lecturers/researchers directory.

**Acceptance criteria**
- Directory renders person cards from static content.
- Filters exist for at least: expertise tags and faculty/affiliation.
- Clicking a card navigates to the person profile route.

---

## RB-25A — People subpages (v0.1 + optional) — **NOT DONE**

**Requirement**
Implement People subpages aligned to the IA.

**Acceptance criteria**
- Leadership is accessible either as a section on `/people` or as a dedicated route `/people/leadership`.
- Optional routes exist (can be stubbed with “coming soon”):
  - `/people/students` (Students & Research Assistants)
  - `/people/alumni` (optional)
- Join Us route exists at `/people/join`.

---

## RB-26 — Person profile (`/people/:slug`) — **NOT DONE**

**Requirement**
Implement person profile pages.

**Acceptance criteria**
- Route resolves person by `:slug` from static content.
- Page includes:
  - Name, title, affiliation
  - Short bio
  - Expertise tags
  - Selected publications/projects (linked)
  - Contact links (email, Scholar, ORCID, LinkedIn) as available
- Invalid `:slug` shows a not-found state.

---

## RB-26A — Person profile right-rail (optional) — **NOT DONE**

**Requirement**
Optionally implement a right-rail on person profiles when it adds value.

**Acceptance criteria**
- If right-rail is used, it contains related items (projects/articles) and/or a contact card.
- If right-rail is not used, the page remains scannable and well-structured.

---

## RB-27 — Join Us (`/people/join`) — **NOT DONE**

**Requirement**
Implement Join Us page.

**Acceptance criteria**
- Page lists opportunity types (RA, thesis, internships, visiting collaboration).
- Page includes CTA to contact/apply.

---

## RB-28 — Articles listing (`/articles`) — **PARTIAL**

**Requirement**
Implement Articles listing page with filters and optional client-side search.

**Acceptance criteria**
- Articles list is rendered from static content.
- Filters exist for at least: category and year.
- Optional search filters articles by title/summary.
- Each article card links to its detail page.

---

## RB-28A — Articles categories routes (v0.1) — **NOT DONE**

**Requirement**
Support the IA categories for Articles: News & Announcements, Events & Seminars, Blog/Insights (optional), Media Coverage (optional).

**Acceptance criteria**
- Category filtering supports at least:
  - News & Announcements
  - Events & Seminars
- Optional categories can be present as filters and/or routes:
  - Blog/Insights
  - Media Coverage
- Category selection is reflected in the URL (query param or nested route).

---

## RB-29 — Article detail (`/articles/:slug`) — **NOT DONE**

**Requirement**
Implement Article detail pages.

**Acceptance criteria**
- Route resolves article by `:slug` from static content.
- Page includes:
  - Title, date, author
  - Summary/lead
  - Body content (rendered from Markdown or structured blocks)
  - Related articles section
  - Share links
- Invalid `:slug` shows a not-found state.

---

## RB-29A — Articles editorial guidelines support — **NOT DONE**

**Requirement**
Support the editorial guidelines: concise, scannable posts with summary, images, tags, and links to related outputs.

**Acceptance criteria**
- Article detail includes a summary/lead section.
- Article detail supports 1–2 images with alt text (optional).
- Article tags are displayed and link to filtered listings.
- Article can link to related research outputs/projects.

---

## RB-30 — Collaborate (`/collaborate`) — **PARTIAL**

**Requirement**
Implement Collaborate page describing collaboration models and engagement process.

**Acceptance criteria**
- Page includes collaboration models (academic, industry/government).
- Page includes engagement process steps (1–5).
- Page includes “what we can offer” section.
- Page includes CTA to contact.

---

## RB-30A — Collaborate subpages aligned to IA — **NOT DONE**

**Requirement**
Implement Collaborate/Contact subpages aligned to the IA.

**Acceptance criteria**
- Routes exist for:
  - `/collaborate/models`
  - `/collaborate/industry-government`
  - `/collaborate/academic`
  - `/contact` (Contact & Location)
- If not fully implemented, routes show a clear placeholder and link back to `/contact`.

---

## RB-31 — Contact (`/contact`) — **PARTIAL**

**Requirement**
Implement Contact page with a static-friendly contact form and contact details.

**Acceptance criteria**
- Page includes a contact form with required fields (name, email, message).
- Form submission behavior is defined for static hosting (e.g., mailto or third-party form endpoint).
- Page includes contact email/location placeholders and a map link placeholder.
- Page includes accessibility considerations (labels, error states).

---

## RB-31A — Contact pathways and CTAs — **PARTIAL**

**Requirement**
Ensure clear pathways to contact from key pages (Home, Research, Facilities, People).

**Acceptance criteria**
- Home includes a contact teaser linking to `/contact`.
- Research pages include a CTA band linking to `/collaborate` and/or `/contact`.
- Facilities pages include a Request Access CTA linking to `/contact` or a request form.
- People pages include Join/Contact CTAs linking to `/people/join` and `/contact`.

---

## RB-32 — SEO baseline — **PARTIAL**

**Requirement**
Implement basic SEO metadata and clean URLs.

**Acceptance criteria**
- Each route sets a unique document title.
- Each route sets a meta description (placeholder acceptable initially).
- URLs follow the IA (e.g., `/research/themes/nlp`, `/people/:slug`).
- OpenGraph tags exist at least for Home and Article detail pages.

---

## RB-32A — Clean URL conventions — **PARTIAL**

**Requirement**
Ensure URL conventions match the IA examples and remain stable.

**Acceptance criteria**
- Theme URLs follow `/research/themes/:slug`.
- Project URLs follow `/research/projects/:slug`.
- Person URLs follow `/people/:slug`.
- Article URLs follow `/articles/:slug`.
- No route requires query params to render core content (filters may use query params).

---

## RB-33 — Accessibility baseline — **PARTIAL**

**Requirement**
Meet baseline accessibility expectations for navigation and content.

**Acceptance criteria**
- Header navigation is keyboard navigable.
- Interactive components (accordion, menus) have visible focus states.
- Images include alt text (or are marked decorative).
- Color contrast is checked for primary text and CTA buttons.

---

## RB-33A — Keyboard navigation for menus and filters — **PARTIAL**

**Requirement**
Ensure keyboard navigation works for menus, filters, and interactive UI.

**Acceptance criteria**
- Header menu toggle is operable via keyboard.
- Directory filters (People/Projects/Articles) are operable via keyboard.
- Focus order is logical and visible.

---

## RB-34 — Build and deployment readiness — **PARTIAL**

**Requirement**
Ensure the SPA can be built and deployed as static assets.

**Acceptance criteria**
- `vite build` produces a deployable output directory.
- Static hosting configuration guidance exists (e.g., SPA fallback to `index.html`).
- Asset paths work correctly in production build.
- A minimal README section exists describing build and deploy steps.

---

## RB-35 — Content governance (ownership, cadence, quality checklist) — **NOT DONE**

**Requirement**
Implement lightweight content governance support so the microsite can be maintained.

**Acceptance criteria**
- A documented ownership mapping exists (About/People, Research/Projects, Articles, Facilities) aligned to the concept doc.
- A documented minimum update cadence exists (People monthly, Projects quarterly, Facilities quarterly/when changes occur, Articles at least monthly).
- A content quality checklist exists and is referenced in contributor documentation:
  - names/titles correct
  - links work (Scholar/ORCID/GitHub)
  - images have alt text
  - no sensitive data disclosed
  - clear CTA and contact point

---

## RB-36 — Open questions tracking (v0.1 decisions) — **NOT DONE**

**Requirement**
Track and resolve the open questions listed in the concept doc to finalize v0.1 scope.

**Acceptance criteria**
- A tracked list exists for:
  - official lab name styling
  - official contact email/location/social links
  - include/exclude: publications integration, search feature, dataset/open-source page
  - content approval workflow and publishing permissions
- Each item has a recorded decision and the site reflects the decision (copy, routes, or placeholders).
