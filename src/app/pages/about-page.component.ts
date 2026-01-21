import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeService } from '../mode.service';
import { GlassCardComponent } from '../components/glass-card.component';
import { ChipComponent } from '../components/chip.component';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, ChipComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  template: `
    <div class="max-w-5xl mx-auto px-6 py-14 space-y-8" @fadeIn>
      <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" extraClasses="p-8">
        <h1 class="text-3xl font-bold">About</h1>
        <p class="mt-4 text-lg" [ngClass]="(modeService.mode$ | async) === 'lab' ? 'text-slate-300' : 'text-slate-600'">
          Diseño plataformas seguras y observables. Mi foco es acelerar equipos con automatización, FinOps y respuesta a incidentes.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <app-chip tone="accent">DevSecOps</app-chip>
          <app-chip>Observabilidad</app-chip>
          <app-chip>Compliance</app-chip>
          <app-chip>AI Ops</app-chip>
        </div>
      </app-glass-card>

      <div class="grid md:grid-cols-2 gap-6">
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h3 class="text-xl font-semibold">Filosofía</h3>
          <p class="mt-3 text-sm text-slate-400">
            Seguridad como producto. Operaciones como ventaja competitiva.
          </p>
        </app-glass-card>
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h3 class="text-xl font-semibold">CTA</h3>
          <p class="mt-3 text-sm text-slate-400">
            Listo para colaborar en iniciativas de infraestructura crítica.
          </p>
        </app-glass-card>
      </div>
    </div>
  `,
})
export class AboutPageComponent {
  constructor(public modeService: ModeService) {}
}
