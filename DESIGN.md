---
name: Jeffrey Rengifo Portfolio
description: A sober, single-page résumé site whose one distinctive mechanism is search.
colors:
  paper: "#ffffff"
  wash: "#f4f6f8"
  ink: "#14181f"
  ink-2: "#4a5361"
  ink-3: "#6b7482"
  ink-hover: "#2a313c"
  rule: "#dfe3e8"
  rule-2: "#c5ccd5"
  brand: "#1d4ed8"
  brand-wash: "#eaf0fe"
  obs: "#c2410c"
  hl: "#fde58a"
  photo-tile: "#f4f6f8"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.3
  lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  meta:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  control:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 600
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
rounded:
  md: "0.375rem"
  lg: "0.5rem"
  control: "10px"
  xl: "0.75rem"
  card: "14px"
  full: "9999px"
spacing:
  unit: "0.25rem"
  gutter: "22px"
  gutter-wide: "40px"
  section-top: "44px"
  section-bottom: "52px"
  section-top-wide: "64px"
  section-bottom-wide: "72px"
  rail: "240px"
  rail-gap: "56px"
  entry-aside: "150px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "46px"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "0 18px"
    height: "60px"
  search-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.xl}"
    padding: "6px 0 8px"
  search-option:
    padding: "9px 18px"
  search-option-selected:
    backgroundColor: "{colors.brand-wash}"
  highlight:
    backgroundColor: "{colors.hl}"
    padding: "0 2px"
  chip-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.full}"
    padding: "0 14px"
    height: "36px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  tag:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "2px 9px"
  top-bar:
    backgroundColor: "{colors.paper}"
    height: "68px"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.lg}"
    padding: "7px 12px"
  nav-link-hover:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
  nav-link-active:
    backgroundColor: "{colors.brand-wash}"
    textColor: "{colors.brand}"
  language-switch-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "4px 10px"
    height: "40px"
  theme-switch:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.lg}"
    size: "44px"
  theme-switch-hover:
    textColor: "{colors.ink}"
  menu-button:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0 12px"
    height: "44px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "22px"
  portrait:
    backgroundColor: "{colors.photo-tile}"
    rounded: "{rounded.card}"
    size: "220px"
  certificate-image:
    backgroundColor: "#ffffff"
    rounded: "{rounded.md}"
    width: "128px"
  podium-bar:
    backgroundColor: "{colors.rule}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.lg}"
  podium-bar-own:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.paper}"
---

# Design System: Jeffrey Rengifo Portfolio

This file records the visual system as it is built in `src/assets/css/tailwind.css`, `src/components/` and `src/sections/`. What the site is and who it is for lives in `PRODUCT.md`; the features every redesign must keep live in `REQUIRED_FEATURES.md`. Neither is repeated here.

## Overview

**Creative North Star: "The Searchable Résumé"**

The page is a well-set curriculum, and the only thing on it that behaves like a product is search. Everything else is deliberately ordinary: a white sheet and a cool grey wash that take turns section by section, near-black type, hairline rules, and a single cobalt that marks what is his and what is active. The North Star is a description, not a metaphor. Three themed directions (a transit map, a library catalog, assembly instructions) were shown and rejected as too creative, and the neon developer-portfolio template is the confirmed anti-reference.

Density is that of a document: a 1200px column, a 240px left rail that holds each section title while the content scrolls past it, text measures capped near 40em, and dates aligned in a 150px column. Hierarchy comes from size and weight inside one typeface, never from colour blocks, cards with glow, or imagery. The surface is flat: no cast shadows, no gradients, no entrance animation.

The two search fields carry the heaviest stroke on the page (1.5px ink, 60px tall). That weight is the one place the design raises its voice, and it is where the yellow highlight and the only overlay live.

Light is the default and the normative theme. A secondary dark theme re-values the same twelve colour tokens and changes nothing else: same layout, same type, same strokes, no glow. It is opt-in, set from the top bar or the `/dark` and `/light` search commands, and remembered between visits.

**Key Characteristics:**
- Paper and wash alternate strictly by section; anything placed on wash is paper with a hairline border.
- One typeface, Hanken Grotesk, at five weights (400 to 800); tabular figures everywhere.
- One accent, cobalt, reserved for links, focus, the current section and the author's own numbers.
- Rust and yellow are single-purpose signals: a 9px dot for Observability Labs, a highlighter for search matches.
- Hairline rules and tonal alternation do the work that shadows and cards would do elsewhere.
- Every colour is a token, so the light and dark themes are one design with two value sets.
- Motion is limited to 150ms state changes and one 2.2s highlight flash.

## Colors

A cold neutral ground with one saturated blue; two more hues exist, each with exactly one job. The values in parentheses and in the frontmatter are the light theme; the dark values are in the table below.

### Primary
- **Cobalt** (`brand`, #1d4ed8): the 2px underline of every text link and the link's hover colour; the focus outline; the active item in the top bar; the search caret and the search field's focused border; the three headline figures in Articles; the author's own podium column, avatar ring and name; the Search Labs dot.
- **Cobalt Wash** (`brand-wash`, #eaf0fe): the tint behind cobalt states: active nav item, hovered or keyboard-selected search option, and the 4px focus ring around a search field.

### Secondary
- **Rust** (`obs`, #c2410c): the 9px dot that labels an Observability Labs article. It appears nowhere else.

### Tertiary
- **Highlighter Yellow** (`hl`, #fde58a): the background of a search match (`<mark>`), the flash that points at the item a search result led to, and the text selection colour.

### Neutral
- **Paper** (`paper`, #ffffff): page background, the untinted sections, the top bar, and every surface that sits on wash (podium frame, certification cards, search field, results panel, secondary buttons, filter chips). Also the text colour on ink and cobalt fills.
- **Cool Grey Wash** (`wash`, #f4f6f8): the tinted sections (Areas, Articles, Certifications, Videos), the hover background of nav links.
- **Photo Tile** (`photo-tile`, #f4f6f8): the tile behind the portrait. It equals wash in the light theme and is a muted light grey in the dark theme, because the photo is multiplied onto it.
- **Near-Black Ink** (`ink`, #14181f): all primary text; the fill of the primary button, the active filter chip and the active language; the 1.5px border of the search field and its panel; the 3px rule above each headline figure.
- **Slate Ink** (`ink-2`, #4a5361): secondary text: metadata, dates, descriptions, tags, inactive nav items, the search and theme icons, the position numbers on the other podium columns. 7.8:1 on paper and 7.2:1 on wash.
- **Muted Ink** (`ink-3`, #6b7482): placeholder text in the search fields, 4.7:1 on paper. It has no other use.
- **Ink Hover** (`ink-hover`, #2a313c): the fill and border of the primary button while hovered.
- **Hairline** (`rule`, #dfe3e8): section dividers, entry dividers, list rows, the top bar's bottom edge and card borders; the placeholder behind article covers, video thumbnails and product images; the podium columns that are not the author's.
- **Control Grey** (`rule-2`, #c5ccd5): borders of quiet controls (secondary button, filter chip, tag, language switch, theme and menu buttons, keyboard hint), bullet markers, the underline of example search terms and the scrollbar thumb. It measures 1.6:1 on paper, so every control drawn with it also carries a text label or an icon.

### Dark theme (secondary)
The same tokens, re-valued under `:root[data-theme="dark"]` in `src/assets/css/tailwind.css`. Roles are unchanged; only the values move.

| Token | Light | Dark | Note in dark |
|---|---|---|---|
| `paper` | #ffffff | #11151b | Deep blue-grey ground. |
| `wash` | #f4f6f8 | #171c24 | Slightly lighter than paper, so tinted sections lift and paper cards on them read as darker insets. |
| `ink` | #14181f | #e9ecf0 | 15.5:1 on paper. Primary buttons and active chips become light fills with dark text. |
| `ink-2` | #4a5361 | #a7b0bd | 8.4:1 on paper. |
| `ink-3` | #6b7482 | #8791a0 | 5.7:1 on paper. |
| `ink-hover` | #2a313c | #ffffff | The primary button brightens on hover instead of lightening. |
| `rule` | #dfe3e8 | #262d38 | |
| `rule-2` | #c5ccd5 | #414c5c | 2.1:1 on paper. |
| `brand` | #1d4ed8 | #8aabff | Lighter cobalt, over 8:1 on paper; text on it is dark. |
| `brand-wash` | #eaf0fe | #1a2540 | |
| `obs` | #c2410c | #f0895a | |
| `hl` | #fde58a | #5a4a08 | Dark ochre. Marked text is always `ink`, even inside muted text, so it keeps its contrast in both themes. |
| `photo-tile` | #f4f6f8 | #b4bcc8 | A light tile in the dark theme, so the multiplied portrait is not a white square. |

How the theme is applied:
- `src/lib/theme.js` sets `data-theme` on the root element, stores the choice in `localStorage` under `theme`, and updates the `theme-color` meta tag to the paper value of the active theme.
- An inline script in `index.html` applies a saved dark choice before first paint. With nothing saved the page is light; the operating-system preference is not consulted.
- The dark block also sets `color-scheme: dark`, so native scrollbars and form controls follow.
- A `dark:` variant exists for behaviour that cannot be expressed as a token value, never for colours. Its only use is `dark:brightness-90` on images with a white ground (article covers, certificate images, the podium avatar), so they do not glare.

Two things deliberately do not change with the theme: certificate images sit on literal white (`bg-white`) because the documents themselves are white, and video thumbnails and product images are shown as they are.

### Named Rules
**The Token-Only Rule.** Components never set a colour directly: no hex, no `white` or `black`, no per-theme colour utilities. Every colour is one of the twelve tokens, which is what keeps the two themes in step. The single exception is the white ground behind certificate images.

**The Alternation Rule.** Sections alternate paper and wash in page order, without exception. A surface placed on wash is paper with a 1px hairline border; there is no third background tint.

**The One Cobalt Rule.** Cobalt marks what is his or what is active: a link, the focused control, the current section, his own figures and his podium column. Nothing decorative is cobalt.

**The Highlighter Rule.** Yellow means "search found this" and nothing else: match marks, the flash on arrival, and selection.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Hanken Grotesk (same stack)
**Label/Mono Font:** none; the keyboard hint and the slash commands are also set in Hanken Grotesk.

**Character:** One neutral grotesque does every job. The page reads as a typeset document because hierarchy is built from weight (400, 500, 600, 700, 800) and a wide size range, not from a second family. The font is loaded from Google Fonts in `index.html` with `display=swap`.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 6vw, 4.75rem)`, line-height 1, tracking -0.03em): the name in the intro. One per page.
- **Figure** (800, 3.75rem, line-height 1, -0.03em, cobalt): the three headline numbers in Articles. The award rank is the same voice in ink at 64px with line-height 0.95.
- **Headline** (800, 1.875rem, line-height 1.25, -0.02em): section titles in the left rail, and the podium position numbers. Award event names sit just under it at 28px.
- **Title** (700, 22px, line-height 1.3, -0.01em): entry titles in Experience and Projects, including own products; certification names use the same size at 800.
- **Subtitle** (700, 19px, line-height 1.3): area titles, article titles, sub-section headings ("Courses and training", "Own products", the article search heading), the podium caption.
- **Lead** (400, 1.25rem, line-height 1.4): the intro paragraph (in slate ink, capped at 34em) and the contact sentence. The role line above it is 1.5rem at 500 with line-height 1.35.
- **Body** (400, 1.125rem, line-height 1.55): the document default, set on `body`. Paragraphs and bullet lists are capped between 34em and 40em.
- **Meta** (400, 1rem, line-height 1.5, slate ink): counts, notes under figures, the example search terms, footer, nav links (500, 600 when active).
- **Control** (600, 16.5px): button labels, video titles, the "see all matching articles" row; entry dates use the size at 500.
- **Label** (600, 15px): language codes (the only uppercase text on the page) and the menu button. Tags use 15px at 500, filter chips 15.5px at 600.

### Named Rules
**The One Family Rule.** Every glyph is Hanken Grotesk. A new level of hierarchy is a change of weight or size, never a second typeface.

**The Tightening Rule.** Negative tracking is tied to size: -0.01em at 22px, -0.02em at 28 to 30px, -0.03em at 60px and above. Text below 22px is never tracked.

**The Tabular Rule.** `font-variant-numeric: tabular-nums` is set on `body`, so dates, counts and figures align wherever they appear.

## Layout

A single centred column, 1200px at most, with 22px gutters that become 40px at `wide`. Vertical rhythm uses Tailwind's 4px unit with a number of literal pixel values on top.

**Breakpoints.** Two belong to the theme: `wide` (56.25rem, 900px), where the page becomes two-column, and `nav` (66.25rem, 1060px), where the top bar has room for every section link. Two Tailwind defaults are used once each: `sm` (40rem, 640px) and `md` (48rem, 768px).

- **Section frame.** Every section opens with a hairline and uses a two-column grid from `wide`: a 240px rail for the title and a fluid content column, 56px apart. The title is sticky at 104px, so it stays beside its content. Below `wide` the title stacks above the content with a 20px gap. Padding is 44px top and 52px bottom, growing to 64px and 72px.
- **Intro.** From `wide`: a text column plus a 220px square portrait, 64px apart, with 76px above and 72px below. Below `wide` the portrait becomes a 76px tile beside the name, the buttons tighten (8px gaps, 14px padding, a shorter résumé label without its icon) and the padding drops to 28px and 48px, so the buttons and the search stay on the first screen.
- **Dated entries.** A 150px column for the date, rank or product image and a fluid column for the detail, 28px apart, each entry separated by a hairline with 26px of padding (30px in Awards). Below `wide` the left column stacks above.
- **Grids.** Areas and the headline figures: three columns from `wide`. Articles: one column, two from `sm`, three from `wide`, gaps of 24px by 34px. Videos: two columns, four from `wide`. Certification cards: two columns from `md`. Courses are rows between hairlines.
- **Top bar.** Sticky, 68px tall. Section links collapse into a labelled "Menu" button below `nav`; the menu opens as a stacked list inside the bar. `scroll-padding-top` is 6rem so anchored sections clear the bar.
- **Search.** The site search is capped at 760px wide. Its results panel is absolutely positioned 8px under the field and never pushes the page. The panel's height is computed from the space left under the field (viewport height minus the field's bottom edge minus 32px, never less than 220px); when less than 440px is free, the page first scrolls the field up to 84px from the top.
- **Tap targets.** Buttons are 46px tall, the theme and menu buttons 44px, language buttons 40px. Filter chips are 44px below `wide` and 36px from `wide`.

## Elevation & Depth

The system is flat. Depth is conveyed by three things: the paper and wash alternation, 1px hairlines, and stroke weight. The one overlay on the page, the search results panel, separates from the content beneath it with a 1.5px ink border on a paper fill, not with a shadow. The top bar is solid paper with a hairline under it. Stacking is plain z-index: results panel 20, top bar 30, skip link 50.

`box-shadow` appears twice, both times as a zero-blur spread used as a ring: the 4px cobalt-wash focus ring on a search field, and the 14px yellow halo of the arrival flash. The dark theme adds no glow and no shadow; it relies on the same borders and the same alternation.

### Named Rules
**The No Cast Shadow Rule.** Nothing casts a blurred or offset shadow, in either theme. `box-shadow` is allowed only as a zero-blur spread ring for focus or highlight.

**The Ink Border Rule.** What must stand above the page is outlined in ink at 1.5px. Only the search field and its results panel use this stroke.

## Shapes

Softly rounded rectangles on a short ladder, with radius tied to the size of the object:

- 6px (`rounded.md`): small inline objects: tags, the keyboard hint, the inner buttons of the language switch, professional certificate images, product images, the flash highlight.
- 8px (`rounded.lg`): nav links, the language switch frame, the theme and menu buttons, the skip link, the top corners of podium columns.
- 10px (`rounded.control`): buttons, article covers and video thumbnails.
- 12px (`rounded.xl`): the search field and its results panel.
- 14px (`rounded.card`): framed surfaces: the podium, certification cards, the portrait tile.
- Pill (`rounded.full`): filter chips, the lab dot and the podium avatar.

Nested radii step down by the padding between them (the language switch is 8px outside, 2px padding, 6px inside). Search marks use 2px; course thumbnails and the default focus outline use 4px.

Strokes are 1px by default, 1.5px ink for the search field and panel, 2px for link underlines (offset 4px) and the focus outline (offset 3px), and 3px for the rule above each figure and the ring around the podium avatar. Icons are inline SVG line icons on a 24px grid with a 2.4 stroke and round caps and joins, coloured by `currentColor`; there are six (search, download, menu, close, sun, moon), drawn at 16 to 22px.

## Components

Controls are quiet and rectangular; only the search field is heavy.

### Buttons
- **Shape:** gently rounded (10px), 46px tall, 18px horizontal padding, 1px border, label at 16.5px and 600; an optional 17px icon sits 8px before the label.
- **Primary:** ink fill, ink border, paper label. Used once per group: the résumé download in the intro, "Copy email" in Contact.
- **Secondary:** paper fill, control-grey border, ink label. LinkedIn, GitHub, "Show all".
- **Hover / Focus:** primary fill and border move to `ink-hover`; secondary border darkens to ink. Colour transitions take 150ms. Focus is the global outline: 2px cobalt, 3px offset.
- **Links as buttons:** `ButtonLink` gives an anchor the same appearance; external ones always open in a new tab.

### Text links
- 600 weight, ink text, a 2px cobalt underline offset 4px; on hover the text turns cobalt. Inside slate paragraphs the link is forced to ink so it reads as the darker thing.
- Example search terms are a quieter variant: 500 weight with a control-grey underline that turns cobalt on hover.

### Chips
- **Filter chips:** pills with 14px side padding, 15.5px at 600, 36px tall from `wide` and 44px below. Unselected: paper fill, control-grey border, slate text; hover darkens border and text to ink. Selected: ink fill with paper text, exposed with `aria-pressed`.
- **Tags:** static labels, 6px radius, control-grey border, no fill, 15px at 500 in slate, 2px by 9px padding.
- **Language switch:** a two-button segmented control in an 8px frame, each button at least 40px tall; the current language is ink with paper text, the other is slate.
- **Theme switch:** a 44px square icon button with an 8px radius and a control-grey border; a slate moon in the light theme and a sun in the dark one. Hover darkens icon and border to ink. Its accessible name states the action ("Switch to dark mode").

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** paper, and only on wash sections.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** 1px hairline.
- **Internal Padding:** 22px; the podium frame uses 26px top and 20px sides, 30px from `wide`.
- Most content is not carded at all: entries, products and courses are rows separated by hairlines.

### Images
- **Portrait:** a wash tile with 14px corners. The photo has a white background and is multiplied onto the tile so the tile colour shows through. The tile is `photo-tile`: wash in the light theme, a muted light grey in the dark theme.
- **Professional certificates:** 128px wide, 4:3, shown whole (`object-contain`) on white with a hairline border and a 6px radius, beside the certification's name, metadata and credential link.
- **Course thumbnails:** 72px wide, uncropped, on white with a hairline border and a 4px radius.
- **Product images:** 150px wide at 40:21 with a 6px radius, filling the entry's left column. A product without an image leaves the column empty.
- **Article covers and video thumbnails:** 16:9, 10px radius, cropped to fill, with a hairline-grey placeholder while loading.

### Inputs / Fields
- **Style:** one field, shared by the site search and the article search: 60px tall, 12px radius, 1.5px ink border, paper fill, 18px side padding; a 22px slate search icon; text at 1.25rem and 600; placeholder at 500 in muted ink. The site search shows a "/" keyboard hint in a trailing slot from `wide`. The article search keeps its live result count outside the field, in the heading row above it.
- **Focus:** the border turns cobalt and a 4px cobalt-wash ring appears; the caret is cobalt.
- **Error / Disabled:** not present. An empty result is a sentence in slate ink.

### Navigation
- **Top bar:** sticky, 68px, solid paper with a hairline bottom border. Name at 1.125rem and 700 on the left; on the right, section links, the language switch, the theme switch and (below `nav`) the menu button.
- **Links:** 1rem at 500 in slate, 8px radius, 7px by 12px padding. Hover: wash fill and ink text. Current section (scroll spy): cobalt-wash fill, cobalt text, 600 weight, `aria-current`.
- **Mobile:** a 44px bordered button with an icon and the word "Menu" or "Close"; the list opens inside the bar with 1.125rem links and closes on Escape or on choosing a link.

### Search results panel (signature)
The site search opens a listbox under the field: paper fill, 1.5px ink border, 12px radius, thin scrollbar. Results are grouped by section; each group has a 14.5px bold slate label with its count on the right. An option is a row with 9px by 18px padding: a 17.5px bold title with matches marked in yellow, an optional right-aligned meta, and a one-line slate excerpt. The first option is always preselected, so Enter acts at once; hover and keyboard selection both use the cobalt-wash fill. Typing `/` swaps the groups for the command list: from `wide` each command is a single line, its name in a 190px column and its description beside it; below `wide` the description wraps under the name. Choosing an internal result scrolls to the element and flashes it yellow. A command's confirmation replaces the example terms under the field for five seconds.

### Headline figures (signature)
Three figures at the top of Articles, each under a 3px ink rule: the number in cobalt at figure size, a bold label (18.5px), and a slate note that states the source or cut-off date.

### Podium (signature)
A paper frame holding three columns in the order second, first, third. Column height is proportional to the article count, the tallest being 150px. The author's column is cobalt with a paper position number, topped by a 64px avatar ringed in cobalt and his name in cobalt; the other two are hairline grey with slate numbers.

### Article and video cards
The whole card is one link without a frame: a 16:9 cover, a slate meta line led by the 9px lab dot (cobalt for Search Labs, rust for Observability Labs), and a 19px bold title. On hover the cover drops to 85% opacity and the title gains a 2px underline. While searching, a slate excerpt appears only when the match is not in the title.

### Motion
State changes (colour, border, opacity, focus ring) take 150ms on Tailwind's default curve, `cubic-bezier(0.4, 0, 0.2, 1)`. The arrival flash lasts 2.2s: it holds yellow for the first 35% and then fades out. Under `prefers-reduced-motion` the flash keeps the highlight for its full duration and drops the fade, and anchor scrolling becomes instant. Switching theme is immediate. There is no entrance, scroll-driven or decorative animation.

## Do's and Don'ts

### Do:
- **Do** set every colour with a token utility (`bg-paper`, `text-ink-2`, `border-rule`), and check new work in both themes.
- **Do** alternate paper and wash for every new section, and put a 1px hairline (`rule`) at its top edge.
- **Do** place new content in the section frame: title in the 240px rail, content in the fluid column, text capped near 40em.
- **Do** build hierarchy from Hanken Grotesk's weights and the existing size roles before adding a new size.
- **Do** keep cobalt for links, focus, the current section and the author's own numbers.
- **Do** separate items with hairlines and spacing; reach for a bordered paper card only on a wash section.
- **Do** give every control drawn with the control-grey border a visible label or icon, because that border alone is 1.6:1 on paper.
- **Do** keep the global focus outline (2px cobalt, 3px offset) on every interactive element, and keep touch controls at 40px or taller below `wide`.
- **Do** mark search matches with `<mark>` in highlighter yellow and reuse the flash to point at where a result led.
- **Do** use the named breakpoints (`sm`, `md`, `wide`, `nav`) instead of literal widths.

### Don't:
- **Don't** write a hex value, `white`, `black` or a `dark:` colour utility in a component; re-value the token in both theme blocks instead.
- **Don't** treat the dark theme as a second design: no glow, no neon accent, no gradient, no layout or type change. It is the same sheet with different values.
- **Don't** add cast shadows, glows or gradients to any surface.
- **Don't** introduce a second accent colour, or use rust or yellow outside their single jobs.
- **Don't** add a second typeface, including a monospace for commands or keyboard hints.
- **Don't** give the page a governing metaphor or theme; the transit map, library catalog and assembly-instruction directions were rejected.
- **Don't** add entrance or scroll animations; motion stays at 150ms state changes and the search flash.
- **Don't** let search results transform the page; they stay in the panel under the field.
- **Don't** use the 1.5px ink border for anything that is not search.
