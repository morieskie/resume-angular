import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'resume',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: 'about',
        component: AboutComponent,
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
  {
    path: '',
    component: AppComponent,
  },
];
