import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeService } from './mode.service';

interface Highlight {
  title: string;
  description: string;
  tags: string[];
}

interface FeatureCard {
  title: string;
  description: string;
  bullets: string[];
  accent: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-14 space-y-20">
      <section class="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div class="space-y-6">
          <p
            class="text-sm uppercase tracking-[0.4em]"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'text-neon-cyan'
                : 'text-slate-500'
            "
          >
            Arquitectura DevSecOps
          </p>
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            {{ modeService.mode() === 'lab'
              ? 'Laboratorio interactivo 2025/2026 para diseñar, simular y endurecer infraestructuras seguras.'
              : 'Portafolio estratégico con impacto de negocio, resiliencia y seguridad comprobable.' }}
          </h1>
          <p
            class="text-lg"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'text-slate-300'
                : 'text-slate-600'
            "
          >
            {{ modeService.mode() === 'lab'
              ? 'Explora tendencias creativas: 3D, IA, simuladores y builders visuales listos para demostrar prácticas SRE y DevSecOps.'
              : 'Navega casos, comparativas y experiencias que conectan ingeniería con métricas de valor empresarial.' }}
          </p>
          <div class="flex flex-wrap gap-4">
            <button
              class="px-6 py-3 rounded-full font-semibold transition"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/30'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              "
            >
              {{ modeService.mode() === 'lab' ? 'Explorar Laboratorio' : 'Ver Case Studies' }}
            </button>
            <button
              class="px-6 py-3 rounded-full font-semibold transition"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'border border-slate-600 text-slate-200 hover:border-neon-cyan'
                  : 'border border-slate-300 text-slate-700 hover:border-slate-500'
              "
            >
              {{ modeService.mode() === 'lab' ? 'Simular Incidente' : 'Agendar Workshop' }}
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <div
            class="rounded-2xl p-6 border"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'glass-card border-white/10'
                : 'glass-card-light border-white/50'
            "
          >
            <p
              class="text-sm uppercase tracking-[0.3em]"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'text-slate-400'
                  : 'text-slate-500'
              "
            >
              Enfoque
            </p>
            <h2 class="text-2xl font-bold mt-3">
              {{ modeService.mode() === 'lab' ? 'Arquitecto en Acción' : 'Valor Empresarial' }}
            </h2>
            <p
              class="mt-3"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'text-slate-300'
                  : 'text-slate-600'
              "
            >
              {{ modeService.mode() === 'lab'
                ? 'Simulaciones, observabilidad avanzada, IA y respuesta a incidentes en un mismo flujo.'
                : 'Estrategia, KPIs y comparativas que aceleran decisiones de negocio.' }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              class="rounded-xl p-4 border"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'glass-card border-white/10'
                  : 'glass-card-light border-white/50'
              "
            >
              <p class="text-sm text-slate-400">Playbooks</p>
              <p class="text-xl font-semibold">12+</p>
            </div>
            <div
              class="rounded-xl p-4 border"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'glass-card border-white/10'
                  : 'glass-card-light border-white/50'
              "
            >
              <p class="text-sm text-slate-400">Casos</p>
              <p class="text-xl font-semibold">8+</p>
            </div>
            <div
              class="rounded-xl p-4 border"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'glass-card border-white/10'
                  : 'glass-card-light border-white/50'
              "
            >
              <p class="text-sm text-slate-400">Stack</p>
              <p class="text-xl font-semibold">Cloud + SRE</p>
            </div>
            <div
              class="rounded-xl p-4 border"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'glass-card border-white/10'
                  : 'glass-card-light border-white/50'
              "
            >
              <p class="text-sm text-slate-400">Visión</p>
              <p class="text-xl font-semibold">DevSecOps</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-3xl font-bold">About Me</h2>
          <div
            class="px-4 py-2 rounded-full text-sm font-semibold"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'bg-neon-cyan/20 text-neon-cyan'
                : 'bg-slate-900 text-white'
            "
          >
            Filosofía: Seguridad + Observabilidad
          </div>
        </div>
        <div class="grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div
            class="rounded-2xl p-6 border"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'glass-card border-white/10'
                : 'glass-card-light border-white/50'
            "
          >
            <p
              class="text-lg"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'text-slate-300'
                  : 'text-slate-600'
              "
            >
              Soy arquitecto DevSecOps especializado en automatización segura, respuesta a incidentes y diseño de
              plataformas cloud confiables. Mi enfoque combina ingeniería, diseño de producto y métricas de negocio para
              crear sistemas resilientes que escalan con seguridad.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/70 text-white">CTA: Agenda una llamada</span>
              <span
                class="px-3 py-1 rounded-full text-xs font-semibold"
                [ngClass]="
                  modeService.mode() === 'lab'
                    ? 'bg-neon-cyan/20 text-neon-cyan'
                    : 'bg-slate-100 text-slate-700'
                "
              >
                Descarga CV
              </span>
            </div>
          </div>
          <div
            class="rounded-2xl p-6 border flex flex-col justify-between"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'glass-card border-white/10'
                : 'glass-card-light border-white/50'
            "
          >
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Imagen</p>
              <h3 class="text-2xl font-semibold mt-3">Foto + Identidad visual</h3>
              <p class="text-sm mt-2 text-slate-400">Placeholder para retrato profesional o avatar.</p>
            </div>
            <div class="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
              <span>Arquitectura Cloud</span>
              <span>Zero Trust</span>
              <span>Compliance</span>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-3xl font-bold">
            {{ modeService.mode() === 'lab' ? 'Laboratory Play' : 'Business Highlights' }}
          </h2>
          <p
            class="text-sm"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'text-slate-400'
                : 'text-slate-500'
            "
          >
            {{ modeService.mode() === 'lab'
              ? 'Playbooks interactivos, métricas y simulaciones en tiempo real.'
              : 'Experiencia profesional, casos de éxito y stack por dominio.' }}
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            *ngFor="let highlight of highlights"
            class="rounded-2xl p-6 border"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'glass-card border-white/10'
                : 'glass-card-light border-white/50'
            "
          >
            <h3 class="text-xl font-semibold">{{ highlight.title }}</h3>
            <p
              class="mt-2"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'text-slate-300'
                  : 'text-slate-600'
              "
            >
              {{ highlight.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                *ngFor="let tag of highlight.tags"
                class="px-3 py-1 rounded-full text-xs font-semibold"
                [ngClass]="
                  modeService.mode() === 'lab'
                    ? 'bg-slate-800/80 text-neon-cyan'
                    : 'bg-slate-100 text-slate-600'
                "
                >{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </section>

      <section id="lab" class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-3xl font-bold">Modo Lab · Tendencias Creativas y Técnicas 2025</h2>
          <p
            class="text-sm"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'text-slate-400'
                : 'text-slate-500'
            "
          >
            Arquitecturas inmersivas, IA aplicada y simuladores de operaciones para demostrar habilidad técnica.
          </p>
        </div>
        <div class="grid lg:grid-cols-3 gap-6">
          <article
            *ngFor="let card of labFeatures"
            class="rounded-2xl p-6 border space-y-4"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'glass-card border-white/10'
                : 'glass-card-light border-white/50'
            "
          >
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold">{{ card.title }}</h3>
              <span
                class="text-xs font-semibold uppercase tracking-[0.3em]"
                [ngClass]="
                  modeService.mode() === 'lab'
                    ? 'text-neon-cyan'
                    : 'text-slate-500'
                "
                >{{ card.accent }}</span
              >
            </div>
            <p
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'text-slate-300'
                  : 'text-slate-600'
              "
            >
              {{ card.description }}
            </p>
            <ul class="space-y-2 text-sm">
              <li
                *ngFor="let bullet of card.bullets"
                class="flex items-start gap-2"
              >
                <span
                  class="mt-1 h-2 w-2 rounded-full"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'bg-neon-cyan'
                      : 'bg-slate-800'
                  "
                ></span>
                <span
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'text-slate-300'
                      : 'text-slate-600'
                  "
                  >{{ bullet }}</span
                >
              </li>
            </ul>
          </article>
        </div>
        <div
          class="rounded-2xl p-6 border flex flex-wrap items-center gap-6"
          [ngClass]="
            modeService.mode() === 'lab'
              ? 'glass-card border-white/10'
              : 'glass-card-light border-white/50'
          "
        >
          <div class="space-y-2">
            <h3 class="text-xl font-semibold">🎭 Role Switch</h3>
            <p
              class="text-sm"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'text-slate-300'
                  : 'text-slate-600'
              "
            >
              Cambia la narrativa y el UX para Dev, Team Lead, Security Engineer o Cliente.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full text-sm font-semibold bg-neon-cyan/20 text-neon-cyan">👨‍💻 Dev</span>
            <span class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-800/80 text-slate-200">🧑‍🏫 Team Lead</span>
            <span class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-800/80 text-slate-200">🔒 Security</span>
            <span class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-800/80 text-slate-200">🧑‍💼 Cliente</span>
          </div>
        </div>
      </section>

      <section id="business" class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-3xl font-bold">Modo Business · Ideas Diferenciadoras</h2>
          <p
            class="text-sm"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'text-slate-400'
                : 'text-slate-500'
            "
          >
            Visualizaciones ejecutivas, comparativas y experiencias para decisiones de alto impacto.
          </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-6">
          <article
            *ngFor="let card of businessFeatures"
            class="rounded-2xl p-6 border space-y-4"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'glass-card border-white/10'
                : 'glass-card-light border-white/50'
            "
          >
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold">{{ card.title }}</h3>
              <span
                class="text-xs font-semibold uppercase tracking-[0.3em]"
                [ngClass]="
                  modeService.mode() === 'lab'
                    ? 'text-neon-cyan'
                    : 'text-slate-500'
                "
                >{{ card.accent }}</span
              >
            </div>
            <p
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'text-slate-300'
                  : 'text-slate-600'
              "
            >
              {{ card.description }}
            </p>
            <ul class="space-y-2 text-sm">
              <li
                *ngFor="let bullet of card.bullets"
                class="flex items-start gap-2"
              >
                <span
                  class="mt-1 h-2 w-2 rounded-full"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'bg-neon-cyan'
                      : 'bg-slate-800'
                  "
                ></span>
                <span
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'text-slate-300'
                      : 'text-slate-600'
                  "
                  >{{ bullet }}</span
                >
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="connect" class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-3xl font-bold">Let’s Connect</h2>
          <p
            class="text-sm"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'text-slate-400'
                : 'text-slate-500'
            "
          >
            Conecta con oportunidades, alianzas y proyectos de alto impacto.
          </p>
        </div>
        <div class="grid md:grid-cols-[1fr_1fr] gap-6">
          <div
            class="rounded-2xl p-6 border"
            [ngClass]="
              modeService.mode() === 'lab'
                ? 'glass-card border-white/10'
                : 'glass-card-light border-white/50'
            "
          >
            <form class="space-y-4">
              <div>
                <label class="text-sm font-semibold">Nombre</label>
                <input
                  type="text"
                  class="mt-2 w-full rounded-lg border px-4 py-3 bg-transparent"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'border-white/10 text-slate-200 placeholder-slate-500'
                      : 'border-slate-200 text-slate-700 placeholder-slate-400'
                  "
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label class="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  class="mt-2 w-full rounded-lg border px-4 py-3 bg-transparent"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'border-white/10 text-slate-200 placeholder-slate-500'
                      : 'border-slate-200 text-slate-700 placeholder-slate-400'
                  "
                  placeholder="nombre@empresa.com"
                />
              </div>
              <div>
                <label class="text-sm font-semibold">Mensaje</label>
                <textarea
                  rows="4"
                  class="mt-2 w-full rounded-lg border px-4 py-3 bg-transparent"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'border-white/10 text-slate-200 placeholder-slate-500'
                      : 'border-slate-200 text-slate-700 placeholder-slate-400'
                  "
                  placeholder="Cuéntame sobre tu reto."
                ></textarea>
              </div>
              <button
                type="button"
                class="w-full px-6 py-3 rounded-lg font-semibold"
                [ngClass]="
                  modeService.mode() === 'lab'
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40'
                    : 'bg-slate-900 text-white'
                "
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          <div class="space-y-4">
            <div
              class="rounded-2xl p-6 border"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'glass-card border-white/10'
                  : 'glass-card-light border-white/50'
              "
            >
              <h3 class="text-xl font-semibold">Canales directos</h3>
              <p
                class="mt-2"
                [ngClass]="
                  modeService.mode() === 'lab'
                    ? 'text-slate-300'
                    : 'text-slate-600'
                "
              >
                LinkedIn, GitHub y CV listos para revisar. Calendly disponible para reuniones estratégicas.
              </p>
              <div class="mt-4 flex flex-wrap gap-3">
                <button
                  class="px-4 py-2 rounded-full text-sm font-semibold"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'bg-slate-800/80 text-neon-cyan'
                      : 'bg-slate-100 text-slate-700'
                  "
                >
                  LinkedIn
                </button>
                <button
                  class="px-4 py-2 rounded-full text-sm font-semibold"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'bg-slate-800/80 text-neon-cyan'
                      : 'bg-slate-100 text-slate-700'
                  "
                >
                  GitHub
                </button>
                <button
                  class="px-4 py-2 rounded-full text-sm font-semibold"
                  [ngClass]="
                    modeService.mode() === 'lab'
                      ? 'bg-slate-800/80 text-neon-cyan'
                      : 'bg-slate-100 text-slate-700'
                  "
                >
                  Descargar CV
                </button>
              </div>
            </div>
            <div
              class="rounded-2xl p-6 border"
              [ngClass]="
                modeService.mode() === 'lab'
                  ? 'glass-card border-white/10'
                  : 'glass-card-light border-white/50'
              "
            >
              <h3 class="text-xl font-semibold">Calendly</h3>
              <p
                class="mt-2"
                [ngClass]="
                  modeService.mode() === 'lab'
                    ? 'text-slate-300'
                    : 'text-slate-600'
                "
              >
                Bloque embebido para coordinar sesiones estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class DashboardComponent {
  constructor(public modeService: ModeService) {}

  get highlights(): Highlight[] {
    return this.modeService.mode() === 'lab'
      ? [
          {
            title: 'Infra 3D en tiempo real',
            description: 'Topologías vivas con nodos, pods y gateways conectados en 3D.',
            tags: ['Three.js', 'Deck.gl', 'Observabilidad'],
          },
          {
            title: 'AI Infra Assistant',
            description: 'Copilot que sugiere comandos, explica pipelines y detecta fallas comunes.',
            tags: ['LangChain', 'RAG', 'Kubernetes'],
          },
          {
            title: 'Simulador de Incidentes',
            description: 'Alertas dinámicas con evaluación de respuesta y tiempos de recuperación.',
            tags: ['SRE', 'Game Day', 'Resiliencia'],
          },
          {
            title: 'Playbook Builder Visual',
            description: 'Arma pipelines drag-and-drop y exporta YAML listo para producción.',
            tags: ['CI/CD', 'IaC', 'Automation'],
          },
        ]
      : [
          {
            title: 'Case Study Navigator',
            description: 'Mapa interactivo de proyectos con filtros por tecnología y resultados.',
            tags: ['ROI', 'KPIs', 'Storytelling'],
          },
          {
            title: 'Comparador de Arquitecturas',
            description: 'Antes vs después con métricas side-by-side para demostrar evolución.',
            tags: ['Uptime', 'Costos', 'Seguridad'],
          },
          {
            title: 'Mapa Global de Proyectos',
            description: 'Visualiza clientes por región con detalles de cada caso.',
            tags: ['Global', 'Impacto', 'Experiencia'],
          },
          {
            title: 'Agenda Interactiva',
            description: 'Reserva workshops o mentorías directamente desde el portafolio.',
            tags: ['Calendly', 'Workshops', 'Mentoría'],
          },
        ];
  }

  labFeatures: FeatureCard[] = [
    {
      title: '🌐 Infra 3D / Topologías Interactivas',
      description: 'Visualiza arquitecturas cloud en 3D y simula eventos en tiempo real.',
      bullets: [
        'Nodos, redes, pods y gateways conectados y animados.',
        'Reacciona a comandos: autoscaling, caída de servicios o failover.',
        'Lectura clara de latencia y salud con overlays dinámicos.',
      ],
      accent: '3D Live',
    },
    {
      title: '🧠 AI Infra Assistant (Copilot)',
      description: 'Chatbox técnico que guía decisiones operativas y de seguridad.',
      bullets: [
        'Sugiere comandos y playbooks según contexto.',
        'Explica cada paso del pipeline y la razón de los controles.',
        'Detecta errores comunes en Terraform/K8s y propone correcciones.',
      ],
      accent: 'AI',
    },
    {
      title: '🔂 Simulador de Costos Cloud',
      description: 'Mini widget FinOps para estimar costos por región y servicio.',
      bullets: [
        'Selecciona EC2, K8s, S3 u otros servicios clave.',
        'Calcula costo estimado con precios reales o simulados.',
        'Muestra recomendaciones de optimización y ahorro.',
      ],
      accent: 'FinOps',
    },
    {
      title: '📦 Playbook Builder Visual',
      description: 'Construye pipelines arrastrando bloques y exporta YAML.',
      bullets: [
        'Ejemplo: Build → Scan → Deploy to AKS → Notify Slack.',
        'Valida orden, dependencias y policies básicas.',
        'Exportación directa a repositorios o CLI.',
      ],
      accent: 'Pipeline',
    },
    {
      title: '📡 Simulador de Incidentes y Respuesta',
      description: 'Escenarios de alertas con evaluación de respuesta y logs.',
      bullets: [
        'Alertas como crashloop, latency spike o credenciales expuestas.',
        'Acciones: restart, rollback, scale, patch o aislado.',
        'Métricas de tiempo de respuesta y visibilidad del impacto.',
      ],
      accent: 'SRE',
    },
    {
      title: '🧠 Live Model Deployment (AI)',
      description: 'Flujo completo de un modelo ML desde training hasta despliegue.',
      bullets: [
        'Carga desde HuggingFace y versionado de experimentos.',
        'Dockerización y despliegue a K8s con observabilidad.',
        'Prueba de API en la misma interfaz.',
      ],
      accent: 'MLOps',
    },
  ];

  businessFeatures: FeatureCard[] = [
    {
      title: '📚 Interactive Case Study Navigator',
      description: 'Timeline visual con filtros por tecnología, año o solución.',
      bullets: [
        'Proyectos expandibles con problema, solución y resultados.',
        'Filtros por IaC, DevOps, ML, Security y más.',
        'Indicadores de impacto con KPIs clave.',
      ],
      accent: 'Navigator',
    },
    {
      title: '📅 Agenda Interactiva',
      description: 'Reserva workshops, mentorías o entrevistas técnicas.',
      bullets: [
        'Slots disponibles en tiempo real con integración Calendly.',
        'Confirmaciones automáticas y recordatorios.',
        'Opciones para demos ejecutivas o sesiones técnicas.',
      ],
      accent: 'Calendar',
    },
    {
      title: '🎤 Reproductor de Tech Talks',
      description: 'Embeds de charlas con transcripción y etiquetas.',
      bullets: [
        'Subtítulos y blog transcrito con búsqueda.',
        'Tags clicables para explorar tecnologías mencionadas.',
        'Playlist de podcasts o entrevistas técnicas.',
      ],
      accent: 'Media',
    },
    {
      title: '📍 Mapa Global de Proyectos',
      description: 'Mapa interactivo con clientes por región.',
      bullets: [
        'Puntos geográficos con acceso a casos de estudio.',
        'Segmentación por industria o tamaño de empresa.',
        'Insights regionales y métricas de impacto.',
      ],
      accent: 'Global',
    },
    {
      title: '🔍 Comparador de Arquitecturas',
      description: 'Comparación antes/después con transiciones.',
      bullets: [
        'KPIs en paralelo: uptime, costos, time-to-deploy y seguridad.',
        'Animaciones que muestran la evolución del sistema.',
        'Resumen ejecutivo y aprendizajes clave.',
      ],
      accent: 'Compare',
    },
  ];
}
