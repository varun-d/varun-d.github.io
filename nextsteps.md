# Next Steps: GitHub Pages Static Deployment

Since GitHub Pages only serves static files, here's how to configure Astro for pure static generation:

## Step 1: Remove Server-Side Rendering

### Remove the Node adapter from `astro.config.ts`:
```typescript
export default defineConfig({
  // Remove this line:
  // adapter: node({ mode: 'standalone' }),
  
  site: themeConfig.site.website,
  // ... rest of config stays the same
})
```

### Delete the API proxy endpoint:
```bash
rm src/pages/api/proxy.ts
```

## Step 2: Verify Static Generation

The OG image generation should still work because `astro-og-canvas` with `getStaticPaths` will generate all images at build time during the build process.

## Step 3: Use GitHub's Official Astro Action

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Build
        run: pnpm build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 4: Configure GitHub Repository

1. Go to your repository **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. Save the settings

## What This Approach Provides:

- **Static site generation**: Pure static files for GitHub Pages
- **Build-time optimization**: Sharp processes images during CI build
- **OG image generation**: Dynamic OG images generated statically at build time
- **All other features**: Your image optimization, lazy loading, and viewer still work
- **GitHub hosting**: Free hosting on GitHub Pages

## What You Lose:

- **API proxy endpoint**: The `/api/proxy` route won't work (but this can be replaced with client-side CORS proxies if needed)

## How It Works:

1. GitHub Actions runs the build with Node.js environment
2. Sharp processes images during build
3. OG images are pre-generated for all posts
4. Static files are deployed to GitHub Pages
5. All your image features work via pre-processed assets