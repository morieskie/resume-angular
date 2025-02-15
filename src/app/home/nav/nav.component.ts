import { Component, output } from '@angular/core';
import { MenuLinkComponent } from './menu-link/menu-link.component';

@Component({
  selector: 'app-nav',
  imports: [MenuLinkComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  nav = output<string>();
  onClick(path: string) {
    this.nav.emit(path);
  }
}
