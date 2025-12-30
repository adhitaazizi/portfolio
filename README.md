# Adhita Azizi Portfolio

This is a personal portfolio website for Muhammad Arrizky Adhita Azizi, built with Next.js and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture & Flow

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Framer Motion
- **Deployment**: GitHub Pages (via GitHub Actions)

### Application Flow
- **Home (`/`)**: 
  - **About**: Unified section containing Introduction, Social Links, and Work Experience.
  - **Certifications**: Grid of professional certifications.
- **Projects (`/projects`)**: Dedicated page for portfolio projects.
  - Filterable by categories: All, AI & Data, Mobile, Web, Desktop.
  - Detailed project modals with technology stack and live links.
- **Navigation**:
  - Sticky header with links to **About** and **Projects**.
  - **Dark/Light Mode** toggle (direct switch).

## Recent Updates

- **Component Unification**: Merged Hero and Experience sections into a single, aligned `About` component.
- **Theme Refactor**: Updated dark mode to Pure Black and simplified the theme toggle button.
- **Home Page Redesign**: Simplified home page to focus on About and Certifications.
- **Projects Page**: Moved projects to a dedicated `/projects` route with advanced filtering and modal details.

## Deployment

To deploy this website to the root of your GitHub Pages (e.g., `https://[your-username].github.io/`), you **must** rename this repository to:

`[your-username].github.io` (specifically `adhitaazizi.github.io` for your case).

We have added a redirect at `/portfolio` to ensure any old functional links redirect to the home page.
