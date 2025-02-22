import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonyInterface } from '../interfaces/testimony.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  constructor(private client: HttpClient) {}

  getData(): Observable<TestimonyInterface[]> {
    const {
      baseApiUrl,
      endpoints: { testimonial },
    }: any = environment;
    return this.client.get<TestimonyInterface[]>(
      `${baseApiUrl}/${testimonial}`
    );
  }
}
