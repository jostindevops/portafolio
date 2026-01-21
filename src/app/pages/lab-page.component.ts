import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModeService } from '../mode.service';
import { GlassCardComponent } from '../components/glass-card.component';
import { Playbook, PlaybookService } from '../services/playbook.service';
import { ChipComponent } from '../components/chip.component';
import { trigger, style, transition, animate } from '@angular/animations';

interface MetricCard {
  label: string;
  value: string;
  delta: string;
}

@Component({
  selector: 'app-lab-page',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassCardComponent, ChipComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(14px)' }),
        animate('420ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-14 space-y-12" @fadeIn>
      <section class="space-y-4">
        <h1 class="text-3xl font-bold">Laboratory Play · Architect in Action</h1>
        <p class="text-sm text-slate-400">
          Playbooks guiados, visualización viva y terminal simulada con respuestas paso a paso.
        </p>
      </section>

      <section class="grid lg:grid-cols-[0.9fr_1.4fr] gap-6">
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h2 class="text-xl font-semibold">Playbooks</h2>
          <p class="mt-2 text-sm text-slate-400">Selecciona un flujo para iniciar.</p>
          <div class="mt-4 space-y-3">
            <button
              *ngFor="let playbook of playbooks"
              type="button"
              class="w-full text-left rounded-xl border px-4 py-3 transition"
              [ngClass]="
                selectedPlaybook?.id === playbook.id
                  ? 'border-neon-cyan/40 bg-neon-cyan/10'
                  : 'border-white/10 hover:border-neon-cyan/40'
              "
              (click)="selectPlaybook(playbook)"
            >
              <p class="text-sm font-semibold">{{ playbook.title }}</p>
              <p class="text-xs text-slate-400">{{ playbook.description }}</p>
              <p class="mt-2 text-xs text-slate-500">Tiempo estimado: {{ playbook.estimatedTime }}</p>
            </button>
          </div>
        </app-glass-card>

        <div class="space-y-6">
          <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold">Visualización de arquitectura</h2>
              <app-chip tone="accent">Live</app-chip>
            </div>
            <div class="mt-6 grid grid-cols-3 gap-4 text-center text-xs">
              <div class="space-y-2">
                <div class="h-14 rounded-xl border flex items-center justify-center"
                  [ngClass]="isActive('tf_vpc_on') ? 'border-neon-cyan/60 text-neon-cyan' : 'border-white/10 text-slate-400'">
                  VPC
                </div>
                <div class="h-14 rounded-xl border flex items-center justify-center"
                  [ngClass]="isActive('tf_subnets_on') ? 'border-neon-cyan/60 text-neon-cyan' : 'border-white/10 text-slate-400'">
                  Subnets
                </div>
              </div>
              <div class="space-y-2">
                <div class="h-14 rounded-xl border flex items-center justify-center"
                  [ngClass]="isActive('tf_cluster_on') ? 'border-neon-cyan/60 text-neon-cyan' : 'border-white/10 text-slate-400'">
                  Cluster
                </div>
                <div class="h-14 rounded-xl border flex items-center justify-center"
                  [ngClass]="isActive('k8s_service_on') ? 'border-neon-cyan/60 text-neon-cyan' : 'border-white/10 text-slate-400'">
                  Service
                </div>
              </div>
              <div class="space-y-2">
                <div class="h-14 rounded-xl border flex items-center justify-center"
                  [ngClass]="isActive('k8s_pod_on') ? 'border-neon-cyan/60 text-neon-cyan' : 'border-white/10 text-slate-400'">
                  Pods
                </div>
                <div class="h-14 rounded-xl border flex items-center justify-center"
                  [ngClass]="isActive('k8s_ingress_on') ? 'border-neon-cyan/60 text-neon-cyan' : 'border-white/10 text-slate-400'">
                  Ingress
                </div>
              </div>
            </div>
          </app-glass-card>

          <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold">Terminal</h2>
              <div class="flex gap-2">
                <button
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  [ngClass]="isRunning ? 'bg-slate-800 text-slate-400' : 'bg-neon-cyan/20 text-neon-cyan'"
                  type="button"
                  [disabled]="isRunning"
                  (click)="runNextStep()"
                >
                  Run Step
                </button>
                <button
                  class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-200"
                  type="button"
                  (click)="resetLab()"
                >
                  Reset Lab
                </button>
              </div>
            </div>
            <div class="mt-4 rounded-xl border border-white/10 bg-black/50 p-4 text-sm font-mono text-slate-200 h-56 overflow-y-auto">
              <div *ngFor="let line of terminalLines">{{ line }}</div>
              <div class="mt-4 flex items-center gap-2 text-slate-500">
                <span>devsecops&#64;lab</span>
                <span>$</span>
                <input
                  class="bg-transparent flex-1 outline-none"
                  placeholder="Presiona Enter para ejecutar"
                  (keydown.enter)="runNextStep()"
                  [disabled]="isRunning"
                />
              </div>
            </div>
          </app-glass-card>
        </div>
      </section>

      <section class="grid lg:grid-cols-[1.4fr_0.9fr] gap-6">
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">Cloud Ops Monitor</h2>
            <button
              class="px-3 py-1 rounded-full text-xs font-semibold bg-neon-cyan/20 text-neon-cyan"
              type="button"
              (click)="simulateSpike()"
            >
              Simular spike
            </button>
          </div>
          <div class="mt-4 grid grid-cols-3 gap-4">
            <div *ngFor="let metric of metrics" class="rounded-xl border border-white/10 p-4">
              <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ metric.label }}</p>
              <p class="mt-2 text-xl font-semibold">{{ metric.value }}</p>
              <p class="text-xs text-emerald-300">{{ metric.delta }}</p>
            </div>
          </div>
          <div class="mt-6 h-24">
            <svg viewBox="0 0 200 60" class="w-full h-full">
              <polyline
                [attr.points]="chartPoints"
                fill="none"
                stroke="#22d3ee"
                stroke-width="2"
              ></polyline>
            </svg>
          </div>
        </app-glass-card>

        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">Logs live</h2>
            <label class="text-xs text-slate-400 flex items-center gap-2">
              <input type="checkbox" class="accent-neon-cyan" [(ngModel)]="autoScroll" /> Auto-scroll
            </label>
          </div>
          <input
            class="mt-3 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm"
            placeholder="Filtrar logs"
            [(ngModel)]="logFilter"
          />
          <div #logsPanel class="mt-4 h-48 overflow-y-auto text-xs text-slate-300 space-y-2">
            <div *ngFor="let log of filteredLogs">{{ log }}</div>
          </div>
        </app-glass-card>
      </section>

      <section class="grid lg:grid-cols-[1.4fr_0.9fr] gap-6">
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" extraClasses="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">Chaos Arena</h2>
            <app-chip tone="accent">Simulado</app-chip>
          </div>
          <div class="flex flex-wrap gap-3">
            <button class="px-4 py-2 rounded-full text-xs font-semibold bg-slate-800/70 text-slate-200" type="button" (click)="triggerIncident('Pod crashloop')">
              Kill Pod
            </button>
            <button class="px-4 py-2 rounded-full text-xs font-semibold bg-slate-800/70 text-slate-200" type="button" (click)="triggerIncident('Latency spike')">
              Add Latency
            </button>
            <button class="px-4 py-2 rounded-full text-xs font-semibold bg-slate-800/70 text-slate-200" type="button" (click)="triggerIncident('DB down')">
              DB Down
            </button>
          </div>
          <div class="rounded-xl border border-white/10 p-4">
            <p class="text-sm font-semibold">Estado: {{ chaosStateLabel }}</p>
            <p class="mt-2 text-xs text-slate-400">{{ chaosMessage }}</p>
          </div>
        </app-glass-card>

        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h2 class="text-xl font-semibold">Acciones sugeridas</h2>
          <ul class="mt-4 space-y-2 text-sm">
            <li *ngFor="let action of chaosActions" class="flex items-start gap-2">
              <span class="mt-1 h-2 w-2 rounded-full bg-neon-cyan"></span>
              <span class="text-slate-300">{{ action }}</span>
            </li>
          </ul>
        </app-glass-card>
      </section>
    </div>
  `,
})
export class LabPageComponent {
  playbooks: Playbook[] = [];
  selectedPlaybook: Playbook | null = null;
  terminalLines: string[] = ['Listo para ejecutar el playbook.'];
  stepIndex = 0;
  isRunning = false;
  activeVisualKey = '';
  chartData = [12, 18, 15, 22, 19, 26, 23, 20, 18];
  autoScroll = true;
  logFilter = '';
  logs = [
    '[09:41] healthcheck ok',
    '[09:42] latency 120ms',
    '[09:43] autoscale +1',
    '[09:44] policy scan ok',
    '[09:45] deploy pipeline ready',
  ];
  metrics: MetricCard[] = [
    { label: 'Latencia', value: '120ms', delta: '+2%' },
    { label: 'Disponibilidad', value: '99.98%', delta: '+0.1%' },
    { label: 'Errores', value: '0.12%', delta: '-0.04%' },
  ];

  chaosState: 'idle' | 'detected' | 'mitigating' | 'resolved' = 'idle';
  chaosMessage = 'Sin incidentes activos.';
  chaosActions = ['Revisar logs críticos', 'Escalar pods', 'Validar rollback'];

  private outputTimer: number | null = null;
  private chaosTimer: number | null = null;

  @ViewChild('logsPanel') logsPanel?: ElementRef<HTMLDivElement>;

  constructor(
    public modeService: ModeService,
    private readonly playbookService: PlaybookService,
  ) {
    this.playbookService.getPlaybooks().subscribe((playbooks) => {
      this.playbooks = playbooks;
      if (playbooks.length > 0) {
        this.selectPlaybook(playbooks[0]);
      }
    });
  }

  get chartPoints(): string {
    return this.chartData
      .map((value, index) => `${index * 25},${60 - value}`)
      .join(' ');
  }

  get filteredLogs(): string[] {
    if (!this.logFilter) {
      return this.logs;
    }
    return this.logs.filter((log) => log.toLowerCase().includes(this.logFilter.toLowerCase()));
  }

  get chaosStateLabel(): string {
    return {
      idle: 'Listo',
      detected: 'Detectado',
      mitigating: 'Mitigando',
      resolved: 'Resuelto',
    }[this.chaosState];
  }

  selectPlaybook(playbook: Playbook): void {
    this.selectedPlaybook = playbook;
    this.resetLab();
  }

  runNextStep(): void {
    if (!this.selectedPlaybook || this.isRunning) {
      return;
    }
    const step = this.selectedPlaybook.steps[this.stepIndex];
    if (!step) {
      this.terminalLines.push('Playbook completo ✅');
      return;
    }

    this.isRunning = true;
    this.activeVisualKey = step.visualKey;
    this.terminalLines.push(`$ ${step.command}`);

    let lineIndex = 0;
    this.outputTimer = window.setInterval(() => {
      if (!step.outputLines[lineIndex]) {
        if (this.outputTimer) {
          window.clearInterval(this.outputTimer);
        }
        this.outputTimer = null;
        this.stepIndex += 1;
        this.isRunning = false;
        return;
      }
      this.terminalLines.push(step.outputLines[lineIndex]);
      lineIndex += 1;
    }, 280);
  }

  resetLab(): void {
    if (this.outputTimer) {
      window.clearInterval(this.outputTimer);
      this.outputTimer = null;
    }
    this.stepIndex = 0;
    this.terminalLines = ['Lab reiniciado.'];
    this.activeVisualKey = '';
    this.isRunning = false;
  }

  isActive(key: string): boolean {
    return this.activeVisualKey === key;
  }

  simulateSpike(): void {
    this.metrics = [
      { label: 'Latencia', value: '420ms', delta: '+35%' },
      { label: 'Disponibilidad', value: '99.72%', delta: '-0.4%' },
      { label: 'Errores', value: '0.9%', delta: '+0.7%' },
    ];
    this.chartData = [12, 18, 15, 22, 45, 50, 38, 26, 20];
    this.logs = [`[${new Date().toLocaleTimeString()}] alerta: spike de latencia`, ...this.logs];
    setTimeout(() => {
      this.metrics = [
        { label: 'Latencia', value: '140ms', delta: '-20%' },
        { label: 'Disponibilidad', value: '99.95%', delta: '+0.2%' },
        { label: 'Errores', value: '0.15%', delta: '-0.6%' },
      ];
      this.chartData = [12, 18, 15, 22, 19, 26, 23, 20, 18];
    }, 1800);
    this.scrollLogs();
  }

  triggerIncident(type: string): void {
    if (this.chaosTimer) {
      window.clearTimeout(this.chaosTimer);
    }
    this.chaosState = 'detected';
    this.chaosMessage = `Incidente detectado: ${type}`;
    this.chaosActions = ['Identificar impacto', 'Aislar servicio', 'Ejecutar rollback'];

    this.chaosTimer = window.setTimeout(() => {
      this.chaosState = 'mitigating';
      this.chaosMessage = 'Mitigación en curso con playbooks activos.';
      this.chaosActions = ['Escalar pods', 'Actualizar reglas de tráfico', 'Notificar stakeholders'];

      this.chaosTimer = window.setTimeout(() => {
        this.chaosState = 'resolved';
        this.chaosMessage = 'Incidente resuelto y métricas estabilizadas.';
        this.chaosActions = ['Post-mortem', 'Actualizar runbook', 'Medir impacto'];
      }, 1800);
    }, 1600);
  }

  private scrollLogs(): void {
    if (!this.autoScroll || !this.logsPanel) {
      return;
    }
    setTimeout(() => {
      const el = this.logsPanel?.nativeElement;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }, 50);
  }
}
