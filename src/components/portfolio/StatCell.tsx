import { useEffect, useState } from "react";
import type { Stat } from "./data";
import { useReveal } from "./useReveal";

/** Tracks the site's light/dark state (ThemeToggle toggles a `.dark` class on <html>). */
function useIsDark() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const read = () => setDark(document.documentElement.classList.contains("dark"));
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

const cellClass = "border-b border-border px-8 py-8 last:border-b-0 lg:border-r lg:border-b-0";

export function StatCell({ stat }: { stat: Stat }) {
  const dark = useIsDark();
  const { open, wrapperRef, triggerProps } = useReveal<HTMLDivElement>();

  const label = (
    <div className="font-display mt-3 text-[10.5px] tracking-[0.22em] text-muted-foreground uppercase">
      {stat.label}
    </div>
  );

  // Plain stat — no interactive chart.
  if (!stat.chart) {
    return (
      <div className={cellClass}>
        <div className="font-display text-[clamp(1.6rem,2.4vw,2.4rem)] leading-none font-extralight tracking-tight text-primary">
          {stat.value}
        </div>
        {label}
      </div>
    );
  }

  // Interactive stat — hover (mouse) or tap (touch) reveals the chart HTML in a popup.
  return (
    <div ref={wrapperRef} className={`relative ${cellClass}`} {...triggerProps}>
      <div
        tabIndex={0}
        role="button"
        aria-expanded={open}
        className="group inline-block cursor-help select-none focus-visible:outline-none"
      >
        <div className="font-display text-[clamp(1.6rem,2.4vw,2.4rem)] leading-none font-extralight tracking-tight text-primary underline decoration-primary/35 decoration-dotted underline-offset-[7px] transition-colors group-hover:decoration-primary/70 group-aria-expanded:decoration-primary/70">
          {stat.value}
        </div>
        {label}
      </div>

      {/* Popup opens downward (the stats strip often sits near the top of the viewport). */}
      <div
        className={`absolute top-full left-1/2 z-50 w-[min(360px,92vw)] -translate-x-1/2 pt-3.5 transition-all duration-200 lg:w-[600px] ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div
          className="relative overflow-hidden rounded-xl border border-ring bg-popover"
          style={{ boxShadow: "var(--shadow-gold)" }}
        >
          <iframe
            title="Bugs filed by project"
            src={`${stat.chart}?theme=${dark ? "dark" : "light"}`}
            className="block h-[540px] w-full border-0 bg-popover lg:h-[470px]"
          />
        </div>
        {/* Arrow pointing up toward the trigger. */}
        <span
          aria-hidden="true"
          className="absolute top-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-t border-l border-ring bg-popover"
        />
      </div>
    </div>
  );
}
