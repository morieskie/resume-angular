import { Component, DestroyRef, inject } from '@angular/core';
import { SectionComponent } from '../shared/components/section/section.component';
import { Store } from '@ngrx/store';
import { ProjectInterface } from '../shared/interfaces/project.interface';
import { selectProject } from '../../store/state/resume.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectionAwareHoverComponent } from '../shared/components/direction-aware-hover/direction-aware-hover.component';

@Component({
  selector: 'app-portfolio',
  imports: [SectionComponent, RouterModule, DirectionAwareHoverComponent],
  providers: [NgOptimizedImage],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects!: ProjectInterface[];
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectProject)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((projects) => (this.projects = projects));
  }
}
