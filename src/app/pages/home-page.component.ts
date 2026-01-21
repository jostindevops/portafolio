import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeService } from '../mode.service';
import { GlassCardComponent } from '../components/glass-card.component';
import { StatCardComponent } from '../components/stat-card.component';
import { ChipComponent } from '../components/chip.component';
import { RouterLink } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, StatCardComponent, ChipComponent, RouterLink],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-14 space-y-16">
      <section class="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center" @fadeInUp>
        <div class="space-y-6">
          <p
            class="text-xs uppercase tracking-[0.4em]"
            [ngClass]="(modeService.mode$ | async) === 'lab' ? 'text-neon-cyan' : 'text-slate-500'"
          >
            DevSecOps Studio
          </p>
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            {{ (modeService.mode$ | async) === 'lab'
              ? 'Explora el laboratorio de arquitectura y resiliencia.'
              : 'Conecta estrategia técnica con impacto de negocio.' }}
          </h1>
          <p class="text-lg" [ngClass]="(modeService.mode$ | async) === 'lab' ? 'text-slate-300' : 'text-slate-600'">
            {{ (modeService.mode$ | async) === 'lab'
              ? 'Simulaciones, IA y visualizaciones para demostrar excelencia operativa.'
              : 'Casos reales, métricas y narrativas claras para líderes ejecutivos.' }}
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              class="px-6 py-3 rounded-full font-semibold transition"
              [ngClass]="
                (modeService.mode$ | async) === 'lab'
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/30'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              "
              [routerLink]="(modeService.mode$ | async) === 'lab' ? '/lab' : '/business'"
            >
              {{ (modeService.mode$ | async) === 'lab' ? 'Abrir laboratorio' : 'Ver casos clave' }}
            </a>
            <a
              class="px-6 py-3 rounded-full font-semibold transition"
              [ngClass]="
                (modeService.mode$ | async) === 'lab'
                  ? 'border border-slate-600 text-slate-200 hover:border-neon-cyan'
                  : 'border border-slate-300 text-slate-700 hover:border-slate-500'
              "
              routerLink="/connect"
            >
              {{ (modeService.mode$ | async) === 'lab' ? 'Simular incidente' : 'Agendar sesión' }}
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <app-stat-card
            [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'"
            label="Playbooks"
            value="12+"
            hint="Flujos listos"
          ></app-stat-card>
          <app-stat-card
            [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'"
            label="Casos"
            value="8+"
            hint="Impacto real"
          ></app-stat-card>
          <app-stat-card
            [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'"
            label="Stack"
            value="Cloud"
            hint="Seguridad + SRE"
          ></app-stat-card>
          <app-stat-card
            [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'"
            label="FinOps"
            value="-22%"
            hint="Optimización"
          ></app-stat-card>
        </div>
      </section>

      <section class="grid md:grid-cols-[1.2fr_0.8fr] gap-6" @fadeInUp>
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h2 class="text-2xl font-semibold">Sobre mí</h2>
          <p class="mt-3" [ngClass]="(modeService.mode$ | async) === 'lab' ? 'text-slate-300' : 'text-slate-600'">
            Arquitecto DevSecOps enfocado en resiliencia, automatización segura y crecimiento sostenible.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <app-chip tone="accent">Zero Trust</app-chip>
            <app-chip>Observabilidad</app-chip>
            <app-chip>AI Ops</app-chip>
          </div>
        </app-glass-card>
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h3 class="text-xl font-semibold">Enfoque 2026</h3>
          <p class="mt-3 text-sm" [ngClass]="(modeService.mode$ | async) === 'lab' ? 'text-slate-300' : 'text-slate-600'">
            Glassmorfismo, micro-interacciones y visualización inmersiva para decisiones más rápidas.
          </p>
          <a class="mt-4 inline-flex text-sm font-semibold text-neon-cyan" routerLink="/about">Ver historia →</a>
        </app-glass-card>
      </section>

      <ng-container *ngIf="(modeService.mode$ | async) === 'lab'; else businessFirst">
        <section class="space-y-6" @fadeInUp>
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold">Modo Lab · Tendencias</h2>
            <a class="text-sm font-semibold text-neon-cyan" routerLink="/lab">Explorar Lab →</a>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Infra 3D viva</h3>
              <p class="mt-2 text-sm text-slate-400">Topologías reactivas con eventos en tiempo real.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">AI Infra Assistant</h3>
              <p class="mt-2 text-sm text-slate-400">Guías inteligentes y detección de fallas.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Chaos Arena</h3>
              <p class="mt-2 text-sm text-slate-400">Simulación de incidentes y respuesta.</p>
            </app-glass-card>
          </div>
        </section>

        <section class="space-y-6" @fadeInUp>
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold">Modo Business · Ideas</h2>
            <a class="text-sm font-semibold text-neon-cyan" routerLink="/business">Explorar Business →</a>
          </div>
          <div class="grid md:grid-cols-4 gap-6">
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Case Navigator</h3>
              <p class="mt-2 text-sm text-slate-400">Timeline con filtros y KPIs.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Agenda ejecutiva</h3>
              <p class="mt-2 text-sm text-slate-400">Workshops y sesiones 1:1.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Mapa global</h3>
              <p class="mt-2 text-sm text-slate-400">Impacto por región.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Comparador</h3>
              <p class="mt-2 text-sm text-slate-400">Antes vs después.</p>
            </app-glass-card>
          </div>
        </section>
      </ng-container>

      <ng-template #businessFirst>
        <section class="space-y-6" @fadeInUp>
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold">Modo Business · Ideas</h2>
            <a class="text-sm font-semibold text-neon-cyan" routerLink="/business">Explorar Business →</a>
          </div>
          <div class="grid md:grid-cols-4 gap-6">
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Case Navigator</h3>
              <p class="mt-2 text-sm text-slate-400">Timeline con filtros y KPIs.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Agenda ejecutiva</h3>
              <p class="mt-2 text-sm text-slate-400">Workshops y sesiones 1:1.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Mapa global</h3>
              <p class="mt-2 text-sm text-slate-400">Impacto por región.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Comparador</h3>
              <p class="mt-2 text-sm text-slate-400">Antes vs después.</p>
            </app-glass-card>
          </div>
        </section>

        <section class="space-y-6" @fadeInUp>
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold">Modo Lab · Tendencias</h2>
            <a class="text-sm font-semibold text-neon-cyan" routerLink="/lab">Explorar Lab →</a>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Infra 3D viva</h3>
              <p class="mt-2 text-sm text-slate-400">Topologías reactivas con eventos en tiempo real.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">AI Infra Assistant</h3>
              <p class="mt-2 text-sm text-slate-400">Guías inteligentes y detección de fallas.</p>
            </app-glass-card>
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
              <h3 class="font-semibold">Chaos Arena</h3>
              <p class="mt-2 text-sm text-slate-400">Simulación de incidentes y respuesta.</p>
            </app-glass-card>
          </div>
        </section>
      </ng-template>

      <section class="grid md:grid-cols-[1.2fr_0.8fr] gap-6" @fadeInUp>
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h2 class="text-2xl font-semibold">Conecta conmigo</h2>
          <p class="mt-2 text-sm text-slate-400">
            Agenda demos, asesorías o sesiones de revisión técnica.
          </p>
          <a class="mt-4 inline-flex text-sm font-semibold text-neon-cyan" routerLink="/connect">Ir a contacto →</a>
        </app-glass-card>
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h3 class="text-xl font-semibold">Disponibilidad</h3>
          <p class="mt-2 text-sm text-slate-400">Semanas limitadas para proyectos estratégicos.</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <app-chip tone="accent">Q2 2026</app-chip>
            <app-chip>Remoto</app-chip>
          </div>
        </app-glass-card>
      </section>
    </div>
  `,
})
export class HomePageComponent {
  constructor(public modeService: ModeService) {}
}
