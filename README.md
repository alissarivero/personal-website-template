# Personal Website Templates

Ready-to-edit personal websites. Use this template, clone it, open it in Cursor, and choose a look.

**Start here:** [Step by step: fork, open in Cursor, publish](WALKTHROUGH.md)

Every option already has a working page, a responsive layout, placeholder content, basic SEO, and GitHub Pages support. No Hugo, npm, or build step.

## Choose a template

Open the gallery first: [index.html](index.html)

| Template | Best if you want | Folder |
|---|---|---|
| [Editorial](templates/editorial/) | A warm magazine-style portfolio | `templates/editorial/` |
| [Midnight](templates/midnight/) | A dark, technical developer site | `templates/midnight/` |
| [Scholar](templates/scholar/) | An academic CV homepage | `templates/scholar/` |
| [Studio](templates/studio/) | Bold type and visual project blocks | `templates/studio/` |
| [Letter](templates/letter/) | A quiet one-column page | `templates/letter/` |

## Edit your website URL

Your public URL lives in one file: [`site-config.js`](site-config.js).

```js
siteUrl: "https://YOUR-USERNAME.github.io/personal-website-template",
template: "editorial",
useTemplateAsHomepage: false
```

1. Replace `YOUR-USERNAME` with your GitHub username.
2. Set `template` to `editorial`, `midnight`, `scholar`, `studio`, or `letter`.
3. Save and refresh the gallery. The **Your website URL** box updates.

That share URL is:

`https://YOUR-USERNAME.github.io/personal-website-template/templates/YOUR-CHOICE/`

### Shorter GitHub URL

Rename the repository to `YOUR-USERNAME.github.io`, then set:

```js
siteUrl: "https://YOUR-USERNAME.github.io"
```

### Custom domain

Point the domain at GitHub Pages, add a `CNAME` file in the repo root with your domain, and set:

```js
siteUrl: "https://www.yourname.com"
```

### Use your template as the homepage

In `site-config.js` set `useTemplateAsHomepage: true`. Visitors to the root URL go straight to your chosen template, so you can share `siteUrl` by itself.

Also copy `siteUrl` into `robots.txt` and `sitemap.xml` if you want those files to match.

## Setup

1. On GitHub, click **Use this template** or **Fork**.
2. Clone your copy and open the folder in Cursor.
3. Preview:

```bash
python3 -m http.server 8080
```

Visit [http://localhost:8080](http://localhost:8080).

## What to edit

1. `site-config.js` — your public URL and chosen template
2. `templates/YOUR-CHOICE/index.html` — name, about, projects, contact
3. That template’s `assets/images/favicon.svg` — initials

Search the chosen template for `TODO` while you edit.

## Publish with GitHub Pages

1. Push to `main`
2. GitHub: **Settings → Pages**
3. **Deploy from a branch** → `main` / `/ (root)`

Then open the URL shown in the gallery.

## Project map

```text
.
├── site-config.js             # Edit your public website URL here
├── index.html                 # Template chooser
├── templates/
│   ├── editorial/
│   ├── midnight/
│   ├── scholar/
│   ├── studio/
│   └── letter/
├── assets/
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## License

MIT. Copy, edit, and republish this starter.
