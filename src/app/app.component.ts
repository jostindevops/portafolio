import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * Root component that defines the overall layout of the application.
 *
 * This component uses Angular signals to manage the collapsed state of
 * the sidebar. When the sidebar is collapsed, only the icon remains
 * visible; when expanded, the label and additional navigation items are shown.
 *
 * Standalone components eliminate the need for a NgModule and simplify
 * bootstrapping.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="flex h-screen">
      <!-- Sidebar -->
      <aside
        [class.w-64]="!collapsed()"
        [class.w-16]="collapsed()"
        class="bg-slate-800/70 backdrop-blur-md border-r border-slate-700 text-gray-200 transition-all duration-300"
      >
        <div class="flex items-center justify-between p-4">
          <span
            class="text-lg font-bold tracking-wide text-neon-cyan"
            *ngIf="!collapsed()"
            >DevSecOps</span
          >
          <button
            (click)="toggle()"
            class="text-gray-400 hover:text-neon-cyan focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <!-- Hamburger icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <!-- Navigation -->
        <nav class="mt-6 flex flex-col space-y-4" *ngIf="!collapsed()">
          <a
            routerLink="/"
            class="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-slate-700 transition-colors text-gray-300 hover:text-neon-cyan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
            <span class="font-mono">Dashboard</span>
          </a>
        </nav>
      </aside>
      <!-- Main content area -->
      <main class="flex-1 overflow-auto p-6">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent {
  /**
   * Signal storing whether the sidebar is collapsed. Signals are a reactive
   * primitive introduced in Angular 16+ that behave similarly to RxJS
   * BehaviorSubjects but are optimized for change detection. The value can
   * be read by calling the function returned by `signal()` and updated
   * via `.set()`.
   */
  collapsed = signal<boolean>(false);

  /**
   * Toggles the collapsed state of the sidebar.
   */
  toggle(): void {
    this.collapsed.set(!this.collapsed());
  }
}