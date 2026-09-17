# Step by step: fork, open in Cursor, publish

Follow this if you are making your own copy of the site. You do not need to install anything besides [Cursor](https://cursor.com) and a [GitHub](https://github.com) account.

**Starter repo:** [github.com/alissarivero/personal-website-template](https://github.com/alissarivero/personal-website-template)

When you are done, your live site will be:

`https://YOUR-USERNAME.github.io/personal-website-template/templates/YOUR-CHOICE/`

---

## 1. Make your own copy on GitHub

1. Sign in at [github.com](https://github.com).
2. Open [github.com/alissarivero/personal-website-template](https://github.com/alissarivero/personal-website-template).
3. Click **Use this template** (upper right), then **Create a new repository**.
   - If you do not see that button, click **Fork**, then **Create fork**.
4. Owner: your account.
5. Repository name: keep `personal-website-template`.
6. Visibility: **Public** (needed for free GitHub Pages).
7. Click **Create repository**.

You should now be on `https://github.com/YOUR-USERNAME/personal-website-template`.

**Check:** the URL contains *your* username, not `alissarivero`.

---

## 2. Open it in Cursor

### Option A — clone from Cursor

1. Open Cursor.
2. **File → Clone Repo**.
   - On the welcome screen it may say **Clone repo** instead.
3. Choose **Clone from GitHub**. Sign in if Cursor asks.
4. Select `YOUR-USERNAME/personal-website-template`.
5. Choose a folder on your computer (Desktop is fine).
6. When asked **Open the cloned repository?**, click **Open**.

### Option B — clone from the terminal

1. On your GitHub repo page, click **Code** and copy the HTTPS URL.
2. In Cursor: **Terminal → New Terminal**.
3. Run:

```bash
cd ~/Desktop
git clone https://github.com/YOUR-USERNAME/personal-website-template.git
```

4. **File → Open Folder…** and select `personal-website-template`.

**Check:** the left sidebar shows `index.html`, `site-config.js`, `WALKTHROUGH.md`, and a `templates` folder. You opened the *folder*, not a single file.

---

## 3. Preview the site

1. In Cursor, open a terminal (**Terminal → New Terminal**).
2. Confirm you are in the project folder. If not:

```bash
cd ~/Desktop/personal-website-template
```

3. Start a local server and leave it running:

```bash
python3 -m http.server 8080
```

If `python3` is not found, try `python -m http.server 8080`.

4. In a browser, open [http://localhost:8080](http://localhost:8080).

You should see the gallery: Editorial, Midnight, Scholar, Studio, Letter.

5. Click each look. Pick **one**.

| If you want | Choose | Folder to edit |
|---|---|---|
| Warm magazine portfolio | Editorial | `templates/editorial/` |
| Dark technical site | Midnight | `templates/midnight/` |
| Academic / CV page | Scholar | `templates/scholar/` |
| Bold visual site | Studio | `templates/studio/` |
| Quiet one-column page | Letter | `templates/letter/` |

**Check:** the browser URL looks like `http://localhost:8080/templates/midnight/` (or whichever you picked).

Keep the server running. After you edit files, save in Cursor and refresh the browser.

---

## 4. Set your public website URL

1. In Cursor’s sidebar, open **`site-config.js`**.
2. Edit these three lines:

```js
siteUrl: "https://YOUR-USERNAME.github.io/personal-website-template",
template: "editorial",
useTemplateAsHomepage: false
```

3. Put your GitHub username in `siteUrl`.
4. Set `template` to the folder you chose: `editorial`, `midnight`, `scholar`, `studio`, or `letter`.
5. Save (**Cmd + S** / **Ctrl + S**).
6. Refresh [http://localhost:8080](http://localhost:8080). The **Your website URL** box should show your share link.

Optional:

- Want visitors to skip the gallery? Set `useTemplateAsHomepage: true`.
- Want a shorter URL later? Rename the GitHub repo to `YOUR-USERNAME.github.io` and set `siteUrl` to `https://YOUR-USERNAME.github.io`.

---

## 5. Put your content in the template

1. In the sidebar, open:

`templates` → your choice → **`index.html`**

Example: `templates/midnight/index.html`

Do not spend this session rewriting the root `index.html`. That file is only the gallery.

2. Search the project (**Cmd + Shift + F** / **Ctrl + Shift + F**) for `TODO`, then for `Your Name`.

3. In your template’s `index.html`, change:

- Your name in the title, header, and hero
- The short description
- About text
- Three projects
- Experience or current role
- Email, GitHub, and LinkedIn

4. Open `templates/YOUR-CHOICE/assets/images/favicon.svg` and change `YN` to your initials.

5. Save, then refresh the local preview of your template.

**Check:** the page shows your name, and the contact links go to you.

---

## 6. Save your work to GitHub from Cursor

1. Click **Source Control** in the left sidebar (the branch icon).
2. Click **+** next to **Changes** to stage everything.
3. Message:

`Add my site content`

4. Click **Commit**.
5. Click **Sync Changes** (or **Publish Branch**).
6. Authorize GitHub if Cursor asks.

Terminal equivalent:

```bash
git add -A
git commit -m "Add my site content"
git push
```

**Check:** refresh your GitHub repo in the browser. Your name should appear in the template file you edited.

---

## 7. Publish with GitHub Pages

1. Open `https://github.com/YOUR-USERNAME/personal-website-template`.
2. Click **Settings**.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**.

Wait 1–2 minutes, then open:

- Gallery: `https://YOUR-USERNAME.github.io/personal-website-template/`
- Your site: `https://YOUR-USERNAME.github.io/personal-website-template/templates/YOUR-CHOICE/`

If you get a 404, wait another minute and hard-refresh (**Cmd + Shift + R** / **Ctrl + Shift + R**).

**Check:** the live URL loads on your phone as well as your laptop.

---

## You are done when

- [ ] The GitHub repo is under your account
- [ ] The project is open as a folder in Cursor
- [ ] `site-config.js` has your username and chosen template
- [ ] Your name, about, projects, and links are in that template
- [ ] You committed and pushed
- [ ] This URL loads: `https://YOUR-USERNAME.github.io/personal-website-template/templates/YOUR-CHOICE/`

Share that URL.

---

## If something breaks

| What you see | What to do |
|---|---|
| You are on `alissarivero/personal-website-template` | You cloned the original. Repeat step 1 and open *your* copy. |
| Cursor cannot list GitHub repos | Sign in to GitHub from Cursor, then clone again. |
| `python3: command not found` | Try `python -m http.server 8080`, or open `templates/YOUR-CHOICE/index.html` in a browser. |
| Edits do not show | Save the file, refresh, and confirm you are on `/templates/YOUR-CHOICE/`. |
| You edited the gallery, not your site | Go back to `templates/YOUR-CHOICE/index.html`. |
| The URL box still says `YOUR-USERNAME` | Save `site-config.js` and refresh. If it still shows the placeholder, the live site will infer the URL after Pages is on. |
| `git push` is rejected | Run `git remote -v`. The URL should include your username. |
| Pages URL 404s | Confirm source is `main` / `/ (root)`, wait 2 minutes, hard-refresh. |
