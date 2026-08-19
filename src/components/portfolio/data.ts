export type Tool = { name: string; note: string };

export const experience: {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  tools: Tool[];
}[] = [
  {
    period: "Oct 2024 — Present",
    role: "Software Quality Assurance Engineer",
    company: "Anytime Mailbox – Bugo Corp",
    location: "Remote",
    summary:
      "Participate in multiple high-priority product teams — mobile, platforms, and more — owning the full testing lifecycle from sprint planning to production: test design, end-to-end and regression runs on iOS and Android, API and database verification, release sign-off, and on-call support for critical incidents.",
    tools: [
      { name: "Qase", note: "Authored and maintained the mobile test case library, and ran regression, smoke and soak suites each release." },
      { name: "Postman", note: "Built request collections to validate API responses, status codes and payloads before UI testing began." },
      { name: "Azure DevOps", note: "Logged and tracked defects to closure, and managed sprint boards alongside developers and the product owner." },
      { name: "Firebase", note: "Distributed and validated Android builds, and reviewed crash reports to isolate device-specific issues." },
      { name: "TestFlight", note: "Managed iOS build distribution and verified each release candidate on real devices before launch." },
      { name: "SQL", note: "Queried the backend directly to confirm that app actions wrote correct, consistent data." },
      { name: "PagerDuty", note: "Handled on-call alerts for production incidents, triaging severity and escalating to engineering." },
      { name: "Claude & Gemini", note: "Used to accelerate requirement analysis, test case creation, and agentic testing." },
    ],
  },
  {
    period: "Jun 2024 — Oct 2024",
    role: "Software QA Engineer",
    company: "Vavasoftware, Corp.",
    location: "Taguig City",
    summary:
      "Covered QA across five supported websites from staging to production — functional, regression and exploratory testing, reproducing user-reported defects on web, Android and iOS with root cause analysis, plus hardware validation for racing simulators and automation of repetitive checks.",
    tools: [
      { name: "UiPath", note: "Built automations for repetitive QA tasks, cutting about two hours of manual effort every week." },
      { name: "Web + Mobile", note: "Tested five live websites plus their Android and iOS experiences across staging and production." },
      { name: "Hardware", note: "Validated racing simulator games and peripherals, checking input accuracy and device compatibility." },
      { name: "Jira", note: "Documented defects with clear reproduction steps and tracked them through the defect lifecycle." },
    ],
  },
  {
    period: "Nov 2022 — Apr 2024",
    role: "Software Tester & User Technical Support",
    company: "Datronicsoft Inc.",
    location: "Pasig City",
    summary:
      "Managed end-to-end release cycles for Spacedesk — validating and signing Windows drivers, running UAT before each major release, and supporting a 17,680+ member user community while escalating critical bugs to engineering.",
    tools: [
      { name: "WDK", note: "Validated Windows drivers using Traceview, Inf2Cat, StampInf and mftrace during release testing." },
      { name: "WHLK", note: "Ran Windows Hardware Lab Kit certification tests to qualify driver builds for release." },
      { name: "Driver signing", note: "Signed driver packages with Microsoft and company-issued certificates ahead of distribution." },
      { name: "UAT", note: "Coordinated user acceptance testing across major releases and confirmed fixes before shipping." },
    ],
  },
];

export type Project = {
  category: "Zapier" | "Make.com" | "n8n" | "GoHighLevel";
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  steps?: string[];
  locked?: boolean;
};

export const projects: Project[] = [
  {
    category: "n8n",
    title: "AI Receptionist",
    description:
      "A Vapi voice agent checks calendar availability, books, updates or cancels appointments, and logs every call outcome to Airtable in real time.",
    image: "/projects/n8n-ai-receptionist.png",
    tags: ["n8n", "Google Calendar", "Airtable"],
    steps: ["Webhook (Vapi call)", "Check availability", "Google Calendar", "Airtable log", "Respond to call"],
  },
  {
    category: "n8n",
    title: "AI Job Scraper + Resume Optimizer",
    description:
      "A Slack request triggers a job search, an AI agent tailors the resume against the listing, then a copy is saved, updated and emailed as a draft with a Slack confirmation.",
    image: "/projects/n8n-job-scraper-resume.png",
    tags: ["n8n", "Slack", "Gemini"],
    steps: ["Slack trigger", "Job search API", "Gemini AI agent", "Resume doc update", "Gmail draft + Slack reply"],
  },
  {
    category: "n8n",
    title: "ASMR Video Creator",
    description:
      "Scheduled Gemini prompts generate ASMR video ideas, render through Google's Veo API, then auto-publish the finished video to YouTube and Facebook.",
    image: "/projects/n8n-asmr-video-creator.png",
    tags: ["n8n", "Gemini", "Veo API"],
    steps: ["Schedule trigger", "Gemini prompt gen", "Google Veo API", "Poll + convert", "YouTube + Facebook upload"],
  },
  {
    category: "n8n",
    title: "AI Document Agent",
    description:
      "A webhook hands off to a Gemini-powered AI agent with memory, which reads a Google Doc for context and calls an API to act on it.",
    image: "/projects/n8n-ai-document-agent.png",
    tags: ["n8n", "Gemini", "Google Docs"],
    steps: ["Webhook", "Google Docs", "Gemini agent + memory", "HTTP request", "Webhook response"],
  },
  {
    category: "Zapier",
    title: "Asana CRM Lead Engagement",
    description:
      "An Asana task update branches leads into five pipeline stages — Ready to Start, No Response, Quoted, Approved, Paid & Closed — each with its own timed follow-up and personalized email sequence.",
    image: "/projects/zapier-asana-crm.png",
    tags: ["Zapier", "Asana", "Gmail"],
    steps: ["Asana trigger", "Path router (5 stages)", "Delay + filter", "AI by Zapier email", "Gmail follow-up"],
  },
  {
    category: "Zapier",
    title: "Automated Leads Enrichment",
    description:
      "A Typeform submission is enriched with company data via Apollo, routed by priority, logged to Sheets, flagged to sales in Slack, and followed up with an AI-drafted email.",
    image: "/projects/zapier-leads-enrichment.png",
    tags: ["Zapier", "Apollo", "Slack"],
    steps: ["Typeform trigger", "Apollo enrichment", "Priority router", "Slack alert", "AI email draft"],
  },
  {
    category: "Zapier",
    title: "Content Repurposing Pipeline",
    description:
      "A new video in Google Drive triggers AI to extract the content and draft a blog post, then splits into parallel paths that publish to Facebook Pages and LinkedIn.",
    image: "/projects/zapier-content-repurposing.png",
    tags: ["Zapier", "AI by Zapier", "LinkedIn"],
    steps: ["Google Drive trigger", "AI content extract", "AI blog draft", "Loop + paths", "Facebook + LinkedIn post"],
  },
  {
    category: "Make.com",
    title: "Xero Report → Asana Delivery",
    description:
      "Triggers on completed Asana tasks, calls the Xero API for the matching report, iterates the data into Google Sheets, and re-attaches the finished report back onto the task.",
    image: "/projects/make-xero-asana.png",
    tags: ["Make.com", "Xero", "Asana"],
    steps: ["Asana trigger", "Xero API call", "Router + iterator", "Google Sheets log", "Asana attachment"],
  },
  {
    category: "Make.com",
    title: "Gmail Attachments → Drive Sorter",
    description:
      "Watches Gmail for new attachments, uses AI to read and rename each file, uploads it to the correct Google Drive folder, logs it in Sheets and confirms by email.",
    image: "/projects/make-gmail-drive.png",
    tags: ["Make.com", "Gmail", "Google Drive"],
    steps: ["Gmail watch", "AI file analysis", "Rename + Google Drive", "Google Sheets log", "Gmail confirmation"],
  },
  {
    category: "GoHighLevel",
    title: "GoHighLevel Automation",
    description: "CRM and marketing automation build — coming soon.",
    tags: ["GoHighLevel"],
    locked: true,
  },
];

export const skills = [
  {
    label: "Testing",
    items: "Functional, Regression, Smoke, Exploratory, UAT, UI/UX, End-to-End, API, Soak, Mobile (iOS/Android)",
  },
  { label: "QA tools", items: "Qase, Postman, LambdaTest, WDK, TestFlight, Firebase, Miro, Figma" },
  { label: "AI & automation", items: "Claude, Gemini, ChatGPT, UiPath, Zapier, Make.com, n8n" },
  { label: "DevOps & PM", items: "Azure DevOps, Jira, Notion" },
  { label: "Methodologies", items: "Agile, Scrum, SDLC, STLC, Defect Lifecycle, Root Cause Analysis" },
  { label: "Other", items: "Driver signing, SQL data verification, hardware & software troubleshooting" },
];

export const stats = [
  { value: "3+", label: "Years in QA" },
  { value: "iOS + Android", label: "Mobile coverage" },
  { value: "Solo QA", label: "Product team owner" },
  { value: "17,680+", label: "Users supported" },
];
