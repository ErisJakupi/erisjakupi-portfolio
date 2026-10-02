import { PortfolioProject } from '../models/project.model';

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'coaching',
    number: '01',
    category: { de: 'Distributed Systems', en: 'Distributed Systems' },
    year: '2026',
    title: 'CoachingSite',
    summary: {
      de: 'Microservices-Anwendung mit React, Spring Boot, API Gateway, Eureka, Kafka, Resilience Patterns und CI/CD.',
      en: 'Microservices application with React, Spring Boot, API Gateway, Eureka, Kafka, resilience patterns and CI/CD.'
    },
    intro: {
      de: 'Eine vollständige Microservices-Anwendung, mit der moderne verteilte Architekturmuster praktisch umgesetzt wurden.',
      en: 'A complete microservices application built to put modern distributed-system patterns into practice.'
    },
    problem: {
      de: 'Das Ziel war nicht nur ein funktionierendes Frontend, sondern eine verteilte Systemarchitektur mit klar getrennten Services, Kommunikation und automatisierter Delivery.',
      en: 'The goal was not only a working frontend, but a distributed architecture with clearly separated services, communication patterns and automated delivery.'
    },
    solution: [
      { de: 'Spring Cloud Gateway als zentralen Einstiegspunkt eingesetzt', en: 'Used Spring Cloud Gateway as the central entry point' },
      { de: 'Eureka Service Discovery für Service-Registrierung verwendet', en: 'Implemented Eureka service discovery' },
      { de: 'Asynchrone Kommunikation mit Kafka umgesetzt', en: 'Added asynchronous communication with Kafka' },
      { de: 'Database-per-Service-Prinzip angewendet', en: 'Applied a database-per-service approach' },
      { de: 'CI/CD mit Docker und GitHub Actions integriert', en: 'Integrated CI/CD using Docker and GitHub Actions' }
    ],
    note: {
      de: 'Der Code und die Projektdokumentation sind öffentlich auf GitHub einsehbar.',
      en: 'The code and project documentation are public on GitHub.'
    },
    tags: ['React', 'Spring Boot', 'Kafka', 'Docker', 'GitHub Actions'],
    facts: [
      { label: { de: 'Rolle', en: 'Role' }, value: 'Development' },
      { label: { de: 'Stack', en: 'Stack' }, value: 'React · Spring Boot · Kafka' },
      { label: { de: 'Delivery', en: 'Delivery' }, value: 'Docker · GitHub Actions' }
    ],
    repositoryUrl: 'https://github.com/ErisJakupi/CoachingSite',
    liveUrl: null,
    visual: 'services'
  },
  {
    id: 'chess',
    number: '02',
    category: { de: 'Test-Driven Development', en: 'Test-Driven Development' },
    year: '2026',
    title: 'Chess — TDD',
    summary: {
      de: '10×10-Schachvariante mit eigenen Regeln, testgetriebener Entwicklung, Coverage-Prüfung und automatisierter Pipeline.',
      en: '10×10 chess variant with custom rules, test-driven development, coverage checks and an automated pipeline.'
    },
    intro: {
      de: 'Eine angepasste Schachanwendung auf einem 10×10-Feld mit eigenen Figuren und Regeln — entwickelt mit konsequentem Fokus auf Testbarkeit.',
      en: 'A custom chess application on a 10×10 board with modified pieces and rules, built with a strong focus on testability.'
    },
    problem: {
      de: 'Abweichende Spielregeln erhöhen die Zahl möglicher Edge Cases. Das Projekt sollte deshalb beweisen, dass Verhalten nicht nur implementiert, sondern systematisch abgesichert werden kann.',
      en: 'Modified game rules introduce a wide range of edge cases. The project therefore focused on proving behaviour through systematic automated testing.'
    },
    solution: [
      { de: 'Funktionalität test-first entwickelt', en: 'Developed functionality test-first' },
      { de: 'Unit- und Integrationstests kombiniert', en: 'Combined unit and integration tests' },
      { de: 'Automatisierte Coverage-Prüfung eingerichtet', en: 'Added automated coverage verification' },
      { de: 'GitHub-Actions-Pipeline für wiederholbare Checks verwendet', en: 'Used GitHub Actions for repeatable checks' },
      { de: 'Spielregeln und Sonderfälle in testbare Komponenten getrennt', en: 'Separated game rules and edge cases into testable components' }
    ],
    note: {
      de: 'Repository und Quellcode sind öffentlich verfügbar.',
      en: 'Repository and source code are publicly available.'
    },
    tags: ['Java', 'TDD', 'JUnit', 'Integration Tests', 'CI'],
    facts: [
      { label: { de: 'Rolle', en: 'Role' }, value: 'Development & Testing' },
      { label: { de: 'Stack', en: 'Stack' }, value: 'Java · JUnit · CI' },
      { label: { de: 'Fokus', en: 'Focus' }, value: 'TDD · Coverage' }
    ],
    repositoryUrl: 'https://github.com/ErisJakupi/450_Projekt',
    liveUrl: null,
    visual: 'chess'
  },
  {
    id: 'portfolio',
    number: '03',
    category: { de: 'Frontend & Portfolio', en: 'Frontend & Portfolio' },
    year: '2026',
    title: 'erisjakupi.ch',
    summary: {
      de: 'Mein persönliches Portfolio als Angular-Anwendung mit TypeScript, responsivem Dark Theme, interaktiven Animationen und Vercel-Deployment.',
      en: 'My personal portfolio built as an Angular application with TypeScript, a responsive dark theme, interactive motion and Vercel deployment.'
    },
    intro: {
      de: 'Eine bewusst reduzierte Portfolio-Seite, die meine Projekte, Erfahrung und technischen Schwerpunkte schnell erfassbar macht und gleichzeitig meine Frontend-Arbeit zeigt.',
      en: 'A deliberately focused portfolio that makes my projects, experience and technical focus easy to scan while also demonstrating my frontend work.'
    },
    problem: {
      de: 'Die Seite sollte bei Recruitern schnell einen klaren Eindruck vermitteln, ohne wie ein Standard-Template zu wirken. Gleichzeitig musste sie auf Desktop und Mobile performant, zugänglich und leicht weiterzuentwickeln bleiben.',
      en: 'The site needed to communicate a clear profile quickly without looking like a generic template, while remaining performant, accessible and easy to maintain on desktop and mobile.'
    },
    solution: [
      { de: 'Portfolio in eigenständige Angular-Komponenten aufgeteilt', en: 'Split the portfolio into focused Angular components' },
      { de: 'Projektinhalte zentral über TypeScript-Modelle und Daten strukturiert', en: 'Structured project content through TypeScript models and central data' },
      { de: 'Interaktive, aber dezente Motion- und Pointer-Effekte umgesetzt', en: 'Built interactive but restrained motion and pointer effects' },
      { de: 'Responsive Projekt-Galerie mit horizontalem Scroll-Snap entwickelt', en: 'Created a responsive project gallery with horizontal scroll snapping' },
      { de: 'Deployment und Custom Domain über Vercel eingerichtet', en: 'Configured deployment and the custom domain through Vercel' }
    ],
    note: {
      de: 'Diese Website und ihre komplette Angular-Struktur sind öffentlich auf GitHub einsehbar.',
      en: 'This website and its complete Angular source are public on GitHub.'
    },
    tags: ['Angular', 'TypeScript', 'CSS', 'Responsive UI', 'Vercel'],
    facts: [
      { label: { de: 'Rolle', en: 'Role' }, value: 'Design & Development' },
      { label: { de: 'Stack', en: 'Stack' }, value: 'Angular · TypeScript · CSS' },
      { label: { de: 'Live', en: 'Live' }, value: 'erisjakupi.ch' }
    ],
    repositoryUrl: 'https://github.com/ErisJakupi/erisjakupi-portfolio',
    liveUrl: 'https://erisjakupi.ch',
    visual: 'portfolio'
  }
];
