import {
  trigger,
  transition,
  style,
  stagger,
  animate,
  query,
} from '@angular/animations';
import { PercentPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [PercentPipe],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
  animations: [
    trigger('progress', [
      transition('off => on', [
        query(
          '.bar',
          [
            style({ minWidth: '0', width: '0' }),
            stagger(1000, [animate('1500ms 1s', style({ width: '*' }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ProgressBarComponent {
  percentage = input.required<number>();
  color = input<string>('transparent');
  className = input<string>('');

  wholePercentage = computed(() => Math.floor(this.percentage()));

  state = 'off';

  ngOnInit(): void {
    setTimeout(() => {
      this.state = 'on';
    });
  }
}
