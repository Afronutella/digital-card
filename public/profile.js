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
    github: "https://github.com/Afronutella",
    website: "https://gtai.ae/",
    websiteLabel: "GTAI",
  },


  // Shown as the first paragraph of the "About" section.
  about: [
    "I sit between the business and the machines. Over the last two years I have run the data and cloud platform for a beauty-retail group and the IT programme for a water-delivery company, both in Saudi Arabia: warehouses on BigQuery and Redshift, ingestion jobs on Cloud Run and App Runner, dashboards on Metabase, and a growing fleet of AI agents and MCP servers that answer questions straight from live data.",
    "Before that: managing director of GTAI Consultancy, with a background in chemical engineering, UAV systems, industrial-control cybersecurity, networking and localisation. I am as happy on a Raspberry Pi or a PBX in a comms room as I am in a cloud console.",
  ],

  // Capability groups → chips.
  skills: [
    { group: "Data platforms", items: ["BigQuery", "Redshift", "Metabase", "ELT / CDC pipelines", "Fivetran-style sync monitoring", "DuckDB", "MariaDB / PostgreSQL", "Data-quality audits"] },
    { group: "Cloud & infrastructure", items: ["Google Cloud", "AWS", "Cloud Run / App Runner", "IAM & least privilege", "Workload Identity (keyless CI)", "Cloud Monitoring & PagerDuty", "Tailscale / WireGuard", "Proxmox & Docker"] },
    { group: "AI & agents", items: ["Claude / Bedrock / Vertex AI", "MCP servers", "Grounded RAG chatbots", "Voice assistants", "Agent verification loops", "Arabic NLP corpora"] },
    { group: "Integrations & growth stack", items: ["HubSpot", "Salla & Zid", "Shopify", "Google Tag Manager", "GA4", "CleverTap", "Odoo", "Unifonic SMS / WhatsApp", "Meta, Snap, TikTok & Google Ads APIs"] },
    { group: "Security & operations", items: ["Cloud security audits", "SAML / SSO", "Uptime & redirect monitoring", "Billing kill-switches", "Incident runbooks", "UAT programmes (iOS / Android)"] },
    { group: "Hands-on", items: ["Asterisk / Yeastar PBX", "Fibre & ONT troubleshooting", "SDR & RF", "UAV systems", "ICS cybersecurity", "Chemical engineering"] },
  ],

  // How I work — the qualities people notice.
  principles: [
    { title: "Measure before assuming", text: "When a brief said binlog retention was 72 hours, I watched the files rotate and proved it was ten minutes. Load-bearing facts get verified against the live system, not the ticket." },
    { title: "Grounded answers or an honest hand-off", text: "Every bot I ship must cite live data or escalate to a person. The voice assistant I built runs a second model as a verifier before it is allowed to speak." },
    { title: "Least privilege by default", text: "Dedicated service accounts per job, viewer-only access to spreadsheets, PII datasets hidden from BI tools, keyless deploys from GitHub. Access is scoped before the first run." },
    { title: "Automate the boring, alert on the real", text: "Hourly extractors, five-minute redirect checks, hard spend caps that detach billing. Noisy alerts get deleted; the ones left page a human." },
    { title: "Write it down", text: "Every system I touch leaves behind a runbook: IDs, health-check commands, known failure modes. The next person, or the next me, starts from facts." },
    { title: "Bilingual, cross-functional", text: "I work in Arabic and English with finance, marketing, vendors and IT, and I run the meeting, the UAT and the deployment myself when that is what it takes." },
  ],

  // Selected work. Keep each to one outcome.
  projects: [
    { tag: "Data platform", title: "Retail data warehouse on Google Cloud", text: "Designed the BigQuery warehouse for a multi-brand beauty retailer: webhook-driven Salla ingestion (27 event types) into bronze/silver layers, hourly HubSpot and fulfilment extractors on Cloud Run, Metabase on top. Fivetran-style pipeline-ops dashboard so every sync is visible." },
    { tag: "AI agents", title: "MCP servers for live business data", text: "Built and deployed Model Context Protocol servers for Google Ads, Gmail drafting with multi-GB attachments, and a read-only MariaDB server for Copilot Studio agents, each with its own auth, rate limits and blast-radius caps." },
    { tag: "Customer support AI", title: "Grounded Arabic support bot", text: "Two-agent retrieval pipeline over an Arabic FAQ corpus with a live order-lookup layer. PR → CI → staging → human-promoted prod on AWS App Runner; prod only ever runs an image that staging ran first." },
    { tag: "Analytics", title: "SAP sales analytics on Redshift", text: "Serverless Redshift workgroup fed from SAP, Cognito-protected dashboards behind CloudFront, and a weekly executive update that replaced spreadsheet reporting." },
    { tag: "Marketing data", title: "Web events into the CRM", text: "Eight custom HubSpot events wired through Google Tag Manager from a Salla storefront's data layer, tested beacon-by-beacon, with identify calls so behaviour attaches to the right contact." },
    { tag: "Security", title: "Cloud security & alerting programmes", text: "Org-wide GCP and AWS audits with phased remediation: Workload Identity for deploys, scoped runtime accounts, Security Command Center, Route 53 health checks, and a critical/warning alert tier routed to email and PagerDuty." },
    { tag: "Open source", title: "SAML SSO for open-source Metabase", text: "Clean-room SAML 2.0 service-provider implementation in a Metabase OSS fork so Microsoft Entra ID can sign users in without the enterprise licence. Signature, issuer, recipient, timing and replay checks included." },
    { tag: "Programme delivery", title: "Mobile app vendor programme", text: "Set up the Jira operating model, stage gates and sprint cadence for a vendor-built consumer app; ran Android and iOS UAT, loyalty-programme integrations and payment-gateway whitelisting." },
    { tag: "Back-office automation", title: "Credit-onboarding coordinator", text: "Proof-of-concept workflow bot replacing an Excel-and-paper process: document checklist, government-API auto-fill, four-way parallel approvals with timed reminders, SAP payload and an append-only audit log." },
    { tag: "Ops & hardware", title: "From comms rooms to radio", text: "Diagnosed a PBX outage down to fibre RX power and an unpaid trunk, rebuilt a four-dongle SDR aircraft-tracking station, set up Tailscale exit nodes and locked-down developer VMs." },
  ],

  footer: "Abdalla Alhaj",
};
