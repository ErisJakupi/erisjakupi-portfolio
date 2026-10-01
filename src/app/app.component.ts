import { Component, HostListener, signal } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { CaseStudyModalComponent } from './components/case-study-modal/case-study-modal.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioProject } from './models/project.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    CaseStudyModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly selectedProject = signal<PortfolioProject | null>(null);
  readonly introVisible = signal(true);

  constructor() {
    window.setTimeout(() => this.introVisible.set(false), 1150);
  }

  openProject(project: PortfolioProject): void {
    this.selectedProject.set(project);
    document.body.classList.add('modal-open');
  }

  closeProject(): void {
    this.selectedProject.set(null);
    document.body.classList.remove('modal-open');
  }

  @HostListener('window:pointermove', ['$event'])
  updatePointer(event: PointerEvent): void {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  }

  @HostListener('window:scroll')
  updateScrollProgress(): void {
    const maximumScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maximumScroll > 0 ? window.scrollY / maximumScroll : 0;
    document.documentElement.style.setProperty('--scroll-progress', `${progress * 100}%`);
  }
}
