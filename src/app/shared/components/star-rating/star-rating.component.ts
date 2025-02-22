import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  rating = input<number>(0);
  maxRating = input<number>(5);

  stars: number[] = [];

  ngOnInit() {
    this.stars = Array.from<number>({ length: this.maxRating() })
      .fill( 1,0, this.rating() );
  }
}
