# Swim Perhentian 2026 🏊‍♂️

Official website for Malaysia's Premier Open-Water Swimming Event.

**Event Date:** October 3, 2026  
**Location:** Pulau Perhentian Besar, Malaysia

## About

The Perhentian Island Challenge is Malaysia's premier open-water swimming event, featuring the challenging 16km full island circumnavigation and the 10km one-way swim. Swim alongside coral reefs, tropical fish, and crystal-clear lagoons in pristine tropical waters.

## Tech Stack

- **Framework:** Svelte 5 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS + DaisyUI
- **Deployment:** GitHub Pages

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to **Pages** (under "Code and automation")
   - Under "Build and deployment":
     - Source: **GitHub Actions**

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy static content to Pages" workflow
   - Once complete, your site will be live at: `https://[username].github.io/swimperhentian/`

### Manual Deployment

You can also trigger a deployment manually:
- Go to **Actions** tab
- Select "Deploy static content to Pages" workflow
- Click "Run workflow"

## Project Structure

```
swimperhentian/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── public/
│   ├── .nojekyll              # Prevents Jekyll processing
│   └── logo.png
├── src/
│   ├── App.svelte             # Main application component
│   ├── app.css                # Global styles with Tailwind
│   └── main.ts                # Application entry point
├── index.html
├── vite.config.ts             # Vite configuration with base path
├── tailwind.config.js         # Tailwind + DaisyUI configuration
└── package.json
```

## Features

- ✅ Responsive design for all devices
- ✅ DaisyUI component library
- ✅ Smooth scroll navigation
- ✅ Event categories showcase
- ✅ Schedule information
- ✅ Travel & logistics details
- ✅ Safety information
- ✅ Registration CTA

## License

Copyright © 2026 - All rights reserved by Swim Perhentian

