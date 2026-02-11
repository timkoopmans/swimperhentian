# GitHub Pages Deployment Checklist

## ✅ Completed Setup

- [x] Created `.github/workflows/deploy.yml` - GitHub Actions workflow
- [x] Updated `vite.config.ts` - Set base path for GitHub Pages
- [x] Created `public/.nojekyll` - Prevents Jekyll processing
- [x] Updated `README.md` - Added deployment instructions
- [x] Tested build process - Successfully builds to `dist/` directory

## 🚀 Next Steps to Deploy

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Swim Perhentian 2026 website"
```

### 2. Create GitHub Repository

- Go to https://github.com/new
- Create a repository named `swimperhentian`
- **Do NOT** initialize with README, .gitignore, or license

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/swimperhentian.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The workflow will automatically trigger on push

### 5. Monitor Deployment

- Go to the **Actions** tab in your repository
- Watch the "Deploy static content to Pages" workflow run
- Once complete (green checkmark), your site will be live!

### 6. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/swimperhentian/
```

## 🔄 Continuous Deployment

After the initial setup, any push to the `main` branch will automatically:
1. Build the site with Vite
2. Deploy to GitHub Pages
3. Make changes live in ~1-2 minutes

## 🛠️ Manual Deployment

To manually trigger a deployment:
1. Go to **Actions** tab
2. Select "Deploy static content to Pages"
3. Click "Run workflow" button
4. Choose branch and run

## 📝 Important Notes

- The base path in `vite.config.ts` is set to `/` (root)
- This is correct for custom domain setup (swimperhentian.com)
- If you were using GitHub Pages without a custom domain, you'd need `/swimperhentian/`
- The `.nojekyll` file ensures all assets load correctly
- Build output goes to `dist/` directory
- **Always commit `package-lock.json`** - The workflow uses `npm ci` which requires the lock file to be in sync

## 🌐 Custom Domain Setup

The site is configured for the custom domain: **swimperhentian.com**

If you're using `username.github.io/swimperhentian/`:
- Change `base: '/'` to `base: '/swimperhentian/'` in `vite.config.ts`
- Rebuild with `npm run build`

If you're using a custom domain (current setup):
- Keep `base: '/'` in `vite.config.ts` ✅
- Configure your domain DNS to point to GitHub Pages
- Add CNAME file in the repository root (GitHub does this automatically)

## 🐛 Troubleshooting

### npm ci failing with lock file errors?
- Run `npm install` locally to update `package-lock.json`
- Commit the updated `package-lock.json` file
- Push to trigger a new deployment
- The workflow uses `npm ci` which requires exact sync between package.json and package-lock.json

### Assets not loading?
- Check that `base` in `vite.config.ts` matches your repo name
- Verify `.nojekyll` exists in `public/` directory

### Workflow failing?
- Check the Actions tab for error details
- Ensure GitHub Pages is set to "GitHub Actions" source
- Verify `node-version: 20` in workflow matches your project

### 404 on deployment?
- Wait 2-3 minutes after first deployment
- Check repository Settings → Pages for the correct URL
- Verify workflow completed successfully in Actions tab

## ✨ Development vs Production

- **Development** (`npm run dev`): Base path is `/`
- **Production** (`npm run build`): Base path is `/swimperhentian/`
- This is automatically handled by the NODE_ENV check in vite.config.ts

