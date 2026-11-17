/* Tiny force layout (no dependencies). Seeded so the map looks the same on every load. */
window.layout = function (nodes, edges, W, H, anchor) {
    let s = 7; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    const by = Object.fromEntries(nodes.map((n) => [n.id, n]));
    nodes.forEach((n) => { const a = anchor(n); n.x = a.x + (rnd() - .5) * 60; n.y = a.y + (rnd() - .5) * 60; n.vx = n.vy = 0; });
    for (let it = 0, N = 500; it < N; it++) {
        const al = 1 - it / N;
        for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i], b = nodes[j]; let dx = b.x - a.x, dy = b.y - a.y; const d = Math.hypot(dx, dy) || .1;
            const min = a.r + b.r + 34; let f = 1800 / (d * d) + (d < min ? (min - d) * .35 : 0);
            dx /= d; dy /= d; a.vx -= dx * f; a.vy -= dy * f; b.vx += dx * f; b.vy += dy * f;
        }
        edges.forEach(([p, q]) => { const a = by[p], b = by[q]; const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || .1, f = (d - 110) * .012; a.vx += dx / d * f; a.vy += dy / d * f; b.vx -= dx / d * f; b.vy -= dy / d * f; });
        nodes.forEach((n) => {
            const a = anchor(n), k = n.type === "project" ? .01 : .03;
            n.vx += (a.x - n.x) * k; n.vy += (a.y - n.y) * k;
            n.vx *= .78; n.vy *= .78; n.x += n.vx * (.4 + al); n.y += n.vy * (.4 + al);
            n.x = Math.max(50, Math.min(W - 50, n.x)); n.y = Math.max(30, Math.min(H - 34, n.y));
        });
    }
};