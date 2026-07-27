# antoniofoti.org

Personal portfolio + blog. Astro + Tailwind + MDX. Static export.

## Develop

```bash
astro dev --background     # start
astro dev status           # check
astro dev logs             # tail
astro dev stop             # kill
```

## Edit

- Projects: `src/content/projects/*.md` — copy `_template.md`
- Blog: `src/content/blog/*.mdx`
- Socials: `src/components/SocialLinks.astro` + `src/components/Footer.astro`
- Hero copy: `src/components/Hero.astro`
- Colors: `src/styles/global.css` (`--color-accent` etc.)

## Deploy

Cloudflare Pages. Build: `astro build`. Output: `dist/`.

After first deploy, set custom domain `antoniofoti.org` in CF dashboard.
Replace `__CF_TOKEN__` in `src/layouts/Base.astro` with Cloudflare Web Analytics token (or remove the script if unwanted).
