(() => {
  const D = window.DATA, $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Data model ---------- */
  const skills = D.skills.map(([id, name, cat]) => ({ id, name, cat, type: "skill", r: 7 }));
  const projects = D.projects.map((p) => ({ ...p, type: "project", r: 13 + p.tech.length * 0.7 }));
  const nodes = [...skills, ...projects], by = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const edges = projects.flatMap((p) => p.tech.map((t) => [p.id, t]));
  const usedBy = (id) => projects.filter((p) => p.tech.includes(id));
  const cats = Object.keys(D.cats), W = 800, H = 620;
  const badges = (p) => p.tech.map((t) => `<span class="badge mono">${esc(by[t].name)}</span>`).join("");
  const nums = (p) => (p.nums.length ? `<dl class="nums">${p.nums.map(([v, l]) => `<div><dt class="mono">${esc(v)}</dt><dd>${esc(l)}</dd></div>`).join("")}</dl>` : "");
  const btns = (p) => `${p.live ? `<a class="btn btn--sm" href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ""}<a class="btn btn--sm btn--ghost" href="${p.repo}" target="_blank" rel="noopener">Repository</a>`;

  /* ---------- Menu + header ---------- */
  const mb = $("#menu-btn"), nl = $("#nav-list");
  mb.onclick = () => mb.setAttribute("aria-expanded", nl.classList.toggle("open"));
  $$("#nav-list a").forEach((a) => a.addEventListener("click", () => { nl.classList.remove("open"); mb.setAttribute("aria-expanded", false); }));
  addEventListener("scroll", () => $("#header").classList.toggle("scrolled", scrollY > 30), { passive: true });

  /* ---------- Hero data-flow canvas ---------- */
  (function flow() {
    const c = $("#flow"), x = c.getContext("2d"); let w, h, pk = [], vis = true;
    const rails = 7, size = () => { const d = devicePixelRatio || 1; w = c.clientWidth; h = c.clientHeight; c.width = w * d; c.height = h * d; x.setTransform(d, 0, 0, d, 0, 0); };
    size(); addEventListener("resize", size);
    for (let i = 0; i < 28; i++) pk.push({ r: i % rails, x: Math.random() * 1400, v: 0.4 + Math.random() * 0.9, l: 30 + Math.random() * 60 });
    function draw() {
      x.clearRect(0, 0, w, h);
      for (let r = 0; r < rails; r++) {
        const y = ((r + 1) / (rails + 1)) * h; x.strokeStyle = "rgba(34,197,94,.13)"; x.beginPath(); x.moveTo(0, y); x.lineTo(w, y); x.stroke();
        for (let k = 1; k < 8; k++) { x.fillStyle = "rgba(34,197,94,.3)"; x.fillRect((k / 8) * w - 2, y - 2, 4, 4); }
      }
      pk.forEach((p) => {
        const y = ((p.r + 1) / (rails + 1)) * h; if (!reduce) p.x = (p.x + p.v) % (w + 200);
        const g = x.createLinearGradient(p.x - p.l, 0, p.x, 0); g.addColorStop(0, "rgba(74,222,128,0)"); g.addColorStop(1, "#4ADE80");
        x.strokeStyle = g; x.lineWidth = 2; x.shadowColor = "#4ADE80"; x.shadowBlur = 8; x.beginPath(); x.moveTo(p.x - p.l, y); x.lineTo(p.x, y); x.stroke(); x.shadowBlur = 0; x.lineWidth = 1;
      });
      if (!reduce && vis) requestAnimationFrame(draw);
    }
    new IntersectionObserver((e) => { const was = vis; vis = e[0].isIntersecting; if (vis && !was && !reduce) draw(); }).observe(c);
    draw();
  })();

  /* ---------- Network map ---------- */
  const svg = $("#graph"), stage = $("#map");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  layout(nodes, edges, W, H, (n) => {
    if (n.type === "project") return { x: W / 2, y: H / 2 };
    const a = -Math.PI / 2 + (cats.indexOf(n.cat) * 2 * Math.PI) / cats.length;
    return { x: W / 2 + W * 0.38 * Math.cos(a), y: H / 2 + H * 0.36 * Math.sin(a) };
  });
  svg.innerHTML = `<g>${edges.map(([p, s], i) => `<line class="edge" data-p="${p}" data-s="${s}" style="animation-delay:${(i % 9) * 0.45}s"/>`).join("")}</g>
    <g>${nodes.map((n) => `<g class="node ${n.type}" data-id="${n.id}" tabindex="0" role="button" aria-label="${esc(n.name)}, ${n.type}, ${n.type === "project" ? n.tech.length + " skills" : usedBy(n.id).length + " projects"}"><circle r="${n.r}"/><text y="${n.r + 13}" text-anchor="middle">${esc(n.name.length > 26 ? n.name.split(" ").slice(0, 2).join(" ") : n.name)}</text></g>`).join("")}</g>`;
  const nodeEl = Object.fromEntries($$(".node", svg).map((e) => [e.dataset.id, e])), edgeEls = $$(".edge", svg);

  let t0 = 0, running = true;
  function draw(t) {
    const off = (n, i) => (reduce ? [0, 0] : [Math.sin(t / 1700 + i * 1.7) * 3, Math.cos(t / 2100 + i * 1.3) * 3]);
    const pos = {}; nodes.forEach((n, i) => { const [dx, dy] = off(n, i); pos[n.id] = [n.x + dx, n.y + dy]; nodeEl[n.id].setAttribute("transform", `translate(${pos[n.id][0].toFixed(1)} ${pos[n.id][1].toFixed(1)})`); });
    edgeEls.forEach((e) => { const a = pos[e.dataset.p], b = pos[e.dataset.s]; e.setAttribute("x1", a[0]); e.setAttribute("y1", a[1]); e.setAttribute("x2", b[0]); e.setAttribute("y2", b[1]); });
    if (!reduce && running) requestAnimationFrame(draw);
  }
  draw(0);
  new IntersectionObserver((e) => { const was = running; running = e[0].isIntersecting; if (running && !was && !reduce) requestAnimationFrame(draw); }).observe(stage);

  /* Mobile list (shown instead of the graph on small screens) */
  $("#netlist").innerHTML = `<h3 class="mono">Projects</h3>${projects.map((p) => `<button class="lrow" data-id="${p.id}"><b>${esc(p.name)}</b><span>${p.tech.length} skills</span></button>`).join("")}
    ${cats.map((c) => `<h3 class="mono">${D.cats[c]}</h3><div class="chips">${skills.filter((s) => s.cat === c).map((s) => `<button class="chip" data-id="${s.id}">${esc(s.name)}</button>`).join("")}</div>`).join("")}`;
  const items = $$("[data-id]", stage);

  /* State: hover/focus, locked (clicked) node, category filter, journey step */
  let hover = null, locked = null, cat = "all", step = -1;
  function paint() {
    const id = hover || locked, rel = new Set(id ? [id] : []);
    if (id) edges.forEach(([p, s]) => { if (p === id) rel.add(s); if (s === id) rel.add(p); });
    svg.classList.toggle("focus", !!id);
    const match = (n) => cat === "all" || (n.type === "skill" ? n.cat === cat : n.tech.some((t) => by[t].cat === cat));
    const m = D.milestones, cur = m[step] || {}, up = new Set(), now = new Set();
    m.slice(0, step + 1).forEach((x) => (x.all ? nodes.forEach((n) => up.add(n.id)) : [...x.skills, ...x.projects].forEach((i) => up.add(i))));
    if (cur.all) nodes.forEach((n) => now.add(n.id)); else[...(cur.skills || []), ...(cur.projects || [])].forEach((i) => now.add(i));
    items.forEach((e) => {
      const n = by[e.dataset.id];
      e.classList.toggle("rel", rel.has(n.id)); e.classList.toggle("off", !match(n)); e.classList.toggle("unlock", up.has(n.id)); e.classList.toggle("lit", now.has(n.id)); e.classList.toggle("sel", locked === n.id);
    });
    edgeEls.forEach((e) => { e.classList.toggle("rel", !!id && (e.dataset.p === id || e.dataset.s === id)); e.classList.toggle("off", !match(by[e.dataset.s])); });
  }
  svg.addEventListener("pointerover", (e) => { const g = e.target.closest(".node"); hover = g ? g.dataset.id : null; paint(); });
  svg.addEventListener("pointerleave", () => { hover = null; paint(); });
  svg.addEventListener("focusin", (e) => { const g = e.target.closest(".node"); hover = g ? g.dataset.id : null; paint(); });
  svg.addEventListener("focusout", () => { hover = null; paint(); });
  function pick(e) { const g = e.target.closest("[data-id]"); if (g && stage.contains(g)) openPanel(g.dataset.id, g); }
  stage.addEventListener("click", pick);
  svg.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(e); } });

  /* Filters */
  const fEl = $("#filters"); fEl.innerHTML = [["all", "All"], ...cats.map((c) => [c, D.cats[c]])].map(([k, l]) => `<button type="button" class="mono" data-f="${k}" aria-pressed="${k === "all"}">${l}</button>`).join("");
  fEl.onclick = (e) => { const b = e.target.closest("button"); if (!b) return; cat = b.dataset.f; $$("button", fEl).forEach((x) => x.setAttribute("aria-pressed", x === b)); paint(); };

  /* Side panel */
  const panel = $("#panel"); let opener = null;
  function openPanel(id, from) {
    const n = by[id]; locked = id; opener = from || null;
    panel.innerHTML = `<button class="x mono" type="button" data-close aria-label="Close details">Close</button>` + (n.type === "project"
      ? `<p class="mono tag">Project</p><h3>${esc(n.name)}</h3><p>${esc(n.summary)}</p>${nums(n)}<div class="badges">${badges(n)}</div><div class="btns">${btns(n)}</div>`
      : `<p class="mono tag">Skill · ${esc(D.cats[n.cat])}</p><h3>${esc(n.name)}</h3>${usedBy(id).length ? `<p>Used in ${usedBy(id).length} project${usedBy(id).length > 1 ? "s" : ""}:</p><ul class="plist">${usedBy(id).map((p) => `<li><button type="button" data-id="${p.id}">${esc(p.name)}</button></li>`).join("")}</ul>` : `<p>Practised in the ITI program. No project on this map uses it yet.</p>`}`);
    panel.classList.add("open"); panel.setAttribute("aria-hidden", "false"); paint(); $(".x", panel).focus();
  }
  function closePanel() { locked = null; panel.classList.remove("open"); panel.setAttribute("aria-hidden", "true"); paint(); if (opener) opener.focus(); }
  panel.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) return closePanel(); const b = e.target.closest("[data-id]"); if (b) openPanel(b.dataset.id, opener); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && panel.classList.contains("open")) closePanel(); });

  /* ---------- Journey (scroll-driven) ---------- */
  const ml = $("#ms-list");
  ml.innerHTML = D.milestones.map((m, i) => `<li class="ms" data-i="${i}"><span class="ms__dot"></span><p class="mono ms__year">${esc(m.year)}</p><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p>
    ${m.all ? `<p class="mono unl">Unlocks: everything on the map</p>` : m.skills.length + m.projects.length ? `<p class="mono unl">Unlocks: ${m.projects.length ? m.projects.length + " projects, " : ""}${m.skills.length} skills</p>` : ""}</li>`).join("");
  const msEls = $$(".ms", ml);

  const mo = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { step = +e.target.dataset.i; msEls.forEach((m, i) => m.classList.toggle("on", i <= step)); paint(); } }), { rootMargin: "-45% 0px -45% 0px" });
  msEls.forEach((m) => mo.observe(m));
  function rail() { const r = ml.getBoundingClientRect(); ml.style.setProperty("--p", Math.max(0, Math.min(1, (innerHeight * 0.5 - r.top) / r.height)).toFixed(3)); }
  addEventListener("scroll", rail, { passive: true }); rail();

  /* ---------- Project sections ---------- */
  $("#deep").innerHTML = projects.filter((p) => p.feat).map((p) => `<article class="deep"><div>
      <p class="mono tag">Featured project</p><h3>${esc(p.name)}</h3><p class="lead">${esc(p.summary)}</p>
      <ul class="pts">${p.pts.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><div class="badges">${badges(p)}</div>
      <div class="btns">${btns(p)}<button class="btn btn--sm btn--ghost seemap" data-id="${p.id}" type="button">See on map</button></div></div>
      <div class="deep__side">${p.img ? `<img src="${p.img}" alt="Screenshot of the ${esc(p.name)} platform" loading="lazy" onerror="this.remove()">` : ""}${nums(p)}</div></article>`).join("");
  $("#more").innerHTML = projects.filter((p) => !p.feat).map((p) => `<article class="mcard">${p.img ? `<img src="${p.img}" alt="Screenshot of the ${esc(p.name)} dashboard" loading="lazy" onerror="this.remove()">` : ""}
      <div class="mcard__b"><h3>${esc(p.name)}</h3><p>${esc(p.summary)}</p>${nums(p)}<div class="badges">${badges(p)}</div><div class="btns">${btns(p)}<button class="btn btn--sm btn--ghost seemap" data-id="${p.id}" type="button">See on map</button></div></div></article>`).join("");
  document.addEventListener("click", (e) => { const b = e.target.closest(".seemap"); if (!b) return; $("#map").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); setTimeout(() => openPanel(b.dataset.id, null), reduce ? 0 : 500); });

  /* ---------- Contact ---------- */
  const EMAIL = "moaazachraf503@gmail.com";
  $("#copy-email").onclick = async () => { const l = $("#copy-label"); try { await navigator.clipboard.writeText(EMAIL); l.textContent = "Copied to clipboard"; } catch (e) { location.href = "mailto:" + EMAIL; } setTimeout(() => (l.textContent = EMAIL + " (tap to copy)"), 2000); };
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault(); const d = new FormData(e.target);
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + d.get("name"))}&body=${encodeURIComponent(d.get("message") + "\n\n" + d.get("name") + " (" + d.get("email") + ")")}`;
    $("#form-note").textContent = "Your email app should open with the message ready to send.";
  });
  paint();
})();