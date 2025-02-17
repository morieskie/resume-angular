import { MockAboutComponent } from './mock-about.component';
import { MockHomeComponent } from './mock-home.component';

export const mockRoutes = [
  {
    path: '',
    component: MockHomeComponent,
    children: [
      {
        path: 'about',
        component: MockAboutComponent,
      },
    ],
  },
];
