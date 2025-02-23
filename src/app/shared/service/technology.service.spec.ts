import { TestBed } from '@angular/core/testing';

import { TechnologyService } from './technology.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('TechnologyService', () => {
  let service: TechnologyService;

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
                tech: '',
                experience: '',
                competency: '',
                color: '',
              });
            },
          },
        },
      ],
    });
    service = TestBed.inject(TechnologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
