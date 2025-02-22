import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { EducationInterface } from '../../shared/interfaces/education.interface';
import { selectEducation } from '../../../store/state/resume.selectors';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-education',
  imports: [TimelineComponent],
  providers: [TimelineComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  data$ = signal<EducationInterface[]>([]);
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectEducation)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.data$.set(value as EducationInterface[]);
      });
  }
}
