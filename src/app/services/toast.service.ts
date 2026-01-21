import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  id: string;
  message: string;
  tone: 'success' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly toastsSubject = new BehaviorSubject<ToastMessage[]>([]);
  readonly toasts$ = this.toastsSubject.asObservable();

  show(message: string, tone: 'success' | 'info' = 'success'): void {
    const id = crypto.randomUUID();
    const next = [...this.toastsSubject.getValue(), { id, message, tone }];
    this.toastsSubject.next(next);

    setTimeout(() => {
      this.dismiss(id);
    }, 3500);
  }

  dismiss(id: string): void {
    this.toastsSubject.next(this.toastsSubject.getValue().filter((toast) => toast.id !== id));
  }
}
