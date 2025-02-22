import { Injectable } from '@angular/core';
import { TechnologyInterface } from '../interfaces/technology.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  constructor(private client: HttpClient) {}

  getData(): Observable<TechnologyInterface[]> {
    const {
      baseApiUrl,
      endpoints: { technology },
    }: any = environment;
    return this.client.get<TechnologyInterface[]>(
      `${baseApiUrl}/${technology}`
    );
  }
}
