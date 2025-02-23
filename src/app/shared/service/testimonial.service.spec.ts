import { TestBed } from '@angular/core/testing';

import { TestimonialService } from './testimonial.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('TestimonialService', () => {
  let service: TestimonialService;

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
                position: '',
                testimony: '',
                from: '',
                to: '',
              });
            },
          },
        },
      ],
    });
    service = TestBed.inject(TestimonialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
