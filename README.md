# Adhita Azizi Portfolio

This is a personal portfolio website for Muhammad Arrizky Adhita Azizi, built with Next.js and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Recent Updates

- Removed "v0" generator metadata.
- Updated project configuration.
- Enhanced Personal Projects section with:
  - Category filtering (AI & Data, Mobile, Web, Desktop)
  - Tech stack visualization with custom SVG icons
  - Improved UI with animations and responsive design
- Updated GitHub Actions workflow to use `bun` for consistent deployments.

## Deployment

To deploy this website to the root of your GitHub Pages (e.g., `https://[your-username].github.io/`), you **must** rename this repository to:

`[your-username].github.io`

If you keep the repository name as `portfolio-website`, the site will be deployed to `https://[your-username].github.io/portfolio-website/`, which will cause issues with asset loading since we are using a root-path configuration.
