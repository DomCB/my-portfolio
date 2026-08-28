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
      "Participate in multiple high-priority product teams across mobile and other platforms, owning the full testing lifecycle from sprint planning to production: test design, end-to-end and regression runs on iOS and Android, API and database verification, release sign-off, and on-call support for critical incidents.",
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
      "Covered QA across five supported websites from staging to production, including functional, regression and exploratory testing, reproducing user-reported defects on web, Android and iOS with root cause analysis, plus hardware validation for racing simulators and automation of repetitive checks.",
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
      "Managed end-to-end release cycles for Spacedesk, validating and signing Windows drivers, running UAT before each major release, and supporting a 17,680+ member user community while escalating critical bugs to engineering.",
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
  process?: string[];
  locked?: boolean;
};

export type QAProject = {
  category: "Mobile QA" | "Web QA" | "Desktop App Testing";
  title: string;
  description: string;
  testingPerformed: string[];
  lessons: string;
  skills: string[];
  images: string[];
};

export const qaProjects: QAProject[] = [
  {
    category: "Mobile QA",
    title: "App Update Enforcement",
    description:
      "Forced App Update requires Anytime Mailbox customers to update to the latest app version before continuing to use it, keeping everyone on a secure, current release. It works across the Renter and Operator apps on both iOS and Android.",
    testingPerformed: [
      "Functional Testing (unlogged in/logged in, bypass prevention, redirections)",
      "UI Testing (buttons, sticky window, typography, responsiveness)",
      "Cross-Platform Testing (iOS & Android devices)",
      "Usability Testing (ease of navigation, workflow)",
      "Multi-Resolution/Version Testing (screen sizes, device models)",
      "Regression/Smoke Testing (old functionalities)",
    ],
    lessons:
      "Regression testing after release matters as much as pre-release testing, since production and beta environments don't always behave the same; small UI details (like a pop-up timing or dismiss behavior) can break the whole flow if not tested per platform; and edge cases like no internet or an active session are easy to overlook but where real bugs hide.",
    skills: ["Mobile QA", "Manual Testing", "Regression Testing", "Cross-Platform Testing", "Azure DevOps"],
    images: ["/qa-projects/qa-app-update-1.png", "/qa-projects/qa-app-update-2.png"],
  },
  {
    category: "Mobile QA",
    title: "One-Click Cancel",
    description:
      "One Click Cancel (OCC) lets Renter App customers close their mailbox account directly in the app instead of contacting support. Phase 2 improved this flow with bug fixes and smoother transitions across iOS and Android.",
    testingPerformed: [
      "Functional Testing (submit closure survey, cancel account closure mid-flow, resubmission)",
      "UI Testing (page transitions, title/label behavior, closing animation/flicker)",
      "Cross-Platform Testing (iOS & Android devices)",
      "Regression Testing (staging build verification against the reported production issue to confirm the fix holds)",
      "Negative/Edge Case Testing (submit-then-cancel sequence, unexpected page flash mid-transition)",
    ],
    lessons:
      "UI-flow bugs like page flashes or animation glitches are easy to miss without slowing down each transition step-by-step; verifying a fix in staging isn't enough — confirming it's absent in production too closes the loop properly; and testing the cancel/resubmit path, not just the happy 'submit once' path, is where these closure-flow issues actually surfaced.",
    skills: ["Mobile QA", "Manual Testing", "Regression Testing", "Bug Verification"],
    images: ["/qa-projects/qa-one-click-cancel-1.png", "/qa-projects/qa-one-click-cancel-2.png"],
  },
  {
    category: "Desktop App Testing",
    title: "Spacedesk",
    description:
      "spacedesk is a multi-monitor app that turns phones, tablets, and laptops into extra screens for a computer. Built as software components licensed into other companies' products (medical devices, computers, conferencing systems), and as a standalone consumer app with over 5 million installs across Android and Apple devices worldwide.",
    testingPerformed: [
      "Functional Testing (display extension, resolution, number/size of screens, wireless/wired connections, VideoWall, discoverability)",
      "Non-Functional Testing (number of users connected, duration, connection types, performance, distance, stability, driver compatibility)",
      "Security Testing (password authentication, WiFi connection)",
      "UI Testing (typography, button behavior, redirections)",
    ],
    lessons:
      "This is my first ever testing experience — I learned to think outside the box, became a persistent tester, and learned all necessary skills to become an effective QA. 'If something feels off, test it again.'",
    skills: ["Desktop App Testing", "Manual Testing", "UI Testing"],
    images: ["/qa-projects/qa-spacedesk-1.png"],
  },
  {
    category: "Web QA",
    title: "California Acknowledgement",
    description:
      "A compliance feature requiring California customers to review and sign an acknowledgment notice about their mailbox service, covering the prompt they see, the signature step, and the internal report tracking who's signed.",
    testingPerformed: [
      "Functional Testing (prompt shows for the right customers, signature capture and submission)",
      "Rule/Condition Testing (correct customers get prompted, based on location and account status)",
      "UI Testing (banner, popup, signature screen)",
      "Report Testing (filtering, sorting, and accuracy of the internal tracking list, logs)",
    ],
    lessons:
      "Get eligibility rules right first, since that's where prompts easily go wrong; test the tracking/report side, not just the customer flow; and clarify edge cases (like closed accounts) early.",
    skills: ["Web QA", "Manual Testing", "Compliance Testing", "Data/SQL Validation"],
    images: ["/qa-projects/qa-california-1.png", "/qa-projects/qa-california-2.png"],
  },
  {
    category: "Web QA",
    title: "Verification Status Requirement",
    description:
      "Billing rules based on a customer's verification status (not verified, verified, or no longer verified), determining who gets charged, invoiced, and included in reports.",
    testingPerformed: [
      "Billing Testing (charges, invoices, and revenue reports match each customer type)",
      "AI-Simulated Testing (ran an AI-generated simulation of billing scenarios as a first pass)",
      "Manual Verification (cross-checked simulation results against real staging invoices/statements)",
      "Regression Testing (already-verified customers billed exactly as before)",
    ],
    lessons:
      "Combining an AI-run simulation with manual cross-checking caught issues faster than either alone; billing logic tied to customer status needs testing across every customer type and source, not just the common case; and money-related bugs deserve extra scrutiny since a wrong charge is harder to walk back than a UI glitch.",
    skills: ["Web QA", "Manual Testing", "Agentic Testing", "Business Rule Testing"],
    images: ["/qa-projects/qa-verification-1.png", "/qa-projects/qa-verification-2.png"],
  },
];

export const projects: Project[] = [
  {
    category: "n8n",
    title: "AI Receptionist",
    description:
      "A Vapi voice agent checks calendar availability, books, updates or cancels appointments, and logs every call outcome to Airtable in real time.",
    image: "/projects/n8n-ai-receptionist.png",
    tags: ["n8n", "Google Calendar", "Airtable"],
    steps: ["Webhook (Vapi call)", "Check availability", "Google Calendar", "Airtable log", "Respond to call"],
    process: ["Receive Vapi voice call", "Check Google Calendar availability", "Create / update / cancel event", "Log booking to Airtable", "Respond to caller"],
  },
  {
    category: "n8n",
    title: "AI Job Scraper + Resume Optimizer",
    description:
      "A Slack request triggers a job search, an AI agent tailors the resume against the listing, then a copy is saved, updated and emailed as a draft with a Slack confirmation.",
    image: "/projects/n8n-job-scraper-resume.png",
    tags: ["n8n", "Slack", "Gemini"],
    steps: ["Slack trigger", "Job search API", "Gemini AI agent", "Resume doc update", "Gmail draft + Slack reply"],
    process: ["Slack @mention triggers job search", "Search jobs via RapidAPI", "Fetch resume from Google Docs → AI rewrites it per listing", "Save updated resume to Drive", "Create Gmail draft + post results to Slack"],
  },
  {
    category: "n8n",
    title: "ASMR Video Creator",
    description:
      "Scheduled Gemini prompts generate ASMR video ideas, render through Google's Veo API, then auto-publish the finished video to YouTube and Facebook.",
    image: "/projects/n8n-asmr-video-creator.png",
    tags: ["n8n", "Gemini", "Veo API"],
    steps: ["Schedule trigger", "Gemini prompt gen", "Google Veo API", "Poll + convert", "YouTube + Facebook upload"],
    process: ["Scheduled trigger fires", "AI generates video prompt, title & caption", "Check Sheets for duplicate titles", "Generate video via Google Veo → poll until ready", "Upload to YouTube & Facebook simultaneously"],
  },
  {
    category: "n8n",
    title: "AI Document Agent",
    description:
      "A webhook hands off to a Gemini-powered AI agent with memory, which reads a Google Doc for context and calls an API to act on it.",
    image: "/projects/n8n-ai-document-agent.png",
    tags: ["n8n", "Gemini", "Google Docs"],
    steps: ["Webhook", "Google Docs", "Gemini agent + memory", "HTTP request", "Webhook response"],
    process: ["Receive message via webhook", "Fetch knowledge base from Google Docs", "Gemini AI agent (with memory) processes query", "Call external API to act on result", "Return response via webhook"],
  },
  {
    category: "n8n",
    title: "Google Drive File Sorter",
    description:
      "A new file dropped in a Drive folder is auto-sorted: a Switch routes it by type, Gemini reads image and PDF content (plain text is extracted directly), then an AI agent classifies it into one of seven folders and moves + renames it.",
    image: "/projects/n8n-drive-file-sorter.png",
    tags: ["n8n", "Gemini", "Google Drive"],
    steps: ["Drive folder trigger", "Switch by file type", "Gemini analyze / extract", "AI agent classify", "Move + rename"],
    process: ["New file detected in watched Drive folder", "Switch by MIME type (image / PDF / text)", "Gemini analyzes content per type", "AI agent classifies into one of 7 categories", "Move file to matching folder & rename"],
  },
  {
    category: "Zapier",
    title: "Asana CRM Lead Engagement",
    description:
      "An Asana task update branches leads into five pipeline stages (Ready to Start, No Response, Quoted, Approved, Paid & Closed), each with its own timed follow-up and personalized email sequence.",
    image: "/projects/zapier-asana-crm.png",
    tags: ["Zapier", "Asana", "Gmail"],
    steps: ["Asana trigger", "Path router (5 stages)", "Delay + filter", "AI by Zapier email", "Gmail follow-up"],
    process: ["Asana task updated", "Branch by lead status (5 stages)", "AI drafts personalized email per stage", "Send via Gmail → create Drive folder for lead", "Add Asana subtask with Drive link"],
  },
  {
    category: "Zapier",
    title: "Automated Leads Enrichment",
    description:
      "A Typeform submission is enriched with company data via Apollo, routed by priority, logged to Sheets, flagged to sales in Slack, and followed up with an AI-drafted email.",
    image: "/projects/zapier-leads-enrichment.png",
    tags: ["Zapier", "Apollo", "Slack"],
    steps: ["Typeform trigger", "Apollo enrichment", "Priority router", "Slack alert", "AI email draft"],
    process: ["New lead form submitted", "Extract company domain → enrich via Apollo API", "Route by company size/age into High or Low priority", "Log high-priority leads to Sheets → alert sales on Slack", "AI drafts personalized outreach → send reply email"],
  },
  {
    category: "Zapier",
    title: "Content Repurposing Pipeline",
    description:
      "A new video in Google Drive triggers AI to extract the content and draft a blog post, then splits into parallel paths that publish to Facebook Pages and LinkedIn.",
    image: "/projects/zapier-content-repurposing.png",
    tags: ["Zapier", "AI by Zapier", "LinkedIn"],
    steps: ["Google Drive trigger", "AI content extract", "AI blog draft", "Loop + paths", "Facebook + LinkedIn post"],
    process: ["New video file detected in Google Drive", "Filter for .mp4 only", "AI extracts transcript & generates blog posts", "Loop through posts → branch by content type", "Publish to Facebook Page & LinkedIn"],
  },
  {
    category: "Make.com",
    title: "Xero Report → Asana Delivery",
    description:
      "Triggers on completed Asana tasks, calls the Xero API for the matching report, iterates the data into Google Sheets, and re-attaches the finished report back onto the task.",
    image: "/projects/make-xero-asana.png",
    tags: ["Make.com", "Xero", "Asana"],
    steps: ["Asana trigger", "Xero API call", "Router + iterator", "Google Sheets log", "Asana attachment"],
    process: ["Watch for completed Asana tasks", "Fetch matching Xero bank transactions via API", "Iterate & process rows → log to Google Sheets", "Aggregate sheet content", "Upload report as attachment back to Asana task"],
  },
  {
    category: "Make.com",
    title: "Gmail Attachments → Drive Sorter",
    description:
      "Watches Gmail for new attachments, uses AI to read and rename each file, uploads it to the correct Google Drive folder, logs it in Sheets and confirms by email.",
    image: "/projects/make-gmail-drive.png",
    tags: ["Make.com", "Gmail", "Google Drive"],
    steps: ["Gmail watch", "AI file analysis", "Rename + Google Drive", "Google Sheets log", "Gmail confirmation"],
    process: ["Watch Gmail for new emails with attachments", "Upload attachment to Gemini for AI analysis", "Rename file based on AI output → upload to Google Drive", "Append log row to Google Sheets", "Send confirmation reply email"],
  },
  {
    category: "GoHighLevel",
    title: "GoHighLevel Automation",
    description: "CRM and marketing automation build, coming soon.",
    tags: ["GoHighLevel"],
    locked: true,
  },
];

export const skills = [
  {
    label: "Testing",
    items: "Functional, Regression, Smoke, Exploratory, UAT, UI/UX, End-to-End, API, Soak, Mobile (iOS/Android), Agentic testing (Claude)",
  },
  { label: "QA tools", items: "Qase, Postman, LambdaTest, WDK, TestFlight, Firebase, Miro, Figma" },
  { label: "AI & process automation", items: "Claude, Gemini, ChatGPT, UiPath, Zapier, Make.com, n8n" },
  { label: "DevOps & PM", items: "Azure DevOps, Jira, Notion" },
  { label: "Methodologies", items: "Agile, Scrum, SDLC, STLC, Defect Lifecycle, Root Cause Analysis" },
  { label: "Other", items: "Driver signing, SQL data verification, hardware & software troubleshooting" },
];

export type Stat = { value: string; label: string; chart?: string };

export const stats: Stat[] = [
  { value: "3+", label: "Years in QA" },
  { value: "iOS + Android", label: "Mobile coverage" },
  { value: "Bug Hunter", label: "195+ bugs filed (and counting)", chart: "/bugs_by_project_pie.html" },
  { value: "17,680+", label: "Users supported" },
];
