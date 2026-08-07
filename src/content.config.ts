import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1).max(120),
    description: z.string().min(1).max(200),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string().min(1).max(40),
    tags: z.array(z.string().min(1).max(30)).max(10),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
