// ─────────────────────────────────────────────────────────────────────────────
//  profile.js — the only file you need to edit.
//  Leave any contact value as "" and its button disappears automatically.
// ─────────────────────────────────────────────────────────────────────────────
window.PROFILE = {
  name: "Abdalla Alhaj",
  headline: "Data & Cloud Platform Lead · AI Systems Builder",
  // Short line under the headline. Flags: 🇬🇧 🇸🇦 🇦🇪 🇸🇩
  tagline: "I build the data pipelines, cloud platforms and AI agents that let businesses in the Gulf see clearly and move fast. Based in Riyadh, working across KSA, UAE and the UK.",
  location: "Riyadh, Saudi Arabia",
  flags: ["🇬🇧", "🇸🇦", "🇦🇪", "🇸🇩"],
  languages: ["Arabic", "English"],
  photo: "assets/photo.jpg",          // drop a square photo here; a monogram shows until then

  contact: {
    // One WhatsApp button per entry. Numbers: international format, digits only.
    whatsapp: [
      { label: "WhatsApp · KSA", number: "966559308785" },
      { label: "WhatsApp · UAE", number: "971501576684" },
    ],
    phone: "+966559308785",            // the Call button (Saudi)
    email: "",                         // e.g. "you@example.com"
    linkedin: "",                      // full URL, e.g. "https://www.linkedin.com/in/your-handle"
    github: "",                        // set a URL to show a GitHub button
    website: "https://gtai.ae/",
    websiteLabel: "GTAI",
  },


  // Shown as the first paragraph of the "About" section.
  about: [
    "I sit between the business and the machines. I lead data and cloud platforms for companies in Saudi Arabia: the warehouses, the pipelines that feed them, the dashboards people actually use, and increasingly the AI agents that answer questions straight from live data.",
    "Before that: managing director of GTAI Consultancy, with a background in chemical engineering, UAV systems, industrial-control cybersecurity, networking and localisation. I am as comfortable in a comms room or on a Raspberry Pi as I am in a cloud console.",
  ],

  // Capability groups → chips.
  skills: [
    { group: "Data platforms", items: ["BigQuery", "Redshift", "Metabase", "ELT / CDC pipelines", "Pipeline monitoring", "SQL & DuckDB", "MariaDB / PostgreSQL", "Data-quality audits"] },
    { group: "Cloud & infrastructure", items: ["Google Cloud", "AWS", "Serverless containers", "IAM & least privilege", "Keyless CI/CD", "Monitoring & on-call alerting", "Tailscale / WireGuard", "Proxmox & Docker"] },
    { group: "AI & agents", items: ["Claude / Bedrock / Vertex AI", "MCP servers", "Grounded RAG chatbots", "Voice assistants", "Agent verification loops", "Arabic-language corpora"] },
    { group: "Integrations & growth stack", items: ["HubSpot", "Salla & Zid", "Shopify", "Google Tag Manager", "GA4", "CleverTap", "Odoo", "SMS / WhatsApp platforms", "Meta, Snap, TikTok & Google Ads APIs"] },
    { group: "Security & operations", items: ["Cloud security audits", "SAML / SSO", "Uptime monitoring", "Cost controls", "Incident runbooks", "UAT programmes (iOS / Android)"] },
    { group: "Hands-on", items: ["PBX & VoIP", "Fibre & network troubleshooting", "SDR & RF", "UAV systems", "ICS cybersecurity", "Chemical engineering"] },
  ],

  // How I work — the qualities people notice.
  principles: [
    { title: "Measure before assuming", text: "Load-bearing facts get checked against the live system, not the brief. More than once that has turned a blocked project into a solvable one." },
    { title: "Grounded answers or an honest hand-off", text: "Anything I ship that talks to people must cite real data or escalate to a human. No confident guessing." },
    { title: "Least privilege by default", text: "Scoped accounts, read-only where read-only will do, sensitive data kept out of tools that do not need it. Access is designed before the first run." },
    { title: "Automate the boring, alert on the real", text: "Routine work runs on a schedule. Noisy alerts get removed so the ones left mean something and reach a person." },
    { title: "Write it down", text: "Every system I touch leaves behind a runbook, so the next person starts from facts rather than folklore." },
    { title: "Bilingual, cross-functional", text: "I work in Arabic and English with finance, marketing, vendors and IT, and I will run the meeting, the testing or the deployment myself when that is what moves things." },
  ],

  // Selected work. Keep each to one outcome.
  projects: [
    { tag: "Data platform", title: "Retail data warehouse on Google Cloud", text: "Designed and ran the analytics platform for a multi-brand retailer: event-driven ingestion from the e-commerce stack, CRM and fulfilment sources, layered modelling, BI on top, and monitoring so every sync is visible." },
    { tag: "AI agents", title: "MCP servers for live business data", text: "Built and deployed Model Context Protocol servers that let AI assistants work safely with advertising, email and operational databases, each with its own authentication and guard-rails." },
    { tag: "Customer support AI", title: "Grounded Arabic support bot", text: "Retrieval-based assistant over an Arabic knowledge base with live order lookup, shipped through a tested staging-to-production pipeline on AWS." },
    { tag: "Analytics", title: "Executive sales analytics", text: "ERP data landed in a cloud warehouse and turned into protected dashboards and a weekly leadership update, replacing spreadsheet reporting." },
    { tag: "Marketing data", title: "Web behaviour into the CRM", text: "Storefront events captured through a tag manager and attached to the right customer records, so marketing sees what people do, not just what they buy." },
    { tag: "Security", title: "Cloud security & alerting programmes", text: "Audits across Google Cloud and AWS followed by phased remediation: keyless deployments, scoped identities, health checks and a tiered alerting model that pages the right people." },
    { tag: "Open source", title: "Single sign-on for an open-source BI tool", text: "Added enterprise login to a self-hosted analytics platform so a company could use its identity provider without a commercial licence." },
    { tag: "Programme delivery", title: "Consumer mobile app programme", text: "Set up the delivery model with an external vendor, from backlog and stage gates to user-acceptance testing and payment and loyalty integrations." },
    { tag: "Back-office automation", title: "Approval workflow automation", text: "Turned a paper-and-spreadsheet onboarding process into a coordinated workflow with document checks, parallel approvals, reminders and a full audit trail." },
    { tag: "Ops & hardware", title: "From comms rooms to radio", text: "Office phone systems, network and fibre faults, locked-down developer environments and a home-built radio receiving station. If it has a cable, I have probably debugged it." },
  ],

  footer: "Abdalla Alhaj",
};
