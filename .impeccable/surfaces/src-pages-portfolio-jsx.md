---
version: 1
slug: "src-pages-portfolio-jsx"
primary_target: "src/pages/portfolio.jsx"
related_targets: []
---

# Surface brief: portfolio (single page)

Scope: the whole one-page portfolio at `/`. Visitor mode: Read, with a CV register.

Audience and job: anyone who wants to understand Jeffrey Rengifo's professional profile. No commercial goal. Proof is the published work: articles on elastic.co, certifications, awards, client projects.

Approved reference: `.impeccable/mocks/decision/src/d-sobria.html` (code-rendered mockup iterated with the user over five rounds). Required features live in `REQUIRED_FEATURES.md`.

## Direction contract

THESIS: A sober, professional curriculum page whose one distinctive mechanism is search: a site-wide search in the header and an article search, built by someone who works in search. It refuses the dark neon developer template and any governing metaphor (transit map, library catalog, build instructions were shown and rejected as too creative).

OWN-WORLD: White paper and a cool grey wash alternate by section. Near-black ink, one cobalt brand colour for links, active states and the user's own podium column, a rust dot for Observability Labs, a pale yellow search highlight. One neutral grotesque (Hanken Grotesk) at five weights, 400 to 800. Hairline rules, radii from 6 to 14px plus pills for chips, no cast shadows (the only box-shadows are the search focus ring and the transient arrival highlight), no gradients. A secondary dark theme re-values the same tokens: deep blue-grey ground, lighter cobalt, no glow.

STORY: The visitor reads who he is, sees that he writes for Elastic's official blogs, can verify every claim through a link, and can find any item by typing a word.

FIRST VIEWPORT: Sticky top bar with name, section links with scroll spy, language switch. Below, left column: name at display size, role line, a lead sentence with links to sections (no exact figures), three buttons (CV, LinkedIn, GitHub, all opening new tabs), then the site-wide search field with example terms. Right column: square portrait on a wash tile. Below 900px the portrait shrinks to a 76px tile beside the name so the buttons and the search stay on the first screen. The top bar also carries a light/dark switch.

FORM: The category standard (the standing exit), chosen by the user over the dealt hand, combined with the search mechanism from the catalog candidate. Seed key f2e46ef8. Code-led; no image generation in this session.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Claude (Anthropic) accreditations: the user has them and wants them listed; names, dates and links not yet provided.
- Vatio has no public URL, repository or image yet; it is listed without links by the owner's decision.
