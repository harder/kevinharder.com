# kevinharder.com

Personal site built with Astro 6 as a static site.

## Stack

- Astro 6
- TypeScript
- `@astrojs/sitemap`
- Astro Fonts API for self-hosted Google fonts
- `astro:assets` for optimized content images

There are currently no UI framework integrations or hydrated islands in the app. The site is mostly static HTML/CSS with one bundled client script for theme controls, scroll spy, reveal effects, copy-to-clipboard, and the starfield canvas.

## Requirements

- Node `^20.19.1 || >=22.12.0`
- npm 9+

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
- [`src/scripts/site-enhancements.ts`](./src/scripts/site-enhancements.ts) is the only client-side script entrypoint and is bundled by Astro via `?url`.
- [`src/styles/global.css`](./src/styles/global.css) contains the site-wide visual system and layout styling.

## Astro 6 Notes

- Fonts are configured in [`astro.config.mjs`](./astro.config.mjs) with the Astro Fonts API, so the site no longer depends on runtime requests to `fonts.googleapis.com`.
- Content images are imported from `src/assets/images` and rendered with `astro:assets`, which gives hashed URLs, dimensions, and optimized output during build.
- The old unused Preact island code was removed during the Astro 6 upgrade. If interactivity is added later, prefer plain Astro or vanilla client scripts unless a framework dependency is clearly justified.
- `package.json` includes `overrides` for patched `rollup` and `svgo` versions to keep production audit results clean.

## Verification

Before shipping changes, run:

- `npm run check`
- `npm run build`
- `npm run preview`

`npm audit --omit=dev` should be clean. A full `npm audit` may still report dev-only issues through editor and language-server tooling.
