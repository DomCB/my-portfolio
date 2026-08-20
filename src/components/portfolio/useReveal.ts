import { useEffect, useRef, useState } from "react";
import type { FocusEvent, PointerEvent } from "react";

/**
 * Reveal-on-interaction state for tooltips / hovercards that must work on both
 * pointer and touch devices:
 *   - mouse    → hover to open, un-hover to close
 *   - touch    → tap to toggle, tap outside to close
 *   - keyboard → focus to open, blur (focus truly leaving) to close
 * Escape always closes. Spread `triggerProps` on the wrapper and attach `wrapperRef`
 * to the same element (it must contain both the trigger and the popup).
 */
export function useReveal<W extends HTMLElement = HTMLElement>() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<W | null>(null);
  const lastPointer = useRef<{ type: string; time: number }>({ type: "mouse", time: 0 });

  useEffect(() => {
    if (!open) return;
    // A tap/click anywhere outside the wrapper dismisses it. Events inside a nested
    // iframe don't bubble here, so interacting with an embedded chart won't close it.
    const onDocDown = (e: Event) => {
      const t = e.target as Node | null;
      if (wrapperRef.current && t && !wrapperRef.current.contains(t)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDocDown, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDocDown, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const triggerProps = {
    onPointerEnter: (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") setOpen(true);
    },
    onPointerLeave: (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") setOpen(false);
    },
    onPointerDown: (e: PointerEvent<HTMLElement>) => {
      lastPointer.current = { type: e.pointerType, time: Date.now() };
    },
    onClick: () => {
      // Touch/pen taps toggle; mouse is handled by hover, so ignore its click.
      if (lastPointer.current.type !== "mouse") setOpen((o) => !o);
    },
    onFocus: () => {
      // Open on keyboard focus only — a pointer-driven focus is handled above.
      if (Date.now() - lastPointer.current.time > 250) setOpen(true);
    },
    onBlur: (_e: FocusEvent<HTMLElement>) => {
      // Close only when focus truly leaves the wrapper. Checking activeElement on the
      // next frame keeps it open when focus moves into a child (e.g. an iframe).
      requestAnimationFrame(() => {
        if (wrapperRef.current && !wrapperRef.current.contains(document.activeElement)) {
          setOpen(false);
        }
      });
    },
  };

  return { open, setOpen, wrapperRef, triggerProps };
}
