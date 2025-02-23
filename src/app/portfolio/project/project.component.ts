import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('data', this.route.params)
    this.route.params.pipe(map( ({id}) => id), take(1)).subscribe(id => console.log('ID:', id))
  }
}
