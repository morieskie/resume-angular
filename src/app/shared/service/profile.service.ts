import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInterface } from '../interfaces/profile.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private client: HttpClient) {}

  getDetails(): Observable<ProfileInterface> {
    const {
      baseApiUrl,
      endpoints: { profile },
    }: any = environment;
    return this.client.get<ProfileInterface>(`${baseApiUrl}/${profile}`);
  }
}
