import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOption } from './config-option';
import { CONFIG_OPTIONS } from './mock-config';

/**
 * Dashboard component responsible for rendering the main DevOps view and
 * dynamically displaying configurable widgets. The component uses Angular
 * signals to hold the list of configuration options so that if the data
 * were to change in the future the UI would automatically re-render.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <!-- Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neon-cyan drop-shadow-lg">
        DevOps Bitácora
      </h1>
      <!-- Widget placeholder grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          *ngFor="let option of options()"
          class="rounded-xl p-5 bg-slate-800/60 backdrop-blur-lg border border-slate-700 shadow-neon-cyan hover:shadow-neon-green transition-shadow duration-300"
        >
          <h2 class="text-xl font-bold text-neon-cyan mb-2 font-mono">{{ option.name }}</h2>
          <p class="text-gray-400 font-mono">
            <!-- Placeholder text to indicate that this widget is configurable -->
            Módulo aún no configurado.
          </p>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent {
  /**
   * Signal holding the list of configuration options. Signals provide a
   * lightweight and straightforward reactive primitive in Angular. When
   * configuration options change (for example, if fetched from an API),
   * the UI will automatically update.
   */
  options = signal<ConfigOption[]>(CONFIG_OPTIONS);
}