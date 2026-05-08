Website Overview (~/claude_code_files/site)

Folder structure:
- src/: source files for Eleventy (Nunjucks templates, assets, pages)
  - _includes/layout.njk: main HTML layout with header, navigation, fade‑in animation, and active‑tab shadow styling.
  - index.njk, about.njk, research.njk, publications.njk: content pages rendered by Eleventy.
  - cv/: contains your CV PDF (Bhaskar_Goswami_CV.pdf) for download.
  - assets/css/tailwind.css: Tailwind entry file (imports @tailwind directives).
- _site/: generated output after running `npm run build` or `npm run dev`.
  - assets/css/style.css: compiled Tailwind CSS.
  - index.html, about/index.html, etc.: final static HTML pages served by Eleventy.
- images/: static images (e.g., Profile.jpg) copied to the output via Eleventy passthrough.
- .eleventy.js: config that copies src/assets and images to the output directory.
- package.json: npm scripts
  - dev: builds CSS and starts Eleventy dev server.
  - build: builds CSS and generates static site.
  - build:css: runs Tailwind CLI (via tailwindcss-cli) to produce style.css.
- tailwind.config.cjs: Tailwind configuration, extended with a simple fadeIn animation.
- postcss.config.cjs: uses Tailwind and autoprefixer as PostCSS plugins.

Key customizations:
- Navigation now starts with Home and highlights the current page with a shadow (conditional Tailwind classes).
- Subtle fadeIn animation applied to main container and sections for a smoother appearance.
- Images are correctly copied, so the profile picture appears on the home page.
- CV is available at /cv/Bhaskar_Goswami_CV.pdf.

Development workflow:
1. Run `npm install` once to install dependencies.
2. Use `npm run dev` to build CSS and start the live server (http://localhost:8080).
3. Edit files under src/; changes auto‑reload when you refresh the browser.
4. When ready, run `npm run build` to generate a production‑ready static site in _site/.

This file serves as a quick reference for the project layout, scripts, and custom features.

