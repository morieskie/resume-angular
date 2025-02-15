import { Component, computed, signal } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ShareComponent } from '../shared/components/share/share.component';
import { TextRotateComponent } from '../shared/components/text-rotate/text-rotate.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NavComponent, ShareComponent, TextRotateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  roles = [
    'MongoDB Developer',
    'Tech Lead',
    'PHP Developer',
    'React Developer',
    'NextJS Developer',
    'Angular Developer',
  ];
  user = signal({ name: 'Derick Fynn' });
  data = computed(() => {
    return { ...this.user(), roles: this.roles };
  });
}
