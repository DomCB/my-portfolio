import { useState } from "react";
import type { Tool } from "./data";

export function ToolChip({ tool }: { tool: Tool }) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span
        tabIndex={0}
        className="shine font-display inline-block cursor-help rounded-full border border-transparent bg-accent/40 px-3.5 py-2 text-[12px] tracking-[0.01em] text-foreground/85 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none"
      >
        {tool.name}
      </span>
      <span
        role="tooltip"
        className={`pointer-events-none absolute bottom-[calc(100%+14px)] left-1/2 z-50 w-64 -translate-x-1/2 border border-ring bg-popover/95 px-4 py-3 text-[12.5px] leading-relaxed text-popover-foreground/90 backdrop-blur-xl transition-all duration-200 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        <span className="font-display mb-1.5 block text-[10px] tracking-[0.22em] text-primary uppercase">
          {tool.name}
        </span>
        {tool.note}
        <span
          aria-hidden="true"
          className="absolute -bottom-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-r border-b border-ring bg-popover/95"
        />
      </span>
    </span>
  );
}
