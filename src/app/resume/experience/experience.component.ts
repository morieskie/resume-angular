import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExperienceInterface } from '../../shared/interfaces/experience.interface';
import { selectExperience } from '../../../store/state/resume.selectors';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { TimelineItemInterface } from '../../shared/interfaces/timeline-item.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-experience',
  imports: [TimelineComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  data$ = signal<TimelineItemInterface[]>([]);
  destroyRef: DestroyRef = inject(DestroyRef);
  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectExperience)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => this.data$.set(data as ExperienceInterface[]));
  }
}
