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
      // {
      //   path: 'resume',
      //   component: ResumeComponent
      // },
      // {
      //   path: 'portfolio',
      //   component: PortfolioComponent
      // },
      // {
      //   path: 'contact',
      //   component: ContactComponent
      // },
    ],
  },
];
