import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModeService } from '../mode.service';
import { ModeToggleComponent } from './mode-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ModeToggleComponent],
  template: `
    <header
      class="sticky top-0 z-30 border-b backdrop-blur-xl"
      [ngClass]="
        (modeService.mode$ | async) === 'lab'
          ? 'border-white/10 bg-slate-900/70'
          : 'border-slate-200 bg-white/80'
      "
    >
      <div class="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6">
        <div class="flex items-center gap-3">
          <span
            class="text-xl font-bold tracking-wide"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-neon-cyan'
                : 'text-slate-900'
            "
          >
            DevSecOps Studio
          </span>
          <span
            class="text-xs uppercase tracking-[0.3em]"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-slate-400'
                : 'text-slate-500'
            "
          >
            Portafolio
          </span>
        </div>

        <nav class="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a
            routerLink="/"
            routerLinkActive="text-neon-cyan"
            class="transition-colors"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-slate-200 hover:text-neon-cyan'
                : 'text-slate-600 hover:text-slate-900'
            "
          >
            Inicio
          </a>
          <a
            routerLink="/about"
            routerLinkActive="text-neon-cyan"
            class="transition-colors"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-slate-200 hover:text-neon-cyan'
                : 'text-slate-600 hover:text-slate-900'
            "
          >
            About
          </a>
          <a
            routerLink="/lab"
            routerLinkActive="text-neon-cyan"
            class="transition-colors"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-slate-200 hover:text-neon-cyan'
                : 'text-slate-600 hover:text-slate-900'
            "
          >
            Lab
          </a>
          <a
            routerLink="/business"
            routerLinkActive="text-neon-cyan"
            class="transition-colors"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-slate-200 hover:text-neon-cyan'
                : 'text-slate-600 hover:text-slate-900'
            "
          >
            Business
          </a>
          <a
            routerLink="/connect"
            routerLinkActive="text-neon-cyan"
            class="transition-colors"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-slate-200 hover:text-neon-cyan'
                : 'text-slate-600 hover:text-slate-900'
            "
          >
            Contacto
          </a>
        </nav>

        <div class="ml-auto flex items-center gap-3">
          <div class="text-xs font-semibold uppercase tracking-[0.3em]">
            <span
              [ngClass]="
                (modeService.mode$ | async) === 'lab'
                  ? 'text-neon-cyan'
                  : 'text-slate-500'
              "
              >Modo</span
            >
          </div>
          <app-mode-toggle
            [mode]="modeService.getMode()"
            (toggle)="modeService.toggleMode()"
          ></app-mode-toggle>
        </div>
      </div>
    </header>
  `,
})
export class NavbarComponent {
  constructor(public modeService: ModeService) {}
}
