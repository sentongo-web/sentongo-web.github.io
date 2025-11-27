# copilot-instructions.md — sentongo-web.github.io

Purpose
- Help AI coding agents understand this repo's architecture, workflows, and where to make safe, productive changes.

Big picture
- This is a small, static GitHub Pages site. It is served from the `docs/` folder, but the actual HTML/CSS/JS content is currently nested under `docs/docs/assets/docs/` (index, assets, script, styles are inside that folder).
- No backend code; the site is client-side only (HTML/CSS/JS). Jekyll is optional (see `_config.yml`), but the project currently uses plain static assets.

Key files and locations
- `docs/_config.yml` — Jekyll settings (theme, plugins, and `baseurl` comment). Update `baseurl` if the repo is not `username.github.io`.
- `docs/Readme.md` — Local run instructions and deployment tips.
- `docs/index.html` — Main page HTML. The site expects `index.html` to live at `docs/` so GitHub Pages can find it.
- `docs/script.js` — Main interactive JS. Contains the `posts` array that powers the blog list, the theme toggle logic, and search/tag filtering.
- `docs/styles.css` — Styling and design tokens (CSS variables) for light/dark themes.
- `docs/assets/profile.png` — Profile image used in the hero card. Add `profile.webp` for best performance.

Important patterns & conventions (do not change without review)
- Static posts live inside `script.js` as a JS array. Each post uses the fields: `title`, `date`, `tags` (array), `summary`, `body`. Example object:
  {
    title: 'My Title',
    date: 'June 2025',
    tags: ['MLOps','Product'],
    summary: 'Short summary',
    body: `Long string body...`,
  }
- To add a post, append to `posts` in `script.js` and keep content short/plain. Avoid embedding HTML in `body` (the template populates content directly).
- Tag filtering may use only the first tag for the visual card (`card.querySelector('.tag').textContent = post.tags[0];`) and uses `Array.from(new Set(posts.flatMap(...)))` to build the tag list — maintain this structure if refactoring.
- Theme switch uses the `data-theme` attribute on `<html>` and localStorage key `theme` — edit `styles.css` variables (`--bg`, `--panel`, `--text`, etc.) to alter themes consistently.
- Visual tokens: `--accent`, `--accent-solid`, `--glow`, and `--shadow` are used across the site; prefer using these tokens to change color/brightness rather than deep class edits.
- Reuse the `card` class for content blocks; `hover-card` adds the hover glow; `pill` is used for tags and filters.

Local dev & debugging
- Quick run (no dependencies):
  - Python built-in server from the repo root:
    python -m http.server 8000 --directory docs
    Then open `http://localhost:8000/` (server root) — the site now serves correctly from `docs/index.html`.
- Jekyll (if you want layout, SEO tags, or plugin behavior):
  - Install dependencies: `bundle install` in repo root (if a `Gemfile` is added)
  - Serve locally: `bundle exec jekyll serve --source docs --livereload`
  - If you use Jekyll and move content to `docs/index.html`, the server will serve the site at `http://localhost:4000/`.
- Deployment: GitHub Pages — configure in Settings → Pages: set branch to `main` (or `work`) and source to `/docs`.

When to create or update files
 - Adding blog posts: Edit `docs/script.js` -- do not forget to keep tag arrays simple and update templates if you need to support richer content.
 - Styling changes: `docs/styles.css` is the single source of truth for tokens; prefer editing variables at the top for site-wide changes.
- - Assets: Replace `profile.png` in `docs/assets/` and keep the filename to avoid index changes; optionally provide `profile.webp` for improved compression.

Testing & validation
- Visual checks are the main validation method. Use the local server workflow above.
- The repository contains no test harness or CI; avoid large refactors without manual QA and screenshots or a live preview URL.

Small improvement ideas (documented so AI helps discuss them, not to be implemented silently)
- Consider moving `index.html`, `styles.css`, and `script.js` one level up to `docs/` for simpler hosting & better convention adherence.
- If the site grows, move `posts` to a JSON file (e.g., `posts.json`) or adopt Jekyll posts for easier content authoring and SEO.

Editing rules for AI agents (be conservative)
- Keep changes small and reversible.
- Preserve existing markup and class names unless refactoring a named component across all files.
- When changing behavior (JS), add comments explaining intent and preserve accessibility attributes (aria-pressed, role=list/listitem).
- Do not add third-party analytics or external script imports without explicit permission.

Examples (in-repo) to reference
- Posts array: `docs/script.js` (see `posts` variable near top)
- Theme CSS variables: `docs/styles.css` (:root and [data-theme="dark"]).
- Main page skeleton: `docs/index.html` (hero, blog grid, templates)

If anything here is unclear or you need a deeper dive (e.g., refactor plan, move to Jekyll, accessibility audit), ask for permission before making large changes.
