import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-link',
  imports: [RouterLink],
  templateUrl: './menu-link.component.html',
  styleUrl: './menu-link.component.css',
})
export class MenuLinkComponent {
  icon = input.required<string>();
  label = input.required<string>();
  path = input.required<string>();

  classes = computed(() => {
    return `icon ${this.icon()}`;
  });
}
