import { Component, computed, signal } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ShareComponent } from '../shared/components/share/share.component';
import { TextRotateComponent } from '../shared/components/text-rotate/text-rotate.component';
import { forkJoin, take } from 'rxjs';
import {
  educationRetrieved,
  experienceRetrieved,
  technologyRetrieved,
  testimonyRetrieved,
} from '../../store/state/resume.actions';
import { Store } from '@ngrx/store';
import { EducationService } from '../shared/service/education.service';
import { ExperienceService } from '../shared/service/experience.service';
import { TestimonialService } from '../shared/service/testimonial.service';
import { TechnologyService } from '../shared/service/technology.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NavComponent, ShareComponent, TextRotateComponent],
  providers: [ExperienceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  positions: string[] = [];
  roles = computed(() => this.positions);
  user = signal({ name: 'Derick Fynn' });
  data = computed(() => {
    return { ...this.user(), roles: this.roles };
  });

  constructor(
    private educationService: EducationService,
    private experienceService: ExperienceService,
    private testimonyService: TestimonialService,
    private technologyService: TechnologyService,
    private store: Store
  ) {}

  ngOnInit() {
    forkJoin({
      education: this.educationService.getData(),
      experience: this.experienceService.getData(),
      testimony: this.testimonyService.getData(),
      technology: this.technologyService.getData(),
    })
      .pipe(take(1))
      .subscribe(({ education, experience, testimony, technology }) => {
        this.store.dispatch(educationRetrieved({ education }));
        this.store.dispatch(experienceRetrieved({ experience }));
        this.store.dispatch(testimonyRetrieved({ testimony }));
        this.store.dispatch(technologyRetrieved({ technology }));
        this.positions = [...new Set(experience.map((e) => e.role))];
      });
  }
}
