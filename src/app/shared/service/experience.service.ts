import { Injectable } from '@angular/core';
import { ExperienceInterface } from '../interfaces/experience.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExperienceService {
  constructor(private client: HttpClient) {}

  getData(): Observable<ExperienceInterface[]> {
    const {
      baseApiUrl,
      endpoints: { experience },
    }: any = environment;
    return this.client.get<ExperienceInterface[]>(
      `${baseApiUrl}/${experience}`
    );
  }
}
