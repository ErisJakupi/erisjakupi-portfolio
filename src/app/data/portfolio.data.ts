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
    link: 'https://github.com/ErisJakupi/CoachingSite',
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
    link: 'https://github.com/ErisJakupi/450_Projekt',
    visual: 'chess'
  }
];
