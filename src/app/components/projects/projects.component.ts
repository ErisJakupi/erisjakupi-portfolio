import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { PortfolioProject } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Output() projectSelected = new EventEmitter<PortfolioProject>();
  @ViewChild('projectRail') projectRail?: ElementRef<HTMLDivElement>;

  readonly projects = PROJECTS;
  readonly chessSquares = Array.from({ length: 100 }, (_, index) => index);

  constructor(public readonly language: LanguageService) {}

  openProject(project: PortfolioProject): void {
    this.projectSelected.emit(project);
  }

  scrollProjects(direction: 'previous' | 'next'): void {
    const rail = this.projectRail?.nativeElement;
    if (rail === undefined) {
      return;
    }

    const distance = rail.clientWidth * 0.82;
    const left = direction === 'next' ? distance : -distance;
    rail.scrollBy({ left, behavior: 'smooth' });
  }

  updateCardGlow(event: PointerEvent): void {
    const card = event.currentTarget as HTMLElement;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    card.style.setProperty('--card-x', `${x}px`);
    card.style.setProperty('--card-y', `${y}px`);
  }

  isDarkSquare(index: number): boolean {
    const row = Math.floor(index / 10);
    const column = index % 10;
    return (row + column) % 2 === 1;
  }

  isChessPiece(index: number): boolean {
    return [22, 25, 27, 71, 74, 78].includes(index);
  }

  isAlternatePiece(index: number): boolean {
    return index >= 70;
  }
}
