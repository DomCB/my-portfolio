import { useEffect, useRef, useState } from "react";
import { qaProjects, type QAProject } from "./data";

const qaCategories = ["Mobile QA", "Desktop App Testing", "Web QA"] as const;
type QACategory = (typeof qaCategories)[number];

function QAProjectCard({ project, onOpen }: { project: QAProject; onOpen: (p: QAProject) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="shine group flex w-[300px] shrink-0 snap-start flex-col border border-border bg-surface text-left transition-colors hover:border-ring sm:w-[340px]"
    >
      {/* Thumbnail: title displayed as the visual */}
      <div className="relative flex h-[160px] items-center justify-center overflow-hidden border-b border-border bg-background px-6 transition-colors group-hover:bg-accent/20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 28px)",
          }}
        />
        <h3 className="font-display relative text-center text-[18px] leading-snug font-light tracking-[-0.01em] text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="font-display text-[10px] tracking-[0.2em] text-primary/80 uppercase">
          {project.category}
        </div>
        <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </button>
  );
}

function QALightbox({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: QAProject;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasImages = project.images.length > 0;
  const hasMultiple = project.images.length > 1;
  const infoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setImgIndex(0);
    infoRef.current?.scrollTo({ top: 0 });
  }, [project]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple)
        setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
      if (e.key === "ArrowRight" && hasMultiple)
        setImgIndex((i) => (i + 1) % project.images.length);
    };
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [onClose, hasMultiple, project.images.length]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md [animation:soften_.2s_ease_both] md:p-10"
    >
      {/* Project nav arrows — visible on all screen sizes */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous project"
        className="shine font-display fixed left-2 top-[62%] z-10 grid size-12 -translate-y-1/2 place-items-center border border-ring/60 bg-transparent text-[22px] text-primary transition-colors hover:bg-accent/60 md:left-4 md:top-1/2 md:size-14 md:border-ring md:bg-surface/90 md:text-[26px] md:backdrop-blur-sm"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next project"
        className="shine font-display fixed right-2 top-[62%] z-10 grid size-12 -translate-y-1/2 place-items-center border border-ring/60 bg-transparent text-[22px] text-primary transition-colors hover:bg-accent/60 md:right-4 md:top-1/2 md:size-14 md:border-ring md:bg-surface/90 md:text-[26px] md:backdrop-blur-sm"
      >
        ›
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden border border-ring [animation:rise_.25s_cubic-bezier(.2,.7,.3,1)_both]"
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        {/* Close button inside dialog */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="shine font-display absolute top-3 right-3 z-20 grid size-10 place-items-center border border-ring bg-surface/90 text-primary backdrop-blur-sm transition-colors hover:bg-accent"
        >
          ✕
        </button>
        {/* Image area */}
        <div className="relative shrink-0 bg-background">
          {hasImages ? (
            <>
              <img
                src={project.images[imgIndex]}
                alt={`${project.title} — screenshot ${imgIndex + 1} of ${project.images.length}`}
                className="h-[38vh] w-full border-b border-ring object-contain sm:h-[48vh]"
              />
              {hasMultiple && (
                <>
                  {/* Borderless photo arrows */}
                  <button
                    type="button"
                    onClick={() =>
                      setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)
                    }
                    aria-label="Previous image"
                    className="absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center text-[28px] text-white/80 transition-opacity hover:text-white"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setImgIndex((i) => (i + 1) % project.images.length)}
                    aria-label="Next image"
                    className="absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center text-[28px] text-white/80 transition-opacity hover:text-white"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
                  >
                    ›
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setImgIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`size-2 rounded-full transition-colors ${
                          i === imgIndex ? "bg-primary" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="flex h-[38vh] w-full items-center justify-center border-b border-ring bg-background sm:h-[48vh]">
              <span className="font-display text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                Screenshots coming soon
              </span>
            </div>
          )}
        </div>

        {/* Scrollable info panel */}
        <div ref={infoRef} className="flex-1 min-h-0 overflow-y-auto bg-surface/95 backdrop-blur-sm">
          <div className="border-b border-border px-6 py-5">
            <div className="font-display text-[10px] tracking-[0.24em] text-primary uppercase">
              {project.category}
            </div>
            <h3 className="font-display mt-1.5 text-[18px] text-foreground">{project.title}</h3>
          </div>

          <div className="space-y-6 px-6 py-6">
            <div>
              <div className="font-display mb-2 text-[10px] tracking-[0.22em] text-primary uppercase">
                Project Description
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/80">{project.description}</p>
            </div>

            <div>
              <div className="font-display mb-3 text-[10px] tracking-[0.22em] text-primary uppercase">
                Testing Performed
              </div>
              <ul className="space-y-2">
                {project.testingPerformed.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground/75"
                  >
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-display mb-2 text-[10px] tracking-[0.22em] text-primary uppercase">
                Lessons Learned
              </div>
              <p className="text-[13.5px] leading-relaxed text-foreground/75">{project.lessons}</p>
            </div>

            <div>
              <div className="font-display mb-3 text-[10px] tracking-[0.22em] text-primary uppercase">
                Skills &amp; Deliverables
              </div>
              <div className="flex flex-wrap gap-2 pb-1">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="shine font-display inline-block rounded-full border border-primary/60 bg-accent/40 px-3.5 py-2 text-[12px] tracking-[0.01em] text-primary/85 transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QAProjects() {
  const [category, setCategory] = useState<QACategory>("Mobile QA");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filtered = qaProjects.filter((p) => p.category === category);
  const active = activeIndex !== null ? qaProjects[activeIndex] : null;

  const openProject = (project: QAProject) => {
    setActiveIndex(qaProjects.indexOf(project));
  };

  const navigate = (dir: 1 | -1) => {
    setActiveIndex((i) => {
      if (i === null) return null;
      return (i + dir + qaProjects.length) % qaProjects.length;
    });
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {qaCategories.map((cat) => {
          const count = qaProjects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
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

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
      >
        {filtered.map((project) => (
          <QAProjectCard key={project.title} project={project} onOpen={openProject} />
        ))}
      </div>

      {active && (
        <QALightbox
          project={active}
          onClose={() => setActiveIndex(null)}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}
    </div>
  );
}
