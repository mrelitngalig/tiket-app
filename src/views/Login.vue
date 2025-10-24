/* ====== Reset ringan & variable ====== */
.topbar {
position: sticky; top: 0; z-index: 10;
display: flex; align-items: center; justify-content: space-between;
gap: 12px; padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,.1);
background: rgba(10, 16, 30, .65); backdrop-filter: blur(8px);
}
.topbar .left { display: flex; align-items: center; gap: 10px; }
.logo-mini { width: 34px; height: 34px; border-radius: 10px; display:grid; place-items:center; font-weight:800; color:#fff;
background: linear-gradient(135deg, rgb(var(--brand)), rgb(var(--brand2))); }
.topbar h2 { margin: 0; font-size: 18px; }
.right { display: flex; align-items: center; gap: 10px; }
.user-chip { display:flex; align-items:center; gap:10px; padding:6px 10px; border-radius: 12px; background: rgba(255,255,255,.06); }
.user-chip .avatar { width: 28px; height: 28px; border-radius: 50%; display:grid; place-items:center; font-weight:800; background:#111827; }
.user-chip .meta { line-height: 1.1; }
.user-chip small { color:#c7cdd8; }


.btn-ghost { padding: 8px 12px; border-radius: 10px; border:1px solid rgba(255,255,255,.25); background: transparent; color:#fff; cursor:pointer; }


.content { padding: 22px; max-width: 1100px; margin: 0 auto; }
.cards { display:grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
.card {
grid-column: span 12;
padding: 18px; border-radius: 14px; background: rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12);
}
.card h3 { margin: 0 0 6px; color: #fff; }
.card p { margin: 0 0 12px; color: #d1d5db; }


.btn-secondary { padding: 10px 14px; border: none; border-radius: 10px; cursor: pointer; background: rgb(var(--ok)); color: #062b22; font-weight: 700; }
.btn-outline { padding: 9px 14px; border-radius: 10px; border:1px solid rgba(255,255,255,.45); background: transparent; color:#fff; cursor:pointer; }


/* hover effect */
.hover-lift { transition: transform .12s ease, box-shadow .12s ease; }
.hover-lift:hover { transform: translateY(-2px); box-shadow: 0 12px 20px rgba(0,0,0,.28); }


/* responsive */
@media (min-width: 640px) {
.card { grid-column: span 6; }
}
@media (min-width: 1024px) {
.card { grid-column: span 4; }
}


/* slide */
.slide-down { animation: slide .35s ease both; }
@keyframes slide { from { transform: translateY(-8px); opacity: 0;} to { transform:none; opacity:1; } }