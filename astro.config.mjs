// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://antoniofoti.org',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
