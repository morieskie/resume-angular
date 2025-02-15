import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-share',
  imports: [],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css',
})
export class ShareComponent {
  isVisible = signal(false);
  visibility = computed(() => {
    return this.isVisible() ? 'flex' : 'none';
  });

  toggle() {
    this.isVisible.set(!this.isVisible());
  }
}
