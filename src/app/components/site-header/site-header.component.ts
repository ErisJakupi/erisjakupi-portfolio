import { Component, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {
  readonly menuOpen = signal(false);

  constructor(public readonly language: LanguageService) {}

  toggleMenu(): void {
    this.menuOpen.update(value => value === false);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
