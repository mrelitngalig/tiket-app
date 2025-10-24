// src/instrument.ts
import * as Sentry from "@sentry/vue";
import router from "@/router";
import type { App as VueApp } from "vue";

export function initSentry(app: VueApp) {
  Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN || "",
    environment: import.meta.env.MODE,
    sendDefaultPii: true,
    integrations: [
      // v8 style — ganti BrowserTracing/vueRouterInstrumentation lama
      Sentry.browserTracingIntegration({ router }),
      // optional: session replay
      // Sentry.replayIntegration(),
    ],
    // Turunkan di production (mis. 0.1–0.2)
    tracesSampleRate: 1.0,
    // replaysSessionSampleRate: 0.1,
    // replaysOnErrorSampleRate: 1.0,
  });
}
