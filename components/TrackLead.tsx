"use client";

import { useEffect, useRef } from "react";

/**
 * Fires the Meta standard event `Lead` exactly once when mounted.
 *
 * Rendered on the post-registration thank-you page (`/gracias`). GoHighLevel is
 * configured to redirect the form to that page after a successful submit, so a
 * page-load event is the most reliable conversion signal (the form itself lives
 * in a cross-origin iframe whose submit cannot be observed from the parent).
 *
 * The base pixel is already initialized in the root layout (MetaPixel), so here
 * we only need to track the conversion.
 */
export default function TrackLead() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "Lead");
    }
  }, []);

  return null;
}
