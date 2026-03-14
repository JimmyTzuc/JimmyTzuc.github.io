# Jimmy Tzuc — Portfolio

Personal portfolio site built with React + Vite. Live at [jimmytzuc.com](https://jimmytzuc.com).

## Stack

- React 18
- Vite 5
- CSS Modules (no extra CSS framework)
- Geist + Cormorant Garamond fonts
- GitHub Pages for hosting

## Features

- Dark / light theme toggle
- Spanish / English language switch
- Fully responsive
- Zero runtime dependencies beyond React

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

### Option A — Automatic (recommended)

1. Push this repo to GitHub as `jimmytzuc/jimmytzuc.github.io` (or any repo).
2. Go to **Settings → Pages** and set source to **GitHub Actions**.
3. Every push to `main` auto-deploys via `.github/workflows/deploy.yml`.

### Option B — Custom domain (jimmytzuc.com)

1. Deploy via Option A first.
2. Go to **Settings → Pages → Custom domain** and enter `jimmytzuc.com`.
3. Add these DNS records at your domain registrar:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     jimmytzuc.github.io
```

4. Check "Enforce HTTPS" after DNS propagates (~10 min).

### Option C — Manual deploy

```bash
npm run deploy
```

This builds and pushes the `dist/` folder to the `gh-pages` branch automatically.

## Customization

All content (text, jobs, skills, certifications) lives in:

```
src/data/content.js
```

Edit that file to update any copy in both languages. No need to touch component files.

## Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # Auto-deploy
├── public/
├── src/
│   ├── components/
│   │   ├── Nav.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Certifications.jsx / .module.css
│   │   ├── CV.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   └── Section.module.css
│   ├── data/
│   │   └── content.js             # All text content (ES + EN)
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css                  # Global styles + theme variables
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
