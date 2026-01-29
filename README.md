# Abdul Rehman — DevOps / Cloud Engineer Portfolio

A professional, dark-themed portfolio with animations, multi-page layout, and contact form. Built for senior DevOps, cloud architect, and AI infrastructure roles. Next.js 14 (static export), Tailwind CSS, TypeScript. SEO-optimized; ready for Netlify, Vercel, or GitHub Pages.

## Features

- **Home:** Hero (photo, tagline), About, Skills (Cloud, DevOps, AI/ML Ops, Blockchain, CI/CD), Experience, Projects (problem/solution/impact)
- **Contact:** Dedicated page with form (Name, Email, Subject, Message); submit opens mailto to abdulrehman.devops@gmail.com
- **WhatsApp:** Fixed floating button linking to 0303-9692131 (wa.me)
- **Animations:** Scroll-reveal (fade-in-up), hover on cards/buttons, focus styles on form inputs
- **SEO:** Meta tags, semantic HTML, aria labels

## Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Inter, JetBrains Mono (Google Fonts)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**If `npm` is not recognized** (Node.js is installed but not on PATH), use the full path in PowerShell:

```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

Or add Node to your [system PATH](https://nodejs.org/) and restart the terminal.

## Build for production (static export)

```bash
npm run build
```

Output is in the `out` folder. Serve with any static host.

## Deploy

### Netlify

- Connect the repo; build command: `npm run build`
- Publish directory: `out`
- Or add `netlify.toml` (included) and push.

### Vercel

- Import the repo; Vercel detects Next.js. For static export, `output: 'export'` is already set in `next.config.js`. Build and deploy.

### GitHub Pages

1. Set `basePath` in `next.config.js` to your repo name if using `username.github.io/repo-name`, e.g. `basePath: '/Portfolio'`.
2. Run `npm run build` and push the `out` folder to a `gh-pages` branch, or use a GitHub Action to build and deploy from `out`.

## Profile photo

The hero uses `public/profile.png`. A copy of your photo is set from `IMG_3213 (1).png`. To update, replace `public/profile.png` with your current headshot.

## Project structure

```
├── public/
│   └── profile.png
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   ├── layout.tsx   # Contact page metadata
│   │   │   └── page.tsx     # Contact form (mailto)
│   │   ├── globals.css
│   │   ├── layout.tsx       # Metadata, fonts, WhatsApp button
│   │   └── page.tsx         # Home: Hero, About, Skills, Experience, Projects
│   ├── components/
│   │   ├── Nav.tsx          # Multi-page + anchor links
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx       # Cloud, DevOps, AI/ML, Blockchain, CI/CD
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx     # Problem / solution / impact
│   │   ├── Reveal.tsx       # Scroll-reveal animation
│   │   └── WhatsAppButton.tsx
│   └── hooks/
│       └── useInView.ts     # Intersection Observer for reveal
├── next.config.js           # output: 'export', images unoptimized
├── tailwind.config.ts
└── package.json
```

## License

Private use. All rights reserved.
