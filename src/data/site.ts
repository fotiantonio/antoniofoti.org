export const site = {
  name: 'Antonio Foti',
  domain: 'antoniofoti.org',
  bio: 'indie maker. shipping things on the internet.',
  now: {
    location: 'Sicily, Italy',
    stack: ['Astro', 'TypeScript', 'Tailwind'],
    focus: 'Shipping antoniofoti.org',
  },
  socials: [
    { label: 'x', href: 'https://x.com/antoniofoti' },
    { label: 'github', href: 'https://github.com/antoniofoti' },
  ],
};

export const statusMeta: Record<
  string,
  { label: string; color: string; dot: string }
> = {
  active: { label: 'active', color: '#3fb950', dot: '#3fb950' },
  wip: { label: 'wip', color: '#d29922', dot: '#d29922' },
  sunset: { label: 'sunset', color: '#6e7681', dot: '#6e7681' },
  acquired: { label: 'acquired', color: '#c6fe1e', dot: '#c6fe1e' },
  discontinued: { label: 'discontinued', color: '#f85149', dot: '#f85149' },
};
