import { Component, DestroyRef, inject } from '@angular/core';
import { BarChartDataInterface } from '../../shared/interfaces/bar-chart-data.interface';
import { BarChartComponent } from '../../shared/components/bar-chart/bar-chart.component';
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  group,
  query,
} from '@angular/animations';
import { DoughnutChartDataInterface } from '../../shared/interfaces/doughnut-chart-data.interface';
import { DoughnutChartComponent } from '../../shared/components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from '../../shared/components/pie-chart/pie-chart.component';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating.component';
import { TechnologyInterface } from '../../shared/interfaces/technology.interface';
import { Store } from '@ngrx/store';
import { selectTechnology } from '../../../store/state/resume.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-skills',
  imports: [
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    ProgressBarComponent,
    StarRatingComponent,
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
  animations: [
    trigger('skills', [
      transition(':enter', [
        style({
          height: 0,
          visibility: 'hidden',
        }),
        group([
          animate(
            1.5,
            style({
              height: '*',
              visibility: 'visible',
            })
          ),
          query(
            '.fadeInUp',
            [
              style({ transform: 'translateY(100%)', opacity: 0 }),
              stagger(100, [
                animate(
                  '.5s 300ms ease-in',
                  style({ transform: 'translateY(0)', opacity: 1 })
                ),
              ]),
            ],
            { optional: true }
          ),
          query(
            '[data-animation-effect="zoomIn"]',
            [
              style({ transform: 'scale(0)' }),
              stagger(200, [
                animate('.5s 300ms ease-in', style({ transform: 'scale(1)' })),
              ]),
            ],
            { optional: true }
          ),
          query(
            '.fadeInLeft',
            [
              style({
                transform: 'translateX(-150%)',
                visibility: 'hidden',
                opacity: 0,
              }),
              stagger(300, [
                animate(
                  '0.8s 100ms ease-in',
                  style({
                    transform: 'translateX(0)',
                    visibility: 'visible',
                    opacity: 1,
                  })
                ),
              ]),
            ],
            { optional: true }
          ),
          query(
            '.fadeInRight',
            [
              style({
                transform: 'translateX(100%)',
                visibility: 'hidden',
                opacity: 0,
              }),
              stagger(400, [
                animate(
                  '0.8s 100ms ease-in',
                  style({
                    transform: 'translateX(0)',
                    visibility: 'visible',
                    opacity: 1,
                  })
                ),
              ]),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class SkillComponent {
  technologies: TechnologyInterface[] = [];
  frontendSkills: BarChartDataInterface[] = [
    { label: 'TypeScript', unit: 90, backgroundColor: '#FF6384' },
    { label: 'JavaScript', unit: 95, backgroundColor: '#4BC0C0' },
    { label: 'Angular', unit: 85, backgroundColor: '#FFCE56' },
    { label: 'React', unit: 70, backgroundColor: '#E7E9ED' },
    { label: 'Vue3', unit: 70, backgroundColor: '#36A2EB' },
  ];

  backendSkills: DoughnutChartDataInterface[] = [
    { label: 'PHP', unit: 50, backgroundColor: '#FF6384' },
    { label: 'Node', unit: 40, backgroundColor: '#36A2EB' },
    { label: 'SQL', unit: 20, backgroundColor: '#FFCE56' },
    { label: 'NoSQL', unit: 10, backgroundColor: '#4BC0C0' },
  ];

  devopsSkills: DoughnutChartDataInterface[] = [
    { label: 'Docker', unit: 50, backgroundColor: '#FF6384' },
    { label: 'CI/CD', unit: 35, backgroundColor: '#36A2EB' },
    { label: 'Kurbenetes', unit: 15, backgroundColor: '#FFCE56' },
  ];

  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(private store: Store) {}
  ngOnInit() {
    this.store
      .select(selectTechnology)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((techs) => (this.technologies = techs));
  }
}
