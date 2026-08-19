import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "./data";

const categories = ["n8n", "Zapier", "Make.com", "GoHighLevel"] as const;

const categoryDescriptions: Partial<Record<(typeof categories)[number], string>> = {
  "n8n": "Code-level agents, webhooks, and AI pipelines with full control.",
  Zapier: "Path-driven CRM and lead workflows with AI-written outreach.",
  "Make.com": "Visual, multi-branch scenarios with routers, iterators, and aggregators.",
};

function TerminalChrome({ locked }: { locked?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1.5">
        <span className={`size-2.5 rounded-full ${locked ? "bg-muted-foreground/30" : "bg-red-500/70"}`} />
        <span className={`size-2.5 rounded-full ${locked ? "bg-muted-foreground/30" : "bg-yellow-500/70"}`} />
        <span className={`size-2.5 rounded-full ${locked ? "bg-muted-foreground/30" : "bg-green-500/70"}`} />
      </div>
      {locked && (
        <div className="font-display flex items-center gap-1.5 text-[9.5px] tracking-[0.18em] text-primary/80 uppercase">
          <span className="size-1.5 rounded-full bg-primary opacity-30" />
          locked
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  if (project.locked) {
    return (
      <article className="relative flex w-[300px] shrink-0 snap-start flex-col border border-border bg-surface opacity-80 sm:w-[340px]">
        <div className="border-b border-border bg-background px-4 py-4">
          <TerminalChrome locked />
          <div className="mt-6 flex flex-col items-center gap-3 py-6 text-muted-foreground">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="4" y="10.5" width="16" height="10" rx="1.5" />
              <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
            </svg>
            <span className="font-display text-[10px] tracking-[0.24em] uppercase">Coming soon</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col px-5 py-5">
          <div className="font-display flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            {project.tags?.join(" • ")}
          </div>
          <h3 className="font-display mt-2 text-[16.5px] leading-snug text-foreground/70">{project.title}</h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
      </article>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="shine group flex w-[300px] shrink-0 snap-start flex-col border border-border bg-surface text-left transition-colors hover:border-ring sm:w-[340px]"
    >
      <div className="border-b border-border bg-background px-4 py-4 transition-colors group-hover:bg-accent/20">
        <TerminalChrome />
        <div className="mt-4 flex flex-col gap-2">
          {project.steps?.map((step, i) => (
            <div key={step} className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-primary/70">{String(i + 1).padStart(2, "0")}</span>
              <span className="whitespace-nowrap text-foreground/80">{step}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              {i < (project.steps?.length ?? 0) - 1 && <span className="text-primary/50">→</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="font-display text-[10px] tracking-[0.2em] text-primary/80 uppercase">
          {project.tags?.join(" • ")}
        </div>
        <h3 className="font-display mt-2 text-[16.5px] leading-snug text-foreground">{project.title}</h3>
        <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{project.description}</p>
      </div>
    </button>
  );
}

const LENS_SIZE = 170;
const LENS_ZOOM = 2.6;

function ProjectLightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [lens, setLens] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/80 p-6 backdrop-blur-md [animation:soften_.2s_ease_both] md:p-12"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="shine font-display fixed top-5 right-5 grid size-11 place-items-center border border-ring bg-surface text-primary transition-colors hover:bg-accent"
      >
        ✕
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full max-w-4xl flex-col [animation:rise_.25s_cubic-bezier(.2,.7,.3,1)_both]"
      >
        <div className="relative inline-block">
          <img
            ref={imgRef}
            src={project.image}
            alt={project.title}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setLens({ x: e.clientX - rect.left, y: e.clientY - rect.top, width: rect.width, height: rect.height });
            }}
            onMouseLeave={() => setLens(null)}
            className="max-h-[78vh] w-auto max-w-full cursor-crosshair border border-ring object-contain"
            style={{ boxShadow: "var(--shadow-gold)" }}
          />
          {lens && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full border-2 border-ring"
              style={{
                left: lens.x - LENS_SIZE / 2,
                top: lens.y - LENS_SIZE / 2,
                width: LENS_SIZE,
                height: LENS_SIZE,
                backgroundImage: `url(${project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${lens.width * LENS_ZOOM}px ${lens.height * LENS_ZOOM}px`,
                backgroundPosition: `${-(lens.x * LENS_ZOOM - LENS_SIZE / 2)}px ${-(lens.y * LENS_ZOOM - LENS_SIZE / 2)}px`,
                boxShadow: "var(--shadow-gold), 0 0 0 4px color-mix(in oklab, var(--background) 75%, transparent)",
              }}
            />
          )}
        </div>
        <div className="mt-4 text-center">
          <div className="font-display text-[10px] tracking-[0.24em] text-primary uppercase">{project.category}</div>
          <h3 className="font-display mt-1.5 text-[17px] text-foreground">{project.title}</h3>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>("n8n");
  const [active, setActive] = useState<Project | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filtered = projects.filter((p) => p.category === category);

  const scroll = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.9, 680), behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count = projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`shine font-display inline-flex items-center gap-2 border px-4 py-2 text-[10.5px] tracking-[0.18em] uppercase transition-colors ${
                  category === cat
                    ? "border-ring bg-accent text-primary"
                    : "border-border text-muted-foreground hover:border-ring hover:text-primary"
                }`}
              >
                {cat}
                <span className="grid size-4 place-items-center rounded-full border border-current text-[9px] normal-case">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll projects left"
            className="shine font-display grid size-10 place-items-center border border-ring text-primary transition-colors hover:bg-accent"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll projects right"
            className="shine font-display grid size-10 place-items-center border border-ring text-primary transition-colors hover:bg-accent"
          >
            ›
          </button>
        </div>
      </div>

      {categoryDescriptions[category] && (
        <p className="mb-6 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
          {categoryDescriptions[category]}
        </p>
      )}

      <div ref={scrollerRef} className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} onOpen={setActive} />
        ))}
      </div>

      {active && <ProjectLightbox project={active} onClose={() => setActive(null)} />}
    </div>
  );
}
