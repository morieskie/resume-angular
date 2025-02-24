import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideAnimations(),
        provideHttpClientTesting,
        HttpClient,
        {
          provide: HttpHandler,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
