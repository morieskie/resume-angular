import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((c) => c.AboutComponent),
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./resume/resume.component').then((c) => c.ResumeComponent),
        children: [
          // {
          //   path: '',
          //   pathMatch: 'full',
          //   redirectTo: 'education',
          // },
          {
            path: 'education',
            loadComponent: () =>
              import('./resume/education/education.component').then(
                (c) => c.EducationComponent
              ),
          },
          {
            path: 'experience',
            loadComponent: () =>
              import('./resume/experience/experience.component').then(
                (c) => c.ExperienceComponent
              ),
          },
          {
            path: 'skills',
            loadComponent: () =>
              import('./resume/skill/skill.component').then(
                (c) => c.SkillComponent
              ),
          },
          {
            path: 'testimonials',
            loadComponent: () =>
              import('./resume/testimonial/testimonial.component').then(
                (c) => c.TestimonialComponent
              ),
          },
        ],
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./portfolio/portfolio.component').then(
            (c) => c.PortfolioComponent
          ),
        children: [
          {
            path: 'project/:id',
            loadComponent: () =>
              import('./portfolio/project/project.component').then(
                (c) => c.ProjectComponent
              ),
          },
        ],
      },
      // {
      //   path: 'contact',
      //   component: ContactComponent
      // },
    ],
  },
];
