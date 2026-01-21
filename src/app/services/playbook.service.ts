import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PlaybookStep {
  command: string;
  outputLines: string[];
  visualKey: string;
}

export interface Playbook {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  steps: PlaybookStep[];
}

@Injectable({
  providedIn: 'root',
})
export class PlaybookService {
  constructor(private readonly http: HttpClient) {}

  getPlaybooks(): Observable<Playbook[]> {
    return this.http.get<Playbook[]>('/assets/data/playbooks.json');
  }
}
