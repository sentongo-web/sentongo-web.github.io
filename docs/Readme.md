# Data Science & AI Portfolio

This repository hosts a personal GitHub Pages site (served from the `docs/` directory) that highlights data science and AI work with a minimal, responsive design plus light/dark themes.

## Run locally
1. Install dependencies (optional): `bundle install` if you want to run Jekyll locally. The site is plain HTML/CSS/JS, so you can also serve it directly.
2. Serve the site:
   - With Jekyll: `bundle exec jekyll serve --source docs --livereload`
   - With Python: `python -m http.server 8000 --directory docs`
3. Open `http://localhost:4000` (Jekyll) or `http://localhost:8000` (Python) in your browser.

## Deploy on GitHub Pages
1. Push this branch to GitHub.
2. In repository **Settings → Pages**, choose **Source: Deploy from a branch**.
3. Select the `work` (or `main`) branch and the `/docs` folder, then save.
4. After Pages finishes building, your site will be available at:
   - `https://<username>.github.io/Data-mining/` (for a project site), or
   - `https://<username>.github.io/` if this repo is named `<username>.github.io`.

## Customization
- Update `docs/index.html`, `docs/styles.css`, and `docs/script.js` to adjust copy, styling, or add posts.
- Replace `assets/paul-passport.png` with your portrait image (keep the same filename for simplicity); optionally add `assets/paul-passport-260.png` and `assets/paul-passport-520.png` plus `assets/paul-passport-260.webp` and `assets/paul-passport-520.webp` for better responsive loading.
 - Generate responsive sizes (260px and 520px) and WebP files locally with ImageMagick + cwebp (script included at `scripts/generate-srcset.ps1`).
- If your repo name changes, set `baseurl` in `docs/_config.yml` so asset links resolve correctly when using Jekyll.
 - To auto-generate optimized images on push, a GitHub Action `optimize-images.yml` has been added; it will create `-260` and `-520` sized PNG and WebP files for any images pushed to `assets/`.
# Data Science & AI Portfolio

This repository hosts a personal GitHub Pages site (served from the `docs/` directory) that highlights data science and AI work with a minimal, responsive design plus light/dark themes.

## Run locally
1. Install dependencies (optional): `bundle install` if you want to run Jekyll locally. The site is plain HTML/CSS/JS, so you can also serve it directly.
2. Serve the site:
   - With Jekyll: `bundle exec jekyll serve --source docs --livereload`
   - With Python: `python -m http.server 8000 --directory docs`
3. Open `http://localhost:4000` (Jekyll) or `http://localhost:8000` (Python) in your browser.

## Deploy on GitHub Pages
1. Push this branch to GitHub.
2. In repository **Settings → Pages**, choose **Source: Deploy from a branch**.
3. Select the `work` (or `main`) branch and the `/docs` folder, then save.
4. After Pages finishes building, your site will be available at:
   - `https://<username>.github.io/Data-mining/` (for a project site), or
   - `https://<username>.github.io/` if this repo is named `<username>.github.io`.

## Customization
- Update `docs/index.html`, `docs/styles.css`, and `docs/script.js` to adjust copy, styling, or add posts.
- Replace `assets/paul-passport.png` with your portrait image (keep the same filename for simplicity); optionally add `assets/paul-passport-260.webp` and `assets/paul-passport-520.webp` for improved performance.
- If your repo name changes, set `baseurl` in `docs/_config.yml` so asset links resolve correctly when using Jekyll.
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
## Customization
- Update `docs/index.html`, `docs/styles.css`, and `docs/script.js` to adjust copy, styling, or add posts.
- Replace `assets/profile.svg` or `assets/paul-passport.png` with your portrait image (keep the same filename for simplicity). The repo also supports responsive sized images (`-260`/`-520`) and WebP versions. Use `scripts/generate-srcset.ps1` to generate these locally or let the GitHub Action `optimize-images.yml` auto-generate them on push.
