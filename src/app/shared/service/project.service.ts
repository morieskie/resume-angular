import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProjectInterface } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private client: HttpClient) {}

  getData(): Observable<ProjectInterface[]> {
    const {
      baseApiUrl,
      endpoints: { project },
    }: any = environment;
    return this.client.get<ProjectInterface[]>(`${baseApiUrl}/${project}`);
  }
}
