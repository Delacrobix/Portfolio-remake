# Portfolio - Jeffrey Rengifo

## Description

Personal portfolio website deployed on GitHub Pages (https://Delacrobix.github.io/). It's a single-page application that showcases sections for: About Me, Experience, Projects, Awards, Articles, Videos, Certifications, Tools, and Contact.

## Tech Stack

- **Bundler:** Vite 6
- **Framework:** React 19
- **Routing:** React Router DOM v7
- **UI Library:** HeroUI v2 (formerly NextUI)
- **Styling:** Tailwind CSS 4 + SASS
- **Animations:** Framer Motion
- **Icons:** FontAwesome (via react-fontawesome)
- **Internationalization:** i18next + react-i18next (English / Spanish)
- **Package Manager:** Yarn
- **Deployment:** GitHub Pages (gh-pages)

## Project Structure

```
src/
├── assets/         # CSS (Tailwind config), SASS, images, and static files
├── components/     # Reusable components (SVG icons, language switch, etc.)
├── config/         # i18n configuration
├── data/           # Cached data (articles)
├── hooks/          # Custom hooks (useIsMobile, useToast)
├── languages/      # Translation files (en.json, es.json)
├── pages/          # Page components (portfolio.jsx)
├── sections/       # Page sections (intro, header, footer, aboutMe, etc.)
├── App.jsx         # Root component with routes
└── index.jsx       # Entry point
hero.ts             # HeroUI Tailwind plugin config (project root)
vite.config.js      # Vite configuration (project root)
```

## Commands

- `yarn dev` - Start Vite dev server
- `yarn build` - Production build (output: build/)
- `yarn preview` - Preview production build locally
- `yarn deploy` - Build and deploy to GitHub Pages

## Conventions

- Components use `.jsx` extension
- Section components are in `src/sections/`, reusable components in `src/components/`
- SVG icons are individual JSX components exported from `src/components/svg/svgExports.jsx`
- Navigation between sections uses refs and `scrollIntoView`
- Translations are in `src/languages/{en,es}.json`
- Environment variables use `VITE_` prefix (accessed via `import.meta.env`)
- Tailwind v4 config is CSS-based in `src/assets/css/tailwind.css` (no tailwind.config.js)
- HeroUI plugin is configured in `hero.ts` at project root
