import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TimelineItemInterface } from '../../interfaces/timeline-item.interface';
import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-timeline',
  imports: [DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  animations: [
    trigger('timeline', [
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
            '[data-animation-effect="fadeInUp"]',
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
            '[data-animation-effect="fadeInLeft"],.testimonial_right',
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
            '[data-animation-effect="fadeInRight"],.testimonial_left',
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
export class TimelineComponent {
  state = 'void';
  data = input.required<TimelineItemInterface[]>();
  items = computed<TimelineItemInterface[]>(() => {
    return this.data();
  });
}
