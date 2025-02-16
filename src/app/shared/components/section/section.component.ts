import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, computed, input, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  animations: [
    trigger('section', [
      state(
        'void',
        style({
          transform: 'translateZ(-1000px) rotateX(-90deg)',
          scale: 0.98,
          opacity: 0.9,
        })
      ),
      state(
        'enter',
        style({
          transform: 'translateZ(0px) rotateX(0deg)',
          opacity: 1,
        })
      ),
      state(
        'exit',
        style({
          transform: 'translateZ(-1000px) rotateX(90deg)',
          opacity: 0.5,
          scale: 0.95,
        })
      ),
      transition('void => enter', [animate('0.5s 0.05s ease-in')]),
      transition('enter => exit', [animate('0.5s 0.03s ease-in')]),
    ]),
  ],
})
export class SectionComponent {
  state = signal('void');
  icon = input.required();
  label = input.required<string>();
  classes = computed(() => {
    return `icon ${this.icon()}`;
  });
  display = 'block';

  constructor(private router: Router) {}

  ngOnInit() {
    this.state.set('enter');
  }

  onBack() {
    this.state.set('exit');
    setTimeout(() => this.router.navigate(['/']), 700);
  }
}
