# Personal Website Template

A ready-to-edit personal website for students. It already has a working page, a responsive layout, placeholder content, basic SEO, and GitHub Pages deployment.

You only need to **fork, clone, and open the project in Cursor**.

This starter was prepared for class use after reviewing options on GitHub’s [website-template](https://github.com/topics/website-template) topic. The popular repos there are useful, but many need Hugo, npm, or extra setup before a site will run. This template stays on plain HTML, CSS, and JavaScript so it opens immediately.

## What you get

- A working one-page site: About, Projects, Experience, Contact
- Responsive layout for phones, tablets, and desktops
- GitHub Pages workflow in `.github/workflows/pages.yml`
- Placeholder copy you can replace
- SEO basics: title, description, Open Graph tags, canonical URL, `robots.txt`, `sitemap.xml`, and Person structured data
- A 404 page and a skip-to-content link

## Student setup

### 1. Fork

1. Open this repository on GitHub.
2. Click **Fork**.
3. Create the fork under your own account.

If you see **Use this template**, that works even better. It makes a clean copy without the extra fork relationship.

### 2. Clone

```bash
git clone https://github.com/YOUR-USERNAME/personal-website-template.git
cd personal-website-template
```

### 3. Open in Cursor

- Cursor: **File → Open Folder** and choose the cloned folder
- Or from a terminal: `cursor .`

Open `index.html` and start replacing the placeholder text.

## Preview the site

No install is required. Use any of these:

- Right-click `index.html` in Cursor and preview it
- Drag `index.html` into a browser
- Or run a local server:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## What to edit first

Search the project for `TODO` and `YOUR-USERNAME`. The important edits are in `index.html`:

1. Your name in the `<title>`, header, and hero
2. The meta description
3. About text, city, school, and what you are looking for
4. Three projects with real titles and links
5. Experience and skills
6. Email, GitHub, and LinkedIn
7. The initials in `assets/images/favicon.svg`

Also replace `YOUR-USERNAME` in:

- `index.html` (canonical URL, Open Graph URL, JSON-LD)
- `robots.txt`
- `sitemap.xml`

## Publish with GitHub Pages

The deployment workflow is already in the repo. After you push to `main`:

1. On GitHub, open your fork
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. If this is a fork, open the **Actions** tab and enable workflows
5. Push a commit, or run the **Deploy to GitHub Pages** workflow manually

Your site will be available at:

`https://YOUR-USERNAME.github.io/personal-website-template/`

If GitHub asks you to wait a minute after the first deploy, that is normal.

### Optional: user site URL

To publish at `https://YOUR-USERNAME.github.io`, rename the repository to `YOUR-USERNAME.github.io` and update the URLs in `index.html`, `robots.txt`, and `sitemap.xml`.

## Project map

```text
.
├── index.html                 # The website
├── 404.html                   # GitHub Pages missing-page view
├── assets/css/styles.css      # Layout and colors
├── assets/js/main.js          # Mobile menu and footer year
├── assets/images/             # Favicon and social preview
├── robots.txt
├── sitemap.xml
├── .nojekyll                  # Serve files as-is on GitHub Pages
└── .github/workflows/pages.yml
```

## Customize the look

Colors and fonts live in the `:root` block at the top of `assets/css/styles.css`. Change `--accent`, `--bg`, and `--highlight` to restyle the whole site.

## License

MIT. Students can copy, edit, and republish this starter for class and personal use.
