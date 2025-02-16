import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { firstValueFrom, of, take } from 'rxjs';
import { ProfileInterface } from '../interfaces/profile.interface';

describe('ProfileService', () => {
  let service: ProfileService;
  let client: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClientTesting(),
        HttpClient,
        {
          provide: HttpHandler,
          useValue: {
            handle: () => {
              return of({ name: 'Test' } as ProfileInterface);
            },
          },
        },
      ],
    });
    service = TestBed.inject(ProfileService);
    client = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve profile details from external api', fakeAsync(async () => {
    const spy = spyOn(client, 'get');
    service.getDetails();
    expect(spy).toHaveBeenCalledTimes(1);
  }));
});
