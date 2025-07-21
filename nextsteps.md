# Next Steps: GitHub Pages Deployment with Node Adapter

Here's how to use the `@astrojs/node` adapter with GitHub Actions for deployment to GitHub Pages:

## Step 1: Install Node Adapter

```bash
pnpm add @astrojs/node
```

## Step 2: Update Astro Config

Replace the Netlify adapter with Node adapter in `astro.config.ts`:

```typescript
import node from '@astrojs/node'

export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  // ... rest of your config
})
```

## Step 3: Create GitHub Actions Workflow

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

## Benefits of This Approach:

- **Keeps all your features**: API routes, dynamic OG images, Sharp image processing
- **Server-side rendering**: Your proxy endpoint and dynamic routes work
- **Build-time optimization**: Images processed during CI build
- **GitHub hosting**: Still uses GitHub Pages for hosting

## How It Works:

1. GitHub Actions runs the build with Node.js environment
2. Sharp processes images during build
3. Node adapter creates a standalone server build
4. Static files are deployed to GitHub Pages
5. Your server features work via the Node runtime

The key difference from pure static is that this creates a Node.js server that GitHub Actions can run during the build process, allowing all your server-rendered features to work while still deploying static files to GitHub Pages.