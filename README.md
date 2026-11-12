# Portfolio — Jeffrey Rengifo

Personal portfolio and curriculum, published at [jeffrm.com](https://jeffrm.com).

### Built with

- React 19 + Vite 6
- Tailwind CSS v4
- i18next (EN / ES)

### Author

- LinkedIn: [Jeffrey Rengifo](https://www.linkedin.com/in/jeffrey-rerin/)
- GitHub: [Delacrobix](https://github.com/Delacrobix)

---

## Running it

```bash
yarn install
cp .env.example .env   # set VITE_ARTICLES_API_URL
yarn dev
```

## Data

Articles, their combined views and the Search Labs top authors come from the articles API. The site starts from a bundled copy in `src/data/labs-cache.json` and replaces it when the API answers, so it keeps working if the API is down. Refresh that copy before deploying:

```bash
yarn refresh-cache
```

Videos are listed in `src/data/videos.json`.

## Résumé

The one-page résumé PDFs (English and Spanish) are generated from the same content the site shows. After changing that content, regenerate them (needs Google Chrome):

```bash
yarn build-resume
```

## Documents

| File | Purpose |
|------|---------|
| `REQUIRED_FEATURES.md` | Features and content rules every redesign must keep |
| `PRODUCT.md` | What the site is and who it is for |
| `DESIGN.md` | The current visual system |
| `CLAUDE.md` | Structure and conventions for working on the code |
