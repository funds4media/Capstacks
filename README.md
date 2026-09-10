# Capital Stacks of Journalism — coming soon page

Static coming-soon page for capitalstacks.media, published by the Center for Sustainable Media. Deployed on Vercel from this GitHub repo; every push to the production branch redeploys.

- `index.html` — the deployed page, hand-built as plain HTML from the design source below (no runtime dependencies beyond Google Fonts and the funds4media.org feed).
- `Capital Stacks Coming Soon.dc.html` + `support.js` + `_ds/` + `assets/` — the editable design source.
- `vercel.json` — Vercel config. The site is a static deploy with no build step; Vercel serves `index.html` at the root.

To change the page, edit `index.html` directly, or update the `.dc.html` source and port the change across. The bundled export from the design tool is not committed because it lagged behind the source.
