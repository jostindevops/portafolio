import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioMode } from '../mode.service';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="relative flex items-center w-36 h-11 rounded-full border transition-all duration-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-cyan/70"
      [attr.role]="'switch'"
      [attr.aria-checked]="mode === 'lab'"
      [ngClass]="mode === 'lab' ? 'border-neon-cyan/40 bg-slate-900/70' : 'border-slate-200 bg-white'"
      (click)="toggle.emit()"
      (keydown.enter)="toggle.emit()"
      (keydown.space)="toggle.emit()"
    >
      <span
        class="absolute top-1 left-1 h-9 w-[4.75rem] rounded-full transition-transform duration-300"
        [ngClass]="mode === 'lab' ? 'translate-x-0 bg-neon-cyan/20' : 'translate-x-[4.75rem] bg-slate-900/10'"
      ></span>
      <span class="relative z-10 flex-1 text-xs font-semibold" [ngClass]="mode === 'lab' ? 'text-neon-cyan' : 'text-slate-500'">
        🧪 Lab
      </span>
      <span class="relative z-10 flex-1 text-xs font-semibold" [ngClass]="mode === 'lab' ? 'text-slate-400' : 'text-slate-900'">
        💼 Business
      </span>
    </button>
  `,
})
export class ModeToggleComponent {
  @Input() mode: PortfolioMode = 'lab';
  @Output() toggle = new EventEmitter<void>();
}
