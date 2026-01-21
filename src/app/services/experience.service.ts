import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  dates: string;
  bullets: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private readonly http: HttpClient) {}

  getExperience(): Observable<ExperienceItem[]> {
    return this.http.get<ExperienceItem[]>('/assets/data/experience.json');
  }
}
