(function () {
  const P = window.PROFILE || {};
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ── Theme ────────────────────────────────────────────────────────────────
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (_) {}
  $("theme-toggle").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });

  // ── Hero ─────────────────────────────────────────────────────────────────
  document.title = P.name || document.title;
  $("name").textContent = P.name || "";
  $("headline").textContent = P.headline || "";
  $("tagline").textContent = P.tagline || "";
  $("flags").textContent = (P.flags || []).join(" ");
  $("location").textContent = P.location || "";
  $("languages").textContent = (P.languages || []).join(" · ");
  $("footer-name").textContent = P.footer || P.name || "";
  $("year").textContent = new Date().getFullYear();

  const initials = (P.name || "").split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const av = $("avatar");
  av.textContent = initials;
  if (P.photo) {
    const img = new Image();
    img.alt = "";
    img.onload = () => { av.textContent = ""; av.appendChild(img); };
    img.src = P.photo;
  }

  // ── Contact buttons ──────────────────────────────────────────────────────
  const I = {
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 19H5V9h3zM6.5 7.7A1.7 1.7 0 1 1 8.2 6a1.7 1.7 0 0 1-1.7 1.7zM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6V19h-3V9h2.9v1.4a3.2 3.2 0 0 1 2.9-1.6c3 0 3.6 2 3.6 4.6z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4a3.2 3.2 0 0 0-1.4-1.8c-1.1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2 2.6 2.6 0 0 0 3.5 1 2.6 2.6 0 0 1 .8-1.6c-2.7-.3-5.5-1.3-5.5-5.9a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.5 5.9a2.9 2.9 0 0 1 .8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    web: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.9a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4a14 14 0 0 1 2 4h-4a14 14 0 0 1 2-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4zm.8 2h2.9a15.7 15.7 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16zM8 8H5.1a8 8 0 0 1 4.3-3.6A15.7 15.7 0 0 0 8 8zm4 12a14 14 0 0 1-2-4h4a14 14 0 0 1-2 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.3 5.6a15.7 15.7 0 0 0 1.4-3.6h2.9a8 8 0 0 1-4.3 3.6zm1.7-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4z"/></svg>',
    vcard: '<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm5 10H4v-.8c0-1.7 3.3-2.6 5-2.6s5 .9 5 2.6zm6-3h-5v-2h5zm0-4h-5V8h5z"/></svg>',
  };
  const C = P.contact || {};
  const digits = (s) => String(s || "").replace(/[^\d]/g, "");
  const buttons = [];
  if (C.whatsapp) buttons.push({ k: "whatsapp", label: "WhatsApp", href: "https://wa.me/" + digits(C.whatsapp), c: "var(--whatsapp)" });
  if (C.phone) buttons.push({ k: "phone", label: "Call", href: "tel:" + String(C.phone).replace(/[^\d+]/g, ""), c: "var(--phone)", light: true });
  if (C.email) buttons.push({ k: "email", label: "Email", href: "mailto:" + C.email, c: "var(--email)" });
  if (C.linkedin) buttons.push({ k: "linkedin", label: "LinkedIn", href: C.linkedin, c: "var(--linkedin)" });
  if (C.github) buttons.push({ k: "github", label: "GitHub", href: C.github, c: "var(--github)", light: true });
  if (C.website) buttons.push({ k: "web", label: C.websiteLabel || "Website", href: C.website, c: "var(--web)" });
  if (C.phone || C.email) buttons.push({ k: "vcard", label: "Save contact", action: downloadVCard, c: "var(--vcard)" });

  function renderButtons(el) {
    el.innerHTML = "";
    for (const b of buttons) {
      const a = document.createElement(b.href ? "a" : "button");
      a.className = "btn" + (b.light ? " light" : "");
      a.style.setProperty("--c", b.c);
      a.innerHTML = I[b.k] + "<span>" + esc(b.label) + "</span>";
      if (b.href) { a.href = b.href; if (!/^(tel|mailto):/.test(b.href)) { a.target = "_blank"; a.rel = "noopener"; } }
      else { a.type = "button"; a.addEventListener("click", b.action); }
      el.appendChild(a);
    }
  }
  renderButtons($("contact"));
  renderButtons($("contact-bottom"));
  if (!buttons.length) $("contact-hint").hidden = false;

  function downloadVCard() {
    const [first, ...rest] = (P.name || "").split(" ");
    const lines = [
      "BEGIN:VCARD", "VERSION:3.0",
      "N:" + rest.join(" ") + ";" + first + ";;;",
      "FN:" + (P.name || ""),
      P.headline ? "TITLE:" + P.headline : "",
      C.phone ? "TEL;TYPE=CELL:" + C.phone : "",
      C.email ? "EMAIL;TYPE=INTERNET:" + C.email : "",
      C.linkedin ? "URL:" + C.linkedin : (C.website ? "URL:" + C.website : ""),
      P.location ? "ADR;TYPE=WORK:;;" + P.location + ";;;;" : "",
      "URL:" + location.href.split("#")[0],
      "END:VCARD",
    ].filter(Boolean);
    const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = (P.name || "contact").replace(/\s+/g, "-") + ".vcf";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  // ── About ────────────────────────────────────────────────────────────────
  $("about-body").innerHTML = (P.about || []).map((p) => "<p>" + esc(p) + "</p>").join("");

  // ── Skills ───────────────────────────────────────────────────────────────
  $("skill-groups").innerHTML = (P.skills || []).map((g) =>
    '<div class="skill-group"><h3>' + esc(g.group) + '</h3><div class="chips">' +
    (g.items || []).map((i) => '<span class="chip">' + esc(i) + "</span>").join("") + "</div></div>").join("");

  // ── Principles & projects ────────────────────────────────────────────────
  const card = (c) => '<article class="card">' + (c.tag ? '<span class="tag">' + esc(c.tag) + "</span>" : "") +
    "<h3>" + esc(c.title) + "</h3><p>" + esc(c.text) + "</p></article>";
  $("principles-grid").innerHTML = (P.principles || []).map(card).join("");
  $("projects-grid").innerHTML = (P.projects || []).map(card).join("");
})();
