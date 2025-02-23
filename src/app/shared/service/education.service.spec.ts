import { TestBed } from '@angular/core/testing';

import { EducationService } from './education.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('EducationService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    service = TestBed.inject(EducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
