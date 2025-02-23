import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
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
      ],
    });
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
