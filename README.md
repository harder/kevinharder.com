# kevinharder.com

Personal site built with Astro 7 as a static site.

## Stack

- Astro 7
- TypeScript
- `@astrojs/sitemap`
- Astro Fonts API for self-hosted Google fonts
- `astro:assets` for optimized content images

There are currently no UI framework integrations or hydrated islands in the app. The site is mostly static HTML/CSS with one bundled client script for theme controls, scroll spy, reveal effects, copy-to-clipboard, and the starfield canvas.

## Requirements

- Node `>=22.23.4`
- npm 9.6.5+

## Scripts

- `npm run dev` - start local development server
- `npm run build` - produce static output in `dist/`
- `npm run preview` - preview production build locally
- `npm run check` - run Astro and TypeScript checks
- `npm run format` - format project files
- `npm run format:check` - verify formatting

## Architecture

- [`src/pages/index.astro`](./src/pages/index.astro) is the only page entrypoint.
- [`src/layouts/BaseLayout.astro`](./src/layouts/BaseLayout.astro) owns metadata, JSON-LD, GTM, navigation, and the bundled site enhancement script.
- [`src/content/`](./src/content) contains typed in-repo data modules for profile, family, career, and section navigation.
- [`src/assets/images/`](./src/assets/images) contains images that should be processed by Astro's asset pipeline.
- [`public/`](./public) is reserved for passthrough assets that should keep stable URLs, such as favicons, verification files, social icons, and the hero background image.
- [`src/scripts/site-enhancements.ts`](./src/scripts/site-enhancements.ts) is the only client-side script entrypoint and is bundled by Astro.
- [`src/styles/global.css`](./src/styles/global.css) contains the site-wide visual system and layout styling.

## Astro 7 Notes

- Fonts are configured in [`astro.config.mjs`](./astro.config.mjs) with the Astro Fonts API, so the site no longer depends on runtime requests to `fonts.googleapis.com`.
- Content images are imported from `src/assets/images` and rendered with `astro:assets`, which gives hashed URLs, dimensions, and optimized output during build.
- The old unused Preact island code was removed during the Astro 6 upgrade. If interactivity is added later, prefer plain Astro or vanilla client scripts unless a framework dependency is clearly justified.
- `package.json` retains an `svgo` override. Vite 8 uses Rolldown, so the old Rollup override is no longer needed.
- `compressHTML: true` preserves HTML whitespace around inline links; Astro 7 otherwise defaults to JSX whitespace rules.
- Astro 7 requires Node 22.23.4 or newer. CI and deployment builds use Node 24.
- Astro 7’s Rust compiler, queued rendering, and Vite 8 build pipeline apply automatically.
- Use `npm run preview -- --background`, then `npm run preview -- status` / `logs` / `stop` to manage a production preview. The same commands are available for `dev`.
- Route caching, advanced server routing, deferred Markdown rendering, and incremental builds are available, but this single-page static site does not currently need them.

## Verification

Before shipping changes, run:

- `npm run check`
- `npm run build`
- `npm run preview`

`npm audit --omit=dev` should be clean. A full `npm audit` may still report dev-only issues through editor and language-server tooling.
