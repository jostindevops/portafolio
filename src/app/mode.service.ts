import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export type PortfolioMode = 'lab' | 'business';

const STORAGE_KEY = 'portfolio-mode';

@Injectable({
  providedIn: 'root',
})
export class ModeService {
  private readonly modeSubject = new BehaviorSubject<PortfolioMode>('lab');
  readonly mode$ = this.modeSubject.asObservable();

  constructor(private readonly router: Router) {}

  initModeFromUrlAndStorage(): void {
    const url = new URL(window.location.href);
    const modeParam = url.searchParams.get('mode');
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (modeParam === 'lab' || modeParam === 'business') {
      this.setMode(modeParam, false);
      return;
    }

    if (stored === 'lab' || stored === 'business') {
      this.setMode(stored, false);
    }
  }

  getMode(): PortfolioMode {
    return this.modeSubject.getValue();
  }

  setMode(mode: PortfolioMode, updateUrl = true): void {
    this.modeSubject.next(mode);
    window.localStorage.setItem(STORAGE_KEY, mode);

    if (updateUrl) {
      void this.router.navigate([], {
        queryParams: { mode },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    }
  }

  toggleMode(): void {
    const next = this.getMode() === 'lab' ? 'business' : 'lab';
    this.setMode(next);
  }
}
