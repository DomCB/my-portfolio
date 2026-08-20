import { useEffect, useRef, useState } from "react";
import type { Tool } from "./data";
import { useReveal } from "./useReveal";

export function ToolChip({ tool }: { tool: Tool }) {
  const { open, wrapperRef, triggerProps } = useReveal<HTMLSpanElement>();
  const tipRef = useRef<HTMLSpanElement>(null);
  const [shift, setShift] = useState(0);

  // Keep the tooltip on-screen: nudge it horizontally if it would overflow the viewport
  // (chips near the screen edge on mobile otherwise clip the tooltip).
  useEffect(() => {
    if (!open || !tipRef.current) return;
    const rect = tipRef.current.getBoundingClientRect();
    const m = 10;
    let correction = 0;
    if (rect.left < m) correction = m - rect.left;
    else if (rect.right > window.innerWidth - m) correction = window.innerWidth - m - rect.right;
    if (correction !== 0) setShift((s) => s + correction);
  }, [open]);

  return (
    <span ref={wrapperRef} className="relative inline-block" {...triggerProps}>
      <span
        tabIndex={0}
        role="button"
        aria-expanded={open}
        className="shine font-display inline-block cursor-help rounded-full border border-transparent bg-accent/40 px-3.5 py-2 text-[12px] tracking-[0.01em] text-foreground/85 transition-colors select-none hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none aria-expanded:border-primary aria-expanded:text-primary"
      >
        {tool.name}
      </span>
      <span
        ref={tipRef}
        role="tooltip"
        style={{ boxShadow: "var(--shadow-gold)", marginLeft: shift }}
        className={`absolute bottom-[calc(100%+14px)] left-1/2 z-50 w-64 max-w-[92vw] -translate-x-1/2 border border-ring bg-popover/95 px-4 py-3 text-[12.5px] leading-relaxed text-popover-foreground/90 backdrop-blur-xl transition-all duration-200 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
      >
        <span className="font-display mb-1.5 block text-[10px] tracking-[0.22em] text-primary uppercase">
          {tool.name}
        </span>
        {tool.note}
        <span
          aria-hidden="true"
          style={{ marginLeft: -shift }}
          className="absolute -bottom-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-r border-b border-ring bg-popover/95"
        />
      </span>
    </span>
  );
}
