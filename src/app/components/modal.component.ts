import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="open"
      class="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/70 px-6"
      (click)="close.emit()"
    >
      <div
        class="max-w-2xl w-full rounded-2xl border bg-slate-900/80 p-6 text-slate-100 backdrop-blur"
        (click)="$event.stopPropagation()"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <button class="text-slate-400 hover:text-slate-100" type="button" (click)="close.emit()">✕</button>
        </div>
        <div class="mt-4">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class ModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();
}
