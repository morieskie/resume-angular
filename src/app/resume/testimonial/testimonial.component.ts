import { Component, DestroyRef, inject, signal } from '@angular/core';
import { TestimonyInterface } from '../../shared/interfaces/testimony.interface';
import { Store } from '@ngrx/store';
import { selectTestimony } from '../../../store/state/resume.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { QuoteComponent } from '../../shared/components/quote/quote.component';

@Component({
  selector: 'app-testimonial',
  imports: [QuoteComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
  data$ = signal<TestimonyInterface[]>([]);
  destroyRef: DestroyRef = inject(DestroyRef);
  constructor(private store: Store) {}
  ngOnInit() {
    this.store
      .select(selectTestimony)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => this.data$.set(data));
  }
}
