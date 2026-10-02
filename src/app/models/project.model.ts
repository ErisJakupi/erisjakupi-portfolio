export type Language = 'de' | 'en';

export interface LocalizedText {
  de: string;
  en: string;
}

export interface ProjectFact {
  label: LocalizedText;
  value: string;
}

export interface PortfolioProject {
  id: 'coaching' | 'chess' | 'portfolio';
  number: string;
  category: LocalizedText;
  year: string;
  title: string;
  summary: LocalizedText;
  intro: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText[];
  note: LocalizedText;
  tags: string[];
  facts: ProjectFact[];
  repositoryUrl: string | null;
  liveUrl: string | null;
  visual: 'services' | 'chess' | 'portfolio';
}
