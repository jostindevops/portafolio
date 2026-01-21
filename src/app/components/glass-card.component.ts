import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="rounded-2xl border backdrop-blur-xl transition-all duration-300 p-6"
      [ngClass]="[variant === 'light' ? 'glass-card-light border-white/40' : 'glass-card border-white/10', extraClasses]"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class GlassCardComponent {
  @Input() variant: 'light' | 'dark' = 'dark';
  @Input() extraClasses = '';
}
