# Eris Jakupi — Portfolio

My personal developer portfolio, built with Angular and TypeScript.

The website presents my background as a Software Developer EFZ, selected projects, professional experience and the technologies I work with. I wanted the portfolio itself to feel like a small frontend project rather than a static CV, so the interface uses interactive motion, horizontal project browsing and responsive layouts.

## Live website

**erisjakupi.com**

## Tech stack

- Angular 21
- TypeScript
- HTML
- CSS
- Angular Signals
- Standalone Components

## Main projects shown

- **CoachingSite** — Microservices application with React, Spring Boot, Kafka, Docker and GitHub Actions
- **Chess — TDD** — 10×10 chess variant developed with test-driven development and automated testing

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

The project data is stored centrally in `src/app/data/portfolio.data.ts`, while the individual page areas are split into small standalone Angular components.

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

## Author

**Eris Jakupi**  
Software Developer EFZ · Zürich, Switzerland

- GitHub: [ErisJakupi](https://github.com/ErisJakupi)
- LinkedIn: [Eris Jakupi](https://www.linkedin.com/in/eris-jakupi)


## Deployment

The repository includes a small `vercel.json`, so the project can be connected directly to Vercel. The build command is `npm run build` and the output directory is `dist/eris-portfolio/browser`.
