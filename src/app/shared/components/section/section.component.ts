import { Component, computed, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  icon = input.required();
  label = input.required<string>();
  classes = computed(() => {
    return `icon ${this.icon()}`;
  });
  display = 'block';

  constructor(private router: Router) {}

  onBack() {
    return this.router.navigate(['/resume']);
  }
}
