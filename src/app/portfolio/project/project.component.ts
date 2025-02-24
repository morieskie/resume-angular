import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { exhaustMap, forkJoin, of, take } from 'rxjs';
import { ProjectInterface } from '../../shared/interfaces/project.interface';
import { DatePipe, IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
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
  providers: [
    NgOptimizedImage,
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectId!: any;
  currentIndex = signal(0);
  project!: ProjectInterface;
  images = signal<string[]>([]);
  projects!: ProjectInterface[];
  destroyRef: DestroyRef = inject(DestroyRef);
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store
      .select(selectProject)
      .pipe(take(1))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((projects) => {
        this.projects = projects;
        const idx = projects.findIndex((p) => p.id === Number(id));
        const project = projects[idx];
        if (idx !== -1 && project) {
          this.project = project;
          this.images.set(project.images);
          this.currentIndex.set(idx);
        }
      });
  }

  onPrev() {
    const idx = this.currentIndex();
    const prev =
      idx !== 0 ? (idx - 1) % this.projects.length : this.projects.length - 1;
    this.currentIndex.set(prev);
    this.router.navigate(['../', this.projects[prev].id], {
      relativeTo: this.route,
    });
    this.project = this.projects[prev];
    this.images.set(this.project.images);
  }
  onNext() {
    const idx = this.currentIndex();
    const next = (idx + 1) % this.projects.length;
    this.currentIndex.set(next);
    this.router.navigate(['../', this.projects[next].id], {
      relativeTo: this.route,
    });
    this.project = this.projects[next];
    this.images.set(this.project.images);
  }
}
