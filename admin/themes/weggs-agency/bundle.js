import { jsx as h, jsxs as v, Fragment as De } from "react/jsx-runtime";
import { i18n as qn, pickPublicLocale as Hn, canonicalUrl as Un, pickFormat as rt, postSortMillis as Gn, buildTermUrl as Kn, toast as Yn } from "@agent-cms/runtime";
import { useState as Ye, useEffect as Wt } from "react";
import { useTranslation as Vt } from "react-i18next";
const yt = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600;700;800&display=swap");

:root {
  --wa-font: "Inter", system-ui, sans-serif;
  --wa-bg:         oklch(98.5% 0.005 80);
  --wa-bg-subtle:  oklch(96%   0.007 80);
  --wa-bg-muted:   oklch(93%   0.009 80);
  --wa-text:       oklch(14%  0.015 80);
  --wa-text-2:     oklch(36%  0.012 80);
  --wa-text-muted: oklch(56%  0.009 80);
  --wa-accent:       #3730a3;
  --wa-accent-hover: oklch(30% 0.2 264);
  --wa-accent-light: oklch(95.5% 0.05 264);
  --wa-accent-text:  oklch(97%   0.02 264);
  --wa-border:        oklch(89%  0.007 80);
  --wa-border-strong: oklch(78%  0.01  80);
  --wa-shadow-xs: 0 1px 2px oklch(0% 0 0 / 0.05);
  --wa-shadow-sm: 0 2px 8px oklch(0% 0 0 / 0.06), 0 1px 3px oklch(0% 0 0 / 0.04);
  --wa-shadow:    0 4px 20px oklch(0% 0 0 / 0.07), 0 2px 8px oklch(0% 0 0 / 0.04);
  --wa-shadow-lg: 0 16px 48px oklch(0% 0 0 / 0.09), 0 4px 16px oklch(0% 0 0 / 0.04);
  --wa-max:       1200px;
  --wa-max-text:  760px;
  --wa-header-h:  72px;
  --wa-radius:    6px;
  --wa-radius-lg: 12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body.weggs-agency {
  font-family: var(--wa-font);
  background: var(--wa-bg);
  color: var(--wa-text);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  font-feature-settings: "cv02","cv03","cv04","cv11";
}

/* UTILITIES */
.wa-container { max-width: var(--wa-max); margin: 0 auto; padding: 0 2rem; }
.wa-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.wa-muted { color: var(--wa-text-muted); }

/* HEADER */
.wa-header { position: sticky; top: 0; z-index: 100; background: oklch(98.5% 0.005 80 / 0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--wa-border); }
.wa-header__inner { display: flex; align-items: center; justify-content: space-between; height: var(--wa-header-h); gap: 2rem; }
.wa-brand { font-weight: 800; font-size: 1.125rem; letter-spacing: -.03em; color: var(--wa-text); text-decoration: none; display: flex; align-items: center; gap: .5rem; }
.wa-brand__dot { width: 7px; height: 7px; border-radius: 50%; background: var(--wa-accent); flex-shrink: 0; transition: transform .2s; }
.wa-brand:hover .wa-brand__dot { transform: scale(1.5); }
.wa-nav { flex: 1; }
.wa-nav ul { display: flex; list-style: none; gap: .25rem; align-items: center; }
.wa-nav a { color: var(--wa-text-2); text-decoration: none; padding: .4rem .75rem; border-radius: var(--wa-radius); font-size: .9rem; font-weight: 500; transition: all .15s; letter-spacing: -.01em; }
.wa-nav a:hover, .wa-nav a[aria-current="page"] { color: var(--wa-text); background: var(--wa-bg-subtle); }
.wa-header__cta { background: var(--wa-accent); color: var(--wa-accent-text); padding: .5rem 1.125rem; border-radius: var(--wa-radius); font-size: .875rem; font-weight: 600; text-decoration: none; transition: all .15s; white-space: nowrap; letter-spacing: -.01em; }
.wa-header__cta:hover { background: var(--wa-accent-hover); }
.wa-burger { display: none; background: none; border: none; cursor: pointer; color: var(--wa-text); padding: .5rem; font-size: 1.25rem; line-height: 1; }

/* HERO */
.wa-hero { padding: 7rem 0 6rem; border-bottom: 1px solid var(--wa-border); }
.wa-hero__eyebrow { display: inline-flex; align-items: center; gap: .625rem; font-size: .8125rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--wa-accent); margin-bottom: 1.75rem; }
.wa-hero__eyebrow::before { content: ''; display: block; width: 20px; height: 2px; background: var(--wa-accent); border-radius: 1px; }
.wa-hero__title { font-size: clamp(2.25rem, 5.5vw, 4rem); font-weight: 800; line-height: 1.08; letter-spacing: -.04em; color: var(--wa-text); max-width: 820px; margin-bottom: 1.5rem; }
.wa-hero__sub { font-size: 1.125rem; color: var(--wa-text-2); line-height: 1.65; max-width: 520px; margin-bottom: 2.5rem; letter-spacing: -.01em; }
.wa-hero__actions { display: flex; gap: .875rem; align-items: center; flex-wrap: wrap; }

/* BUTTONS */
.wa-btn { display: inline-flex; align-items: center; gap: .5rem; padding: .75rem 1.5rem; border-radius: var(--wa-radius); font-size: .9375rem; font-weight: 600; text-decoration: none; transition: all .15s; letter-spacing: -.01em; cursor: pointer; border: none; font-family: inherit; }
.wa-btn--primary { background: var(--wa-accent); color: var(--wa-accent-text); }
.wa-btn--primary:hover { background: var(--wa-accent-hover); transform: translateY(-1px); box-shadow: var(--wa-shadow-sm); }
.wa-btn--ghost { color: var(--wa-text-2); border: 1.5px solid var(--wa-border-strong); background: none; }
.wa-btn--ghost:hover { color: var(--wa-text); border-color: var(--wa-text); background: var(--wa-bg-subtle); }

/* SECTIONS */
.wa-section { padding: 5rem 0; }
.wa-section--border { border-top: 1px solid var(--wa-border); }
.wa-section__header { margin-bottom: 3rem; }
.wa-section__eyebrow { font-size: .8125rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--wa-accent); margin-bottom: .75rem; display: block; }
.wa-section__title { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -.03em; color: var(--wa-text); line-height: 1.15; }
.wa-section__sub { margin-top: .875rem; font-size: 1.0625rem; color: var(--wa-text-2); max-width: 560px; line-height: 1.65; letter-spacing: -.01em; }

/* CARDS GRID */
.wa-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.5rem; }
.wa-card { background: var(--wa-bg); border: 1px solid var(--wa-border); border-radius: var(--wa-radius-lg); overflow: hidden; transition: all .2s; display: flex; flex-direction: column; }
.wa-card:hover { border-color: var(--wa-border-strong); box-shadow: var(--wa-shadow); transform: translateY(-2px); }
.wa-card__media { aspect-ratio: 16/9; overflow: hidden; display: block; flex-shrink: 0; background: var(--wa-bg-muted); }
.wa-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; display: block; }
.wa-card:hover .wa-card__media img { transform: scale(1.03); }
.wa-card__body { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; gap: .5rem; }
.wa-card__category { font-size: .75rem; font-weight: 600; letter-spacing: .07em; text-transform: uppercase; color: var(--wa-accent); text-decoration: none; }
.wa-card__category:hover { text-decoration: underline; }
.wa-card__title { font-size: 1.0625rem; font-weight: 700; line-height: 1.3; letter-spacing: -.02em; }
.wa-card__title a { color: var(--wa-text); text-decoration: none; }
.wa-card__title a:hover { color: var(--wa-accent); }
.wa-card__excerpt { font-size: .9rem; color: var(--wa-text-2); line-height: 1.6; flex: 1; }
.wa-card__meta { font-size: .8125rem; color: var(--wa-text-muted); margin-top: .25rem; }

/* SINGLE */
.wa-single { max-width: var(--wa-max-text); margin: 0 auto; padding: 4rem 2rem; }
.wa-single--wide { max-width: var(--wa-max); }
.wa-single__header { margin-bottom: 2.5rem; }
.wa-single__eyebrow { font-size: .8125rem; font-weight: 600; letter-spacing: .07em; text-transform: uppercase; color: var(--wa-accent); margin-bottom: 1rem; display: block; text-decoration: none; }
.wa-single__eyebrow:hover { text-decoration: underline; }
.wa-single__title { font-size: clamp(1.875rem, 4vw, 2.75rem); font-weight: 800; letter-spacing: -.04em; line-height: 1.1; color: var(--wa-text); margin-bottom: 1.25rem; }
.wa-single__meta { font-size: .875rem; color: var(--wa-text-muted); display: flex; gap: 1rem; flex-wrap: wrap; }
.wa-single__meta a { color: inherit; text-decoration: none; }
.wa-single__meta a:hover { color: var(--wa-accent); }
.wa-single__excerpt { font-size: 1.125rem; color: var(--wa-text-2); border-left: 3px solid var(--wa-accent); padding-left: 1.25rem; margin: 1.5rem 0 2.5rem; line-height: 1.7; letter-spacing: -.01em; }
.wa-single__hero { border-radius: var(--wa-radius-lg); overflow: hidden; margin-bottom: 3rem; aspect-ratio: 16/9; background: var(--wa-bg-muted); }
.wa-single__hero img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* PROSE */
.wa-prose h2 { font-size: 1.625rem; font-weight: 700; letter-spacing: -.025em; color: var(--wa-text); margin: 2.5rem 0 .875rem; line-height: 1.25; }
.wa-prose h3 { font-size: 1.25rem; font-weight: 700; letter-spacing: -.02em; color: var(--wa-text); margin: 2rem 0 .75rem; }
.wa-prose h4 { font-size: 1.0625rem; font-weight: 700; color: var(--wa-text); margin: 1.75rem 0 .625rem; }
.wa-prose p { margin-bottom: 1.375rem; line-height: 1.8; color: var(--wa-text-2); }
.wa-prose > p:first-child { color: var(--wa-text); font-size: 1.0625rem; }
.wa-prose ul, .wa-prose ol { padding-left: 1.625rem; margin-bottom: 1.375rem; }
.wa-prose li { margin-bottom: .5rem; line-height: 1.75; color: var(--wa-text-2); }
.wa-prose a { color: var(--wa-accent); text-underline-offset: 3px; }
.wa-prose a:hover { text-decoration: none; }
.wa-prose strong { font-weight: 700; color: var(--wa-text); }
.wa-prose code { font-family: ui-monospace, monospace; font-size: .875em; background: var(--wa-bg-muted); padding: .15em .4em; border-radius: 4px; }
.wa-prose pre { background: var(--wa-text); color: oklch(90% 0 0); padding: 1.5rem; border-radius: var(--wa-radius); overflow-x: auto; margin: 1.5rem 0; }
.wa-prose pre code { background: none; padding: 0; font-size: .875rem; }
.wa-prose img { max-width: 100%; border-radius: var(--wa-radius); margin: 1.5rem 0; display: block; }
.wa-prose blockquote { border-left: 3px solid var(--wa-accent); padding-left: 1.25rem; margin: 1.75rem 0; color: var(--wa-text-2); font-style: italic; }
.wa-prose hr { border: none; border-top: 1px solid var(--wa-border); margin: 2.5rem 0; }

/* TAGS */
.wa-tags { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--wa-border); list-style: none; }
.wa-tag { background: var(--wa-bg-subtle); color: var(--wa-text-2); padding: .3rem .875rem; border-radius: 100px; font-size: .8125rem; font-weight: 500; text-decoration: none; border: 1px solid var(--wa-border); display: inline-block; }
.wa-tag:hover { background: var(--wa-accent-light); color: var(--wa-accent); border-color: var(--wa-accent-light); }

/* ARCHIVE HEADER */
.wa-archive-header { padding: 4rem 0 3rem; border-bottom: 1px solid var(--wa-border); }
.wa-archive-header__eyebrow { font-size: .8125rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--wa-accent); margin-bottom: .875rem; display: block; }
.wa-archive-header__title { font-size: clamp(1.875rem, 4vw, 3rem); font-weight: 800; letter-spacing: -.04em; line-height: 1.1; color: var(--wa-text); }
.wa-archive-header__desc { margin-top: .875rem; font-size: 1.0625rem; color: var(--wa-text-2); max-width: 540px; line-height: 1.65; }

/* AUTHOR */
.wa-author-card { display: flex; align-items: flex-start; gap: 1.5rem; }
.wa-author-avatar { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; flex-shrink: 0; background: var(--wa-bg-muted); }
.wa-author-initials { width: 72px; height: 72px; border-radius: 50%; background: var(--wa-accent-light); color: var(--wa-accent); display: flex; align-items: center; justify-content: center; font-size: 1.375rem; font-weight: 700; flex-shrink: 0; }
.wa-author-name { font-size: 1.5rem; font-weight: 800; letter-spacing: -.03em; color: var(--wa-text); }
.wa-author-role { font-size: .9rem; color: var(--wa-text-muted); margin-top: .25rem; }
.wa-author-bio { margin-top: .75rem; color: var(--wa-text-2); line-height: 1.7; }

/* LINKS */
.wa-back { margin: 2.5rem 0 0; }
.wa-back a { color: var(--wa-text-2); font-size: .875rem; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: .375rem; }
.wa-back a:hover { color: var(--wa-accent); }
.wa-more { text-align: center; margin-top: 3rem; }
.wa-more a { display: inline-flex; align-items: center; gap: .375rem; color: var(--wa-accent); font-weight: 600; font-size: .9375rem; text-decoration: none; }
.wa-more a:hover { text-decoration: underline; text-underline-offset: 3px; }

/* 404 */
.wa-404 { text-align: center; padding: 8rem 2rem; }
.wa-404__num { font-size: clamp(6rem, 20vw, 10rem); font-weight: 900; letter-spacing: -.06em; color: var(--wa-text); opacity: .06; line-height: 1; }
.wa-404__title { font-size: 1.75rem; font-weight: 800; letter-spacing: -.03em; color: var(--wa-text); margin-top: -2.5rem; margin-bottom: 1rem; }
.wa-404__text { color: var(--wa-text-2); margin-bottom: 2.5rem; }

/* FOOTER */
.wa-footer { border-top: 1px solid var(--wa-border); padding: 3.5rem 0 2.5rem; margin-top: 4rem; }
.wa-footer__inner { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
.wa-footer__brand { font-weight: 800; font-size: 1.0625rem; letter-spacing: -.03em; color: var(--wa-text); margin-bottom: .75rem; display: flex; align-items: center; gap: .375rem; }
.wa-footer__tagline { font-size: .875rem; color: var(--wa-text-muted); line-height: 1.65; max-width: 280px; }
.wa-footer__col-title { font-size: .8125rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--wa-text-muted); margin-bottom: 1rem; }
.wa-footer nav ul { list-style: none; display: flex; flex-direction: column; gap: .5rem; }
.wa-footer nav a { color: var(--wa-text-2); text-decoration: none; font-size: .9rem; transition: color .15s; }
.wa-footer nav a:hover { color: var(--wa-accent); }
.wa-footer__bottom { border-top: 1px solid var(--wa-border); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.wa-footer__copy { font-size: .8125rem; color: var(--wa-text-muted); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .wa-footer__inner { grid-template-columns: 1fr 1fr; }
  .wa-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .wa-nav, .wa-header__cta { display: none; }
  .wa-burger { display: flex; }
  .wa-nav.is-open { display: block; position: absolute; top: var(--wa-header-h); left: 0; right: 0; background: var(--wa-bg); border-bottom: 1px solid var(--wa-border); padding: 1rem 1.25rem; }
  .wa-nav.is-open ul { flex-direction: column; gap: .25rem; }
  .wa-footer__inner { grid-template-columns: 1fr; gap: 2rem; }
  .wa-grid { grid-template-columns: 1fr; }
  .wa-hero { padding: 4rem 0 3.5rem; }
  .wa-author-card { flex-direction: column; }
  .wa-container { padding: 0 1.25rem; }
  .wa-single { padding: 3rem 1.25rem; }
}
`, Zn = `// Weggs Agency — runtime menu loader, uploaded as theme-assets/weggs-agency-menu.js.
// Refreshes [data-cms-menu="header|footer"] from data/menu.json (the
// admin rewrites it whenever menus, posts or categories change) and
// wires the mobile burger. Fails silently: the statically rendered
// menu stays in place.
(function () {
  "use strict";
  // Sites hosted in a sub-folder carry <meta name="x-cms-base" content="/repo/">.
  var meta = document.querySelector('meta[name="x-cms-base"]');
  var BASE = (meta && meta.getAttribute("content")) || "/";
  if (BASE.charAt(BASE.length - 1) !== "/") BASE += "/";
  function withBase(url) {
    if (!url || BASE === "/" || /^([a-z][a-z0-9+.-]*:|\\/\\/|#)/i.test(url) || url.indexOf(BASE) === 0) return url;
    return BASE + url.replace(/^\\//, "");
  }
  var here = location.pathname.replace(/\\/$/, "/index.html");

  function render(items) {
    var ul = document.createElement("ul");
    items.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = withBase(item.href);
      a.textContent = item.label;
      // Anchors ("/index.html#menu") are sections, not the current page.
      if (a.pathname === here && !a.hash) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      if (item.children && item.children.length) li.appendChild(render(item.children));
      ul.appendChild(li);
    });
    return ul;
  }

  function fill(menu) {
    ["header", "footer"].forEach(function (slot) {
      var host = document.querySelector('[data-cms-menu="' + slot + '"]');
      if (!host || !Array.isArray(menu[slot])) return;
      var old = host.querySelector("ul");
      var next = render(menu[slot]);
      if (old) host.replaceChild(next, old);
      else host.appendChild(next);
    });
  }

  function wireBurger() {
    var button = document.querySelector("[data-wa-burger]");
    var nav = document.getElementById("wa-nav");
    if (!button || !nav) return;
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
  }

  function start() {
    wireBurger();
    fetch(withBase("/data/menu.json"), { credentials: "omit" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(fill)
      .catch(function () {});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
`, Qn = `# Weggs Agency

Thème vitrine pour l'agence Weggs — clair, premium, éditorial

An AgentCMS theme. Install the ZIP from the admin: **Themes → Install theme**.

## Develop

\`\`\`bash
npm install
npm run build     # type-check, build dist/bundle.js, pack weggs-agency.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
\`\`\`

Bump \`version\` in \`manifest.json\`, \`src/manifest.tsx\` and \`package.json\` for each release: installing a newer ZIP upgrades the theme in place.
`;
function q(r, e) {
  const t = qn.getFixedT(Hn(e || r.settings.language || "en"), "theme-weggs-agency");
  return (n) => t(`public.${n}`);
}
function qt({ items: r, currentPath: e }) {
  return /* @__PURE__ */ h("ul", { children: r.map((t) => {
    const n = e !== void 0 && t.href === `/${e}`;
    return /* @__PURE__ */ v("li", { children: [
      /* @__PURE__ */ h("a", { href: t.href, "aria-current": n ? "page" : void 0, children: t.label }),
      t.children && t.children.length > 0 && /* @__PURE__ */ h(qt, { items: t.children, currentPath: e })
    ] }, t.id);
  }) });
}
function Xn({ site: r, currentPath: e, locale: t }) {
  const n = q(r, t), o = r.resolvedMenus.header[r.resolvedMenus.header.length - 1];
  return r.resolvedMenus.header.slice(0, -1), /* @__PURE__ */ h("header", { className: "wa-header", children: /* @__PURE__ */ v("div", { className: "wa-container wa-header__inner", children: [
    /* @__PURE__ */ v("a", { className: "wa-brand", href: r.homePath ?? "/index.html", children: [
      /* @__PURE__ */ h("span", { className: "wa-brand__dot", "aria-hidden": "true" }),
      r.settings.title
    ] }),
    /* @__PURE__ */ v("button", { className: "wa-burger", type: "button", "aria-expanded": "false", "aria-controls": "wa-nav", "data-wa-burger": !0, children: [
      /* @__PURE__ */ h("span", { className: "wa-sr-only", children: n("menu") }),
      /* @__PURE__ */ v("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ h("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        /* @__PURE__ */ h("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
        /* @__PURE__ */ h("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
      ] })
    ] }),
    /* @__PURE__ */ h("nav", { id: "wa-nav", className: "wa-nav", "aria-label": n("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ h(qt, { items: r.resolvedMenus.header, currentPath: e }) }),
    o && /* @__PURE__ */ h("a", { className: "wa-header__cta", href: o.href, children: o.label }),
    /* @__PURE__ */ h("div", { "data-cms-langswitch": "header" })
  ] }) });
}
function er({ site: r, locale: e }) {
  const t = q(r, e), n = (/* @__PURE__ */ new Date()).getFullYear(), i = r.resolvedMenus.header, o = r.resolvedMenus.footer;
  return /* @__PURE__ */ h("footer", { className: "wa-footer", children: /* @__PURE__ */ v("div", { className: "wa-container", children: [
    /* @__PURE__ */ v("div", { className: "wa-footer__inner", children: [
      /* @__PURE__ */ v("div", { children: [
        /* @__PURE__ */ v("div", { className: "wa-footer__brand", children: [
          /* @__PURE__ */ h("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--wa-accent)", display: "inline-block", flexShrink: 0 }, "aria-hidden": "true" }),
          r.settings.title
        ] }),
        r.settings.description && /* @__PURE__ */ h("p", { className: "wa-footer__tagline", children: r.settings.description })
      ] }),
      /* @__PURE__ */ v("div", { children: [
        /* @__PURE__ */ h("p", { className: "wa-footer__col-title", children: t("mainNav") }),
        /* @__PURE__ */ h("nav", { "aria-label": t("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ h("ul", { children: i.map((s) => /* @__PURE__ */ h("li", { children: /* @__PURE__ */ h("a", { href: s.href, children: s.label }) }, s.id)) }) })
      ] }),
      /* @__PURE__ */ v("div", { children: [
        o.length > 0 && /* @__PURE__ */ v(De, { children: [
          /* @__PURE__ */ h("p", { className: "wa-footer__col-title", children: t("footerNav") }),
          /* @__PURE__ */ h("nav", { "aria-label": t("footerNav"), "data-cms-menu": "footer", children: /* @__PURE__ */ h("ul", { children: o.map((s) => /* @__PURE__ */ h("li", { children: /* @__PURE__ */ h("a", { href: s.href, children: s.label }) }, s.id)) }) })
        ] }),
        /* @__PURE__ */ h("div", { "data-cms-langswitch": "footer" })
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "wa-footer__bottom", children: /* @__PURE__ */ v("p", { className: "wa-footer__copy", children: [
      "© ",
      n,
      " ",
      r.settings.title
    ] }) })
  ] }) });
}
function tr({ site: r, pageTitle: e, pageDescription: t, ogImage: n, currentPath: i, currentLocale: o, children: s }) {
  const a = o || r.settings.language || "fr", l = r.settings.title || "", c = e ? e.includes(l) ? e : `${e} — ${l}` : l, f = r.settings.baseUrl && i ? Un(r.settings.baseUrl, i) : void 0;
  return /* @__PURE__ */ v("html", { lang: a, children: [
    /* @__PURE__ */ v("head", { children: [
      /* @__PURE__ */ h("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ h("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ h("title", { children: c }),
      t && /* @__PURE__ */ h("meta", { name: "description", content: t }),
      f && /* @__PURE__ */ h("link", { rel: "canonical", href: f }),
      /* @__PURE__ */ h("meta", { property: "og:title", content: c }),
      t && /* @__PURE__ */ h("meta", { property: "og:description", content: t }),
      n && /* @__PURE__ */ h("meta", { property: "og:image", content: n }),
      f && /* @__PURE__ */ h("meta", { property: "og:url", content: f }),
      /* @__PURE__ */ h("link", { rel: "stylesheet", href: `/${r.themeCssPath}` }),
      /* @__PURE__ */ h("script", { src: "/theme-assets/weggs-agency-menu.js", defer: !0 }),
      /* @__PURE__ */ h("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ v("body", { className: "weggs-agency", children: [
      /* @__PURE__ */ h(Xn, { site: r, currentPath: i, locale: a }),
      /* @__PURE__ */ h("main", { children: s }),
      /* @__PURE__ */ h(er, { site: r, locale: a }),
      /* @__PURE__ */ h("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
function nr({ post: r }) {
  var t;
  const e = rt(r.hero, "medium");
  return /* @__PURE__ */ v("article", { className: "wa-card", children: [
    e && /* @__PURE__ */ h("a", { href: `/${r.url}`, className: "wa-card__media", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ h("img", { src: e, alt: ((t = r.hero) == null ? void 0 : t.alt) ?? "", loading: "lazy" }) }),
    /* @__PURE__ */ v("div", { className: "wa-card__body", children: [
      r.category && /* @__PURE__ */ h("a", { className: "wa-card__category", href: r.category.url, children: r.category.name }),
      /* @__PURE__ */ h("h2", { className: "wa-card__title", children: /* @__PURE__ */ h("a", { href: `/${r.url}`, children: r.title }) }),
      r.excerpt && /* @__PURE__ */ h("p", { className: "wa-card__excerpt", children: r.excerpt }),
      r.dateLabel && /* @__PURE__ */ h("p", { className: "wa-card__meta", children: r.dateLabel })
    ] })
  ] });
}
function it({ posts: r, site: e }) {
  return r.length === 0 ? /* @__PURE__ */ h("p", { className: "wa-muted", children: q(e)("empty") }) : /* @__PURE__ */ h("div", { className: "wa-grid", children: r.map((t) => /* @__PURE__ */ h(nr, { post: t }, t.id)) });
}
function rr({ site: r, posts: e, staticPage: t, archivesLink: n }) {
  const i = q(r), o = r.themeConfig ?? {};
  if (t)
    return /* @__PURE__ */ h("div", { className: "wa-single wa-single--wide wa-prose", dangerouslySetInnerHTML: { __html: t.bodyHtml } });
  const s = o.heroTagline || r.settings.description || "", a = o.heroSubline || "", l = o.heroCtaLabel || i("allProjects"), c = o.heroCtaHref || "#";
  return /* @__PURE__ */ v(De, { children: [
    /* @__PURE__ */ h("section", { className: "wa-hero", children: /* @__PURE__ */ v("div", { className: "wa-container", children: [
      /* @__PURE__ */ h("div", { className: "wa-hero__eyebrow", children: r.settings.title }),
      /* @__PURE__ */ h("h1", { className: "wa-hero__title", children: s || r.settings.title }),
      a && /* @__PURE__ */ h("p", { className: "wa-hero__sub", children: a }),
      /* @__PURE__ */ h("div", { className: "wa-hero__actions", children: /* @__PURE__ */ h("a", { href: c, className: "wa-btn wa-btn--primary", children: l }) })
    ] }) }),
    /* @__PURE__ */ h("section", { className: "wa-section wa-section--border", children: /* @__PURE__ */ v("div", { className: "wa-container", children: [
      /* @__PURE__ */ v("div", { className: "wa-section__header", children: [
        /* @__PURE__ */ h("span", { className: "wa-section__eyebrow", children: i("latestWork") }),
        /* @__PURE__ */ h("h2", { className: "wa-section__title", children: i("latestWork") })
      ] }),
      /* @__PURE__ */ h(it, { posts: e, site: r }),
      n && /* @__PURE__ */ h("p", { className: "wa-more", children: /* @__PURE__ */ h("a", { href: n.href, children: n.label }) })
    ] }) })
  ] });
}
function ir({ site: r, post: e, bodyHtml: t, author: n, hero: i, primaryTerm: o, tags: s }) {
  const a = q(r), l = e.type === "post", c = rt(i, "large"), f = new Date(Gn(e));
  let u = "";
  try {
    u = new Intl.DateTimeFormat(r.settings.language || "fr", { dateStyle: "long" }).format(f);
  } catch {
    u = f.toDateString();
  }
  return /* @__PURE__ */ v("article", { className: l ? "wa-single" : "wa-single wa-single--wide", children: [
    /* @__PURE__ */ v("header", { className: "wa-single__header", children: [
      l && o && /* @__PURE__ */ h("a", { className: "wa-single__eyebrow", href: `/${Kn(o)}`, children: o.name }),
      /* @__PURE__ */ h("h1", { className: "wa-single__title", children: e.title }),
      l && /* @__PURE__ */ v("p", { className: "wa-single__meta", children: [
        n && /* @__PURE__ */ v("span", { children: [
          a("by"),
          " ",
          n.url ? /* @__PURE__ */ h("a", { href: n.url, children: n.displayName }) : n.displayName
        ] }),
        /* @__PURE__ */ h("time", { dateTime: f.toISOString(), children: u })
      ] }),
      e.excerpt && /* @__PURE__ */ h("p", { className: "wa-single__excerpt", children: e.excerpt })
    ] }),
    c && /* @__PURE__ */ h("div", { className: "wa-single__hero", children: /* @__PURE__ */ h("img", { src: c, alt: (i == null ? void 0 : i.alt) ?? "" }) }),
    /* @__PURE__ */ h("div", { className: "wa-prose", dangerouslySetInnerHTML: { __html: t } }),
    l && s.length > 0 && /* @__PURE__ */ h("ul", { className: "wa-tags", children: s.map((d) => /* @__PURE__ */ h("li", { children: /* @__PURE__ */ v("span", { className: "wa-tag", children: [
      "#",
      d.name
    ] }) }, d.id)) }),
    /* @__PURE__ */ h("p", { className: "wa-back", children: /* @__PURE__ */ v("a", { href: r.homePath ?? "/index.html", children: [
      "← ",
      a("backHome")
    ] }) })
  ] });
}
function or({ site: r, term: e, posts: t, archivesLink: n }) {
  const i = q(r);
  return /* @__PURE__ */ v(De, { children: [
    /* @__PURE__ */ h("div", { className: "wa-archive-header", children: /* @__PURE__ */ v("div", { className: "wa-container", children: [
      /* @__PURE__ */ h("span", { className: "wa-archive-header__eyebrow", children: i("postedIn") }),
      /* @__PURE__ */ h("h1", { className: "wa-archive-header__title", children: e.name }),
      e.description && /* @__PURE__ */ h("p", { className: "wa-archive-header__desc", children: e.description })
    ] }) }),
    /* @__PURE__ */ h("section", { className: "wa-section", children: /* @__PURE__ */ v("div", { className: "wa-container", children: [
      /* @__PURE__ */ h(it, { posts: t, site: r }),
      n && /* @__PURE__ */ h("p", { className: "wa-more", children: /* @__PURE__ */ h("a", { href: n.href, children: n.label }) })
    ] }) })
  ] });
}
function sr({ site: r, author: e, posts: t }) {
  q(r);
  const n = rt(e.avatar, "small"), i = e.displayName.split(" ").map((o) => o[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ v(De, { children: [
    /* @__PURE__ */ h("div", { className: "wa-archive-header", children: /* @__PURE__ */ h("div", { className: "wa-container", children: /* @__PURE__ */ v("div", { className: "wa-author-card", children: [
      n ? /* @__PURE__ */ h("img", { className: "wa-author-avatar", src: n, alt: "", width: 72, height: 72 }) : /* @__PURE__ */ h("div", { className: "wa-author-initials", "aria-hidden": "true", children: i }),
      /* @__PURE__ */ v("div", { children: [
        /* @__PURE__ */ h("h1", { className: "wa-author-name", children: e.displayName }),
        e.title && /* @__PURE__ */ h("p", { className: "wa-author-role", children: e.title }),
        e.bio && /* @__PURE__ */ h("p", { className: "wa-author-bio", children: e.bio })
      ] })
    ] }) }) }),
    /* @__PURE__ */ h("section", { className: "wa-section", children: /* @__PURE__ */ h("div", { className: "wa-container", children: /* @__PURE__ */ h(it, { posts: t, site: r }) }) })
  ] });
}
function ar({ site: r, message: e }) {
  const t = q(r);
  return /* @__PURE__ */ v("div", { className: "wa-container wa-404", children: [
    /* @__PURE__ */ h("div", { className: "wa-404__num", "aria-hidden": "true", children: "404" }),
    /* @__PURE__ */ h("h1", { className: "wa-404__title", children: t("notFoundTitle") }),
    /* @__PURE__ */ h("p", { className: "wa-404__text", children: e ?? t("notFoundText") }),
    /* @__PURE__ */ h("p", { className: "wa-more", children: /* @__PURE__ */ v("a", { href: r.homePath ?? "/index.html", children: [
      "← ",
      t("backHome")
    ] }) })
  ] });
}
const le = {
  accentColor: "#3730a3",
  heroTagline: "Nous concevons des expériences digitales qui comptent.",
  heroSubline: "Agence web indépendante — design, développement et stratégie.",
  heroCtaLabel: "Voir nos projets",
  heroCtaHref: "/projets/index.html"
}, lr = {
  accentColor: { description: "Couleur d'accent principale (liens, boutons, highlights).", format: "hex color" },
  heroTagline: { description: "Grande phrase d'accroche sur la home." },
  heroSubline: { description: "Sous-titre sous l'accroche." },
  heroCtaLabel: { description: "Label du bouton principal de la home." },
  heroCtaHref: { description: "Lien du bouton principal de la home.", format: "URL or site path" }
}, cr = (r) => /^#[0-9a-f]{3,8}$/i.test(r) ? r : le.accentColor;
function fr(r, e) {
  const t = { ...le, ...e ?? {} };
  if (t.accentColor === le.accentColor) return r;
  const n = cr(t.accentColor);
  return `${r}
:root{--wa-accent:${n}}
`;
}
function ur({ config: r, save: e }) {
  const { t } = Vt("theme-weggs-agency"), [n, i] = Ye({ ...le, ...r }), [o, s] = Ye(!1);
  Wt(() => i({ ...le, ...r }), [r]);
  function a(c, f) {
    i((u) => ({ ...u, [c]: f }));
  }
  async function l(c) {
    c.preventDefault(), s(!0);
    try {
      await e(n), Yn.success(t("settings.saved"));
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ v("form", { onSubmit: l, "data-form-type": "other", className: "max-w-2xl space-y-4", children: [
    /* @__PURE__ */ h("h1", { className: "text-xl font-semibold", children: t("settings.title") }),
    /* @__PURE__ */ v("div", { className: "space-y-1", children: [
      /* @__PURE__ */ h("label", { className: "label", htmlFor: "wa-accent", children: t("settings.accentColor") }),
      /* @__PURE__ */ v("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ h(
          "input",
          {
            id: "wa-accent",
            type: "color",
            value: n.accentColor,
            onChange: (c) => a("accentColor", c.target.value)
          }
        ),
        /* @__PURE__ */ h(
          "input",
          {
            type: "text",
            className: "input",
            value: n.accentColor,
            onChange: (c) => a("accentColor", c.target.value),
            style: { width: "130px" }
          }
        )
      ] })
    ] }),
    ["heroTagline", "heroSubline", "heroCtaLabel", "heroCtaHref"].map((c) => /* @__PURE__ */ v("div", { className: "space-y-1", children: [
      /* @__PURE__ */ h("label", { className: "label", htmlFor: `wa-${c}`, children: t(`settings.${c}`) }),
      /* @__PURE__ */ h(
        "input",
        {
          id: `wa-${c}`,
          type: "text",
          className: "input w-full",
          value: n[c] ?? "",
          onChange: (f) => a(c, f.target.value)
        }
      )
    ] }, c)),
    /* @__PURE__ */ h("button", { type: "submit", className: "btn btn-primary", disabled: o, children: /* @__PURE__ */ h("span", { children: o ? "…" : t("settings.save") }) })
  ] });
}
const hr = {
  en: {
    public: {
      menu: "Menu",
      mainNav: "Main navigation",
      footerNav: "Footer",
      backHome: "Back to home",
      notFoundTitle: "Page not found",
      notFoundText: "The page you are looking for does not exist or has been moved.",
      by: "By",
      postedIn: "In",
      readMore: "Read more",
      latestWork: "Latest work",
      allProjects: "All projects",
      empty: "Nothing here yet."
    },
    callout: { title: "Callout", tone: "Tone", text: "Text", info: "Info", warning: "Warning", success: "Success" },
    settings: {
      navLabel: "Weggs Agency",
      title: "Weggs Agency settings",
      accentColor: "Accent color",
      heroTagline: "Hero tagline",
      heroSubline: "Hero sub-line",
      heroCtaLabel: "CTA button label",
      heroCtaHref: "CTA button link",
      save: "Save",
      saved: "Saved."
    }
  },
  fr: {
    public: {
      menu: "Menu",
      mainNav: "Navigation principale",
      footerNav: "Pied de page",
      backHome: "Retour à l'accueil",
      notFoundTitle: "Page introuvable",
      notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée.",
      by: "Par",
      postedIn: "Dans",
      readMore: "Lire",
      latestWork: "Derniers projets",
      allProjects: "Tous les projets",
      empty: "Rien ici pour le moment."
    },
    callout: { title: "Encadré", tone: "Ton", text: "Texte", info: "Info", warning: "Attention", success: "Succès" },
    settings: {
      navLabel: "Weggs Agency",
      title: "Réglages Weggs Agency",
      accentColor: "Couleur d'accent",
      heroTagline: "Accroche principale",
      heroSubline: "Sous-titre",
      heroCtaLabel: "Label du bouton CTA",
      heroCtaHref: "Lien du bouton CTA",
      save: "Enregistrer",
      saved: "Enregistré."
    }
  }
};
function I(r) {
  this.content = r;
}
I.prototype = {
  constructor: I,
  find: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === r) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(r) {
    var e = this.find(r);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(r, e, t) {
    var n = t && t != r ? this.remove(t) : this, i = n.find(r), o = n.content.slice();
    return i == -1 ? o.push(t || r, e) : (o[i + 1] = e, t && (o[i] = t)), new I(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(r) {
    var e = this.find(r);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new I(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(r, e) {
    return new I([r, e].concat(this.remove(r).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(r, e) {
    var t = this.remove(r).content.slice();
    return t.push(r, e), new I(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(r, e, t) {
    var n = this.remove(e), i = n.content.slice(), o = n.find(r);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new I(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      r(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(r) {
    return r = I.from(r), r.size ? new I(r.content.concat(this.subtract(r).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(r) {
    return r = I.from(r), r.size ? new I(this.subtract(r).content.concat(r.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(r) {
    var e = this;
    r = I.from(r);
    for (var t = 0; t < r.content.length; t += 2)
      e = e.remove(r.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var r = {};
    return this.forEach(function(e, t) {
      r[e] = t;
    }), r;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
I.from = function(r) {
  if (r instanceof I) return r;
  var e = [];
  if (r) for (var t in r) e.push(t, r[t]);
  return new I(e);
};
function Ht(r, e, t) {
  for (let n = 0; ; n++) {
    if (n == r.childCount || n == e.childCount)
      return r.childCount == e.childCount ? null : t;
    let i = r.child(n), o = e.child(n);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      let s = i.text, a = o.text, l = 0;
      for (; s[l] == a[l]; l++)
        t++;
      return l && l < s.length && l < a.length && Kt(s.charCodeAt(l - 1)) && Gt(s.charCodeAt(l)) && t--, t;
    }
    if (i.content.size || o.content.size) {
      let s = Ht(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function Ut(r, e, t, n) {
  for (let i = r.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: n };
    let s = r.child(--i), a = e.child(--o), l = s.nodeSize;
    if (s == a) {
      t -= l, n -= l;
      continue;
    }
    if (!s.sameMarkup(a))
      return { a: t, b: n };
    if (s.isText && s.text != a.text) {
      let c = s.text, f = a.text, u = c.length, d = f.length;
      for (; u > 0 && d > 0 && c[u - 1] == f[d - 1]; )
        u--, d--, t--, n--;
      return u && d && u < c.length && Kt(c.charCodeAt(u - 1)) && Gt(c.charCodeAt(u)) && (t++, n++), { a: t, b: n };
    }
    if (s.content.size || a.content.size) {
      let c = Ut(s.content, a.content, t - 1, n - 1);
      if (c)
        return c;
    }
    t -= l, n -= l;
  }
}
function Gt(r) {
  return r >= 56320 && r < 57344;
}
function Kt(r) {
  return r >= 55296 && r < 56320;
}
class g {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let n = 0; n < e.length; n++)
        this.size += e[n].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, n, i = 0, o) {
    for (let s = 0, a = 0; a < t; s++) {
      let l = this.content[s], c = a + l.nodeSize;
      if (c > e && n(l, i + a, o || null, s) !== !1 && l.content.size) {
        let f = a + 1;
        l.nodesBetween(Math.max(0, e - f), Math.min(l.content.size, t - f), n, i + f);
      }
      a = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, n, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (a, l) => {
      let c = a.isText ? a.text.slice(Math.max(e, l) - l, t - l) : a.isLeaf ? i ? typeof i == "function" ? i(a) : i : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
      a.isBlock && (a.isLeaf && c || a.isTextblock) && n && (s ? s = !1 : o += n), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, n = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(n) && (i[i.length - 1] = t.withText(t.text + n.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new g(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let n = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let a = this.content[o], l = s + a.nodeSize;
        l > e && ((s < e || l > t) && (a.isText ? a = a.cut(Math.max(0, e - s), Math.min(a.text.length, t - s)) : a = a.cut(Math.max(0, e - s - 1), Math.min(a.content.size, t - s - 1))), n.push(a), i += a.nodeSize), s = l;
      }
    return new g(n, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? g.empty : e == 0 && t == this.content.length ? this : new g(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let n = this.content[e];
    if (n == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - n.nodeSize;
    return i[e] = t, new g(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new g([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new g(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, n = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, n, t), n += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Ht(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, n = e.size) {
    return Ut(this, e, t, n);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Ce(0, e);
    if (e == this.size)
      return Ce(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, n = 0; ; t++) {
      let i = this.child(t), o = n + i.nodeSize;
      if (o >= e)
        return o == e ? Ce(t + 1, o) : Ce(t, n);
      n = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return g.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return g.fromArray(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return g.empty;
    let t, n = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      n += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new g(t || e, n);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return g.empty;
    if (e instanceof g)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new g([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
g.empty = new g([], 0);
const We = { index: 0, offset: 0 };
function Ce(r, e) {
  return We.index = r, We.offset = e, We;
}
function Oe(r, e) {
  if (r === e)
    return !0;
  if (!(r && typeof r == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(r);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (r.length != e.length)
      return !1;
    for (let n = 0; n < r.length; n++)
      if (!Oe(r[n], e[n]))
        return !1;
  } else {
    for (let n in r)
      if (!(n in e) || !Oe(r[n], e[n]))
        return !1;
    for (let n in e)
      if (!(n in r))
        return !1;
  }
  return !0;
}
class S {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, n = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !n && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), n = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), n || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Oe(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let n = e.marks[t.type];
    if (!n)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return n.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (!e[n].eq(t[n]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return S.none;
    if (e instanceof S)
      return [e];
    let t = e.slice();
    return t.sort((n, i) => n.type.rank - i.type.rank), t;
  }
}
S.none = [];
class we extends Error {
}
class x {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, n) {
    this.content = e, this.openStart = t, this.openEnd = n;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let n = Zt(this.content, e + this.openStart, t, this.openStart + 1, this.openEnd + 1);
    return n && new x(n, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new x(Yt(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return x.empty;
    let n = t.openStart || 0, i = t.openEnd || 0;
    if (typeof n != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new x(g.fromJSON(e, t.content), n, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let n = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      n++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new x(e, n, i);
  }
}
x.empty = new x(g.empty, 0, 0);
function Yt(r, e, t) {
  let { index: n, offset: i } = r.findIndex(e), o = r.maybeChild(n), { index: s, offset: a } = r.findIndex(t);
  if (i == e || o.isText) {
    if (a != t && !r.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return r.cut(0, e).append(r.cut(t));
  }
  if (n != s)
    throw new RangeError("Removing non-flat range");
  return r.replaceChild(n, o.copy(Yt(o.content, e - i - 1, t - i - 1)));
}
function Zt(r, e, t, n, i, o) {
  let { index: s, offset: a } = r.findIndex(e), l = r.maybeChild(s);
  if (a == e || l.isText)
    return o && n <= 0 && i <= 0 && !o.canReplace(s, s, t) ? null : r.cut(0, e).append(t).append(r.cut(e));
  let c = Zt(l.content, e - a - 1, t, s == 0 ? n - 1 : 0, s == r.childCount - 1 ? i - 1 : 0, l);
  return c && r.replaceChild(s, l.copy(c));
}
function dr(r, e, t) {
  if (t.openStart > r.depth)
    throw new we("Inserted content deeper than insertion position");
  if (r.depth - t.openStart != e.depth - t.openEnd)
    throw new we("Inconsistent open depths");
  return Qt(r, e, t, 0);
}
function Qt(r, e, t, n) {
  let i = r.index(n), o = r.node(n);
  if (i == e.index(n) && n < r.depth - t.openStart) {
    let s = Qt(r, e, t, n + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && r.depth == n && e.depth == n) {
      let s = r.parent, a = s.content;
      return Z(s, a.cut(0, r.parentOffset).append(t.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: s, end: a } = pr(t, r);
      return Z(o, en(r, s, a, e, n));
    }
  else return Z(o, ze(r, e, n));
}
function Xt(r, e) {
  if (!e.type.compatibleContent(r.type))
    throw new we("Cannot join " + e.type.name + " onto " + r.type.name);
}
function Ze(r, e, t) {
  let n = r.node(t);
  return Xt(n, e.node(t)), n;
}
function Y(r, e) {
  let t = e.length - 1;
  t >= 0 && r.isText && r.sameMarkup(e[t]) ? e[t] = r.withText(e[t].text + r.text) : e.push(r);
}
function de(r, e, t, n) {
  let i = (e || r).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  r && (o = r.index(t), r.depth > t ? o++ : r.textOffset && (Y(r.nodeAfter, n), o++));
  for (let a = o; a < s; a++)
    Y(i.child(a), n);
  e && e.depth == t && e.textOffset && Y(e.nodeBefore, n);
}
function Z(r, e) {
  if (!r.type.validContent(e))
    throw new we("Invalid content for node " + r.type.name);
  return r.copy(e);
}
function en(r, e, t, n, i) {
  let o = r.depth > i && Ze(r, e, i + 1), s = n.depth > i && Ze(t, n, i + 1), a = [];
  return de(null, r, i, a), o && s && e.index(i) == t.index(i) ? (Xt(o, s), Y(Z(o, en(r, e, t, n, i + 1)), a)) : (o && Y(Z(o, ze(r, e, i + 1)), a), de(e, t, i, a), s && Y(Z(s, ze(t, n, i + 1)), a)), de(n, null, i, a), new g(a);
}
function ze(r, e, t) {
  let n = [];
  if (de(null, r, t, n), r.depth > t) {
    let i = Ze(r, e, t + 1);
    Y(Z(i, ze(r, e, t + 1)), n);
  }
  return de(e, null, t, n), new g(n);
}
function pr(r, e) {
  let t = e.depth - r.openStart, i = e.node(t).copy(r.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(g.from(i));
  return {
    start: i.resolveNoCache(r.openStart + t),
    end: i.resolveNoCache(i.content.size - r.openEnd - t)
  };
}
class ye {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let n = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return n ? e.child(t).cut(n) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let n = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += n.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return S.none;
    if (this.textOffset)
      return e.child(t).marks;
    let n = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!n) {
      let a = n;
      n = i, i = a;
    }
    let o = n.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let n = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < n.length; o++)
      n[o].type.spec.inclusive === !1 && (!i || !n[o].isInSet(i.marks)) && (n = n[o--].removeFromSet(n));
    return n;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
      if (e.pos <= this.end(n) && (!t || t(this.node(n))))
        return new Re(this, e, n);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let n = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: a, offset: l } = s.content.findIndex(o), c = o - l;
      if (n.push(s, a, i + l), !c || (s = s.child(a), s.isText))
        break;
      o = c - 1, i += l + 1;
    }
    return new ye(t, n, o);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let n = xt.get(e);
    if (n)
      for (let o = 0; o < n.elts.length; o++) {
        let s = n.elts[o];
        if (s.pos == t)
          return s;
      }
    else
      xt.set(e, n = new mr());
    let i = n.elts[n.i] = ye.resolve(e, t);
    return n.i = (n.i + 1) % gr, i;
  }
}
class mr {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const gr = 12, xt = /* @__PURE__ */ new WeakMap();
class Re {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.depth = n;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const wr = /* @__PURE__ */ Object.create(null);
let Q = class Qe {
  /**
  @internal
  */
  constructor(e, t, n, i = S.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = n || g.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively overlapping
  the given two positions that are relative to start of this
  node's content. This includes all ancestors of the nodes
  containing the two positions. The callback is invoked with the
  node, its position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, n, i = 0) {
    this.content.nodesBetween(e, t, n, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, n, i) {
    return this.content.textBetween(e, t, n, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, n) {
    return this.type == e && Oe(this.attrs, t || e.defaultAttrs || wr) && S.sameSet(this.marks, n || S.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Qe(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Qe(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, n = !1) {
    if (e == t)
      return x.empty;
    let i = this.resolve(e), o = this.resolve(t), s = n ? 0 : i.sharedDepth(t), a = i.start(s), c = i.node(s).content.cut(i.pos - a, o.pos - a);
    return new x(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, n) {
    return dr(this.resolve(e), this.resolve(t), n);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: n, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(n), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: n } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: n };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: n } = this.content.findIndex(e);
    if (n < e)
      return { node: this.content.child(t), index: t, offset: n };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: n - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return ye.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return ye.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, n) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (n.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), tn(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, n = g.empty, i = 0, o = n.childCount) {
    let s = this.contentMatchAt(e).matchFragment(n, i, o), a = s && s.matchFragment(this.content, t);
    if (!a || !a.validEnd)
      return !1;
    for (let l = i; l < o; l++)
      if (!this.type.allowsMarks(n.child(l).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, n, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(n), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), bt(this.type.attrs, this.attrs, "node", this.type.name);
    let e = S.none;
    for (let t = 0; t < this.marks.length; t++) {
      let n = this.marks[t];
      bt(n.type.attrs, n.attrs, "mark", n.type.name), e = n.addToSet(e);
    }
    if (!S.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let n;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      n = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, n);
    }
    let i = g.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, n);
  }
};
Q.prototype.text = void 0;
class Be extends Q {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    if (super(e, t, null, i), !n)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : tn(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Be(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Be(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function tn(r, e) {
  for (let t = r.length - 1; t >= 0; t--)
    e = r[t].type.name + "(" + e + ")";
  return e;
}
function bt(r, e, t, n) {
  for (let i in e)
    if (!(i in r))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${n}`);
  for (let i in r)
    r[i].validate && r[i].validate(e[i]);
}
class te {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let n = new yr(e, t);
    if (n.next == null)
      return te.empty;
    let i = nn(n);
    n.next && n.err("Unexpected trailing text");
    let o = Nr(Cr(i));
    return Er(o, n), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, n = e.childCount) {
    let i = this;
    for (let o = t; i && o < n; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let n = 0; n < e.next.length; n++)
        if (this.next[t].type == e.next[n].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, n = 0) {
    let i = [this];
    function o(s, a) {
      let l = s.matchFragment(e, n);
      if (l && (!t || l.validEnd))
        return g.from(a.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: f, next: u } = s.next[c];
        if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let d = o(u, a.concat(f));
          if (d)
            return d;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let n = 0; n < this.wrapCache.length; n += 2)
      if (this.wrapCache[n] == e)
        return this.wrapCache[n + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), n = [{ match: this, type: null, via: null }];
    for (; n.length; ) {
      let i = n.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let a = i; a.type; a = a.via)
          s.push(a.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: a, next: l } = o.next[s];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in t) && (!i.type || l.validEnd) && (n.push({ match: a.contentMatch, type: a, via: i }), t[a.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(n) {
      e.push(n);
      for (let i = 0; i < n.next.length; i++)
        e.indexOf(n.next[i].next) == -1 && t(n.next[i].next);
    }
    return t(this), e.map((n, i) => {
      let o = i + (n.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < n.next.length; s++)
        o += (s ? ", " : "") + n.next[s].type.name + "->" + e.indexOf(n.next[s].next);
      return o;
    }).join(`
`);
  }
}
te.empty = new te(!0);
class yr {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function nn(r) {
  let e = [];
  do
    e.push(xr(r));
  while (r.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function xr(r) {
  let e = [];
  do
    e.push(br(r));
  while (r.next && r.next != ")" && r.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function br(r) {
  let e = Sr(r);
  for (; ; )
    if (r.eat("+"))
      e = { type: "plus", expr: e };
    else if (r.eat("*"))
      e = { type: "star", expr: e };
    else if (r.eat("?"))
      e = { type: "opt", expr: e };
    else if (r.eat("{"))
      e = vr(r, e);
    else
      break;
  return e;
}
function vt(r) {
  /\D/.test(r.next) && r.err("Expected number, got '" + r.next + "'");
  let e = Number(r.next);
  return r.pos++, e;
}
function vr(r, e) {
  let t = vt(r), n = t;
  return r.eat(",") && (r.next != "}" ? n = vt(r) : n = -1), r.eat("}") || r.err("Unclosed braced range"), { type: "range", min: t, max: n, expr: e };
}
function kr(r, e) {
  let t = r.nodeTypes, n = t[e];
  if (n)
    return [n];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && r.err("No node type or group '" + e + "' found"), i;
}
function Sr(r) {
  if (r.eat("(")) {
    let e = nn(r);
    return r.eat(")") || r.err("Missing closing paren"), e;
  } else if (/\W/.test(r.next))
    r.err("Unexpected token '" + r.next + "'");
  else {
    let e = kr(r, r.next).map((t) => (r.inline == null ? r.inline = t.isInline : r.inline != t.isInline && r.err("Mixing inline and block content"), { type: "name", value: t }));
    return r.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Cr(r) {
  let e = [[]];
  return i(o(r, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function n(s, a, l) {
    let c = { term: l, to: a };
    return e[s].push(c), c;
  }
  function i(s, a) {
    s.forEach((l) => l.to = a);
  }
  function o(s, a) {
    if (s.type == "choice")
      return s.exprs.reduce((l, c) => l.concat(o(c, a)), []);
    if (s.type == "seq")
      for (let l = 0; ; l++) {
        let c = o(s.exprs[l], a);
        if (l == s.exprs.length - 1)
          return c;
        i(c, a = t());
      }
    else if (s.type == "star") {
      let l = t();
      return n(a, l), i(o(s.expr, l), l), [n(l)];
    } else if (s.type == "plus") {
      let l = t();
      return i(o(s.expr, a), l), i(o(s.expr, l), l), [n(l)];
    } else {
      if (s.type == "opt")
        return [n(a)].concat(o(s.expr, a));
      if (s.type == "range") {
        let l = a;
        for (let c = 0; c < s.min; c++) {
          let f = t();
          i(o(s.expr, l), f), l = f;
        }
        if (s.max == -1)
          i(o(s.expr, l), l);
        else
          for (let c = s.min; c < s.max; c++) {
            let f = t();
            n(l, f), i(o(s.expr, l), f), l = f;
          }
        return [n(l)];
      } else {
        if (s.type == "name")
          return [n(a, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function rn(r, e) {
  return e - r;
}
function kt(r, e) {
  let t = [];
  return n(e), t.sort(rn);
  function n(i) {
    let o = r[i];
    if (o.length == 1 && !o[0].term)
      return n(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: a, to: l } = o[s];
      !a && t.indexOf(l) == -1 && n(l);
    }
  }
}
function Nr(r) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(kt(r, 0));
  function t(n) {
    let i = [];
    n.forEach((s) => {
      r[s].forEach(({ term: a, to: l }) => {
        if (!a)
          return;
        let c;
        for (let f = 0; f < i.length; f++)
          i[f][0] == a && (c = i[f][1]);
        kt(r, l).forEach((f) => {
          c || i.push([a, c = []]), c.indexOf(f) == -1 && c.push(f);
        });
      });
    });
    let o = e[n.join(",")] = new te(n.indexOf(r.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let a = i[s][1].sort(rn);
      o.next.push({ type: i[s][0], next: e[a.join(",")] || t(a) });
    }
    return o;
  }
}
function Er(r, e) {
  for (let t = 0, n = [r]; t < n.length; t++) {
    let i = n[t], o = !i.validEnd, s = [];
    for (let a = 0; a < i.next.length; a++) {
      let { type: l, next: c } = i.next[a];
      s.push(l.name), o && !(l.isText || l.hasRequiredAttrs()) && (o = !1), n.indexOf(c) == -1 && n.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function on(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in r) {
    let n = r[t];
    if (!n.hasDefault)
      return null;
    e[t] = n.default;
  }
  return e;
}
function sn(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n in r) {
    let i = r[n], o = e && e[n];
    if (o === void 0)
      if (i.hasDefault)
        o = i.default;
      else
        throw new RangeError("No value supplied for attribute " + n);
    else i.validate && i.validate(o);
    t[n] = o;
  }
  return t;
}
function an(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let n in e)
      t[n] = new Ir(r, n, e[n]);
  return t;
}
class xe {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = an(e, n.attrs), this.defaultAttrs = on(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == te.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : sn(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, n) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Q(this, this.computeAttrs(e), g.from(t), S.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, n) {
    return t = g.from(t), this.checkContent(t), new Q(this, this.computeAttrs(e), t, S.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, n) {
    if (e = this.computeAttrs(e), t = g.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(g.empty, !0);
    return o ? new Q(this, e, t.append(o), S.setFrom(n)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let n = 0; n < e.childCount; n++)
      if (!this.allowsMarks(e.child(n).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal no longer useful, but called by old prosemirror-view versions
  */
  checkAttrs(e) {
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let n = 0; n < e.length; n++)
      this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
    return t ? t.length ? t : S.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => n[o] = new xe(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!n[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!n.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in n.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return n;
  }
}
function Tr(r, e, t) {
  let n = t.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (n.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${n} for attribute ${e} on type ${r}, got ${o}`);
  };
}
class Ir {
  constructor(e, t, n) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? Tr(e, t, n.validate) : n.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class ot {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    this.name = e, this.rank = t, this.schema = n, this.spec = i, this.attrs = an(e, i.attrs), this.excluded = null;
    let o = on(this.attrs);
    this.instance = o ? new S(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new S(this, sn(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => n[o] = new ot(o, i++, t, s)), n;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Mr {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = I.from(e.nodes), t.marks = I.from(e.marks || {}), this.nodes = xe.compile(this.spec.nodes, this), this.marks = ot.compile(this.spec.marks, this);
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", a = o.spec.marks;
      if (o.contentMatch = n[s] || (n[s] = te.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = a == "_" ? null : a ? St(this, a.split(" ")) : a == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : St(this, s.split(" "));
    }
    this.nodeFromJSON = (i) => Q.fromJSON(this, i), this.markFromJSON = (i) => S.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, n, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof xe) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, n, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let n = this.nodes.text;
    return new Be(n, n.defaultAttrs, e, S.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function St(r, e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n], o = r.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let a in r.marks) {
        let l = r.marks[a];
        (i == "_" || l.spec.group && l.spec.group.split(" ").indexOf(i) > -1) && t.push(s = l);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[n] + "'");
  }
  return t;
}
function Ar(r) {
  return r.tag != null;
}
function Or(r) {
  return r.style != null;
}
class ae {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let n = this.matchedStyles = [];
    t.forEach((i) => {
      if (Ar(i))
        this.tags.push(i);
      else if (Or(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        n.indexOf(o) < 0 && n.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let n = new Nt(this, t, !1);
    return n.addAll(e, S.none, t.from, t.to), n.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let n = new Nt(this, t, !0);
    return n.addAll(e, S.none, t.from, t.to), x.maxOpen(n.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, n) {
    for (let i = n ? this.tags.indexOf(n) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (Br(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, n, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], a = s.style;
      if (!(a.indexOf(e) != 0 || s.context && !n.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let l = s.getAttrs(t);
          if (l === !1)
            continue;
          s.attrs = l || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function n(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let a = t[s];
        if ((a.priority == null ? 50 : a.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        n(s = Et(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        n(s = Et(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new ae(e, ae.schemaRules(e)));
  }
}
const ln = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  body: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, zr = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, cn = { ol: !0, ul: !0 }, be = 1, Xe = 2, pe = 4;
function Ct(r, e, t) {
  return e != null ? (e ? be : 0) | (e === "full" ? Xe : 0) : r && r.whitespace == "pre" ? be | Xe : t & ~pe;
}
class Ne {
  constructor(e, t, n, i, o, s) {
    this.type = e, this.attrs = t, this.marks = n, this.solid = i, this.options = s, this.content = [], this.activeMarks = S.none, this.match = o || (s & pe ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(g.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let n = this.type.contentMatch, i;
        return (i = n.findWrapping(e.type)) ? (this.match = n, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & be)) {
      let n = this.content[this.content.length - 1], i;
      if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
        let o = n;
        n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = g.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(g.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !ln.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Nt {
  constructor(e, t, n) {
    this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, o, s = Ct(null, t.preserveWhitespace, 0) | (n ? pe : 0);
    i ? o = new Ne(i.type, i.attrs, S.none, !0, t.topMatch || i.type.contentMatch, s) : n ? o = new Ne(null, null, S.none, !0, null, s) : o = new Ne(e.schema.topNodeType, null, S.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let n = e.nodeValue, i = this.top, o = i.options & Xe ? "full" : this.localPreserveWS || (i.options & be) > 0, { schema: s } = this.parser;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
      if (o)
        if (o === "full")
          n = n.replace(/\r\n?/g, `
`);
        else if (s.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(s.linebreakReplacement.create())) {
          let a = n.split(/\r?\n|\r/);
          for (let l = 0; l < a.length; l++)
            l && this.insertNode(s.linebreakReplacement.create(), t, !0), a[l] && this.insertNode(s.text(a[l]), t, !/\S/.test(a[l]));
          n = "";
        } else
          n = n.replace(/\r?\n|\r/g, " ");
      else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
        let a = i.content[i.content.length - 1], l = e.previousSibling;
        (!a || l && l.nodeName == "BR" || a.isText && /[ \t\r\n\u000c]$/.test(a.text)) && (n = n.slice(1));
      }
      n && this.insertNode(s.text(n), t, !/\S/.test(n)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, n) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), a;
    cn.hasOwnProperty(s) && this.parser.normalizeLists && Rr(e);
    let l = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, n));
    e: if (l ? l.ignore : zr.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!l || l.skip || l.closeParent) {
      l && l.closeParent ? this.open = Math.max(0, this.open - 1) : l && l.skip.nodeType && (e = l.skip);
      let c, f = this.needsBlock;
      if (ln.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), c = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let u = l && l.skip ? t : this.readStyles(e, t);
      u && this.addAll(e, u), c && this.sync(o), this.needsBlock = f;
    } else {
      let c = this.readStyles(e, t);
      c && this.addElementByRule(e, l, c, l.consuming === !1 ? a : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let n = e.style;
    if (n && n.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = n.getPropertyValue(o);
        if (s)
          for (let a = void 0; ; ) {
            let l = this.parser.matchStyle(o, s, this, a);
            if (!l)
              break;
            if (l.ignore)
              return null;
            if (l.clearMark ? t = t.filter((c) => !l.clearMark(c)) : t = t.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === !1)
              a = l;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, n, i) {
    let o, s;
    if (t.node)
      if (s = this.parser.schema.nodes[t.node], s.isLeaf)
        this.insertNode(s.create(t.attrs), n, e.nodeName == "BR") || this.leafFallback(e, n);
      else {
        let l = this.enter(s, t.attrs || null, n, t.preserveWhitespace);
        l && (o = !0, n = l);
      }
    else {
      let l = this.parser.schema.marks[t.mark];
      n = n.concat(l.create(t.attrs));
    }
    let a = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, n, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((l) => this.insertNode(l, n, !1));
    else {
      let l = e;
      typeof t.contentElement == "string" ? l = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? l = t.contentElement(e) : t.contentElement && (l = t.contentElement), this.findAround(e, l, !0), this.addAll(l, n), this.findAround(e, l, !1);
    }
    o && this.sync(a) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, n, i) {
    let o = n || 0;
    for (let s = n ? e.childNodes[n] : e.firstChild, a = i == null ? null : e.childNodes[i]; s != a; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, t);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, n) {
    let i, o;
    for (let s = this.open, a = 0; s >= 0; s--) {
      let l = this.nodes[s], c = l.findWrapping(e);
      if (c && (!i || i.length > c.length + a) && (i = c, o = l, !c.length))
        break;
      if (l.solid) {
        if (n)
          break;
        a += 2;
      }
    }
    if (!i)
      return null;
    this.sync(o);
    for (let s = 0; s < i.length; s++)
      t = this.enterInner(i[s], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, n) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (t = this.enterInner(o, null, t));
    }
    let i = this.findPlace(e, t, n);
    if (i) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = S.none;
      for (let a of i.concat(e.marks))
        (o.type ? o.type.allowsMarkType(a.type) : Tt(a.type, e.type)) && (s = a.addToSet(s));
      return o.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, n, i) {
    let o = this.findPlace(e.create(t), n, !1);
    return o && (o = this.enterInner(e, t, n, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, t, n, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let a = Ct(e, o, s.options);
    s.options & pe && s.content.length == 0 && (a |= pe);
    let l = S.none;
    return n = n.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : Tt(c.type, e)) ? (l = c.addToSet(l), !1) : !0), this.nodes.push(new Ne(e, t, l, i, null, a)), this.open++, n;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= be);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let n = this.nodes[t].content;
      for (let i = n.length - 1; i >= 0; i--)
        e += n[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, n) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), n = this.options.context, i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), o = -(n ? n.depth + 1 : 0) + (i ? 0 : 1), s = (a, l) => {
      for (; a >= 0; a--) {
        let c = t[a];
        if (c == "") {
          if (a == t.length - 1 || a == 0)
            continue;
          for (; l >= o; l--)
            if (s(a - 1, l))
              return !0;
          return !1;
        } else {
          let f = l > 0 || l == 0 && i ? this.nodes[l].type : n && l >= o ? n.node(l - o).type : null;
          if (!f || f.name != c && !f.isInGroup(c))
            return !1;
          l--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs)
          return n;
      }
    for (let t in this.parser.schema.nodes) {
      let n = this.parser.schema.nodes[t];
      if (n.isTextblock && n.defaultAttrs)
        return n;
    }
  }
}
function Rr(r) {
  for (let e = r.firstChild, t = null; e; e = e.nextSibling) {
    let n = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    n && cn.hasOwnProperty(n) && t ? (t.appendChild(e), e = t) : n == "li" ? t = e : n && (t = null);
  }
}
function Br(r, e) {
  return (r.matches || r.msMatchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector).call(r, e);
}
function Et(r) {
  let e = {};
  for (let t in r)
    e[t] = r[t];
  return e;
}
function Tt(r, e) {
  let t = e.schema.nodes;
  for (let n in t) {
    let i = t[n];
    if (!i.allowsMarkType(r))
      continue;
    let o = [], s = (a) => {
      o.push(a);
      for (let l = 0; l < a.edgeCount; l++) {
        let { type: c, next: f } = a.edge(l);
        if (c == e || o.indexOf(f) < 0 && s(f))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
const fn = 65535, un = Math.pow(2, 16);
function Fr(r, e) {
  return r + e * un;
}
function It(r) {
  return r & fn;
}
function _r(r) {
  return (r - (r & fn)) / un;
}
const hn = 1, dn = 2, Me = 4, pn = 8;
class Mt {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.delInfo = t, this.recover = n;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & pn) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (hn | Me)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (dn | Me)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Me) > 0;
  }
}
class B {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && B.empty)
      return B.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, n = It(e);
    if (!this.inverted)
      for (let i = 0; i < n; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[n * 3] + t + _r(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, n) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? i : 0);
      if (l > e)
        break;
      let c = this.ranges[a + o], f = this.ranges[a + s], u = l + c;
      if (e <= u) {
        let d = c ? e == l ? -1 : e == u ? 1 : t : t, p = l + i + (d < 0 ? 0 : f);
        if (n)
          return p;
        let w = e == (t < 0 ? l : u) ? null : Fr(a / 3, e - l), m = 0;
        return c && (m |= e == l ? dn : e == u ? hn : Me, (t < 0 ? e != l : e != u) && (m |= pn)), new Mt(p, m, w);
      }
      i += f - c;
    }
    return n ? e + i : new Mt(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let n = 0, i = It(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? n : 0);
      if (l > e)
        break;
      let c = this.ranges[a + o], f = l + c;
      if (e <= f && a == i * 3)
        return !0;
      n += this.ranges[a + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], a = s - (this.inverted ? o : 0), l = s + (this.inverted ? 0 : o), c = this.ranges[i + t], f = this.ranges[i + n];
      e(a, a + c, l, l + f), o += f - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new B(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? B.empty : new B(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
B.empty = new B([]);
const Ve = /* @__PURE__ */ Object.create(null);
class T {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return B.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let n = Ve[t.stepType];
    if (!n)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Ve)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Ve[e] = t, t.prototype.jsonID = e, t;
  }
}
class E {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new E(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new E(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, n, i) {
    try {
      return E.ok(e.replace(t, n, i));
    } catch (o) {
      if (o instanceof we)
        return E.fail(o.message);
      throw o;
    }
  }
}
function st(r, e, t) {
  let n = [];
  for (let i = 0; i < r.childCount; i++) {
    let o = r.child(i);
    o.content.size && (o = o.copy(st(o.content, e, o))), o.isInline && (o = e(o, t, i)), n.push(o);
  }
  return g.fromArray(n);
}
class V extends T {
  /**
  Create a mark step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = e.resolve(this.from), i = n.node(n.sharedDepth(this.to)), o = new x(st(t.content, (s, a) => !s.isAtom || !a.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return E.fromReplace(e, this.from, this.to, o);
  }
  invert(e) {
    let t = [];
    return e.nodesBetween(this.from, this.to, (n, i) => {
      if (n.isInline && n.isAtom) {
        let o = this.mark.addToSet(n.marks);
        if (!S.sameSet(o, n.marks)) {
          let s = Math.max(this.from, i), a = Math.min(this.to, i + n.nodeSize);
          et(U, s, a, this.mark, t);
          for (let l of n.marks)
            l.isInSet(o) || et(V, s, a, l, t);
        }
      }
    }), t.length == 1 ? t[0] : new X(t);
  }
  map(e) {
    let t = e.map(this.from, 1), n = e.map(this.to, -1);
    return t >= n ? null : new V(t, n, this.mark);
  }
  merge(e) {
    return e instanceof V && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new V(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new V(t.from, t.to, e.markFromJSON(t.mark));
  }
}
T.jsonID("addMark", V);
class U extends T {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = new x(st(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return E.fromReplace(e, this.from, this.to, n);
  }
  invert(e) {
    let t = [];
    return e.nodesBetween(this.from, this.to, (n, i) => {
      n.isInline && n.isAtom && this.mark.isInSet(n.marks) && et(V, Math.max(this.from, i), Math.min(this.to, i + n.nodeSize), this.mark, t);
    }), t.length == 1 ? t[0] : new X(t);
  }
  map(e) {
    let t = e.map(this.from, 1), n = e.map(this.to, -1);
    return t >= n ? null : new U(t, n, this.mark);
  }
  merge(e) {
    return e instanceof U && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new U(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new U(t.from, t.to, e.markFromJSON(t.mark));
  }
}
T.jsonID("removeMark", U);
function et(r, e, t, n, i) {
  let o = i.length ? i[i.length - 1] : null;
  o && o instanceof r && o.to == e && o.mark.eq(n) ? i[i.length - 1] = new r(o.from, t, n) : i.push(new r(e, t, n));
}
class X extends T {
  constructor(e) {
    super(), this.steps = e;
  }
  apply(e) {
    for (let t of this.steps) {
      let n = t.apply(e);
      if (!n.doc)
        return n;
      e = n.doc;
    }
    return new E(e, null);
  }
  invert(e) {
    return new X(this.steps.map((t) => t.invert(e)));
  }
  map(e) {
    let t = [];
    for (let n of this.steps) {
      let i = n.map(e);
      i && t.push(i);
    }
    return t.length ? new X(t) : null;
  }
  toJSON() {
    return { stepType: "markSet", steps: this.steps.map((e) => e.toJSON()) };
  }
  static fromJSON(e, t) {
    if (!Array.isArray(t.steps) || !t.steps.every((n) => n.stepType == "addMark" || n.stepType == "removeMark"))
      throw new RangeError("Invalid JSON for MarkSetStep");
    return new X(t.steps.map((n) => T.fromJSON(e, n)));
  }
}
T.jsonID("markSet", X);
class G extends T {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return E.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return E.fromReplace(e, this.pos, this.pos + 1, new x(g.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let n = this.mark.addToSet(t.marks);
      if (n.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(n))
            return new G(this.pos, t.marks[i]);
        return new G(this.pos, this.mark);
      }
    }
    return new ve(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new G(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new G(t.pos, e.markFromJSON(t.mark));
  }
}
T.jsonID("addNodeMark", G);
class ve extends T {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return E.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return E.fromReplace(e, this.pos, this.pos + 1, new x(g.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new G(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ve(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new ve(t.pos, e.markFromJSON(t.mark));
  }
}
T.jsonID("removeNodeMark", ve);
class O extends T {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, n, i = !1) {
    super(), this.from = e, this.to = t, this.slice = n, this.structure = i;
  }
  apply(e) {
    return this.structure && tt(e, this.from, this.to) ? E.fail("Structure replace would overwrite content") : E.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new B([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new O(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.to, -1), n = this.from == this.to && O.MAP_BIAS < 0 ? t : e.mapResult(this.from, 1);
    return n.deletedAcross && t.deletedAcross ? null : new O(n.pos, Math.max(n.pos, t.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof O) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new O(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new O(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new O(t.from, t.to, x.fromJSON(e, t.slice), !!t.structure);
  }
}
O.MAP_BIAS = 1;
T.jsonID("replace", O);
class R extends T {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, n, i, o, s, a = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = i, this.slice = o, this.insert = s, this.structure = a;
  }
  apply(e) {
    if (this.structure && (tt(e, this.from, this.gapFrom) || tt(e, this.gapTo, this.to)))
      return E.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return E.fail("Gap is not a flat range");
    let n = this.slice.insertAt(this.insert, t.content);
    return n ? E.fromReplace(e, this.from, this.to, n) : E.fail("Content does not fit in gap");
  }
  getMap() {
    return new B([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new R(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && n.deletedAcross || i < t.pos || o > n.pos ? null : new R(t.pos, n.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new R(t.from, t.to, t.gapFrom, t.gapTo, x.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
T.jsonID("replaceAround", R);
function tt(r, e, t) {
  let n = r.resolve(e), i = t - e, o = n.depth;
  for (; i > 0 && o > 0 && n.indexAfter(o) == n.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = n.node(o).maybeChild(n.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function Pr(r, e, t) {
  return (e == 0 || r.canReplace(e, r.childCount)) && (t == r.childCount || r.canReplace(0, t));
}
function fe(r) {
  let t = r.parent.content.cutByIndex(r.startIndex, r.endIndex);
  for (let n = r.depth, i = 0, o = 0; ; --n) {
    let s = r.$from.node(n), a = r.$from.index(n) + i, l = r.$to.indexAfter(n) - o;
    if (n < r.depth && s.canReplace(a, l, t))
      return n;
    if (n == 0 || s.type.spec.isolating || !Pr(s, a, l))
      break;
    a && (i = 1), l < s.childCount && (o = 1);
  }
  return null;
}
function mn(r, e, t = null, n = r) {
  let i = Lr(r, e), o = i && $r(n, e);
  return o ? i.map(At).concat({ type: e, attrs: t }).concat(o.map(At)) : null;
}
function At(r) {
  return { type: r, attrs: null };
}
function Lr(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, o = t.contentMatchAt(n).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(n, i, s) ? o : null;
}
function $r(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, o = t.child(n), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let l = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = n; l && c < i; c++)
    l = l.matchType(t.child(c).type);
  return !l || !l.validEnd ? null : s;
}
function j(r, e, t = 1, n) {
  let i = r.resolve(e), o = i.depth - t, s = n && n[n.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, f = t - 2; c > o; c--, f--) {
    let u = i.node(c), d = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let p = u.content.cutByIndex(d, u.childCount), w = n && n[f + 1];
    w && (p = p.replaceChild(0, w.type.create(w.attrs)));
    let m = n && n[f] || u;
    if (!u.canReplace(d + 1, u.childCount) || !m.type.validContent(p))
      return !1;
  }
  let a = i.indexAfter(o), l = n && n[0];
  return i.node(o).canReplaceWith(a, a, l ? l.type : i.node(o + 1).type);
}
function ne(r, e) {
  let t = r.resolve(e), n = t.index();
  return gn(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(n, n + 1);
}
function Dr(r, e) {
  e.content.size || r.type.compatibleContent(e.type);
  let t = r.contentMatchAt(r.childCount), { linebreakReplacement: n } = r.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == n ? r.type.schema.nodes.text : o.type;
    if (t = t.matchType(s), !t || !r.type.allowsMarks(o.marks))
      return !1;
  }
  return t.validEnd;
}
function gn(r, e) {
  return !!(r && e && !r.isLeaf && Dr(r, e));
}
function Je(r, e, t = -1) {
  let n = r.resolve(e);
  for (let i = n.depth; ; i--) {
    let o, s, a = n.index(i);
    if (i == n.depth ? (o = n.nodeBefore, s = n.nodeAfter) : t > 0 ? (o = n.node(i + 1), a++, s = n.node(i).maybeChild(a)) : (o = n.node(i).maybeChild(a - 1), s = n.node(i + 1)), o && !o.isTextblock && gn(o, s) && n.node(i).canReplace(a, a + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? n.before(i) : n.after(i);
  }
}
function at(r, e, t = e, n = x.empty) {
  if (e == t && !n.size)
    return null;
  let i = r.resolve(e), o = r.resolve(t);
  return Jr(i, o, n) ? new O(e, t, n) : new jr(i, o, n).fit();
}
function Jr(r, e, t) {
  return !t.openStart && !t.openEnd && r.start() == e.start() && r.parent.canReplace(r.index(), e.index(), t.content);
}
class jr {
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = g.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = g.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = n.depth, a = i.depth;
    for (; s && a && o.childCount == 1; )
      o = o.firstChild.content, s--, a--;
    let l = new x(o, s, a);
    return e > -1 ? new R(n.pos, e, this.$to.pos, this.$to.end(), l, t) : l.size || n.pos != this.$to.pos ? new O(n.pos, i.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < e; n++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= n) {
        e = n;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
        let i, o = null;
        n ? (o = Ot(this.unplaced.content, n - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: l, match: c } = this.frontier[a], f, u = null;
          if (t == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(g.from(s), !1)) : o && l.compatibleContent(o.type)))
            return { sliceDepth: n, frontierDepth: a, parent: o, inject: u };
          if (t == 2 && s && (f = c.findWrapping(s.type)))
            return { sliceDepth: n, frontierDepth: a, parent: o, wrap: f };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced;
    return zt(e, -1) <= t ? !1 : (this.unplaced.size > 1 && zt(e, 1) > n && n++, this.unplaced = new x(e, t + 1, n), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced, i = Ot(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new x(ue(e, t - 1, 1), t - 1, o ? t - 1 : n);
    } else
      this.unplaced = new x(ue(e, t, 1), t, n);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, a = n ? n.content : s.content, l = s.openStart - e, c = 0, f = [], { match: u, type: d } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        f.push(i.child(m));
      u = u.matchFragment(i);
    }
    let p = a.size + e - (s.content.size - s.openEnd);
    for (; c < a.childCount; ) {
      let m = a.child(c), y = u.matchType(m.type);
      if (!y)
        break;
      c++, (c > 1 || l == 0 || m.content.size) && (u = y, f.push(wn(m.mark(d.allowedMarks(m.marks)), c == 1 ? l : 0, c == a.childCount ? p : -1)));
    }
    let w = c == a.childCount;
    w || (p = -1), this.placed = he(this.placed, t, g.from(f)), this.frontier[t].match = u, w && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, y = a; m < p; m++) {
      let b = y.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), y = b.content;
    }
    this.unplaced = w ? e == 0 ? x.empty : new x(ue(s.content, e - 1, 1), e - 1, p < 0 ? s.openEnd : e - 1) : new x(ue(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !qe(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: n } = this.$to, i = this.$to.after(n);
    for (; n > 1 && i == this.$to.end(--n); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: n, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = qe(e, t, i, n, o);
      if (s) {
        for (let a = t - 1; a >= 0; a--) {
          let { match: l, type: c } = this.frontier[a], f = qe(e, a, c, l, !0);
          if (!f || f.childCount)
            continue e;
        }
        return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = he(this.placed, t.depth, t.fit)), e = t.move;
    for (let n = t.depth + 1; n <= e.depth; n++) {
      let i = e.node(n), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(n));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, n) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = he(this.placed, this.depth, g.from(e.create(t, n))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(g.empty, !0);
    t.childCount && (this.placed = he(this.placed, this.frontier.length, t));
  }
}
function ue(r, e, t) {
  return e == 0 ? r.cutByIndex(t, r.childCount) : r.replaceChild(0, r.firstChild.copy(ue(r.firstChild.content, e - 1, t)));
}
function he(r, e, t) {
  return e == 0 ? r.append(t) : r.replaceChild(r.childCount - 1, r.lastChild.copy(he(r.lastChild.content, e - 1, t)));
}
function Ot(r, e) {
  for (let t = 0; t < e; t++)
    r = r.firstChild.content;
  return r;
}
function wn(r, e, t) {
  if (e <= 0)
    return r;
  let n = r.content;
  return e > 1 && (n = n.replaceChild(0, wn(n.firstChild, e - 1, n.childCount == 1 ? t - 1 : 0))), e > 0 && (n = r.type.contentMatch.fillBefore(n).append(n), t <= 0 && (n = n.append(r.type.contentMatch.matchFragment(n).fillBefore(g.empty, !0)))), r.copy(n);
}
function qe(r, e, t, n, i) {
  let o = r.node(e), s = i ? r.indexAfter(e) : r.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let a = n.fillBefore(o.content, !0, s);
  return a && !Wr(t, o.content, s) ? a : null;
}
function Wr(r, e, t) {
  for (let n = t; n < e.childCount; n++)
    if (!r.allowsMarks(e.child(n).marks))
      return !0;
  return !1;
}
function zt(r, e) {
  for (let t = 0; ; t++) {
    let n = e < 0 ? r.firstChild : r.lastChild;
    if (!n || n.isAtom)
      return t;
    r = n.content;
  }
}
class me extends T {
  /**
  Construct an attribute step.
  */
  constructor(e, t, n) {
    super(), this.pos = e, this.attr = t, this.value = n;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return E.fail("No node at attribute step's position");
    let n = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      n[o] = t.attrs[o];
    n[this.attr] = this.value;
    let i = t.type.create(n, null, t.marks);
    return E.fromReplace(e, this.pos, this.pos + 1, new x(g.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return B.empty;
  }
  invert(e) {
    return new me(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new me(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new me(t.pos, t.attr, t.value);
  }
}
T.jsonID("attr", me);
class Fe extends T {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let n = e.type.create(t, e.content, e.marks);
    return E.ok(n);
  }
  getMap() {
    return B.empty;
  }
  invert(e) {
    return new Fe(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Fe(t.attr, t.value);
  }
}
T.jsonID("docAttr", Fe);
let ke = class extends Error {
};
ke = function r(e) {
  let t = Error.call(this, e);
  return t.__proto__ = r.prototype, t;
};
ke.prototype = Object.create(Error.prototype);
ke.prototype.constructor = ke;
ke.prototype.name = "TransformError";
const He = /* @__PURE__ */ Object.create(null);
class k {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, n) {
    this.$anchor = e, this.$head = t, this.ranges = n || [new Vr(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = x.empty) {
    let n = t.content.lastChild, i = null;
    for (let a = 0; a < t.openEnd; a++)
      i = n, n = n.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let a = 0; a < s.length; a++) {
      let { $from: l, $to: c } = s[a], f = e.mapping.slice(o);
      e.replaceRange(f.map(l.pos), f.map(c.pos), a ? x.empty : t), a == 0 && Ft(e, o, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let n = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: a } = i[o], l = e.mapping.slice(n), c = l.map(s.pos), f = l.map(a.pos);
      o ? e.deleteRange(c, f) : (e.replaceRangeWith(c, f, t), Ft(e, n, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, n = !1) {
    let i = e.parent.inlineContent ? new N(e) : se(e.node(0), e.parent, e.pos, e.index(), t, n);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? se(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, n) : se(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, n);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new F(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return se(e, e, 0, 0, 1) || new F(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return se(e, e, e.content.size, e.childCount, -1) || new F(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let n = He[t.type];
    if (!n)
      throw new RangeError(`No selection type ${t.type} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in He)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return He[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return N.between(this.$anchor, this.$head).getBookmark();
  }
}
k.prototype.visible = !0;
class Vr {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let Rt = !1;
function Bt(r) {
  !Rt && !r.parent.inlineContent && (Rt = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + r.parent.type.name + ")"));
}
class N extends k {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Bt(e), Bt(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    if (!n.parent.inlineContent)
      return k.near(n);
    let i = e.resolve(t.map(this.anchor));
    return new N(i.parent.inlineContent ? i : n, n);
  }
  replace(e, t = x.empty) {
    if (super.replace(e, t), t == x.empty) {
      let n = this.$from.marksAcross(this.$to);
      n && e.ensureMarks(n);
    }
  }
  eq(e) {
    return e instanceof N && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new je(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new N(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, n = t) {
    let i = e.resolve(t);
    return new this(i, n == t ? i : e.resolve(n));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, n) {
    let i = e.pos - t.pos;
    if ((!n || i) && (n = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = k.findFrom(t, n, !0) || k.findFrom(t, -n, !0);
      if (o)
        t = o.$head;
      else
        return k.near(t, n);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (k.findFrom(e, -n, !0) || k.findFrom(e, n, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new N(e, t);
  }
}
k.jsonID("text", N);
class je {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new je(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return N.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class C extends k {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, n), this.node = t;
  }
  map(e, t) {
    let { deleted: n, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return n ? k.near(o) : new C(o);
  }
  content() {
    return new x(g.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof C && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new lt(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new C(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new C(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
C.prototype.visible = !1;
k.jsonID("node", C);
class lt {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: n } = e.mapResult(this.anchor);
    return t ? new je(n, n) : new lt(n);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), n = t.nodeAfter;
    return n && C.isSelectable(n) ? new C(t) : k.near(t);
  }
}
class F extends k {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = x.empty) {
    if (t == x.empty) {
      e.delete(0, e.doc.content.size);
      let n = k.atStart(e.doc);
      n.eq(e.selection) || e.setSelection(n);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new F(e);
  }
  map(e) {
    return new F(e);
  }
  eq(e) {
    return e instanceof F;
  }
  getBookmark() {
    return qr;
  }
}
k.jsonID("all", F);
const qr = {
  map() {
    return this;
  },
  resolve(r) {
    return new F(r);
  }
};
function se(r, e, t, n, i, o = !1) {
  if (e.inlineContent)
    return N.create(r, t);
  for (let s = n - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let a = e.child(s);
    if (a.isAtom) {
      if (!o && C.isSelectable(a))
        return C.create(r, t - (i < 0 ? a.nodeSize : 0));
    } else {
      let l = se(r, a, t + i, i < 0 ? a.childCount : 0, i, o);
      if (l)
        return l;
    }
    t += a.nodeSize * i;
  }
  return null;
}
function Ft(r, e, t) {
  let n = r.steps.length - 1;
  if (n < e)
    return;
  let i = r.steps[n];
  if (!(i instanceof O || i instanceof R))
    return;
  let o = r.mapping.maps[n], s;
  o.forEach((a, l, c, f) => {
    s == null && (s = f);
  }), r.setSelection(k.near(r.doc.resolve(s), t));
}
function _t(r, e) {
  return !e || !r ? r : r.bind(e);
}
class Ee {
  constructor(e, t, n) {
    this.name = e, this.init = _t(t.init, n), this.apply = _t(t.apply, n);
  }
}
new Ee("doc", {
  init(r) {
    return r.doc || r.schema.topNodeType.createAndFill();
  },
  apply(r) {
    return r.doc;
  }
}), new Ee("selection", {
  init(r, e) {
    return r.selection || k.atStart(e.doc);
  },
  apply(r) {
    return r.selection;
  }
}), new Ee("storedMarks", {
  init(r) {
    return r.storedMarks || null;
  },
  apply(r, e, t, n) {
    return n.selection.$cursor ? r.storedMarks : null;
  }
}), new Ee("scrollToSelection", {
  init() {
    return 0;
  },
  apply(r, e) {
    return r.scrolledIntoView ? e + 1 : e;
  }
});
function yn(r, e, t) {
  for (let n in r) {
    let i = r[n];
    i instanceof Function ? i = i.bind(e) : n == "handleDOMEvents" && (i = yn(i, e, {})), t[n] = i;
  }
  return t;
}
class re {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && yn(e.props, this, this.props), this.key = e.key ? e.key.key : xn("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Ue = /* @__PURE__ */ Object.create(null);
function xn(r) {
  return r in Ue ? r + "$" + ++Ue[r] : (Ue[r] = 0, r + "$");
}
class ie {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = xn(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ct = (r, e) => r.selection.empty ? !1 : (e && e(r.tr.deleteSelection().scrollIntoView()), !0);
function bn(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("backward", r) : t.parentOffset > 0) ? null : t;
}
const vn = (r, e, t) => {
  let n = bn(r, t);
  if (!n)
    return !1;
  let i = ft(n);
  if (!i) {
    let s = n.blockRange(), a = s && fe(s);
    return a == null ? !1 : (e && e(r.tr.lift(s, a).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (An(r, i, e, -1))
    return !0;
  if (n.parent.content.size == 0 && (ce(o, "end") || C.isSelectable(o)))
    for (let s = n.depth; ; s--) {
      let a = at(r.doc, n.before(s), n.after(s), x.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (e) {
          let l = r.tr.step(a);
          l.setSelection(ce(o, "end") ? k.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : C.create(l.doc, i.pos - o.nodeSize)), e(l.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || n.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Hr = (r, e, t) => {
  let n = bn(r, t);
  if (!n)
    return !1;
  let i = ft(n);
  return i ? kn(r, i, e) : !1;
}, Ur = (r, e, t) => {
  let n = Cn(r, t);
  if (!n)
    return !1;
  let i = ut(n);
  return i ? kn(r, i, e) : !1;
};
function kn(r, e, t) {
  let n = e.nodeBefore, i = n, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let f = i.lastChild;
    if (!f)
      return !1;
    i = f;
  }
  let s = e.nodeAfter, a = s, l = e.pos + 1;
  for (; !a.isTextblock; l++) {
    if (a.type.spec.isolating)
      return !1;
    let f = a.firstChild;
    if (!f)
      return !1;
    a = f;
  }
  let c = at(r.doc, o, l, x.empty);
  if (!c || c.from != o || c instanceof O && c.slice.size >= l - o)
    return !1;
  if (t) {
    let f = r.tr.step(c);
    f.setSelection(N.create(f.doc, o)), t(f.scrollIntoView());
  }
  return !0;
}
function ce(r, e, t = !1) {
  for (let n = r; n; n = e == "start" ? n.firstChild : n.lastChild) {
    if (n.isTextblock)
      return !0;
    if (t && n.childCount != 1)
      return !1;
  }
  return !1;
}
const Sn = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, o = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", r) : n.parentOffset > 0)
      return !1;
    o = ft(n);
  }
  let s = o && o.nodeBefore;
  return !s || !C.isSelectable(s) ? !1 : (e && e(r.tr.setSelection(C.create(r.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function ft(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      if (r.index(e) > 0)
        return r.doc.resolve(r.before(e + 1));
      if (r.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Cn(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("forward", r) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Nn = (r, e, t) => {
  let n = Cn(r, t);
  if (!n)
    return !1;
  let i = ut(n);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (An(r, i, e, 1))
    return !0;
  if (n.parent.content.size == 0 && (ce(o, "start") || C.isSelectable(o))) {
    let s = at(r.doc, n.before(), n.after(), x.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let a = r.tr.step(s);
        a.setSelection(ce(o, "start") ? k.findFrom(a.doc.resolve(a.mapping.map(i.pos)), 1) : C.create(a.doc, a.mapping.map(i.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, En = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, o = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", r) : n.parentOffset < n.parent.content.size)
      return !1;
    o = ut(n);
  }
  let s = o && o.nodeAfter;
  return !s || !C.isSelectable(s) ? !1 : (e && e(r.tr.setSelection(C.create(r.doc, o.pos)).scrollIntoView()), !0);
};
function ut(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.node(e);
      if (r.index(e) + 1 < t.childCount)
        return r.doc.resolve(r.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Gr = (r, e) => {
  let t = r.selection, n = t instanceof C, i;
  if (n) {
    if (t.node.isTextblock || !ne(r.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Je(r.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = r.tr.join(i);
    n && o.setSelection(C.create(o.doc, i - r.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, Kr = (r, e) => {
  let t = r.selection, n;
  if (t instanceof C) {
    if (t.node.isTextblock || !ne(r.doc, t.to))
      return !1;
    n = t.to;
  } else if (n = Je(r.doc, t.to, 1), n == null)
    return !1;
  return e && e(r.tr.join(n).scrollIntoView()), !0;
}, Yr = (r, e) => {
  let { $from: t, $to: n } = r.selection, i = t.blockRange(n), o = i && fe(i);
  return o == null ? !1 : (e && e(r.tr.lift(i, o).scrollIntoView()), !0);
}, Tn = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  return !t.parent.type.spec.code || !t.sameParent(n) ? !1 : (e && e(r.tr.insertText(`
`).scrollIntoView()), !0);
};
function ht(r) {
  for (let e = 0; e < r.edgeCount; e++) {
    let { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const Zr = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  if (!t.parent.type.spec.code || !t.sameParent(n))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = ht(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let a = t.after(), l = r.tr.replaceWith(a, a, s.createAndFill());
    l.setSelection(k.near(l.doc.resolve(a), 1)), e(l.scrollIntoView());
  }
  return !0;
}, In = (r, e) => {
  let t = r.selection, { $from: n, $to: i } = t;
  if (t instanceof F || n.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = ht(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!n.parentOffset && i.index() < i.parent.childCount ? n : i).pos, a = r.tr.insert(s, o.createAndFill());
    a.setSelection(N.create(a.doc, s + 1)), e(a.scrollIntoView());
  }
  return !0;
}, Mn = (r, e) => {
  let { $cursor: t } = r.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (j(r.doc, o))
      return e && e(r.tr.split(o).scrollIntoView()), !0;
  }
  let n = t.blockRange(), i = n && fe(n);
  return i == null ? !1 : (e && e(r.tr.lift(n, i).scrollIntoView()), !0);
};
function Qr(r) {
  return (e, t) => {
    if (e.selection instanceof C && e.selection.node.isBlock) {
      let { $from: p } = e.selection;
      return !p.parentOffset || !j(e.doc, p.pos) ? !1 : (t && t(e.tr.split(p.pos).scrollIntoView()), !0);
    }
    if (!e.selection.$from.depth)
      return !1;
    let n = e.tr;
    !e.selection.empty && (e.selection instanceof N || e.selection instanceof F) && n.deleteSelection();
    let { $from: i } = n.selection, o = n.steps.length, s = [], a, l, c = !1, f = !1;
    for (let p = i.depth; ; p--)
      if (i.node(p).isBlock) {
        c = i.end(p) == i.pos + (i.depth - p), f = i.start(p) == i.pos - (i.depth - p), l = ht(i.node(p - 1).contentMatchAt(i.indexAfter(p - 1))), s.unshift(c && l ? { type: l } : null), a = p;
        break;
      } else {
        if (p == 1)
          return !1;
        s.unshift(null);
      }
    let u = i.pos, d = j(n.doc, u, s.length, s);
    if (d || (s[0] = l ? { type: l } : null, d = j(n.doc, u, s.length, s)), !d)
      return !1;
    if (n.split(u, s.length, s), !c && f && i.node(a).type != l) {
      let p = n.mapping.slice(o), w = p.map(i.before(a)), m = n.doc.resolve(w);
      l && i.node(a - 1).canReplaceWith(m.index(), m.index() + 1, l) && n.setNodeMarkup(p.map(i.before(a)), l);
    }
    return t && t(n.scrollIntoView()), !0;
  };
}
const Xr = Qr(), ei = (r, e) => {
  let { $from: t, to: n } = r.selection, i, o = t.sharedDepth(n);
  return o == 0 ? !1 : (i = t.before(o), e && e(r.tr.setSelection(C.create(r.doc, i))), !0);
};
function ti(r, e, t) {
  let n = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !n || !i || !n.type.compatibleContent(i.type) ? !1 : !n.content.size && e.parent.canReplace(o - 1, o) ? (t && t(r.tr.delete(e.pos - n.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || ne(r.doc, e.pos)) ? !1 : (t && t(r.tr.join(e.pos).scrollIntoView()), !0);
}
function An(r, e, t, n) {
  let i = e.nodeBefore, o = e.nodeAfter, s, a, l = i.type.spec.isolating || o.type.spec.isolating;
  if (!l && ti(r, e, t))
    return !0;
  let c = !l && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (a = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && a.matchType(s[0] || o.type).validEnd) {
    if (t) {
      let p = e.pos + o.nodeSize, w = g.empty;
      for (let b = s.length - 1; b >= 0; b--)
        w = g.from(s[b].create(null, w));
      w = g.from(i.copy(w));
      let m = r.tr.step(new R(e.pos - 1, p, e.pos, p, new x(w, 1, 0), s.length, !0)), y = m.doc.resolve(p + 2 * s.length);
      y.nodeAfter && y.nodeAfter.type == i.type && ne(m.doc, y.pos) && m.join(y.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let f = o.type.spec.isolating || n > 0 && l ? null : k.findFrom(e, 1), u = f && f.$from.blockRange(f.$to), d = u && fe(u);
  if (d != null && d >= e.depth)
    return t && t(r.tr.lift(u, d).scrollIntoView()), !0;
  if (c && ce(o, "start", !0) && ce(i, "end")) {
    let p = i, w = [];
    for (; w.push(p), !p.isTextblock; )
      p = p.lastChild;
    let m = o, y = 1;
    for (; !m.isTextblock; m = m.firstChild)
      y++;
    if (p.canReplace(p.childCount, p.childCount, m.content)) {
      if (t) {
        let b = g.empty;
        for (let A = w.length - 1; A >= 0; A--)
          b = g.from(w[A].copy(b));
        let z = r.tr.step(new R(e.pos - w.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new x(b, w.length, 0), 0, !0));
        t(z.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function On(r) {
  return function(e, t) {
    let n = e.selection, i = r < 0 ? n.$from : n.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(N.create(e.doc, r < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const ni = On(-1), ri = On(1);
function ii(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), a = s && mn(s, r, e);
    return a ? (n && n(t.tr.wrap(s, a).scrollIntoView()), !0) : !1;
  };
}
function Pt(r, e = null) {
  return function(t, n) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: a } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, a, (l, c) => {
        if (i)
          return !1;
        if (!(!l.isTextblock || l.hasMarkup(r, e)))
          if (l.type == r)
            i = !0;
          else {
            let f = t.doc.resolve(c), u = f.index();
            i = f.parent.canReplaceWith(u, u + 1, r);
          }
      });
    }
    if (!i)
      return !1;
    if (n) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: a }, $to: { pos: l } } = t.selection.ranges[s];
        o.setBlockType(a, l, r, e);
      }
      n(o.scrollIntoView());
    }
    return !0;
  };
}
function dt(...r) {
  return function(e, t, n) {
    for (let i = 0; i < r.length; i++)
      if (r[i](e, t, n))
        return !0;
    return !1;
  };
}
dt(ct, vn, Sn);
dt(ct, Nn, En);
dt(Tn, In, Mn, Xr);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function oi(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let a = n ? t.tr : null;
    return si(a, s, r, e) ? (n && n(a.scrollIntoView()), !0) : !1;
  };
}
function si(r, e, t, n = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let l = s.resolve(e.start - 2);
    o = new Re(l, l, e.depth), e.endIndex < e.parent.childCount && (e = new Re(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let a = mn(o, t, n, e);
  return a ? (r && ai(r, e, a, i, t), !0) : !1;
}
function ai(r, e, t, n, i) {
  let o = g.empty;
  for (let f = t.length - 1; f >= 0; f--)
    o = g.from(t[f].type.create(t[f].attrs, o));
  r.step(new R(e.start - (n ? 2 : 0), e.end, e.start, e.end, new x(o, 0, 0), t.length, !0));
  let s = 0;
  for (let f = 0; f < t.length; f++)
    t[f].type == i && (s = f + 1);
  let a = t.length - s, l = e.start + t.length - (n ? 2 : 0), c = e.parent;
  for (let f = e.startIndex, u = e.endIndex, d = !0; f < u; f++, d = !1)
    !d && a && j(r.doc, l, a) && (r.split(l, a), l += 2 * a), l += c.child(f).nodeSize;
  return r;
}
function _e(r, e) {
  return r instanceof xe ? e == r : r.indexOf(e) > -1;
}
function li(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, o = n.blockRange(i, (s) => s.childCount > 0 && _e(r, s.firstChild.type));
    return o ? t ? _e(r, n.node(o.depth - 1).type) ? ci(e, t, o) : fi(e, t, o) : !0 : !1;
  };
}
function ci(r, e, t) {
  let n = r.tr, i = t.end, o = t.$to.end(t.depth), s = t.parent.child(t.endIndex - 1).type;
  i < o && (n.step(new R(i - 1, o, i, o, new x(g.from(s.create(null, t.parent.copy())), 1, 0), 1, !0)), t = new Re(n.doc.resolve(t.$from.pos), n.doc.resolve(o), t.depth));
  const a = fe(t);
  if (a == null)
    return !1;
  n.lift(t, a);
  let l = n.doc.resolve(n.mapping.map(i, -1) - 1);
  return ne(n.doc, l.pos) && l.nodeBefore.type == l.nodeAfter.type && n.join(l.pos), e(n.scrollIntoView()), !0;
}
function fi(r, e, t) {
  let n = r.tr, i = t.parent;
  for (let p = t.end, w = t.endIndex - 1, m = t.startIndex; w > m; w--)
    p -= i.child(w).nodeSize, n.delete(p - 1, p + 1);
  let o = n.doc.resolve(t.start), s = o.nodeAfter;
  if (n.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let a = t.startIndex == 0, l = t.endIndex == i.childCount, c = o.node(-1), f = o.index(-1);
  if (!c.canReplace(f + (a ? 0 : 1), f + 1, s.content.append(l ? g.empty : g.from(i))))
    return !1;
  let u = o.pos, d = u + s.nodeSize;
  return n.step(new R(u - (a ? 1 : 0), d + (l ? 1 : 0), u + 1, d - 1, new x((a ? g.empty : g.from(i.copy(g.empty))).append(l ? g.empty : g.from(i.copy(g.empty))), a ? 0 : 1, l ? 0 : 1), a ? 0 : 1)), e(n.scrollIntoView()), !0;
}
function ui(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, o = n.blockRange(i, (c) => c.childCount > 0 && _e(r, c.firstChild.type));
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let a = o.parent, l = a.child(s - 1);
    if (!_e(r, l.type))
      return !1;
    if (t) {
      let c = l.lastChild && l.lastChild.type == a.type, f = g.from(c ? l.lastChild.lastChild.type.create() : null), u = new x(g.from(l.type.create(null, g.from(a.type.create(null, f)))), c ? 3 : 1, 0), d = o.start, p = o.end;
      t(e.tr.step(new R(d - (c ? 3 : 1), p, d, p, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function zn(r) {
  const { state: e, transaction: t } = r;
  let { selection: n } = t, { doc: i } = t, { storedMarks: o } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return n;
    },
    get doc() {
      return i;
    },
    get tr() {
      return n = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class hi {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: n } = this, { view: i } = t, { tr: o } = n, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([a, l]) => [a, (...f) => {
      const u = l(...f)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: n, editor: i, state: o } = this, { view: s } = i, a = [], l = !!e, c = e || o.tr, f = () => (!l && t && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), a.every((d) => d === !0)), u = {
      ...Object.fromEntries(Object.entries(n).map(([d, p]) => [d, (...m) => {
        const y = this.buildProps(c, t), b = p(...m)(y);
        return a.push(b), u;
      }])),
      run: f
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: t, state: n } = this, i = !1, o = e || n.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([l, c]) => [l, (...f) => c(...f)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: n, editor: i, state: o } = this, { view: s } = i, a = {
      tr: e,
      editor: i,
      view: s,
      state: zn({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(n).map(([l, c]) => [l, (...f) => c(...f)(a)]));
      }
    };
    return a;
  }
}
function _(r, e, t) {
  return r.config[e] === void 0 && r.parent ? _(r.parent, e, t) : typeof r.config[e] == "function" ? r.config[e].bind({
    ...t,
    parent: r.parent ? _(r.parent, e, t) : null
  }) : r.config[e];
}
function di(r) {
  const e = r.filter((i) => i.type === "extension"), t = r.filter((i) => i.type === "node"), n = r.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: n
  };
}
function M(r, e) {
  if (typeof r == "string") {
    if (!e.nodes[r])
      throw Error(`There is no node type named '${r}'. Maybe you forgot to add the extension?`);
    return e.nodes[r];
  }
  return r;
}
function pi(...r) {
  return r.filter((e) => !!e).reduce((e, t) => {
    const n = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (i === "__proto__") {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        });
        return;
      }
      if (!n[i]) {
        n[i] = o;
        return;
      }
      if (i === "class") {
        const a = o ? String(o).split(" ") : [], l = n[i] ? n[i].split(" ") : [], c = a.filter((f) => !l.includes(f));
        n[i] = [...l, ...c].join(" ");
      } else if (i === "style") {
        const a = o ? o.split(";").map((f) => f.trim()).filter(Boolean) : [], l = n[i] ? n[i].split(";").map((f) => f.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        l.forEach((f) => {
          const [u, d] = f.split(":").map((p) => p.trim());
          c.set(u, d);
        }), a.forEach((f) => {
          const [u, d] = f.split(":").map((p) => p.trim());
          c.set(u, d);
        }), n[i] = Array.from(c.entries()).map(([f, u]) => `${f}: ${u}`).join("; ");
      } else
        n[i] = o;
    }), n;
  }, {});
}
function mi(r) {
  return typeof r == "function";
}
function J(r, e = void 0, ...t) {
  return mi(r) ? e ? r.bind(e)(...t) : r(...t) : r;
}
function gi(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}
function wi(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
function Te(r) {
  return wi(r) !== "Object" ? !1 : r.constructor === Object && Object.getPrototypeOf(r) === Object.prototype;
}
function pt(r, e) {
  const t = { ...r };
  return Te(r) && Te(e) && Object.keys(e).forEach((n) => {
    Te(e[n]) && Te(r[n]) ? t[n] = pt(r[n], e[n]) : t[n] = e[n];
  }), t;
}
class P {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = J(_(this, "addOptions", {
      name: this.name
    }))), this.storage = J(_(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new P(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => pt(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new P({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = J(_(t, "addOptions", {
      name: t.name
    })), t.storage = J(_(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function yi(r, e, t) {
  const { from: n, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = t || {};
  let a = "";
  return r.nodesBetween(n, i, (l, c, f, u) => {
    var d;
    l.isBlock && c > n && (a += o);
    const p = s == null ? void 0 : s[l.type.name];
    if (p)
      return f && (a += p({
        node: l,
        pos: c,
        parent: f,
        index: u,
        range: e
      })), !1;
    l.isText && (a += (d = l == null ? void 0 : l.text) === null || d === void 0 ? void 0 : d.slice(Math.max(n, c) - c, i - c));
  }), a;
}
function xi(r) {
  return Object.fromEntries(Object.entries(r.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
P.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new re({
        key: new ie("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: r } = this, { state: e, schema: t } = r, { doc: n, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((f) => f.$from.pos)), a = Math.max(...o.map((f) => f.$to.pos)), l = xi(t);
            return yi(n, { from: s, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: l
            });
          }
        }
      })
    ];
  }
});
const bi = () => ({ editor: r, view: e }) => (requestAnimationFrame(() => {
  var t;
  r.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), vi = (r = !1) => ({ commands: e }) => e.setContent("", r), ki = () => ({ state: r, tr: e, dispatch: t }) => {
  const { selection: n } = e, { ranges: i } = n;
  return t && i.forEach(({ $from: o, $to: s }) => {
    r.doc.nodesBetween(o.pos, s.pos, (a, l) => {
      if (a.type.isText)
        return;
      const { doc: c, mapping: f } = e, u = c.resolve(f.map(l)), d = c.resolve(f.map(l + a.nodeSize)), p = u.blockRange(d);
      if (!p)
        return;
      const w = fe(p);
      if (a.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(p.start, m);
      }
      (w || w === 0) && e.lift(p, w);
    });
  }), !0;
}, Si = (r) => (e) => r(e), Ci = () => ({ state: r, dispatch: e }) => In(r, e), Ni = (r, e) => ({ editor: t, tr: n }) => {
  const { state: i } = t, o = i.doc.slice(r.from, r.to);
  n.deleteRange(r.from, r.to);
  const s = n.mapping.map(e);
  return n.insert(s, o.content), n.setSelection(new N(n.doc.resolve(Math.max(s - 1, 0)))), !0;
}, Ei = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, n = t.$anchor.node();
  if (n.content.size > 0)
    return !1;
  const i = r.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === n.type) {
      if (e) {
        const a = i.before(o), l = i.after(o);
        r.delete(a, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Ti = (r) => ({ tr: e, state: t, dispatch: n }) => {
  const i = M(r, t.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (n) {
        const l = o.before(s), c = o.after(s);
        e.delete(l, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Ii = (r) => ({ tr: e, dispatch: t }) => {
  const { from: n, to: i } = r;
  return t && e.delete(n, i), !0;
}, Mi = () => ({ state: r, dispatch: e }) => ct(r, e), Ai = () => ({ commands: r }) => r.keyboardShortcut("Enter"), Oi = () => ({ state: r, dispatch: e }) => Zr(r, e);
function Pe(r, e, t = { strict: !0 }) {
  const n = Object.keys(e);
  return n.length ? n.every((i) => t.strict ? e[i] === r[i] : gi(e[i]) ? e[i].test(r[i]) : e[i] === r[i]) : !0;
}
function Rn(r, e, t = {}) {
  return r.find((n) => n.type === e && Pe(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, n.attrs[i]])),
    t
  ));
}
function Lt(r, e, t = {}) {
  return !!Rn(r, e, t);
}
function Bn(r, e, t) {
  var n;
  if (!r || !e)
    return;
  let i = r.parent.childAfter(r.parentOffset);
  if ((!i.node || !i.node.marks.some((f) => f.type === e)) && (i = r.parent.childBefore(r.parentOffset)), !i.node || !i.node.marks.some((f) => f.type === e) || (t = t || ((n = i.node.marks[0]) === null || n === void 0 ? void 0 : n.attrs), !Rn([...i.node.marks], e, t)))
    return;
  let s = i.index, a = r.start() + i.offset, l = s + 1, c = a + i.node.nodeSize;
  for (; s > 0 && Lt([...r.parent.child(s - 1).marks], e, t); )
    s -= 1, a -= r.parent.child(s).nodeSize;
  for (; l < r.parent.childCount && Lt([...r.parent.child(l).marks], e, t); )
    c += r.parent.child(l).nodeSize, l += 1;
  return {
    from: a,
    to: c
  };
}
function H(r, e) {
  if (typeof r == "string") {
    if (!e.marks[r])
      throw Error(`There is no mark type named '${r}'. Maybe you forgot to add the extension?`);
    return e.marks[r];
  }
  return r;
}
const zi = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const o = H(r, n.schema), { doc: s, selection: a } = t, { $from: l, from: c, to: f } = a;
  if (i) {
    const u = Bn(l, o, e);
    if (u && u.from <= c && u.to >= f) {
      const d = N.create(s, u.from, u.to);
      t.setSelection(d);
    }
  }
  return !0;
}, Ri = (r) => (e) => {
  const t = typeof r == "function" ? r(e) : r;
  for (let n = 0; n < t.length; n += 1)
    if (t[n](e))
      return !0;
  return !1;
};
function Fn(r) {
  return r instanceof N;
}
function K(r = 0, e = 0, t = 0) {
  return Math.min(Math.max(r, e), t);
}
function Bi(r, e = null) {
  if (!e)
    return null;
  const t = k.atStart(r), n = k.atEnd(r);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return n;
  const i = t.from, o = n.to;
  return e === "all" ? N.create(r, K(0, i, o), K(r.content.size, i, o)) : N.create(r, K(e, i, o), K(e, i, o));
}
function $t() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Le() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Fi() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
const _i = (r = null, e = {}) => ({ editor: t, view: n, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (Le() || $t()) && n.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (n.focus(), Fi() && !Le() && !$t() && n.dom.focus({ preventScroll: !0 }));
    });
  };
  if (n.hasFocus() && r === null || r === !1)
    return !0;
  if (o && r === null && !Fn(t.state.selection))
    return s(), !0;
  const a = Bi(i.doc, r) || t.state.selection, l = t.state.selection.eq(a);
  return o && (l || i.setSelection(a), l && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, Pi = (r, e) => (t) => r.every((n, i) => e(n, { ...t, index: i })), Li = (r, e) => ({ tr: t, commands: n }) => n.insertContentAt({ from: t.selection.from, to: t.selection.to }, r, e), _n = (r) => {
  const e = r.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const n = e[t];
    n.nodeType === 3 && n.nodeValue && /^(\n\s\s|\n)$/.test(n.nodeValue) ? r.removeChild(n) : n.nodeType === 1 && _n(n);
  }
  return r;
};
function Ie(r) {
  const e = `<body>${r}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return _n(t);
}
function Se(r, e, t) {
  if (r instanceof Q || r instanceof g)
    return r;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const n = typeof r == "object" && r !== null, i = typeof r == "string";
  if (n)
    try {
      if (Array.isArray(r) && r.length > 0)
        return g.fromArray(r.map((a) => e.nodeFromJSON(a)));
      const s = e.nodeFromJSON(r);
      return t.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", r, "Error:", o), Se("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let s = !1, a = "";
      const l = new Mr({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, a = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? ae.fromSchema(l).parseSlice(Ie(r), t.parseOptions) : ae.fromSchema(l).parse(Ie(r), t.parseOptions), t.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${a}`) });
    }
    const o = ae.fromSchema(e);
    return t.slice ? o.parseSlice(Ie(r), t.parseOptions).content : o.parse(Ie(r), t.parseOptions);
  }
  return Se("", e, t);
}
function $i(r, e, t) {
  const n = r.steps.length - 1;
  if (n < e)
    return;
  const i = r.steps[n];
  if (!(i instanceof O || i instanceof R))
    return;
  const o = r.mapping.maps[n];
  let s = 0;
  o.forEach((a, l, c, f) => {
    s === 0 && (s = f);
  }), r.setSelection(k.near(r.doc.resolve(s), t));
}
const Di = (r) => !("type" in r), Ji = (r, e, t) => ({ tr: n, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    t = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let a;
    const l = (y) => {
      o.emit("contentError", {
        editor: o,
        error: y,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        Se(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        l(y);
      }
    try {
      a = Se(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (s = t.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (y) {
      return l(y), !1;
    }
    let { from: f, to: u } = typeof r == "number" ? { from: r, to: r } : { from: r.from, to: r.to }, d = !0, p = !0;
    if ((Di(a) ? a : [a]).forEach((y) => {
      y.check(), d = d ? y.isText && y.marks.length === 0 : !1, p = p ? y.isBlock : !1;
    }), f === u && p) {
      const { parent: y } = n.doc.resolve(f);
      y.isTextblock && !y.type.spec.code && !y.childCount && (f -= 1, u += 1);
    }
    let m;
    if (d) {
      if (Array.isArray(e))
        m = e.map((y) => y.text || "").join("");
      else if (e instanceof g) {
        let y = "";
        e.forEach((b) => {
          b.text && (y += b.text);
        }), m = y;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      n.insertText(m, f, u);
    } else
      m = a, n.replaceWith(f, u, m);
    t.updateSelection && $i(n, n.steps.length - 1, -1), t.applyInputRules && n.setMeta("applyInputRules", { from: f, text: m }), t.applyPasteRules && n.setMeta("applyPasteRules", { from: f, text: m });
  }
  return !0;
}, ji = () => ({ state: r, dispatch: e }) => Gr(r, e), Wi = () => ({ state: r, dispatch: e }) => Kr(r, e), Vi = () => ({ state: r, dispatch: e }) => vn(r, e), qi = () => ({ state: r, dispatch: e }) => Nn(r, e), Hi = () => ({ state: r, dispatch: e, tr: t }) => {
  try {
    const n = Je(r.doc, r.selection.$from.pos, -1);
    return n == null ? !1 : (t.join(n, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Ui = () => ({ state: r, dispatch: e, tr: t }) => {
  try {
    const n = Je(r.doc, r.selection.$from.pos, 1);
    return n == null ? !1 : (t.join(n, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Gi = () => ({ state: r, dispatch: e }) => Hr(r, e), Ki = () => ({ state: r, dispatch: e }) => Ur(r, e);
function Pn() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Yi(r) {
  const e = r.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let n, i, o, s;
  for (let a = 0; a < e.length - 1; a += 1) {
    const l = e[a];
    if (/^(cmd|meta|m)$/i.test(l))
      s = !0;
    else if (/^a(lt)?$/i.test(l))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      i = !0;
    else if (/^s(hift)?$/i.test(l))
      o = !0;
    else if (/^mod$/i.test(l))
      Le() || Pn() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return n && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), s && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const Zi = (r) => ({ editor: e, view: t, tr: n, dispatch: i }) => {
  const o = Yi(r).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), a = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), l = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, a));
  });
  return l == null || l.steps.forEach((c) => {
    const f = c.map(n.mapping);
    f && i && n.maybeStep(f);
  }), !0;
};
function mt(r, e, t = {}) {
  const { from: n, to: i, empty: o } = r.selection, s = e ? M(e, r.schema) : null, a = [];
  r.doc.nodesBetween(n, i, (u, d) => {
    if (u.isText)
      return;
    const p = Math.max(n, d), w = Math.min(i, d + u.nodeSize);
    a.push({
      node: u,
      from: p,
      to: w
    });
  });
  const l = i - n, c = a.filter((u) => s ? s.name === u.node.type.name : !0).filter((u) => Pe(u.node.attrs, t, { strict: !1 }));
  return o ? !!c.length : c.reduce((u, d) => u + d.to - d.from, 0) >= l;
}
const Qi = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = M(r, t.schema);
  return mt(t, i, e) ? Yr(t, n) : !1;
}, Xi = () => ({ state: r, dispatch: e }) => Mn(r, e), eo = (r) => ({ state: e, dispatch: t }) => {
  const n = M(r, e.schema);
  return li(n)(e, t);
}, to = () => ({ state: r, dispatch: e }) => Tn(r, e);
function Ln(r, e) {
  return e.nodes[r] ? "node" : e.marks[r] ? "mark" : null;
}
function Dt(r, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(r).reduce((n, i) => (t.includes(i) || (n[i] = r[i]), n), {});
}
const no = (r, e) => ({ tr: t, state: n, dispatch: i }) => {
  let o = null, s = null;
  const a = Ln(typeof r == "string" ? r : r.name, n.schema);
  return a ? (a === "node" && (o = M(r, n.schema)), a === "mark" && (s = H(r, n.schema)), i && t.selection.ranges.forEach((l) => {
    n.doc.nodesBetween(l.$from.pos, l.$to.pos, (c, f) => {
      o && o === c.type && t.setNodeMarkup(f, void 0, Dt(c.attrs, e)), s && c.marks.length && c.marks.forEach((u) => {
        s === u.type && t.addMark(f, f + c.nodeSize, s.create(Dt(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, ro = () => ({ tr: r, dispatch: e }) => (e && r.scrollIntoView(), !0), io = () => ({ tr: r, dispatch: e }) => {
  if (e) {
    const t = new F(r.doc);
    r.setSelection(t);
  }
  return !0;
}, oo = () => ({ state: r, dispatch: e }) => Sn(r, e), so = () => ({ state: r, dispatch: e }) => En(r, e), ao = () => ({ state: r, dispatch: e }) => ei(r, e), lo = () => ({ state: r, dispatch: e }) => ri(r, e), co = () => ({ state: r, dispatch: e }) => ni(r, e);
function fo(r, e, t = {}, n = {}) {
  return Se(r, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: n.errorOnInvalidContent
  });
}
const uo = (r, e = !1, t = {}, n = {}) => ({ editor: i, tr: o, dispatch: s, commands: a }) => {
  var l, c;
  const { doc: f } = o;
  if (t.preserveWhitespace !== "full") {
    const u = fo(r, i.schema, t, {
      errorOnInvalidContent: (l = n.errorOnInvalidContent) !== null && l !== void 0 ? l : i.options.enableContentCheck
    });
    return s && o.replaceWith(0, f.content.size, u).setMeta("preventUpdate", !e), !0;
  }
  return s && o.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: f.content.size }, r, {
    parseOptions: t,
    errorOnInvalidContent: (c = n.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
  });
};
function ho(r, e) {
  const t = H(e, r.schema), { from: n, to: i, empty: o } = r.selection, s = [];
  o ? (r.storedMarks && s.push(...r.storedMarks), s.push(...r.selection.$head.marks())) : r.doc.nodesBetween(n, i, (l) => {
    s.push(...l.marks);
  });
  const a = s.find((l) => l.type.name === t.name);
  return a ? { ...a.attrs } : {};
}
function po(r) {
  for (let e = 0; e < r.edgeCount; e += 1) {
    const { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function mo(r, e) {
  for (let t = r.depth; t > 0; t -= 1) {
    const n = r.node(t);
    if (e(n))
      return {
        pos: t > 0 ? r.before(t) : 0,
        start: r.start(t),
        depth: t,
        node: n
      };
  }
}
function gt(r) {
  return (e) => mo(e.$from, r);
}
function Ae(r, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => {
    const i = r.find((o) => o.type === e && o.name === n);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function go(r, e, t = {}) {
  const { empty: n, ranges: i } = r.selection, o = e ? H(e, r.schema) : null;
  if (n)
    return !!(r.storedMarks || r.selection.$from.marks()).filter((u) => o ? o.name === u.type.name : !0).find((u) => Pe(u.attrs, t, { strict: !1 }));
  let s = 0;
  const a = [];
  if (i.forEach(({ $from: u, $to: d }) => {
    const p = u.pos, w = d.pos;
    r.doc.nodesBetween(p, w, (m, y) => {
      if (!m.isText && !m.marks.length)
        return;
      const b = Math.max(p, y), z = Math.min(w, y + m.nodeSize), A = z - b;
      s += A, a.push(...m.marks.map(($) => ({
        mark: $,
        from: b,
        to: z
      })));
    });
  }), s === 0)
    return !1;
  const l = a.filter((u) => o ? o.name === u.mark.type.name : !0).filter((u) => Pe(u.mark.attrs, t, { strict: !1 })).reduce((u, d) => u + d.to - d.from, 0), c = a.filter((u) => o ? u.mark.type !== o && u.mark.type.excludes(o) : !0).reduce((u, d) => u + d.to - d.from, 0);
  return (l > 0 ? l + c : l) >= s;
}
function Jt(r, e) {
  const { nodeExtensions: t } = di(e), n = t.find((s) => s.name === r);
  if (!n)
    return !1;
  const i = {
    name: n.name,
    options: n.options,
    storage: n.storage
  }, o = J(_(n, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function $n(r, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var n;
  if (t) {
    if (r.type.name === "hardBreak")
      return !0;
    if (r.isText)
      return /^\s*$/m.test((n = r.text) !== null && n !== void 0 ? n : "");
  }
  if (r.isText)
    return !r.text;
  if (r.isAtom || r.isLeaf)
    return !1;
  if (r.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return r.content.forEach((o) => {
      i !== !1 && ($n(o, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function wo(r, e, t) {
  var n;
  const { selection: i } = e;
  let o = null;
  if (Fn(i) && (o = i.$cursor), o) {
    const a = (n = r.storedMarks) !== null && n !== void 0 ? n : o.marks();
    return !!t.isInSet(a) || !a.some((l) => l.type.excludes(t));
  }
  const { ranges: s } = i;
  return s.some(({ $from: a, $to: l }) => {
    let c = a.depth === 0 ? r.doc.inlineContent && r.doc.type.allowsMarkType(t) : !1;
    return r.doc.nodesBetween(a.pos, l.pos, (f, u, d) => {
      if (c)
        return !1;
      if (f.isInline) {
        const p = !d || d.type.allowsMarkType(t), w = !!t.isInSet(f.marks) || !f.marks.some((m) => m.type.excludes(t));
        c = p && w;
      }
      return !c;
    }), c;
  });
}
const yo = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const { selection: o } = t, { empty: s, ranges: a } = o, l = H(r, n.schema);
  if (i)
    if (s) {
      const c = ho(n, l);
      t.addStoredMark(l.create({
        ...c,
        ...e
      }));
    } else
      a.forEach((c) => {
        const f = c.$from.pos, u = c.$to.pos;
        n.doc.nodesBetween(f, u, (d, p) => {
          const w = Math.max(p, f), m = Math.min(p + d.nodeSize, u);
          d.marks.find((b) => b.type === l) ? d.marks.forEach((b) => {
            l === b.type && t.addMark(w, m, l.create({
              ...b.attrs,
              ...e
            }));
          }) : t.addMark(w, m, l.create(e));
        });
      });
  return wo(n, t, l);
}, xo = (r, e) => ({ tr: t }) => (t.setMeta(r, e), !0), bo = (r, e = {}) => ({ state: t, dispatch: n, chain: i }) => {
  const o = M(r, t.schema);
  let s;
  return t.selection.$anchor.sameParent(t.selection.$head) && (s = t.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: a }) => Pt(o, { ...s, ...e })(t) ? !0 : a.clearNodes()).command(({ state: a }) => Pt(o, { ...s, ...e })(a, n)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, vo = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, i = K(r, 0, n.content.size), o = C.create(n, i);
    e.setSelection(o);
  }
  return !0;
}, ko = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, { from: i, to: o } = typeof r == "number" ? { from: r, to: r } : r, s = N.atStart(n).from, a = N.atEnd(n).to, l = K(i, s, a), c = K(o, s, a), f = N.create(n, l, c);
    e.setSelection(f);
  }
  return !0;
}, So = (r) => ({ state: e, dispatch: t }) => {
  const n = M(r, e.schema);
  return ui(n)(e, t);
};
function jt(r, e) {
  const t = r.storedMarks || r.selection.$to.parentOffset && r.selection.$from.marks();
  if (t) {
    const n = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    r.tr.ensureMarks(n);
  }
}
const Co = ({ keepMarks: r = !0 } = {}) => ({ tr: e, state: t, dispatch: n, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: a, $to: l } = o, c = i.extensionManager.attributes, f = Ae(c, a.node().type.name, a.node().attrs);
  if (o instanceof C && o.node.isBlock)
    return !a.parentOffset || !j(s, a.pos) ? !1 : (n && (r && jt(t, i.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const u = l.parentOffset === l.parent.content.size, d = a.depth === 0 ? void 0 : po(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let p = u && d ? [
    {
      type: d,
      attrs: f
    }
  ] : void 0, w = j(e.doc, e.mapping.map(a.pos), 1, p);
  if (!p && !w && j(e.doc, e.mapping.map(a.pos), 1, d ? [{ type: d }] : void 0) && (w = !0, p = d ? [
    {
      type: d,
      attrs: f
    }
  ] : void 0), n) {
    if (w && (o instanceof N && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, p), d && !u && !a.parentOffset && a.parent.type !== d)) {
      const m = e.mapping.map(a.before()), y = e.doc.resolve(m);
      a.node(-1).canReplaceWith(y.index(), y.index() + 1, d) && e.setNodeMarkup(e.mapping.map(a.before()), d);
    }
    r && jt(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return w;
}, No = (r, e = {}) => ({ tr: t, state: n, dispatch: i, editor: o }) => {
  var s;
  const a = M(r, n.schema), { $from: l, $to: c } = n.selection, f = n.selection.node;
  if (f && f.isBlock || l.depth < 2 || !l.sameParent(c))
    return !1;
  const u = l.node(-1);
  if (u.type !== a)
    return !1;
  const d = o.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== a || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (i) {
      let b = g.empty;
      const z = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let W = l.depth - z; W >= l.depth - 3; W -= 1)
        b = g.from(l.node(W).copy(b));
      const A = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, $ = {
        ...Ae(d, l.node().type.name, l.node().attrs),
        ...e
      }, L = ((s = a.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill($)) || void 0;
      b = b.append(g.from(a.createAndFill(null, L) || void 0));
      const D = l.before(l.depth - (z - 1));
      t.replace(D, l.after(-A), new x(b, 4 - z, 0));
      let oe = -1;
      t.doc.nodesBetween(D, t.doc.content.size, (W, Vn) => {
        if (oe > -1)
          return !1;
        W.isTextblock && W.content.size === 0 && (oe = Vn + 1);
      }), oe > -1 && t.setSelection(N.near(t.doc.resolve(oe))), t.scrollIntoView();
    }
    return !0;
  }
  const p = c.pos === l.end() ? u.contentMatchAt(0).defaultType : null, w = {
    ...Ae(d, u.type.name, u.attrs),
    ...e
  }, m = {
    ...Ae(d, l.node().type.name, l.node().attrs),
    ...e
  };
  t.delete(l.pos, c.pos);
  const y = p ? [
    { type: a, attrs: w },
    { type: p, attrs: m }
  ] : [{ type: a, attrs: w }];
  if (!j(t.doc, l.pos, 2))
    return !1;
  if (i) {
    const { selection: b, storedMarks: z } = n, { splittableMarks: A } = o.extensionManager, $ = z || b.$to.parentOffset && b.$from.marks();
    if (t.split(l.pos, 2, y).scrollIntoView(), !$ || !i)
      return !0;
    const L = $.filter((D) => A.includes(D.type.name));
    t.ensureMarks(L);
  }
  return !0;
}, Ge = (r, e) => {
  const t = gt((s) => s.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === (i == null ? void 0 : i.type) && ne(r.doc, t.pos) && r.join(t.pos), !0;
}, Ke = (r, e) => {
  const t = gt((s) => s.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(t.start).after(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === (i == null ? void 0 : i.type) && ne(r.doc, n) && r.join(n), !0;
}, Eo = (r, e, t, n = {}) => ({ editor: i, tr: o, state: s, dispatch: a, chain: l, commands: c, can: f }) => {
  const { extensions: u, splittableMarks: d } = i.extensionManager, p = M(r, s.schema), w = M(e, s.schema), { selection: m, storedMarks: y } = s, { $from: b, $to: z } = m, A = b.blockRange(z), $ = y || m.$to.parentOffset && m.$from.marks();
  if (!A)
    return !1;
  const L = gt((D) => Jt(D.type.name, u))(m);
  if (A.depth >= 1 && L && A.depth - L.depth <= 1) {
    if (L.node.type === p)
      return c.liftListItem(w);
    if (Jt(L.node.type.name, u) && p.validContent(L.node.content) && a)
      return l().command(() => (o.setNodeMarkup(L.pos, p), !0)).command(() => Ge(o, p)).command(() => Ke(o, p)).run();
  }
  return !t || !$ || !a ? l().command(() => f().wrapInList(p, n) ? !0 : c.clearNodes()).wrapInList(p, n).command(() => Ge(o, p)).command(() => Ke(o, p)).run() : l().command(() => {
    const D = f().wrapInList(p, n), oe = $.filter((W) => d.includes(W.type.name));
    return o.ensureMarks(oe), D ? !0 : c.clearNodes();
  }).wrapInList(p, n).command(() => Ge(o, p)).command(() => Ke(o, p)).run();
}, To = (r, e = {}, t = {}) => ({ state: n, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, s = H(r, n.schema);
  return go(n, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, Io = (r, e, t = {}) => ({ state: n, commands: i }) => {
  const o = M(r, n.schema), s = M(e, n.schema), a = mt(n, o, t);
  let l;
  return n.selection.$anchor.sameParent(n.selection.$head) && (l = n.selection.$anchor.parent.attrs), a ? i.setNode(s, l) : i.setNode(o, { ...l, ...t });
}, Mo = (r, e = {}) => ({ state: t, commands: n }) => {
  const i = M(r, t.schema);
  return mt(t, i, e) ? n.lift(i) : n.wrapIn(i, e);
}, Ao = () => ({ state: r, dispatch: e }) => {
  const t = r.plugins;
  for (let n = 0; n < t.length; n += 1) {
    const i = t[n];
    let o;
    if (i.spec.isInputRules && (o = i.getState(r))) {
      if (e) {
        const s = r.tr, a = o.transform;
        for (let l = a.steps.length - 1; l >= 0; l -= 1)
          s.step(a.steps[l].invert(a.docs[l]));
        if (o.text) {
          const l = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, r.schema.text(o.text, l));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, Oo = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, { empty: n, ranges: i } = t;
  return n || e && i.forEach((o) => {
    r.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, zo = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: a } = t, l = H(r, n.schema), { $from: c, empty: f, ranges: u } = a;
  if (!i)
    return !0;
  if (f && s) {
    let { from: d, to: p } = a;
    const w = (o = c.marks().find((y) => y.type === l)) === null || o === void 0 ? void 0 : o.attrs, m = Bn(c, l, w);
    m && (d = m.from, p = m.to), t.removeMark(d, p, l);
  } else
    u.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, l);
    });
  return t.removeStoredMark(l), !0;
}, Ro = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  let o = null, s = null;
  const a = Ln(typeof r == "string" ? r : r.name, n.schema);
  return a ? (a === "node" && (o = M(r, n.schema)), a === "mark" && (s = H(r, n.schema)), i && t.selection.ranges.forEach((l) => {
    const c = l.$from.pos, f = l.$to.pos;
    let u, d, p, w;
    t.selection.empty ? n.doc.nodesBetween(c, f, (m, y) => {
      o && o === m.type && (p = Math.max(y, c), w = Math.min(y + m.nodeSize, f), u = y, d = m);
    }) : n.doc.nodesBetween(c, f, (m, y) => {
      y < c && o && o === m.type && (p = Math.max(y, c), w = Math.min(y + m.nodeSize, f), u = y, d = m), y >= c && y <= f && (o && o === m.type && t.setNodeMarkup(y, void 0, {
        ...m.attrs,
        ...e
      }), s && m.marks.length && m.marks.forEach((b) => {
        if (s === b.type) {
          const z = Math.max(y, c), A = Math.min(y + m.nodeSize, f);
          t.addMark(z, A, s.create({
            ...b.attrs,
            ...e
          }));
        }
      }));
    }), d && (u !== void 0 && t.setNodeMarkup(u, void 0, {
      ...d.attrs,
      ...e
    }), s && d.marks.length && d.marks.forEach((m) => {
      s === m.type && t.addMark(p, w, s.create({
        ...m.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, Bo = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = M(r, t.schema);
  return ii(i, e)(t, n);
}, Fo = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = M(r, t.schema);
  return oi(i, e)(t, n);
};
var _o = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: bi,
  clearContent: vi,
  clearNodes: ki,
  command: Si,
  createParagraphNear: Ci,
  cut: Ni,
  deleteCurrentNode: Ei,
  deleteNode: Ti,
  deleteRange: Ii,
  deleteSelection: Mi,
  enter: Ai,
  exitCode: Oi,
  extendMarkRange: zi,
  first: Ri,
  focus: _i,
  forEach: Pi,
  insertContent: Li,
  insertContentAt: Ji,
  joinBackward: Vi,
  joinDown: Wi,
  joinForward: qi,
  joinItemBackward: Hi,
  joinItemForward: Ui,
  joinTextblockBackward: Gi,
  joinTextblockForward: Ki,
  joinUp: ji,
  keyboardShortcut: Zi,
  lift: Qi,
  liftEmptyBlock: Xi,
  liftListItem: eo,
  newlineInCode: to,
  resetAttributes: no,
  scrollIntoView: ro,
  selectAll: io,
  selectNodeBackward: oo,
  selectNodeForward: so,
  selectParentNode: ao,
  selectTextblockEnd: lo,
  selectTextblockStart: co,
  setContent: uo,
  setMark: yo,
  setMeta: xo,
  setNode: bo,
  setNodeSelection: vo,
  setTextSelection: ko,
  sinkListItem: So,
  splitBlock: Co,
  splitListItem: No,
  toggleList: Eo,
  toggleMark: To,
  toggleNode: Io,
  toggleWrap: Mo,
  undoInputRule: Ao,
  unsetAllMarks: Oo,
  unsetMark: zo,
  updateAttributes: Ro,
  wrapIn: Bo,
  wrapInList: Fo
});
P.create({
  name: "commands",
  addCommands() {
    return {
      ..._o
    };
  }
});
P.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new re({
        key: new ie("tiptapDrop"),
        props: {
          handleDrop: (r, e, t, n) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: n
            });
          }
        }
      })
    ];
  }
});
P.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new re({
        key: new ie("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
});
const Po = new ie("focusEvents");
P.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: r } = this;
    return [
      new re({
        key: Po,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              r.isFocused = !0;
              const n = r.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            },
            blur: (e, t) => {
              r.isFocused = !1;
              const n = r.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            }
          }
        }
      })
    ];
  }
});
P.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const r = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: a }) => {
        const { selection: l, doc: c } = a, { empty: f, $anchor: u } = l, { pos: d, parent: p } = u, w = u.parent.isTextblock && d > 0 ? a.doc.resolve(d - 1) : u, m = w.parent.type.spec.isolating, y = u.pos - u.parentOffset, b = m && w.parent.childCount === 1 ? y === u.pos : k.atStart(c).from === d;
        return !f || !p.type.isTextblock || p.textContent.length || !b || b && u.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), n = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: r,
      "Mod-Backspace": r,
      "Shift-Backspace": r,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...n
    }, o = {
      ...n,
      "Ctrl-h": r,
      "Alt-Backspace": r,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Le() || Pn() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new re({
        key: new ie("clearDocument"),
        appendTransaction: (r, e, t) => {
          if (r.some((m) => m.getMeta("composition")))
            return;
          const n = r.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = r.some((m) => m.getMeta("preventClearDocument"));
          if (!n || i)
            return;
          const { empty: o, from: s, to: a } = e.selection, l = k.atStart(e.doc).from, c = k.atEnd(e.doc).to;
          if (o || !(s === l && a === c) || !$n(t.doc))
            return;
          const d = t.tr, p = zn({
            state: t,
            transaction: d
          }), { commands: w } = new hi({
            editor: this.editor,
            state: p
          });
          if (w.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
});
P.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new re({
        key: new ie("tiptapPaste"),
        props: {
          handlePaste: (r, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
});
P.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new re({
        key: new ie("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class $e {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = J(_(this, "addOptions", {
      name: this.name
    }))), this.storage = J(_(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new $e(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => pt(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new $e(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = J(_(t, "addOptions", {
      name: t.name
    })), t.storage = J(_(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
const nt = "weggs-agency/callout", ge = "weggsAgencyCallout", Dn = "theme-weggs-agency", wt = ["info", "warning", "success"], ee = { tone: "info", text: "" };
function Lo(r) {
  const e = new TextEncoder().encode(JSON.stringify(r));
  let t = "";
  for (const n of e) t += String.fromCharCode(n);
  return btoa(t);
}
function Jn(r) {
  if (!r) return { ...ee };
  try {
    const e = atob(r), t = new TextDecoder().decode(Uint8Array.from(e, (i) => i.charCodeAt(0))), n = { ...ee, ...JSON.parse(t) };
    return { tone: wt.includes(n.tone) ? n.tone : "info", text: String(n.text ?? "") };
  } catch {
    return { ...ee };
  }
}
function $o(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function jn(r) {
  return `<aside class="weggs-agency-callout weggs-agency-callout--${r.tone}" role="note"><p>${$o(r.text)}</p></aside>`;
}
const Wn = "<style>.weggs-agency-callout{border-left:4px solid;padding:.75rem 1rem;margin:1.5rem 0;border-radius:.375rem}.weggs-agency-callout p{margin:0}.weggs-agency-callout--info{border-color:#2563eb;background:#eff6ff;color:#1e3a8a}.weggs-agency-callout--warning{border-color:#d97706;background:#fffbeb;color:#78350f}.weggs-agency-callout--success{border-color:#16a34a;background:#f0fdf4;color:#14532d}</style>", Do = /<div\s+([^>]*data-cms-block="weggs-agency\/callout"[^>]*)>\s*<\/div>/g;
function Jo(r) {
  let e = !1;
  const t = r.replace(Do, (n, i) => {
    var o;
    return e = !0, jn(Jn((o = /data-attrs="([^"]*)"/.exec(i)) == null ? void 0 : o[1]));
  });
  return e ? Wn + t : t;
}
const jo = $e.create({
  name: ge,
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addAttributes() {
    return {
      // ONE attribute holding every field, stored base64 in data-attrs.
      attrs: {
        default: ee,
        parseHTML: (r) => Jn(r.getAttribute("data-attrs")),
        renderHTML: (r) => ({ "data-attrs": Lo(r.attrs ?? ee) })
      }
    };
  },
  parseHTML() {
    return [{ tag: `div[data-cms-block="${nt}"]` }];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["div", pi(r, { "data-cms-block": nt })];
  },
  addNodeView() {
    return ({ node: r }) => {
      const e = document.createElement("div"), t = (n) => {
        e.innerHTML = Wn + jn({ ...n, text: n.text || "…" });
      };
      return t(r.attrs.attrs), {
        dom: e,
        update(n) {
          return n.type.name !== ge ? !1 : (t(n.attrs.attrs), !0);
        }
      };
    };
  }
});
function Wo({ className: r }) {
  return /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2, className: r, "aria-hidden": "true", children: /* @__PURE__ */ h("path", { d: "M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) });
}
function Vo({ attrs: r, updateAttrs: e }) {
  const { t } = Vt(Dn), n = { ...ee, ...r.attrs ?? {} }, [i, o] = Ye(n.text);
  Wt(() => o(n.text), [n.text]);
  const s = (a) => e({ attrs: { ...n, ...a } });
  return /* @__PURE__ */ v("div", { className: "space-y-3", children: [
    /* @__PURE__ */ v("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ h("span", { className: "label", children: t("callout.tone") }),
      /* @__PURE__ */ h("select", { className: "input w-full", value: n.tone, onChange: (a) => s({ tone: a.target.value }), children: wt.map((a) => /* @__PURE__ */ h("option", { value: a, children: t(`callout.${a}`) }, a)) })
    ] }),
    /* @__PURE__ */ v("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ h("span", { className: "label", children: t("callout.text") }),
      /* @__PURE__ */ h(
        "textarea",
        {
          className: "input w-full",
          rows: 4,
          value: i,
          onChange: (a) => o(a.target.value),
          onBlur: () => i !== n.text && s({ text: i })
        }
      )
    ] })
  ] });
}
const qo = {
  id: nt,
  // The Tiptap node name: required for ids containing "/", otherwise the
  // editor never recognises the block as active (no inspector).
  nodeName: ge,
  titleKey: "callout.title",
  namespace: Dn,
  icon: Wo,
  category: "text",
  extensions: [jo],
  insert: (r) => r.insertContent({ type: ge, attrs: { attrs: { ...ee, text: "Write something here" } } }).run(),
  isActive: (r) => r.isActive(ge),
  inspector: Vo,
  // What each attribute does, for agents: `agentcms content blocks weggs-agency/callout`
  // (closed lists in `values` are enforced on --attrs).
  attrsSchema: {
    tone: { description: "Color and icon of the callout.", values: wt },
    text: { description: "Text of the callout (plain text)." }
  }
}, Yo = {
  id: "weggs-agency",
  name: "Weggs Agency",
  version: "1.0.0",
  description: "Thème vitrine pour l'agence Weggs — clair, premium, éditorial",
  readme: Qn,
  scssEntry: "theme.css",
  cssText: yt,
  // Uploaded as theme-assets/weggs-agency-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: Zn,
  // Image variants generated for every upload while this theme is active.
  imageFormats: {
    inputFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    outputFormat: "webp",
    quality: 80,
    defaultFormat: "medium",
    formats: {
      small: { width: 480, height: 320, fit: "cover" },
      medium: { width: 960, height: 640, fit: "cover" },
      large: { width: 1600, height: 900, fit: "cover" }
    }
  },
  templates: {
    base: tr,
    home: rr,
    single: ir,
    category: or,
    author: sr,
    notFound: ar
  },
  // /theme-settings page; the saved config is baked into the uploaded CSS.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: le, component: ur, schema: lr },
  compileCss: (r) => fr(yt, r),
  // Translations, namespace "theme-weggs-agency" (admin UI + public labels).
  i18n: hr,
  // Editor blocks offered while this theme is active.
  blocks: [qo],
  // Called when the theme becomes active (after the plugins).
  register(r) {
    r.addFilter("post.html.body", (e) => Jo(e));
  }
};
export {
  Yo as default
};
