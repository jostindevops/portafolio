import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { ModeService } from './mode.service';
import { ToastComponent } from './components/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ToastComponent],
  template: `
    <div
      class="min-h-screen flex flex-col transition-colors duration-500"
      [ngClass]="
        (modeService.mode$ | async) === 'lab'
          ? 'mode-lab text-slate-100'
          : 'mode-business text-slate-900'
      "
    >
      <app-navbar></app-navbar>

      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>

      <footer
        class="border-t"
        [ngClass]="
          (modeService.mode$ | async) === 'lab'
            ? 'border-white/10 bg-slate-950/80'
            : 'border-slate-200 bg-white'
        "
      >
        <div class="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center gap-4 text-sm">
          <span
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-slate-400'
                : 'text-slate-500'
            "
          >
            Arquitectura DevSecOps • Portafolio interactivo
          </span>
          <span
            class="ml-auto"
            [ngClass]="
              (modeService.mode$ | async) === 'lab'
                ? 'text-neon-cyan'
                : 'text-slate-700'
            "
          >
            Disponible para nuevos proyectos
          </span>
        </div>
      </footer>

      <app-toast></app-toast>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(public modeService: ModeService) {}

  ngOnInit(): void {
    this.modeService.initModeFromUrlAndStorage();
  }
}
