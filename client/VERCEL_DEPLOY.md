# Fix 404 on Vercel — Deploy from `client` folder

**Why you see 404:** The repo root is `Seyon_hotel`, but the Next.js app lives in **`client`**. If Vercel builds from the repo root, it doesn’t find the app and every request returns **404 NOT_FOUND**.

**Fix: set Root Directory to `client` in Vercel.**

---

## Steps (do this once per project)

1. Open your project on [vercel.com](https://vercel.com) → **Project** → **Settings**.

2. Go to **General**.

3. Find **Root Directory**:
   - Click **Edit** next to "Root Directory".
   - Enter: **`client`** (only this folder name, no slash at the start).
   - Save.

4. **Redeploy:**
   - Go to the **Deployments** tab.
   - Open the **⋯** menu on the latest deployment → **Redeploy** (or push a new commit).

After the new deployment, the site should load instead of 404.

---

## Checklist

- [ ] Root Directory = **`client`**
- [ ] Redeploy after changing it
- [ ] Build Command: leave default (`npm run build`) or empty
- [ ] Output Directory: leave default (Vercel detects Next.js)
- [ ] Framework Preset: **Next.js** (auto-detected when root is `client`)

If 404 persists, in the deployment **Build Logs** confirm that the build runs inside `client` (e.g. you see "Running next build" and no "no such file" errors).
