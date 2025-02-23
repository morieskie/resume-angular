import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';
import { provideRouter } from '@angular/router';
import { mockRoutes } from '../mocks/mock-routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EducationService } from '../shared/service/education.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter(mockRoutes),
        provideHttpClientTesting(),
        HttpClient,
        {
          provide: HttpHandler,
          useValue: {
            handle: () => {
              return of({
                company: '',
                role: '',
                description: '',
                from: '',
                to: '',
              });
            },
          },
        },
        provideAnimations(),
        provideMockStore(),
        {
          provide: EducationService,
          useValue: {
            getData() {
              return [
                {
                  company: 'Test',
                  role: 'QA',
                  description:
                    'Testing Angular 19 standalone component with Ngrx',
                  from: 2025,
                  to: 2025,
                },
              ];
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
