import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../components/glass-card.component';
import { ChipComponent } from '../components/chip.component';
import { ModalComponent } from '../components/modal.component';
import { CaseStudy, CaseStudyService } from '../services/case-study.service';
import { ExperienceItem, ExperienceService } from '../services/experience.service';
import { ModeService } from '../mode.service';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-business-page',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, ChipComponent, ModalComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('420ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-14 space-y-12" @fadeIn>
      <section class="space-y-3">
        <h1 class="text-3xl font-bold">Business · Casos y credibilidad</h1>
        <p class="text-sm text-slate-500">Historias ejecutivas con resultados medibles.</p>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Case Studies</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <button
            *ngFor="let caseStudy of caseStudies"
            type="button"
            class="text-left"
            (click)="openCase(caseStudy)"
          >
            <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" extraClasses="h-full">
              <h3 class="text-xl font-semibold">{{ caseStudy.title }}</h3>
              <p class="mt-2 text-sm text-slate-400">{{ caseStudy.summary }}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <app-chip *ngFor="let tag of caseStudy.techTags" tone="accent">{{ tag }}</app-chip>
              </div>
            </app-glass-card>
          </button>
        </div>
      </section>

      <section class="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h2 class="text-xl font-semibold">Experiencia</h2>
          <div class="mt-4 space-y-4">
            <div *ngFor="let item of experience" class="border-l border-white/10 pl-4">
              <p class="text-sm font-semibold">{{ item.role }} · {{ item.org }}</p>
              <p class="text-xs text-slate-400">{{ item.dates }}</p>
              <ul class="mt-2 text-xs text-slate-400 space-y-1">
                <li *ngFor="let bullet of item.bullets">• {{ bullet }}</li>
              </ul>
            </div>
          </div>
        </app-glass-card>
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <h2 class="text-xl font-semibold">Stack</h2>
          <p class="mt-2 text-sm text-slate-400">Tecnologías agrupadas por impacto.</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <app-chip tone="accent">Cloud</app-chip>
            <app-chip>Zero Trust</app-chip>
            <app-chip>CI/CD</app-chip>
            <app-chip>FinOps</app-chip>
            <app-chip>Observabilidad</app-chip>
          </div>
        </app-glass-card>
      </section>

      <app-modal [open]="!!selectedCase" [title]="selectedCase?.title || ''" (close)="selectedCase = null">
        <div *ngIf="selectedCase" class="space-y-4 text-sm text-slate-200">
          <p>{{ selectedCase.summary }}</p>
          <div>
            <p class="font-semibold text-slate-100">Problema</p>
            <p>{{ selectedCase.problem }}</p>
          </div>
          <div>
            <p class="font-semibold text-slate-100">Solución</p>
            <p>{{ selectedCase.solution }}</p>
          </div>
          <div>
            <p class="font-semibold text-slate-100">Impacto</p>
            <ul class="list-disc list-inside">
              <li *ngFor="let metric of selectedCase.impactMetrics">{{ metric }}</li>
            </ul>
          </div>
        </div>
      </app-modal>
    </div>
  `,
})
export class BusinessPageComponent {
  caseStudies: CaseStudy[] = [];
  experience: ExperienceItem[] = [];
  selectedCase: CaseStudy | null = null;

  constructor(
    public modeService: ModeService,
    private readonly caseStudyService: CaseStudyService,
    private readonly experienceService: ExperienceService,
  ) {
    this.caseStudyService.getCaseStudies().subscribe((data) => {
      this.caseStudies = data;
    });
    this.experienceService.getExperience().subscribe((data) => {
      this.experience = data;
    });
  }

  openCase(caseStudy: CaseStudy): void {
    this.selectedCase = caseStudy;
  }
}
