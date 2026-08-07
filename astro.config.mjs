import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebastianmalbaceda.dev',
  integrations: [
    sitemap({
      // Don't index the 404 page in the sitemap.
      filter: (page) => !page.endsWith('/404/'),
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // A warm, low-contrast dark theme that matches the Ember & Ink palette.
      theme: 'github-dark',
      wrap: true,
    },
  },
});
