# Capital Stacks of Journalism — coming soon page

Static coming-soon page for capitalstacks.media, published by the Center for Sustainable Media. Deployed on Vercel from this GitHub repo; every push to the production branch redeploys.

- `index.html` — the deployable, self-contained page (serve this at the site root).
- `Capital Stacks Coming Soon.dc.html` + `support.js` + `_ds/` + `assets/` — the editable design source the page was bundled from.
- `vercel.json` — Vercel config. The site is a static deploy with no build step; Vercel serves `index.html` at the root.

To change the page, edit the `.dc.html` source, re-export the bundled HTML, and copy it over `index.html`.
