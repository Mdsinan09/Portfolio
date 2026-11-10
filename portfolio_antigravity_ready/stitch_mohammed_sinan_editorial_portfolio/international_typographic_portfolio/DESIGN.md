---
name: International Typographic Portfolio
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474a'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#75777a'
  outline-variant: '#c5c6c9'
  surface-tint: '#5e5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1c1d'
  on-primary-container: '#848485'
  inverse-primary: '#c7c6c7'
  secondary: '#574cc6'
  on-secondary: '#ffffff'
  secondary-container: '#8d83ff'
  on-secondary-container: '#220294'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1f'
  on-tertiary-container: '#838488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e2e3'
  primary-fixed-dim: '#c7c6c7'
  on-primary-fixed: '#1b1c1d'
  on-primary-fixed-variant: '#464748'
  secondary-fixed: '#e4dfff'
  secondary-fixed-dim: '#c5c0ff'
  on-secondary-fixed: '#140067'
  on-secondary-fixed-variant: '#3f30ad'
  tertiary-fixed: '#e2e2e6'
  tertiary-fixed-dim: '#c6c6ca'
  on-tertiary-fixed: '#1a1c1f'
  on-tertiary-fixed-variant: '#45474a'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Inter
    fontSize: 4.5rem
    fontWeight: '500'
    lineHeight: 4.75rem
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Inter
    fontSize: 2.75rem
    fontWeight: '500'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: 2.85rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.1rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.1rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.6rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.35rem
    letterSpacing: 0em
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the rigor of the Swiss International Typographic Style fused with modern editorial restraint. Designed for Mohammed Sinan’s portfolio, the aesthetic prioritizes structural purity, generous negative space, uncompromising grid alignment, and micro-refined details.

The brand personality is authoritative, contemplative, and impeccably organized. The UI evokes the tactile calm of an archival publication or architectural monograph: quiet confidence, intentional pacing, and frictionless focus on curated work. 

Key attributes:
- **Style Archetype:** Swiss Modernist / Editorial Minimalism.
- **Visual Rhythm:** Structured asymmetry, crisp hairline dividers, tabular numerals, and expansive white space.
- **Interaction Ethos:** Direct, precise kinetic feedback with deliberate card-flip reveals that mirror turning heavy archival paper plates.

## Colors

The palette relies on subtle chromatic temperature to evoke museum-grade uncoated paper and deep mineral inks. 

- **Canvas & Backgrounds:** The base canvas is `#FBFBFA` (warm ivory) with secondary structural containers shifting to `#F7F6F2` (bone).
- **Ink & Contrast:** Primary text, titles, and active silhouettes utilize `#121314` (carbon charcoal), paired with `#1C1D1F` for primary surface inversions.
- **Supporting Neutral:** `#6E6F73` (stone grey) handles meta-information, secondary text, and inactive states without muddying the typographic rhythm.
- **Accents:** `#7E74F0` serves as a disciplined, surgical accent—never dominant, applied strictly to focus rings, interactive states, key tags, and index highlights. Tint `#EDEBFD` provides delicate pill container fills.
- **Architectural Lines:** Hairlines, dividing rails, and bounding edges use `#E4E3DD` (light) and `#ECEBE6` (subtle inner division).

## Typography

Typography functions as the primary visual architecture. 

- **Primary Typeface (Inter):** Deployed for all running copy, headings, and case study documentation. Scaled tightly with negative tracking at large sizes to capture an authentic neo-grotesque structural density.
- **Secondary Monospace (JetBrains Mono):** Reserved exclusively for indices, section counters (`01/`, `02/`), publication dates, technical specifications, and metadata markers.
- **Type Setting Rules:** Strict flush-left, rag-right formatting for prose. No justified body copy. Display headings prioritize strict structural balance over line-wrapping convenience.

## Layout & Spacing

The layout model is anchored to a 12-column Swiss modular grid on desktop (breakpoint: 1024px+), an 8-column layout on tablet (768px–1023px), and a 4-column layout on mobile (below 768px).

- **Grid Disciplines:** Grid rails are often marked by literal 1px hairline dividers (`#E4E3DD`). Asymmetric column spans (e.g., 4 columns for metadata, 8 columns for content) define index tables and project profiles.
- **Rhythm & Empty Canvas:** Spacing tokens (`space-xs` through `space-xl`) govern tight internal grouping, while root margins (`margin`) enforce architectural frame boundaries. Negative space is treated as an active material element rather than void.

## Elevation & Depth

This system intentionally rejects heavy diffuse dropshadows in favor of tonal plane separation, crisp borders, and mechanical depth.

- **Primary Planes:** Depth is achieved by placing `#F7F6F2` surface cards directly over `#FBFBFA` root canvas, bounded by a 1px solid border in `#E4E3DD`.
- **Card-Flip Depth:** Interactive two-sided modules utilize 3D spatial transforms (`perspective: 1200px`). When flipped, the reverse face takes on an inverted carbon background (`#121314`) with pale ivory typography and subtle lavender hairlines, signaling an alternate layer of context.
- **Hover Transitions:** Hovered elements shift tonal values or invoke micro-offsets rather than lifting on shadow clouds. If an interactive tile needs distinct lift, use an ultra-crisp hairline outline glow: `0 0 0 1px #7E74F0`.

## Shapes

The design system adopts a strict, unapologetic sharp geometry (`roundedness: 0`). 

- **Corner Radii:** Absolute 0px corner radii across buttons, cards, tags, input frames, and media containers. This reinforces the Swiss modernist ethos of structural grid lines and architectural edges.
- **Exceptions:** No rounded pills or circular tags. Badges and chips remain clean rectangular modules bounded by 1px borders.

## Components

### Buttons
- **Primary:** Solid `#121314` background, `#FBFBFA` text, sharp 0px corners, uppercase or sentence case set in `label-mono-sm`. Hover transitions to `#7E74F0` background with instantaneous micro-color shifts.
- **Secondary / Ghost:** Transparent background, 1px solid `#E4E3DD` border, `#121314` text. On hover, background shifts to `#EDEBFD` with `#7E74F0` border.
- **Text Action:** Monospaced label paired with an arrow ligature (`->`), shifting right by 4px on hover.

### Card-Flip Panels
- **Container:** Two-sided card component maintaining a strict aspect ratio (e.g., 4:5 or 16:10). Preserves 3D transform on hover or explicit toggle trigger.
- **Front Face:** Ivory `#FBFBFA` or Bone `#F7F6F2` background, 1px hairline `#E4E3DD` border. Contains primary visual media, project index numbers (`01`, `02`), and primary headline.
- **Back Face:** Inverted to Charcoal `#121314` surface, containing detailed project specifications, role taxonomy, technical stack in `label-mono-sm`, and lavender action links.

### Metadata Chips & Badges
- **Form:** Strict rectangles with 1px border in `#E4E3DD` or faint background `#EDEBFD`.
- **Typography:** `label-mono-sm` in `#121314` or `#7E74F0`. Padding: `space-xs` vertical, `space-sm` horizontal.

### Lists & Index Tables
- **Format:** Hairline-divided rows (`border-bottom: 1px solid #E4E3DD`).
- **Columns:** Monospace index numbers left-aligned (`01`, `02`), followed by project title in `headline-sm`, category taxonomy in stone grey `#6E6F73`, and year/status flush-right in `label-mono-sm`.
- **Hover State:** Row background transitions to `#F7F6F2`, title text indents by 6px with smooth cubic-bezier easing.

### Input Fields
- **Form:** Unfilled, minimal baseline or full 1px `#E4E3DD` rectangular perimeter. Background is `#FBFBFA`.
- **Focus:** Crisp 1px active ring in `#7E74F0` with no soft ambient glow. Monospaced placeholder labels in `#6E6F73`.

### Interactive Project Spec Sheets (Bespoke)
- Collapsible technical drawer docked at the grid bottom, listing typography specs, release dates, and project coordinates in `label-mono-sm`, styled like an architectural drawing revision block.