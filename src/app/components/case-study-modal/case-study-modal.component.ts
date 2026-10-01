import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PortfolioProject } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-case-study-modal',
  standalone: true,
  templateUrl: './case-study-modal.component.html',
  styleUrl: './case-study-modal.component.css'
})
export class CaseStudyModalComponent {
  @Input() project: PortfolioProject | null = null;
  @Output() closed = new EventEmitter<void>();

  constructor(public readonly language: LanguageService) {}

  close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    if (this.project !== null) {
      this.close();
    }
  }
}
