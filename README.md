# kevinharder.com

Personal website built with Astro 7 and TypeScript. The site produces static HTML and CSS, with one bundled browser script for theme controls, scroll spy, reveal effects, copy-to-clipboard, and the starfield canvas. It has no UI framework integrations or hydrated islands.

## Requirements

- Node `>=22.23.4`
- npm 9.6.5+

CI and Azure deployment builds use Node 24.

## Local development

```sh
npm ci
npm run dev
```

The development server reloads the page as you edit source files. Open the URL printed in the terminal.

## Production preview

Build the site, then serve the generated `dist/` directory locally:

```sh
npm run build
npm run preview
```

Preview serves the built files. Rebuild after source changes to see them in preview. It does not publish the site.

To keep your terminal available, start preview as a background process:

```sh
npm run preview -- --background
```

The command prints the server URL and returns control to your terminal. The server continues running until you stop it. Run these commands from the same project directory to manage it:

| Command                            | Purpose                                                |
| ---------------------------------- | ------------------------------------------------------ |
| `npm run preview -- status`        | Show whether the server is running and its URL.        |
| `npm run preview -- logs`          | Print the server logs.                                 |
| `npm run preview -- logs --follow` | Stream new log output; press Ctrl+C to stop following. |
| `npm run preview -- stop`          | Stop the background preview server.                    |

The `--` tells npm to pass the remaining arguments to Astro. The same background flag and management commands work with `npm run dev` for a development server that watches source changes.

See the [Astro CLI reference](https://docs.astro.build/en/reference/cli-reference/) for command details.

## Scripts

| Command                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the development server.           |
| `npm run build`        | Generate the static site in `dist/`.    |
| `npm run preview`      | Serve the production build locally.     |
| `npm run check`        | Run Astro and TypeScript checks.        |
| `npm run format`       | Format project files with Prettier.     |
| `npm run format:check` | Check formatting without editing files. |

## Architecture

- [`src/pages/index.astro`](./src/pages/index.astro) is the single page entrypoint.
- [`src/layouts/BaseLayout.astro`](./src/layouts/BaseLayout.astro) owns metadata, JSON-LD, Google Tag Manager, navigation, and the browser script import.
- [`src/content/`](./src/content) contains profile, family, career, and navigation data, typed with [`src/types/content.ts`](./src/types/content.ts).
- [`src/assets/images/`](./src/assets/images) contains content images imported and optimized through `astro:assets`.
- [`public/`](./public) contains passthrough assets with stable URLs, including favicons, verification files, social icons, and the hero background image.
- [`src/scripts/site-enhancements.ts`](./src/scripts/site-enhancements.ts) contains shared browser behavior and is bundled by Astro.
- [`src/styles/global.css`](./src/styles/global.css) defines the visual system and layout styles.
- [`astro.config.mjs`](./astro.config.mjs) configures static output, the sitemap integration, the Fonts API, and `compressHTML: true` to preserve HTML whitespace around inline links.

## Validation

Before shipping changes, run:

```sh
npm run check
npm run build
npm audit
```

Use `npm run preview` for a browser smoke test when changing rendering, metadata, or assets.

## Deployment

GitHub Actions validates and builds the site on pull requests and pushes to `main`. The Azure Static Web Apps workflow uploads `dist/` using the repository's deployment-token secret.
