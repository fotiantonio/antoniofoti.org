export const site = {
  name: 'Antonio Foti',
  domain: 'antoniofoti.org',
  bio: 'indie maker. shipping things on the internet.',
  now: {
    location: 'Calabria, Italy',
    stack: ['Arch Linux', 'Opencode', 'GLM 5.2'],
    focus: 'Shipping antoniofoti.org',
  },
  socials: [
    { label: 'x', href: 'https://x.com/antoniofoti' },
    { label: 'github', href: 'https://github.com/antoniofoti' },
  ],
};

export const statusMeta: Record<string, { label: string; dot: string }> = {
  active: { label: 'active', dot: '#3fb950' },
  wip: { label: 'wip', dot: '#d29922' },
  sunset: { label: 'sunset', dot: '#6e7681' },
  acquired: { label: 'acquired', dot: '#c6fe1e' },
  discontinued: { label: 'discontinued', dot: '#f85149' },
};
