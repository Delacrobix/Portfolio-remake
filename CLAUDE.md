# Portfolio - Jeffrey Rengifo

## Description

Personal portfolio and curriculum website deployed on GitHub Pages (https://jeffrm.com). It is a single page with these sections: introduction with a site-wide search, areas of work, experience, articles, awards, certifications, projects, videos and contact.

Read these before changing the site:

- `REQUIRED_FEATURES.md`: features and content rules every redesign must keep.
- `PRODUCT.md`: what the site is and who it is for.
- `DESIGN.md`: the current visual system.

## Tech Stack

- **Bundler:** Vite 6
- **Framework:** React 19
- **Styling:** Tailwind CSS 4, with design tokens in `src/assets/css/tailwind.css`
- **Internationalization:** i18next + react-i18next (English / Spanish)
- **Package Manager:** Yarn
- **Deployment:** GitHub Pages (gh-pages)

There is no UI library, router or icon package. Components are written with Tailwind utilities.

## Project Structure

```
src/
├── assets/         # Tailwind CSS entry, fonts, images
├── components/     # Reusable components (TopBar, SiteSearch, Podium, Section, ...)
├── config/         # i18n setup and site constants (links, sections, search keywords)
├── data/           # Bundled fallback data (labs-cache.json) and videos
├── hooks/          # Data and search hooks (useLabsData, useSiteIndex, ...)
├── languages/      # Translation files (en.json, es.json): all page copy lives here
├── lib/            # Pure helpers (search, formatting, DOM, Markdown profile)
├── pages/          # Page components (portfolio.jsx)
├── sections/       # Page sections (intro, experience, articles, ...)
├── App.jsx         # Root component
└── index.jsx       # Entry point
scripts/            # refresh-cache.mjs, build-resume.mjs
vite.config.js      # Vite configuration (project root)
```

## Commands

- `yarn dev` - Start Vite dev server
- `yarn build` - Production build (output: build/)
- `yarn preview` - Preview production build locally
- `yarn refresh-cache` - Refresh the bundled copy of articles, views and top authors from the API
- `yarn build-resume` - Regenerate the one-page résumé PDFs (EN and ES) from the site content; needs Chrome
- `yarn deploy` - Build and deploy to GitHub Pages

## Conventions

- Components use the `.jsx` extension; hooks and helpers use `.js`
- Section components are in `src/sections/`, reusable components in `src/components/`
- Every section is wrapped in `Section`, which renders its title from `nav.<id>` and sets the element `id` used by the menu and the search
- Page copy is never hard-coded: add it to both `src/languages/en.json` and `src/languages/es.json`
- Links that leave the site use `ExternalLink` or `ButtonLink external`, so they always open in a new tab
- Colors, font and breakpoints are Tailwind theme tokens (`bg-wash`, `text-ink-2`, `text-brand`, `wide:`); do not hard-code new colors in components
- Articles, views and top authors come from the articles API (`VITE_ARTICLES_API_URL`) through `useLabsData`, which starts from `src/data/labs-cache.json` so the page works when the API is down
- Anything the site search should find is added in `useSiteIndex`; slash commands are defined in `useSiteCommands`
- The résumé PDFs in `public/` (`jeffrey-rengifo-cv-en.pdf`, `jeffrey-rengifo-cv-es.pdf`) are generated and keep plain, stable URLs; change the content in `src/languages/` and run `yarn build-resume` instead of editing them
- The typeface is self-hosted (`src/assets/fonts`), there is a secondary dark theme (`src/lib/theme.js`) and a print layout (`print:` utilities plus the print block in `tailwind.css`)
- Environment variables use the `VITE_` prefix (accessed via `import.meta.env`)
