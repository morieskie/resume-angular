import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { forkJoin, map, take } from 'rxjs';
import { ProjectInterface } from '../../shared/interfaces/project.interface';
import { DatePipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { selectProject } from '../../../store/state/resume.selectors';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-project',
  imports: [
    DatePipe,
    RouterModule,
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectId!: any;
  currentIndex = signal(0);
  project!: ProjectInterface;
  projects!: ProjectInterface[];
  destroyRef: DestroyRef = inject(DestroyRef);
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit() {
    forkJoin({
      params: this.route.params.pipe(take(1)),
      projects: this.store.select(selectProject).pipe(take(1)),
    })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ params: { id }, projects }) => {
        this.projects = projects;
        const idx = projects.findIndex((p) => p.id === Number(id));
        if (idx !== -1) {
          const project = projects[idx];
          if (project) {
            this.project = project;
            this.currentIndex.set(idx);
          }
        }
      });
  }

  onPrev() {
    const idx = this.currentIndex();
    const prev =
      idx !== 0 ? (idx - 1) % this.projects.length : this.projects.length - 1;
    this.currentIndex.set(prev);
    this.project = this.projects[prev];
    this.router.navigate(['../', this.projects[prev].id], {
      relativeTo: this.route,
    });
  }
  onNext() {
    const idx = this.currentIndex();
    const next = (idx + 1) % this.projects.length;
    this.currentIndex.set(next);
    this.project = this.projects[next];
    this.router.navigate(['../', this.projects[next].id], {
      relativeTo: this.route,
    });
  }
}
