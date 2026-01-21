import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-xl border p-4" [ngClass]="variant === 'light' ? 'glass-card-light border-white/40' : 'glass-card border-white/10'">
      <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ label }}</p>
      <p class="mt-3 text-2xl font-semibold" [ngClass]="variant === 'light' ? 'text-slate-900' : 'text-slate-100'">{{ value }}</p>
      <p class="mt-2 text-sm text-slate-400">{{ hint }}</p>
    </div>
  `,
})
export class StatCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() hint = '';
  @Input() variant: 'light' | 'dark' = 'dark';
}
