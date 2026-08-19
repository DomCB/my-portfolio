import { createFileRoute } from "@tanstack/react-router";
import { Bug, ClipboardCheck, Download, Facebook, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import type { MouseEvent } from "react";
import portrait from "@/assets/hero-photo.jpg";
import { experience, skills, stats } from "@/components/portfolio/data";
import { ToolChip } from "@/components/portfolio/ToolChip";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christian Dominic Baraceros — QA & AI Automation" },
      {
        name: "description",
        content:
          "Software QA Engineer and AI Automation Specialist in Taguig, Philippines. Full testing lifecycle ownership plus Make.com, n8n and Zapier automation.",
      },
      { property: "og:title", content: "Christian Dominic Baraceros — QA & AI Automation" },
      {
        property: "og:description",
        content:
          "Full-lifecycle QA across mobile and web, plus AI-powered workflow automation.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

const aboutHighlights = [
  { title: "Full STLC ownership", subtitle: "Sprint planning through deployment.", Icon: ClipboardCheck },
  { title: "Defect lifecycle", subtitle: "Tracked to closure in Azure DevOps and Jira.", Icon: Bug },
  { title: "Manual and AI-assisted QA", subtitle: "Claude and Gemini in testing process.", Icon: Sparkles },
];

const contactLinks = [
  { label: "Email", href: "mailto:baraceroscd@gmail.com", external: false, Icon: Mail },
  { label: "Phone", href: "tel:+639222571821", external: false, Icon: Phone },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/baraceros-cd", external: true, Icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/cdb7878", external: true, Icon: Facebook },
];

function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.pushState(null, "", href);
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3.5">
      <span className="h-px w-9 bg-primary" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="sticky top-0 z-60 flex items-center justify-between border-b border-border bg-background/80 px-6 py-3.5 backdrop-blur-xl md:px-15">
        <a href="#top" onClick={handleAnchorClick} className="shine flex items-center gap-3">
          <span className="font-display grid size-8 place-items-center border border-ring text-[12px] tracking-wide text-primary">
            CD
          </span>
          <span className="font-display text-[12px] tracking-[0.26em] uppercase">Baraceros</span>
        </a>
        <div className="flex items-center gap-9">
          <div className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleAnchorClick}
                className="shine font-display text-[11px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={handleAnchorClick}
              className="shine font-display border border-ring px-5 py-2.5 text-[11px] tracking-[0.18em] text-primary uppercase transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative grid min-h-[640px] items-center gap-10 overflow-hidden px-6 pt-16 pb-4 md:grid-cols-[1.04fr_.96fr] md:px-15 md:pt-24 md:pb-20"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(110% 80% at 4% -5%, color-mix(in oklab, var(--glow) 13%, transparent), transparent 55%), radial-gradient(60% 65% at 84% 55%, color-mix(in oklab, var(--glow) 9%, transparent), transparent 64%), linear-gradient(180deg, var(--background), var(--surface) 52%, var(--background))",
          }}
        />
        <div className="relative max-w-xl [animation:rise_.9s_cubic-bezier(.2,.7,.3,1)_both]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ring px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="font-display text-[10.5px] tracking-[0.22em] text-muted-foreground uppercase">
              Taguig, Philippines
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,8vw,4.9rem)] leading-[1.02] font-extralight tracking-[-0.035em]">
            Christian Dominic
            <br />
            <span className="text-gold-gradient font-normal">Baraceros</span>
          </h1>
          <div className="font-display mt-5 text-[15px] tracking-[0.05em] text-primary uppercase">
            Software QA Engineer <span className="text-foreground">&amp;</span> AI Automation Specialist
          </div>
          <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-muted-foreground">
            I own quality end-to-end and build AI workflows that do the busywork.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="font-display text-[11px] tracking-[0.18em] text-muted-foreground uppercase">Open to</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ring px-3.5 py-1.5 text-[12.5px] text-primary">
              <span aria-hidden="true">✓</span> QA roles
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ring px-3.5 py-1.5 text-[12.5px] text-primary">
              <span aria-hidden="true">✓</span> AI Automation roles
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#projects"
              onClick={handleAnchorClick}
              className="shine bg-gold-gradient font-display inline-flex items-center gap-2 rounded-full px-8 py-4 text-[11.5px] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-shadow"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              onClick={handleAnchorClick}
              className="shine font-display rounded-full border border-ring px-8 py-4 text-[11.5px] tracking-[0.18em] text-primary uppercase transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
            <a
              href="/BaracerosCD-Resume.pdf"
              download
              className="shine font-display inline-flex items-center gap-2 rounded-full border border-ring px-8 py-4 text-[11.5px] tracking-[0.18em] text-primary uppercase transition-colors hover:bg-accent"
            >
              <Download size={14} strokeWidth={2} /> Resume
            </a>
          </div>
          <div className="mt-10 h-px max-w-md bg-border" />
          <div className="mt-8 flex flex-wrap gap-8">
            {[
              ["3+", "QA experience"],
              ["9+", "AI workflows built"],
              ["3", "Automation platforms"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-[26px] leading-none font-light text-primary">{value}</div>
                <div className="mt-1.5 text-[12px] text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] [animation:soften_1.3s_ease_both] md:h-[600px]">
          <div
            className="absolute top-[10%] left-1/2 aspect-square w-[64%] -translate-x-1/2 rounded-full [animation:breathe_8s_ease-in-out_infinite]"
            style={{
              background:
                "radial-gradient(circle at 46% 38%, color-mix(in oklab, var(--glow) 24%, transparent), color-mix(in oklab, var(--glow) 7%, transparent) 55%, transparent 76%)",
            }}
          />
          <div className="absolute top-[6%] left-[55%] h-[88%] w-[62%] -translate-x-1/2 rounded-t-[999px] border border-border bg-surface md:w-[52%]" />
          <div className="absolute top-0 left-[45%] h-[94%] w-[70%] -translate-x-1/2 rounded-t-[999px] border border-ring md:w-[60%]" />
          <div
            className="absolute bottom-0 left-1/2 h-[86%] w-[54%] -translate-x-1/2 overflow-hidden rounded-t-[999px] border border-ring md:w-[46%]"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            <img
              src={portrait}
              alt="Christian Dominic Baraceros, software QA engineer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid border-y border-border bg-surface sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-b border-border px-8 py-8 last:border-b-0 lg:border-r lg:border-b-0">
            <div className="font-display text-[clamp(1.6rem,2.4vw,2.4rem)] leading-none font-extralight tracking-tight text-primary">
              {stat.value}
            </div>
            <div className="font-display mt-3 text-[10.5px] tracking-[0.22em] text-muted-foreground uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      <section id="about" className="grid scroll-mt-16 gap-12 px-6 py-24 md:grid-cols-[1.1fr_.9fr] md:px-15">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="font-display mb-8 text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight font-extralight tracking-[-0.03em]">
            Quality, owned
            <br />
            end to end.
          </h2>
          <p className="max-w-xl text-[17.5px] leading-relaxed text-foreground/85">
            QA engineer working across <span className="text-primary">mobile and web</span> in Agile and Kanban
            teams — test strategy, test design, defect tracking, regression and{" "}
            <span className="text-primary">production release validation</span>.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          {aboutHighlights.map(({ title, subtitle, Icon }) => (
            <div key={title} className="flex items-center gap-4 border border-border px-5 py-4">
              <div className="grid size-11 shrink-0 place-items-center border border-ring bg-accent/40 text-primary">
                <Icon size={19} strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-display text-[14.5px] text-foreground">{title}</div>
                <div className="mt-0.5 text-[13px] text-muted-foreground">{subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-16 border-t border-border px-6 py-24 md:px-15">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="font-display mb-12 text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight font-extralight tracking-[-0.03em]">
          Where I&rsquo;ve made an impact
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <article key={job.role + job.company} className="rounded-2xl border border-border px-7 py-8 md:px-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-[22px] leading-snug font-normal tracking-[-0.015em] text-foreground">
                    {job.company}
                  </h3>
                  <div className="font-display mt-1.5 text-[13px] tracking-[0.02em] text-primary">{job.role}</div>
                </div>
                <div className="text-right text-[13px] text-muted-foreground">
                  <div>{job.period}</div>
                  <div className="mt-0.5 text-muted-foreground/70">{job.location}</div>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-foreground/80">{job.summary}</p>
              <div className="font-display mt-6 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Tools &amp; skills — hover for detail
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <ToolChip key={tool.name} tool={tool} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 px-6 py-24 md:px-15">
        <SectionLabel>Technical skills</SectionLabel>
        <h2 className="font-display mb-12 text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight font-extralight tracking-[-0.03em]">
          Capabilities and toolset
        </h2>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label} className="bg-surface px-7 py-7">
              <div className="font-display text-[10.5px] tracking-[0.24em] text-primary uppercase">{group.label}</div>
              <div className="mt-3 text-[15px] leading-relaxed text-foreground/80">{group.items}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-16 border-t border-border px-6 py-24 md:px-15">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="font-display mb-12 text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight font-extralight tracking-[-0.03em]">
          AI automation builds
        </h2>
        <Projects />
      </section>

      <section id="education" className="scroll-mt-16 border-t border-border px-6 py-24 md:px-15">
        <SectionLabel>Education</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-8">
          <div>
            <h3 className="font-display text-[clamp(1.3rem,2.2vw,1.75rem)] font-light tracking-tight">
              BS Computer Engineering
            </h3>
            <div className="mt-2 text-[15px] text-muted-foreground">
              Rizal Technological University — Mandaluyong
            </div>
          </div>
          <div className="font-display text-[11px] tracking-[0.26em] text-primary uppercase">2018 — 2022</div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-16 border-t border-border px-6 py-24 md:px-15"
        style={{
          background:
            "radial-gradient(90% 70% at 12% 0%, color-mix(in oklab, var(--glow) 10%, transparent), transparent 60%), var(--background)",
        }}
      >
        <SectionLabel>Contact</SectionLabel>
        <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.4rem)] leading-tight font-extralight tracking-[-0.03em]">
          Want to talk about <span className="text-gold-gradient font-normal">Quality</span>? or want to{" "}
          <span className="text-gold-gradient font-normal">Automate</span> something?
        </h2>
        <div className="mt-10 flex flex-wrap gap-3.5">
          {contactLinks.map(({ label, href, external, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="shine grid size-14 place-items-center border border-ring bg-surface text-primary transition-colors hover:bg-accent"
            >
              <Icon size={20} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-8 text-[12.5px] text-muted-foreground md:px-15">
        <span>© 2026 Christian Dominic Baraceros</span>
        <a href="#top" onClick={handleAnchorClick} className="shine transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
