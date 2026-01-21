import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impactMetrics: string[];
  techTags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class CaseStudyService {
  constructor(private readonly http: HttpClient) {}

  getCaseStudies(): Observable<CaseStudy[]> {
    return this.http.get<CaseStudy[]>('/assets/data/case-studies.json');
  }
}
