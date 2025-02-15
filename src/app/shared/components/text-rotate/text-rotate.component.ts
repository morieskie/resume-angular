import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import {
  Component,
  DestroyRef,
  Inject,
  input,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { interval, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-text-rotate',
  standalone: true,
  providers: [provideAnimations()],
  templateUrl: './text-rotate.component.html',
  styleUrl: './text-rotate.component.css',
  animations: [
    trigger('caption', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0)',
        })
      ),
      state(
        'leave',
        style({
          transform: 'scale(0.95)',
        })
      ),
      state(
        'enter',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition('void => enter', [animate('0.3s ease-out')]),
      transition('enter => leave', [animate('2.5s')]),
      transition('leave => void', [animate('0.3s ease-out')]),
    ]),
  ],
})
export class TextRotateComponent {
  roles = input.required<string[]>();
  activeRole = signal<string>('');
  state = signal<'enter' | 'leave' | 'void'>('void');

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DestroyRef) private destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.activeRole.set(this.roles()?.[0]);
    this.state.set('enter');
    console.log('INIT')
    if (isPlatformBrowser(this.platformId)) {
      interval(3500)
        .pipe(
          tap((i) => i),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe({
          next: (i) => {
            const index = (i + 1) % this.roles().length;
            this.activeRole.set(this.roles()[index]);
            this.state.set('enter');
          },
        });
    }
  }

  nextItem(event: AnimationEvent) {
    if (event.toState === 'enter' && event.phaseName === 'done') {
      this.state.set('leave');
    } else if (event.toState === 'leave' && event.phaseName === 'done') {
      this.state.set('void');
    }
  }
}
