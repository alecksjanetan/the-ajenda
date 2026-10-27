# The AJenda — Alex Jane Tan portfolio site

This is a buildless static site designed for GitHub Pages. It uses only HTML, CSS and vanilla JavaScript, so it can be deployed from the repository root without a build step.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository for the portfolio.
2. Put the contents of this folder at the repository root, or use this folder as the repository itself.
3. Push the files to GitHub.
4. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

The site is called **The AJenda**. Search for `The AJenda` and `Alex Jane Tan` in `index.html` if the title, meta description or wordmark needs to change later. Personal branding assets live in `assets/brand/`, including the AJ monogram, Little Command logo and selected Little Command bot icons. The site bundles `Lexique-Regular.otf` in `assets/fonts/` so the body type travels with the site on GitHub Pages.

The page includes vanilla-JavaScript scroll reveals, a scroll progress indicator, pointer parallax on the hero artwork and an interactive code console. The code lab references experiments from the local `Code` folder (circular sliders, checklists and horizontal scroll) without copying private project files into the public site. The Little Command panel is a sanitized portfolio mockup using the supplied brand assets; it does not expose live chat or private work messages.
