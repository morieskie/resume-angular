import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  group,
  query,
} from '@angular/animations';
import {
  Component,
  computed,
  Input,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
  animations: [
    trigger('testimony', [
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
            '.testimonial_right',
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
            '.testimonial_left',
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
export class QuoteComponent {
  state = 'void';
  float = input.required<string>();
  wrapper = computed(() => {
    return 'testimonial_' + this.float();
  });
  ribbon = computed(() => {
    return this.float() === 'right' ? 'left ribbon' : 'right ribbon';
  });

  ngOnInit() {
    this.state = 'enter';
  }
}
