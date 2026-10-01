import { Injectable, signal } from '@angular/core';
import { Language, LocalizedText } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly current = signal<Language>(this.readLanguage());

  toggle(): void {
    const nextLanguage: Language = this.current() === 'de' ? 'en' : 'de';
    this.current.set(nextLanguage);
    localStorage.setItem('portfolio-language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  pick(value: LocalizedText): string {
    return value[this.current()];
  }

  private readLanguage(): Language {
    const storedLanguage = localStorage.getItem('portfolio-language');
    if (storedLanguage === 'en') {
      return 'en';
    }

    return 'de';
  }
}
