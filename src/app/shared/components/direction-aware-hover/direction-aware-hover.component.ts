import { Component, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import DirectionAwareHover from './direction-aware-hover';

@Component({
  selector: 'app-direction-aware-hover',
  imports: [RouterModule],
  providers: [
    {
      provide: DirectionAwareHover,
      useFactory: (options: { inverse: boolean }) =>
        new DirectionAwareHover(options),
    },
  ],
  templateUrl: './direction-aware-hover.component.html',
  styleUrl: './direction-aware-hover.component.css',
})
export class DirectionAwareHoverComponent {
  classes = input.required<string>();
  path = input.required<string>();
  constructor(private hover: DirectionAwareHover, private router: Router) {}

  onMouseEnter(e: any) {
    return this.hover.mouseOver(e);
  }

  onMouseLeave(e: any) {
    return this.hover.mouseOut(e);
  }
}
