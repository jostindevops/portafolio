import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { GlassCardComponent } from '../components/glass-card.component';
import { ModeService } from '../mode.service';
import { ToastService } from '../services/toast.service';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-connect-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GlassCardComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('420ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  template: `
    <div class="max-w-5xl mx-auto px-6 py-14 space-y-10" @fadeIn>
      <section>
        <h1 class="text-3xl font-bold">Let’s Connect</h1>
        <p class="text-sm text-slate-400">Propuestas estratégicas, mentorías o diagnósticos de seguridad.</p>
      </section>

      <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" >
          <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
            <div>
              <label class="text-sm font-semibold">Nombre</label>
              <input
                class="mt-2 w-full rounded-lg border px-4 py-3 bg-transparent"
                [ngClass]="
                  (modeService.mode$ | async) === 'lab'
                    ? 'border-white/10 text-slate-200 placeholder-slate-500'
                    : 'border-slate-200 text-slate-700 placeholder-slate-400'
                "
                placeholder="Tu nombre"
                formControlName="name"
              />
              <p *ngIf="form.controls.name.invalid && form.controls.name.touched" class="mt-1 text-xs text-rose-400">
                Nombre requerido.
              </p>
            </div>
            <div>
              <label class="text-sm font-semibold">Email</label>
              <input
                type="email"
                class="mt-2 w-full rounded-lg border px-4 py-3 bg-transparent"
                [ngClass]="
                  (modeService.mode$ | async) === 'lab'
                    ? 'border-white/10 text-slate-200 placeholder-slate-500'
                    : 'border-slate-200 text-slate-700 placeholder-slate-400'
                "
                placeholder="nombre@empresa.com"
                formControlName="email"
              />
              <p *ngIf="form.controls.email.invalid && form.controls.email.touched" class="mt-1 text-xs text-rose-400">
                Email válido requerido.
              </p>
            </div>
            <div>
              <label class="text-sm font-semibold">Mensaje</label>
              <textarea
                rows="4"
                class="mt-2 w-full rounded-lg border px-4 py-3 bg-transparent"
                [ngClass]="
                  (modeService.mode$ | async) === 'lab'
                    ? 'border-white/10 text-slate-200 placeholder-slate-500'
                    : 'border-slate-200 text-slate-700 placeholder-slate-400'
                "
                placeholder="Cuéntame sobre tu reto"
                formControlName="message"
              ></textarea>
              <p *ngIf="form.controls.message.invalid && form.controls.message.touched" class="mt-1 text-xs text-rose-400">
                Mensaje requerido.
              </p>
            </div>
            <button
              type="submit"
              class="w-full px-6 py-3 rounded-lg font-semibold"
              [disabled]="form.invalid"
              [ngClass]="
                (modeService.mode$ | async) === 'lab'
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40'
                  : 'bg-slate-900 text-white'
              "
            >
              Enviar mensaje
            </button>
          </form>
        </app-glass-card>
        <app-glass-card [variant]="(modeService.mode$ | async) === 'lab' ? 'dark' : 'light'" extraClasses="space-y-4">
          <div>
            <h3 class="text-xl font-semibold">Canales directos</h3>
            <p class="mt-2 text-sm text-slate-400">LinkedIn, GitHub y CV listos para compartir.</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <button class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-800/70 text-slate-200" type="button">LinkedIn</button>
            <button class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-800/70 text-slate-200" type="button">GitHub</button>
            <button class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-800/70 text-slate-200" type="button">Descargar CV</button>
          </div>
          <div class="rounded-xl border border-white/10 p-4 text-sm text-slate-400">
            Agenda abierta para workshops y sesiones de arquitectura.
          </div>
        </app-glass-card>
      </div>
    </div>
  `,
})
export class ConnectPageComponent {
  form = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  constructor(
    public modeService: ModeService,
    private readonly formBuilder: FormBuilder,
    private readonly toastService: ToastService,
  ) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.toastService.show('Mensaje enviado. Respondo en menos de 24h.');
    this.form.reset();
  }
}
