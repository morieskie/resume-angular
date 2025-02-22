import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducationInterface } from '../interfaces/education.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private client: HttpClient) {}

  getData(): Observable<EducationInterface[]> {
    const {
      baseApiUrl,
      endpoints: { education },
    }: any = environment;
    return this.client.get<EducationInterface[]>(`${baseApiUrl}/${education}`);
  }
}
