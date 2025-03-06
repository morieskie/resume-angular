import { Component, computed, signal } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShareComponent } from '../shared/components/share/share.component';
import { TextRotateComponent } from '../shared/components/text-rotate/text-rotate.component';
import { forkJoin, take } from 'rxjs';
import {
  educationRetrieved,
  experienceRetrieved,
  projectRetrieved,
  technologyRetrieved,
  testimonyRetrieved,
} from '../../store/state/resume.actions';
import { Store } from '@ngrx/store';
import { EducationService } from '../shared/service/education.service';
import { ExperienceService } from '../shared/service/experience.service';
import { TestimonialService } from '../shared/service/testimonial.service';
import { TechnologyService } from '../shared/service/technology.service';
import { ProjectService } from '../shared/service/project.service';
import { ProfileService } from '../shared/service/profile.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NavComponent, ShareComponent, TextRotateComponent],
  providers: [ExperienceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  positions: string[] = [];
  roles = computed(() => this.positions);
  user = signal({ name: '' });
  data = computed(() => {
    return { ...this.user(), roles: this.roles };
  });

  constructor(
    private profileService: ProfileService,
    private educationService: EducationService,
    private experienceService: ExperienceService,
    private testimonyService: TestimonialService,
    private technologyService: TechnologyService,
    private projectService: ProjectService,
    private store: Store
  ) {}

  ngOnInit() {
    forkJoin({
      profile: this.profileService.getDetails(),
      education: this.educationService.getData(),
      experience: this.experienceService.getData(),
      testimony: this.testimonyService.getData(),
      technology: this.technologyService.getData(),
      project: this.projectService.getData(),
    })
      .pipe(take(1))
      .subscribe(
        ({
          profile,
          education,
          experience,
          testimony,
          technology,
          project,
        }) => {
          this.user.set({ name: profile.name.firstName });
          this.store.dispatch(educationRetrieved({ education }));
          this.store.dispatch(experienceRetrieved({ experience }));
          this.store.dispatch(testimonyRetrieved({ testimony }));
          this.store.dispatch(technologyRetrieved({ technology }));
          this.store.dispatch(projectRetrieved({ project }));
          this.positions = [...new Set(experience.map((e) => e.role))];
        }
      );
  }
}
