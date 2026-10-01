# ByteSpace New Check Website

ByteSpace is a course marketplace and creator-focused learning platform landing page. This project is a React + TypeScript + Vite website that includes the homepage, course search results, individual course detail pages, creator profile page, and a 404 fallback page for invalid URLs.

## Live Demo

[Visit the deployed website](https://byte-space-new-check-website.vercel.app/)

## Overview

This website is designed to showcase:
- educational course discovery
- creator and creator profile presentation
- personalized learning journeys
- Figma-inspired modern marketing UI
- responsive layout for desktop and smaller screens

The application is built with:
- React
- TypeScript
- Vite
- CSS custom styling
- SVG and image assets from the design system

## Project Structure

```text
ByteSpace New Check website/
├─ public/
├─ src/
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ assets/
│  ├─ components/
│  │  ├─ landing/
│  │  └─ site/
│  ├─ layouts/
│  ├─ pages/
│  └─ types/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ tailwind.config.ts
├─ postcss.config.js
├─ README.md
└─ .gitignore
```

## Tech Stack

- React 19
- TypeScript
- Vite 8
- CSS Modules / custom CSS
- SVG and PNG design assets
- Oxlint for linting

## Installation

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

```bash
npm install
```

## Run the Project

Start the Vite development server:

```bash
npm run dev -- --host 0.0.0.0
```

Then open the local app in the browser:

```text
http://localhost:5173/
```

If the dev server is exposed on a network, the terminal may also display a LAN address such as:

```text
http://192.168.0.103:5173/
```

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview -- --host 0.0.0.0
```

## Linting

```bash
npm run lint
```

## Application Routes / Page URLs

This app currently uses pathname-based conditional rendering in the root app, so the available pages are:

| Page | URL | Description |
|---|---|---|
| Home | `/` | ByteSpace landing page |
| Courses | `/courses` | Search and browse page for courses |
| Course Details | `/courses/build-digital-asset` | Main course detail view |
| Course Lessons Tab | `/courses/build-digital-asset/lessons` | Course detail page with the Lesson tab selected |
| Creator Profile | `/creators/purepearl-studio` | Individual creator profile page |
| 404 / Not Found | any invalid route | Fallback page for non-existing or invalid URLs |

### Example URLs

```text
http://localhost:5173/
http://localhost:5173/courses
http://localhost:5173/courses/build-digital-asset
http://localhost:5173/courses/build-digital-asset/lessons
http://localhost:5173/creators/purepearl-studio
http://localhost:5173/this-route-does-not-exist
```

## Page Overview

### 1. Landing Page
The landing page includes:
- hero section
- course categories
- featured courses
- growth feature section
- creator CTA banner
- testimonials
- footer newsletter signup

### 2. Search / Courses Page
The course search page includes:
- category tabs
- search form
- filters for level, category, and sorting
- paginated course results
- footer and site header

### 3. Course Details Page
The course detail page includes:
- course hero content
- course overview tab
- lessons tab
- reviews tab
- purchase card / side summary
- lesson modules and curriculum details

### 4. Creator Profile Page
The creator profile page includes:
- creator hero section
- bio and stats
- follow button interaction
- course filters
- grid of creator-related courses

### 5. Not Found Page (404)
For any undefined URL path, the app shows a branded 404 page so users are redirected to a meaningful fallback instead of a blank or broken state.

## Notes on Routing

This project does not currently use a dedicated router package such as React Router. Instead, route rendering is handled by checking `window.location.pathname` in the app root and choosing the relevant page component.

This means:
- routes are URL-based and rely on the browser path
- invalid routes fall back to the 404 page
- the app behaves like a lightweight single-page site with route-like views

## Important Files

- `src/App.tsx` — central route logic
- `src/pages/LandingPage.tsx` — landing screen
- `src/pages/SearchPage.tsx` — course discovery page
- `src/pages/CourseDetailsPage.tsx` — course detail page
- `src/pages/CreatorProfilePage.tsx` — creator profile page
- `src/pages/NotFoundPage.tsx` — 404 page
- `src/index.css` — site-wide styling and layout definitions

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Recommended Workflow

For local development:

```bash
git checkout separate-branch
npm install
npm run dev -- --host 0.0.0.0
```

Before shipping or finalizing changes:

```bash
npm run build
npm run lint
```

## Contributing

1. Create or switch to a feature branch.
2. Make updates.
3. Run lint and build checks.
4. Commit changes.
5. Push to the remote repository.

## License

This project is currently intended for local project use and internal review unless otherwise specified by the project owner.

## Contact / Project Context

This website was developed as a ByteSpace-style course and creator platform mockup inspired by a Figma design, with a responsive front-end implementation that focuses on marketing and browsing functionality.
