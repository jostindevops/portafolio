import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      [ngClass]="tone === 'accent' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-slate-800/70 text-slate-200'"
    >
      <ng-content></ng-content>
    </span>
  `,
})
export class ChipComponent {
  @Input() tone: 'accent' | 'neutral' = 'neutral';
}
