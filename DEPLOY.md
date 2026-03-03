# Deploy Your Portfolio

Your repo: **https://github.com/mahima-shrivastava/mahima-shrivastava.github.io**

---

## Deploy with GitHub Pages (free, recommended)

### 1. Push your code (if not already done)

```bash
cd d:\portfolio
git add -A
git commit -m "Update portfolio"
git push origin master
```

If your default branch is `main`:
```bash
git push origin main
```

### 2. Turn on GitHub Pages

1. Open: **https://github.com/mahima-shrivastava/mahima-shrivastava.github.io**
2. Click **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `master` (or `main`) → **/ (root)**
4. Click **Save**.

### 3. Your live site

Because the repo is named `mahima-shrivastava.github.io`, your site is served at the root:

**https://mahima-shrivastava.github.io/**

Use `index.html` as the homepage (GitHub Pages serves it by default).

---

## Deploy with Netlify (alternative)

1. Go to **[netlify.com](https://www.netlify.com)** and sign in.
2. **Add new site** → **Import an existing project** → **GitHub**.
3. Choose **mahima-shrivastava/mahima-shrivastava.github.io**.
4. **Build settings:** leave blank (static site).
   - Publish directory: `/` or leave default.
5. **Deploy**. You’ll get a URL like `https://random-name.netlify.app`.
6. Optional: set a custom domain in **Domain settings**.

---

## After deploying

- **GitHub Pages:** Every `git push` to the selected branch updates the site.
- **Netlify:** Every push to the connected branch triggers a new deploy.
