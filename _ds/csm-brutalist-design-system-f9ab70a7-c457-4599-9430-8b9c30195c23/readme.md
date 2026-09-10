# CSM Brutalist — Design Language

A design system extracted from **CSM Website Brutalist.dc.html** (this project's brutalist direction for the Center for Sustainable Media / funds4media.org website). It formalizes that direction's tokens, components and a recreated UI kit so the look can be reused consistently across new screens.

**Source:** `CSM Website Brutalist.dc.html` at the root of this project. Sibling drafts `CSM Website.dc.html` and `CSM Website Directions.dc.html` show the same content in other visual directions — not part of this language. The wider Petrichor Cluster master-brand system (warm earth tones, serif display) lives at `_ds/petrichor-design-system-…` — CSM intentionally keeps its own face, per that system's own notes.

## Index
- `styles.css` — root stylesheet, imports every token file below.
- `tokens/colors.css` — canvas/paper/ink neutrals + the single indigo accent.
- `tokens/typography.css` — Archivo Black, Space Grotesk, IBM Plex Mono; fluid type scale.
- `tokens/spacing_and_shape.css` — 4px spacing scale, zero radius, hard-shadow scale.
- `guidelines/` — foundation specimen cards (colors, type, spacing, hard shadows, hover-invert, stat band).
- `components/core/` — Button, Tag, Card.
- `components/navigation/` — NavTab, AccordionNav.
- `components/data/` — StatBand.
- `components/people/` — TeamCard.
- `components/overlay/` — Drawer.
- `ui_kits/csm-website/` — a recreated, click-through version of the site built from the components above.
- `assets/` — CSM mark (indigo + ink), Media Finance Monitor lockup, Petrichor endorsement marks (reused from the source project).

### Intentional additions
The source is a single page, not a component library, so this set is sized to what that page actually uses — nothing extra was invented (no Toast, Tabs, Modal-with-tabs, etc. exist in the source, so none were added here).

## Where this diverges from the source (smoothed for reuse)
- Hard shadows and border widths were consolidated into a 4-step scale (`--shadow-hard-sm/md/lg/xl`, `--border-thick/-thin/-hair`) instead of one-off pixel values repeated per element.
- Spacing was mapped onto a clean 4px scale.
- Everything else — palette, type choices, zero radius, hover-invert behavior — is unchanged from the source.

## CONTENT FUNDAMENTALS
- Voice is **first-person plural, direct, consultative**: "We work with…", "We advise on…". No marketing fluff or rhetorical questions.
- Headings and labels are frequently **UPPERCASE** (nav, eyebrows, stat labels, card titles) — this is a structural/typographic device, not shouting; body copy stays in sentence case.
- Numbers are used sparingly and always concrete/earned ("100+ publishers advised", "€10M+ funding secured") — never vague stats for decoration.
- Service copy follows a strict two-part pattern per item: a **quoted problem statement** in the client's voice ("We don't have a clear way to explain what makes us unique…") followed by the **solution** in CSM's voice. Reuse this pattern for any new service/offering copy.
- No emoji anywhere.

## VISUAL FOUNDATIONS
- **Palette:** a warm stone canvas (`#DAD7CE`) behind a paper-white content sheet (`#F2F0EA`/`#FBFAF6`), near-black ink (`#16151B`) for all text and every structural border, and exactly **one** accent — a deep indigo (`#241B6B`) — used hard (full-fill CTAs, active states, the services detail panel, the newsletter band). No gradients, no secondary accent hue.
- **Type:** Archivo Black, always uppercase, for every headline and card title — the system's "shout." Space Grotesk for all UI and body text. IBM Plex Mono appears exactly once, as a small credit-line stamp (e.g. "A PETRICHOR CLUSTER ENTITY") — never for UI chrome.
- **Corners:** always square. Radius is `0` everywhere, without exception — this is the single clearest brutalist signal in the system.
- **Borders:** a strict 3-tier system — thick (3px, ink) for the outer frame and major section dividers, thin (2px, ink) for internal grid lines, hairline (1px, warm grey) only inside list items. Borders are structural, not decorative.
- **Elevation:** no blurred shadows anywhere. Elevation is a solid offset duplicate of the ink border (`Xpx Xpx 0 ink`, zero blur/spread) — a hard, printed-poster kind of depth. Reserved for elements that visually "lift" (buttons, the detail panel, the newsletter card) — flat grid cells stay flush.
- **Hover states:** solid color invert, never a tint or opacity fade. Nav tabs and list rows flip to solid ink or solid indigo with white text on hover; buttons swap their own fill for the other accent.
- **Layout:** hard-bordered grids throughout — header, nav, audience cells, services/partnership grids, team gallery — every seam is a visible rule, nothing floats free. One full-bleed ink stat band breaks the rhythm once per page.
- **Imagery:** team photography desaturated by default (grayscale, slight contrast lift) with a soft indigo overlay wash; a duotone (indigo-tinted) treatment and a full-color treatment are both available as alternate options, applied uniformly across a whole grid, never mixed within one.
- **Motion:** none beyond instant hover-state color swaps and a simple slide-in drawer. No easing flourishes, no fades — consistent with the hard-edged, non-precious brutalist tone.
- **Corner case — the one "soft" element:** the drawer's scrim is a translucent black overlay (`rgba(22,21,27,.5)`) — the sole use of transparency in the system, reserved for temporarily dimming the page behind an overlay.

## ICONOGRAPHY
The source uses **no icon system** — no icon font, no SVG icon set. Its only glyphs are: the CSM diamond mark (`assets/diamond-indigo.png` / `diamond-ink.png`), the Petrichor endorsement mark (`assets/petrichor-mark.svg` / `-reverse.svg`), and plain typographic characters used as UI glyphs (→, ←, +, −, ✕). Keep it that way — if a new screen needs an icon, prefer a typographic character or a plain geometric shape over an icon font.

## Caveats / asks
- The UI kit abbreviates the 20-item real service catalog and 6-person team to a handful of entries — swap in the rest from `CSM Website Brutalist.dc.html`'s `SERVICES`/`TEAM` data when building real screens.
- I could not create a literal separate project — this design language lives in this same project, alongside the website drafts. If you'd like it split into its own project, use the Share menu to set this project's file type to **Design System**, or ask me to help move it once a fresh project exists.
- Component card previews (`*.card.html`) assume a generated bundle namespace of `window.CSMBrutalist` — if the compiler names it differently, tell me and I'll adjust the card scripts.
