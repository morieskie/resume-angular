import { Component } from '@angular/core';
import { SectionComponent } from '../shared/components/section/section.component';
import {
  ActivatedRoute,
  Router,
  RouterModule
} from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuLinkComponent } from '../shared/components/menu-link/menu-link.component';

@Component({
  selector: 'app-resume',
  imports: [SectionComponent, RouterModule, MenuLinkComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  animations: [
    trigger('tabs', [
      state(
        'void',
        style({
          visibility: 'hidden',
          opacity: 0,
          transform: 'translateY(-50%)',
        })
      ),
      state(
        'enter',
        style({
          visibility: 'visible',
          opacity: 1,
          transform: 'translateY(0%)',
        })
      ),
      transition('void=>enter', animate('0.4s ease-in')),
    ]),
  ],
})
export class ResumeComponent {
  state = 'void';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.navigate(['education'], { relativeTo: this.route });
    this.state = 'enter';
  }
}
