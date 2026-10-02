# Eris Jakupi — Portfolio

My personal developer portfolio, built with Angular and TypeScript.

The website presents my background as a Software Developer EFZ, selected public projects, professional experience and the technologies I work with. I wanted the portfolio itself to feel like a real frontend project rather than a static CV, so the interface uses interactive motion, horizontal project browsing, responsive layouts and reusable Angular components.

## Live website

**https://erisjakupi.ch**

## Tech stack

- Angular 21
- TypeScript
- HTML
- CSS
- Angular Signals
- Standalone Components
- Vercel

## Featured projects

- **CoachingSite** — Microservices application with React, Spring Boot, Kafka, Docker and GitHub Actions
- **Chess — TDD** — 10×10 chess variant developed with test-driven development and automated testing
- **erisjakupi.ch** — This portfolio itself, built with Angular, TypeScript, responsive CSS and interactive UI effects

Each project card links to its public repository. The portfolio project additionally links directly to the live website.

## Project structure

```text
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── case-study-modal/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── site-header/
│   │   └── skills/
│   ├── data/
│   ├── models/
│   ├── services/
│   ├── app.component.html
│   └── app.component.ts
├── index.html
├── main.ts
└── styles.css
```

Project content is stored centrally in `src/app/data/portfolio.data.ts`, while the page is split into focused standalone Angular components.

Only projects with public code are featured in this repository. Employer-owned and private project details are intentionally kept out of the portfolio.

## CV

A public-safe PDF version of my CV is available at `public/Eris_Jakupi_CV.pdf` and can be downloaded directly from the website.

## Run locally

Requirements:

- Node.js 22.12 or newer
- npm

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open `http://localhost:4200` in the browser.

## Production build

```bash
npm run build
```

The browser build is created in `dist/eris-portfolio/browser`.

## Deployment

The repository includes `vercel.json`, so it can be connected directly to Vercel. The build command is `npm run build` and the output directory is `dist/eris-portfolio/browser`.

## Author

**Eris Jakupi**  
Software Developer EFZ · Zürich, Switzerland

- GitHub: [ErisJakupi](https://github.com/ErisJakupi)
- LinkedIn: [Eris Jakupi](https://www.linkedin.com/in/eris-jakupi)
- Website: [erisjakupi.ch](https://erisjakupi.ch)
