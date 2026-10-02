import { Component, EventEmitter, Output } from '@angular/core';
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

  readonly projects = PROJECTS;
  readonly chessSquares = Array.from({ length: 100 }, (_, index) => index);
  readonly chessPieces: Record<number, string> = {
    12: '♜',
    13: '♞',
    14: '♝',
    15: '♛',
    16: '♚',
    17: '♝',
    18: '♞',
    19: '♜',
    22: '♟',
    23: '♟',
    24: '♟',
    25: '♟',
    26: '♟',
    27: '♟',
    28: '♟',
    29: '♟',
    72: '♙',
    73: '♙',
    74: '♙',
    75: '♙',
    76: '♙',
    77: '♙',
    78: '♙',
    79: '♙',
    82: '♖',
    83: '♘',
    84: '♗',
    85: '♕',
    86: '♔',
    87: '♗',
    88: '♘',
    89: '♖'
  };

  constructor(public readonly language: LanguageService) {}

  openProject(project: PortfolioProject): void {
    this.projectSelected.emit(project);
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

  chessPiece(index: number): string | null {
    const piece = this.chessPieces[index];
    if (piece === undefined) {
      return null;
    }

    return piece;
  }

  isWhitePiece(index: number): boolean {
    return index >= 70;
  }
}
