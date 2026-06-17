/**
 * Utilidades de seguimiento para Google Analytics 4.
 * Los eventos se envían mediante gtag si está disponible en el cliente.
 */

export type AnalyticsEvent =
  | "click_expo_android"
  | "click_expo_ios"
  | "click_comenzar"
  | "click_aviso_privacidad";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string,
      params?: Record<string, unknown>,
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
