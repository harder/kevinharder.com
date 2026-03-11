# Repository Guidance

## Current Stack

- Astro 6 static site
- TypeScript
- No React, Preact, Vue, or other UI framework integration
- No active Astro islands

## Architecture Rules

- Keep the site framework-light. Do not add a client framework unless there is a concrete need that cannot be met with Astro plus a small browser script.
- Use [`astro:assets`](./src/assets/images/index.ts) for content images that appear in pages or components.
- Use [`public/`](./public) only for passthrough assets that need stable public paths, such as icons, verification files, `robots.txt`, and similar files.
- Keep shared browser behavior in [`src/scripts/site-enhancements.ts`](./src/scripts/site-enhancements.ts). Do not hand-edit built browser files in `public/`.
- Treat [`src/content/`](./src/content) as the source of truth for profile and page data. Keep it typed and in sync with [`src/types/content.ts`](./src/types/content.ts) when data structures change.
- Keep metadata, structured data, and global shell concerns in [`src/layouts/BaseLayout.astro`](./src/layouts/BaseLayout.astro).

## Astro 6 Specifics

- Fonts are configured with the Astro Fonts API in [`astro.config.mjs`](./astro.config.mjs).
- The site relies on Astro's asset pipeline for optimized image output during build.
- Avoid reintroducing unused integration packages. The Astro 6 upgrade removed dead Preact code and the repo should stay lean.

## Validation

Run these before finishing meaningful changes:

- `npm run check`
- `npm run build`

Use `npm run preview` for a local smoke test when changing rendering, metadata, or asset behavior.
