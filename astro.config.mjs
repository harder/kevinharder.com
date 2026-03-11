import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kevinharder.com',
  integrations: [sitemap()],
  fonts: [
    {
      name: 'Orbitron',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: [500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace']
    },
    {
      name: 'Space Grotesk',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif']
    },
    {
      name: 'Space Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace']
    }
  ],
  output: 'static'
});
