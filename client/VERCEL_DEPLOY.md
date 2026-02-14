# Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket.

2. In [Vercel](https://vercel.com), **Import** the repository.

3. **Important:** Set **Root Directory** to `client`.
   - Project Settings → General → Root Directory → set to `client` (or `./client`).
   - Leave **Build Command** as `npm run build` and **Output Directory** as default.

4. Deploy. The build runs from the `client` folder and should succeed.

If your repo root is already `client` (no parent folder), you can leave Root Directory blank.
