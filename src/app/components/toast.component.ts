import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-6 right-6 z-50 space-y-3">
      <div
        *ngFor="let toast of toastService.toasts$ | async"
        class="rounded-xl border px-4 py-3 shadow-lg backdrop-blur"
        [ngClass]="
          toast.tone === 'success'
            ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-100'
            : 'bg-slate-800/70 border-white/10 text-slate-200'
        "
      >
        <p class="text-sm font-semibold">{{ toast.message }}</p>
      </div>
    </div>
  `,
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
