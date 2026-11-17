/* ===== Data (from CV) ===== */
const GH = "https://github.com/moaaz311/";
const RAW = "https://raw.githubusercontent.com/moaaz311/";
const PIPELINE = [
  { name: "Sources", tools: "Python · REST APIs · Excel", text: "Pull data from APIs, files and databases with Python and Pandas, using pagination, rate limiting and caching. LaLiga pipeline: 380 fixtures, 20 clubs, 770+ player records." },
  { name: "ETL", tools: "SSIS · Power Query · dbt", text: "Clean, validate and load with tested pipelines. Egypt EconLens unifies 3 source systems (2019–2025) through SSIS into one warehouse." },
  { name: "Warehouse", tools: "SQL Server · SSAS · Star schema", text: "Model facts and dimensions with keys and indexes, then expose them through OLAP cubes. Sales cubes: 3 cubes over a FactSales table with 5 dimensions." },
  { name: "Insight", tools: "Power BI · Tableau · SSRS", text: "Ship dashboards and paginated reports, then automate PDF export, share links and update emails with Power Automate and the Power BI REST API." }
];
const SKILLS = {
  "BI & Visualization": ["Power BI (DAX, Power Query/M)", "Paginated Reports", "SSRS", "Tableau", "KPI Reporting", "Data Visualization"],
  "Data Modeling": ["Star Schema", "Dimensional Modeling", "Data Warehousing", "OLAP Cubes"],
  "Databases & SQL": ["SQL Server", "T-SQL", "Stored Procedures", "Database Design"],
  "Data Engineering": ["ETL/ELT", "SSIS", "SSAS (Tabular & Multidimensional)", "Python (Pandas, NumPy)", "REST APIs", "Excel", "Data Quality Testing"],
  "Cloud & Platforms": ["Microsoft Fabric", "Azure", "Power BI Service"],
  "Automation": ["Power Automate", "SharePoint Lists", "Power BI REST API", "HTTP Triggers", "JSON", "OneDrive", "Outlook"],
  "Dev Tools": ["Git", "GitHub", "Streamlit", "Flask", "HTML/CSS"]
};
const PROJECTS = [
  {
    t: "Egypt EconLens", sub: "Economic intelligence and supply chain analytics platform", cat: ["Data Engineering", "Power BI"], feat: true,
    img: RAW + "FinalProjectAPP/main/EgyptEconLens.png", stack: ["Python", "Flask", "SQL Server", "SSIS", "Power BI", "Fabric", "Azure", "Power Automate"],
    live: "https://final-project-app-nine.vercel.app", repo: "FinalProjectAPP",
    pts: ["Unified trade, macroeconomic and supply-chain data (2019–2025) from 3 source systems on Azure, using a SQL Server star schema, SSIS ETL and a mobile-first Flask app.",
      "Replaced manual SQL querying with a natural-language AI Copilot that returns insights and 4 chart types, using a prompt builder, schema retriever and SQL validator.",
      "Served Power BI dashboards and paginated RDL reports to public visitors without a Power BI Embedded purchase, via Microsoft Fabric, the REST API and Azure AD guest access.",
      "Automated PDF export and sharing for 2 report types with HTTP-triggered Power Automate workflows that generate OneDrive share links.",
      "Removed manual update notices with a scheduled workflow that compares report metadata to a SharePoint version tracker and emails subscribers."]
  },
  {
    t: "LaLiga Match Intelligence", sub: "Python ETL, SQL Server warehouse and Power BI", cat: ["Data Engineering", "Power BI"],
    stack: ["Python", "Pandas", "SQL Server", "Power BI", "DAX", "REST APIs"], repo: "LaLiga-Match-Intelligence-Analytics",
    pts: ["Consolidated 380 fixtures, 20 club profiles (xG, possession, Elo) and 770+ player records across 10 statistical categories with a Python ETL pipeline.",
      "Resolved 223 player headshots (76% of 294) from 2 sources with Unicode name matching and 12-thread checks, with an SVG fallback.",
      "Designed a SQL Server star schema (2 dimension and 5 fact tables) with keys and indexes, batch-loaded via SQLAlchemy and pyodbc."]
  },
  {
    t: "Bank Customer Churn Prediction", sub: "XGBoost model with a Streamlit app", cat: ["Python & ML"],
    img: RAW + "churn_prediction_app/main/1(1).png", stack: ["Python", "XGBoost", "scikit-learn", "Streamlit"], repo: "churn_prediction_app",
    pts: ["Predicted churn with 96.8% accuracy, 90.1% F1 and 0.99 ROC-AUC on 10,127 customer records.",
      "Found key drivers (about 16% churn; low activity and fewer products raise risk) through EDA across 23 attributes.",
      "Built a Streamlit app with dashboard, analysis and prediction pages for real-time scoring."]
  },
  {
    t: "Business Sales Overview", sub: "Power BI dashboard with a star schema", cat: ["Power BI"],
    img: RAW + "Business-Sales-Overview-Dashboard-Power-BI-/main/p1.png", stack: ["Power BI", "DAX", "Power Query", "Star Schema"], repo: "Business-Sales-Overview-Dashboard-Power-BI-",
    pts: ["Gave stakeholders one view of 6 KPIs (customers, orders, revenue, tax, shipping cost, net sales) with slicers by product, region and time.",
      "Modeled a star schema (1 fact, 5 dimensions) and wrote DAX measures after cleaning in Power Query.",
      "Showed that Bikes drive the highest revenue and Canada and Northwest hold the most customers."]
  },
  {
    t: "SSAS Sales Analysis Cubes", sub: "Three OLAP cubes on a star schema", cat: ["Data Engineering"],
    stack: ["SQL Server", "SSAS", "OLAP", "Star Schema"], repo: "SSAS_Sales_Analysis__Projects",
    pts: ["Deployed 3 OLAP cubes with measures and a Year/Quarter hierarchy for analysis by product, customer, channel, salesman and time.",
      "Modeled a FactSales table with 5 dimensions: Product, Customer, Time, Channel, Salesman."]
  },
  {
    t: "Flight Delay Analysis", sub: "Power BI dashboard for delays and cancellations", cat: ["Power BI"],
    img: RAW + "Flight_Data_Analysis_Project_PowerBI_Dashboard/main/1(1).png", stack: ["Power BI", "Power Query", "Star Schema"], repo: "Flight_Data_Analysis_Project_PowerBI_Dashboard",
    pts: ["Surfaced the airlines, airports and periods with the highest delays and cancellations through delay and cancellation-rate KPIs and filters.",
      "Cleaned duplicates, missing values and data types in Power Query, then modeled a star schema."]
  },
  {
    t: "Real Madrid Season Analysis", sub: "2025–2026 La Liga match analysis in Tableau", cat: ["Tableau"],
    img: RAW + "Real-Madrid-Analysis-Season-2025-2026-LA-Liga/main/p1.png", stack: ["Tableau", "EDA"], repo: "Real-Madrid-Analysis-Season-2025-2026-LA-Liga",
    pts: ["Identified scoring efficiency, shot accuracy and disciplinary patterns across home and away fixtures.",
      "Highlighted the opponents most vulnerable to Real Madrid’s attack with KPIs, goals-conceded analysis and match-location filters."]
  },
  {
    t: "UK Bank Customers Segmentation", sub: "Interactive Tableau segmentation dashboard", cat: ["Tableau"],
    img: RAW + "UK-Bank-Customers-Segmentation-Dashboard-Tableau-/main/p1.png", stack: ["Tableau"], repo: "UK-Bank-Customers-Segmentation-Dashboard-Tableau-",
    pts: ["Identified customer segments by region, gender, job, age and balance, with a region map that filters every chart.",
      "Added parameter-controlled dynamic bins for age and balance, calculated fields and a job-classification treemap."]
  }
];

/* ===== Helpers ===== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===== Theme ===== */
const root = document.documentElement, themeBtn = $("#theme-toggle");
function setTheme(t) {
  root.dataset.theme = t;
  themeBtn.innerHTML = `<i class="uil uil-${t === "dark" ? "moon" : "sun"}"></i>`;
  themeBtn.setAttribute("aria-label", `Switch to ${t === "dark" ? "light" : "dark"} theme`);
  try { localStorage.setItem("theme", t); } catch (e) { }
}
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) { }
setTheme(saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
themeBtn.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

/* ===== Nav, progress, active link ===== */
const menu = $("#nav-menu"), toggle = $("#nav-toggle");
toggle.onclick = () => { const o = menu.classList.toggle("show-menu"); toggle.setAttribute("aria-expanded", o); };
$$(".nav__link").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("show-menu"); toggle.setAttribute("aria-expanded", false); }));
addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#progress").style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
  $("#header").classList.toggle("scrolled", scrollY > 40);
}, { passive: true });
const linkObs = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) $$(".nav__link").forEach((a) => a.classList.toggle("active-link", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach((s) => linkObs.observe(s));

/* ===== Reveal (sections fade in once) ===== */
const revObs = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); }
}), { threshold: 0.08 });
$$(".section").forEach((s) => { s.classList.add("reveal"); revObs.observe(s); });

/* ===== Typing ===== */
const roles = ["Junior BI Developer", "Data Analyst"], tt = $(".typing-text");
let ri = 0, ci = 0, del = false;
(function type() {
  if (reduced) { tt.textContent = roles.join(" | "); return; }
  const w = roles[ri];
  tt.textContent = w.slice(0, del ? --ci : ++ci);
  let d = del ? 40 : 90;
  if (!del && ci === w.length) { del = true; d = 1800; }
  else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; d = 400; }
  setTimeout(type, d);
})();

/* ===== Counters ===== */
new IntersectionObserver((es, o) => {
  if (!es[0].isIntersecting) return;
  o.disconnect();
  $$(".counter").forEach((c) => {
    const target = +c.dataset.target, suf = c.dataset.suffix || (target > 100 ? "" : "+"), dec = String(target).includes(".") ? 1 : 0;
    if (reduced) { c.textContent = target.toFixed(dec) + suf; return; }
    const t0 = performance.now();
    (function step(t) {
      const p = Math.min((t - t0) / 1400, 1), v = target * (1 - Math.pow(1 - p, 3));
      c.textContent = v.toFixed(dec) + (p === 1 ? suf : "");
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  });
}, { threshold: 0.4 }).observe($("#stats"));

/* ===== Hero pipeline ===== */
const stagesEl = $("#pipeline-stages"), panel = $("#pipeline-panel"), pulse = $("#pipeline-pulse");
let cur = 0, timer = null;
stagesEl.innerHTML = PIPELINE.map((s, i) => `<li><button type="button" data-i="${i}"><b>${s.name}</b><span>${s.tools}</span></button></li>`).join("");
function selectStage(i) {
  cur = i;
  $$("button", stagesEl).forEach((b, j) => { b.setAttribute("aria-pressed", j === i); b.classList.toggle("done", j < i); });
  pulse.style.left = `${(i + 0.5) * (100 / PIPELINE.length)}%`;
  panel.textContent = PIPELINE[i].text;
}
function auto() { if (reduced) return; clearInterval(timer); timer = setInterval(() => selectStage((cur + 1) % PIPELINE.length), 3500); }
stagesEl.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { clearInterval(timer); selectStage(+b.dataset.i); } });
stagesEl.addEventListener("mouseenter", () => clearInterval(timer));
stagesEl.addEventListener("mouseleave", auto);
selectStage(0); auto();

/* ===== Skills tabs ===== */
const tabs = $("#skill-tabs"), sp = $("#skill-panel"), cats = Object.keys(SKILLS);
tabs.innerHTML = cats.map((c, i) => `<button role="tab" type="button" aria-selected="${i === 0}" data-c="${c}">${c}</button>`).join("");
function showSkills(c) {
  $$("button", tabs).forEach((b) => b.setAttribute("aria-selected", b.dataset.c === c));
  sp.innerHTML = SKILLS[c].map((s, i) => `<span class="chip" style="animation-delay:${i * 40}ms">${esc(s)}</span>`).join("");
}
tabs.onclick = (e) => { const b = e.target.closest("button"); if (b) showSkills(b.dataset.c); };
showSkills(cats[0]);

/* ===== Projects ===== */
const filters = ["All", "Power BI", "Tableau", "Data Engineering", "Python & ML"], grid = $("#projects-grid"), fEl = $("#filters");
fEl.innerHTML = filters.map((f, i) => `<button type="button" aria-pressed="${i === 0}" data-f="${f}">${f}</button>`).join("");
function renderProjects(f) {
  $$("button", fEl).forEach((b) => b.setAttribute("aria-pressed", b.dataset.f === f));
  grid.innerHTML = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => f === "All" || p.cat.includes(f)).map(({ p, i }) => `
    <button class="card${p.feat ? " card--feat" : ""}" type="button" data-i="${i}">
      ${p.img ? `<img src="${p.img}" alt="" loading="lazy" onerror="this.remove()">` : ""}
      <span class="card__body">
        <h3>${esc(p.t)}</h3><span class="card__sub">${esc(p.sub)}</span>
        <span class="card__stack">${p.stack.slice(0, 4).map((s) => `<i>${esc(s)}</i>`).join("")}</span>
        <span class="card__more">View details <i class="uil uil-arrow-right"></i></span>
      </span>
    </button>`).join("");
}
fEl.onclick = (e) => { const b = e.target.closest("button"); if (b) renderProjects(b.dataset.f); };
renderProjects("All");

/* ===== Modal ===== */
const modal = $("#modal");
grid.onclick = (e) => {
  const c = e.target.closest(".card"); if (!c) return;
  const p = PROJECTS[+c.dataset.i];
  modal.innerHTML = `<div class="modal__box">
    <button class="icon-btn modal__close" type="button" aria-label="Close" data-close><i class="uil uil-times"></i></button>
    <h3 id="modal-title">${esc(p.t)}</h3><p class="card__sub">${esc(p.sub)}</p>
    ${p.img ? `<img src="${p.img}" alt="Screenshot of ${esc(p.t)}" onerror="this.remove()">` : ""}
    <ul>${p.pts.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <div class="card__stack">${p.stack.map((s) => `<i>${esc(s)}</i>`).join("")}</div>
    <div class="hero__buttons">
      ${p.live ? `<a class="button" href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ""}
      <a class="button button--ghost" href="${GH + p.repo}" target="_blank" rel="noopener"><i class="uil uil-github"></i> Repository</a>
    </div></div>`;
  modal.showModal();
};
modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest("[data-close]")) modal.close(); });

/* ===== Contact ===== */
const EMAIL = "moaazachraf503@gmail.com";
$("#copy-email").onclick = async () => {
  const l = $("#copy-label");
  try { await navigator.clipboard.writeText(EMAIL); l.textContent = "Copied to clipboard"; }
  catch (e) { location.href = "mailto:" + EMAIL; }
  setTimeout(() => (l.textContent = EMAIL + " (tap to copy)"), 2000);
};
$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + d.get("name"))}&body=${encodeURIComponent(d.get("message") + "\n\n" + d.get("name") + " (" + d.get("email") + ")")}`;
  $("#form-note").textContent = "Your email app should open with the message ready to send.";
});