diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..1ce5db3212d3043d09e09d93ca61444008feb822
--- /dev/null
+++ b/README.md
@@ -0,0 +1,23 @@
+# Data Science & AI Portfolio
+
+This repository hosts a personal GitHub Pages site (served from the `docs/` directory) that highlights data science and AI work with a minimal, responsive design plus light/dark themes.
+
+## Run locally
+1. Install dependencies (optional): `bundle install` if you want to run Jekyll locally. The site is plain HTML/CSS/JS, so you can also serve it directly.
+2. Serve the site:
+   - With Jekyll: `bundle exec jekyll serve --source docs --livereload`
+   - With Python: `python -m http.server 8000 --directory docs`
+3. Open `http://localhost:4000` (Jekyll) or `http://localhost:8000` (Python) in your browser.
+
+## Deploy on GitHub Pages
+1. Push this branch to GitHub.
+2. In repository **Settings → Pages**, choose **Source: Deploy from a branch**.
+3. Select the `work` (or `main`) branch and the `/docs` folder, then save.
+4. After Pages finishes building, your site will be available at:
+   - `https://<username>.github.io/Data-mining/` (for a project site), or
+   - `https://<username>.github.io/` if this repo is named `<username>.github.io`.
+
+## Customization
+- Update `docs/index.html`, `docs/styles.css`, and `docs/script.js` to adjust copy, styling, or add posts.
+- Replace `docs/assets/profile.svg` with your own portrait image (keep the same filename for simplicity).
+- If your repo name changes, set `baseurl` in `docs/_config.yml` so asset links resolve correctly when using Jekyll.
