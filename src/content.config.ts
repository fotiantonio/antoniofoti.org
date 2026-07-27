import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    url: z.string().url(),
    logo: z.string().optional(),
    revenue: z.string().optional(),
    acquired: z.string().optional(),
    founded: z.coerce.date().optional(),
    users: z.string().optional(),
    subs: z.string().optional(),
    status: z.enum(['active', 'wip', 'sunset', 'acquired', 'discontinued']).default('active'),
    tech: z.array(z.string()).default([]),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
