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
          transform: 'translateX(-100%) translateY(-100%)',
        })
      ),
      state(
        'enter',
        style({
          transform: 'translateX(0%) translateY(0%)',
        })
      ),
      transition('void => enter', [animate('0.3s ease-in')]),
      transition('enter => void', [animate('0.5s 0.2s ease-in-out')]),
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
    this.state.set('void');
    setTimeout(() => this.router.navigate(['/resume']), 1500);
  }
}
