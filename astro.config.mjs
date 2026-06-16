import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebastianmalbaceda.dev',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
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
});
