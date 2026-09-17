# Personal Website Templates

A set of ready-to-edit personal websites for students. Fork the repo, clone it, open it in Cursor, and choose a look.

Every template already has a working page, a responsive layout, placeholder content, basic SEO, and GitHub Pages support. No Hugo, npm, or build step.

## Choose a template

Open the gallery first: [index.html](index.html)

| Template | Best if you want | Folder |
|---|---|---|
| [Editorial](templates/editorial/) | A warm magazine-style portfolio | `templates/editorial/` |
| [Midnight](templates/midnight/) | A dark, technical developer site | `templates/midnight/` |
| [Scholar](templates/scholar/) | An academic CV homepage | `templates/scholar/` |
| [Studio](templates/studio/) | Bold type and visual project blocks | `templates/studio/` |
| [Letter](templates/letter/) | A quiet one-column note | `templates/letter/` |

These starters were prepared for class after reviewing options on GitHub’s [website-template](https://github.com/topics/website-template) topic. The public repos there often need extra tools. These five stay on HTML, CSS, and JavaScript so they open immediately.

## Student setup

### 1. Fork

1. Open this repository on GitHub.
2. Click **Use this template** or **Fork**.

### 2. Clone

```bash
git clone https://github.com/YOUR-USERNAME/personal-website-template.git
cd personal-website-template
```

### 3. Open in Cursor

- Cursor: **File → Open Folder**
- Or: `cursor .`

Then open `index.html` to compare templates, and edit the one you want.

## Preview

No install is required.

```bash
python3 -m http.server 8080
```

Visit [http://localhost:8080](http://localhost:8080) and click a template.

## What to edit

In your chosen template folder, search for `TODO` and `YOUR-USERNAME`.

1. Your name in the title, header, and hero
2. The meta description
3. About text
4. Projects, experience, and skills
5. Email, GitHub, and LinkedIn
6. Initials in that template’s `assets/images/favicon.svg`

Also replace `YOUR-USERNAME` in the root `robots.txt` and `sitemap.xml`.

## Make one template your homepage

Keep the gallery, or promote one site to the root:

1. Copy the files from `templates/NAME/` over the root `index.html` and `assets/` folders
2. Update the canonical URLs so they no longer include `/templates/NAME/`

## Publish with GitHub Pages

1. Push to `main`
2. GitHub: **Settings → Pages**
3. **Deploy from a branch** → `main` / `/ (root)`

Your gallery will be at:

`https://YOUR-USERNAME.github.io/personal-website-template/`

Each look is at `/templates/editorial/`, `/templates/midnight/`, `/templates/scholar/`, `/templates/studio/`, or `/templates/letter/`.

## Project map

```text
.
├── index.html                 # Template chooser
├── templates/
│   ├── editorial/             # Warm magazine portfolio
│   ├── midnight/              # Dark developer site
│   ├── scholar/               # Academic CV
│   ├── studio/                # Bold creative site
│   └── letter/                # Minimal one-column page
├── assets/                    # Gallery styles and icons
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## License

MIT. Students can copy, edit, and republish these starters for class and personal use.
