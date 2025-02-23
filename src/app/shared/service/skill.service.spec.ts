import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('SkillService', () => {
  let service: SkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClientTesting(), HttpClient,
        {
                  provide: HttpHandler,
                  useValue: {
                    handle: () => {
                      return of({});
                    },
                  },
                }
      ],
    });
    service = TestBed.inject(SkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
