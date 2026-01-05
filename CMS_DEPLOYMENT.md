# 🚀 CMS Deployment Guide

Decap CMS (formerly Netlify CMS) is a "Git-based" CMS. This means it doesn't have a traditional database or running backend server. Instead, it works by making API calls directly to your GitHub repository to create and edit files.

When you click "Publish" in the dashboard, the CMS commits a new `.mdx` file to your `content/` folder on GitHub. This triggers Vercel/Netlify to rebuild your site automatically, making your new post go live.

---

## Which Platform are you using?

### ✅ Option A: Deploying on Netlify (Easiest)
Netlify has built-in support for "Git Gateway," which handles the authentication for you.

1.  **Push your code** to GitHub.
2.  **Create a new site on Netlify** linked to your GitHub repo.
3.  **Enable Identity:**
    *   Go to **Site Settings > Identity** and click **Enable Identity**.
    *   Under **Registration preferences**, select **Invite only** (so random strangers can't sign up).
    *   Target the **Git Gateway**: Go to **Site Settings > Identity > Services > Git Gateway** and click **Enable Git Gateway**.
4.  **Update Config:**
    *   In `public/admin/config.yml`, switch to the **Production** settings (comment out `local_backend: true`).
5.  **Invite Yourself:**
    *   Go to the **Identity** tab on Netlify.
    *   "Invite" your own email address.
    *   Open the email link to create your password.
6.  **Done!** Go to `your-site.netlify.app/admin` and log in.

---

### ⚡ Option B: Deploying on Vercel
Since Vercel doesn't have "Netlify Identity" built-in, you need a different way to authenticate with GitHub.

**Method: Using implicit OAuth (Simpler for Vercel)**

1.  **Update `public/admin/config.yml`**:
    You need to change the backend to use `github` directly instead of `git-gateway`.
    ```yaml
    backend:
      name: github
      repo: your-github-username/zevion-labs-website  # <--- REPLACE THIS
      branch: main
      base_url: https://your-site.vercel.app # Optional if using external auth
    ```

2.  **Setup Authentication**:
    Because Vercel doesn't handle the "login with GitHub" handshake out of the box for Decap CMS, you have two choices:
    
    *   **Choice 1 (External OAuth):** Use a free service like [Decapitator](https://decap.mrr.APP/) or deploy your own tiny OAuth server.
    *   **Choice 2 (Smol setup):**
        1. Go to GitHub Developer Settings > OAuth Apps > New OAuth App.
        2. Homepage URL: `https://your-site.vercel.app`
        3. Authorization callback URL: `https://your-site.vercel.app/admin/`
        4. Copy the **Client ID**.
        5. In `public/admin/config.yml`, add `app_id: your-client-id` under the backend section.
        *Note: This basic method often requires a small auth helper server.*

**Detailed Vercel Recommendation:**
For a hassle-free Vercel experience, we recommend using the **Decap CMS Oauth Server** template:
1. Deploy this repo to Vercel: [https://github.com/israelhaz/vercel-decap-cms-oauth](https://github.com/israelhaz/vercel-decap-cms-oauth)
2. Follow its instructions to get a URL (e.g., `https://my-auth.vercel.app`).
3. Update your `public/admin/config.yml`:
    ```yaml
    backend:
      name: github
      repo: user/repo
      base_url: https://my-auth.vercel.app # Points to your auth helper
    ```

---

## ⚠️ Important Production Checklist

Before pushing to production:

1.  **Edit `public/admin/config.yml`**:
    *   Comment out `local_backend: true`.
    *   Uncomment the `backend` configuration for production.
2.  **Commit & Push**:
    *   `git commit -am "Prepare CMS for production"`
    *   `git push`

The `npm run cms` command is **ONLY** for local development. You do not need to run it on the server.
