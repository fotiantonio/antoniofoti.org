export const site = {
  name: 'Antonio Foti',
  domain: 'antoniofoti.org',
  bio: 'indie maker. shipping things on the internet.',
  now: {
    location: 'Calabria, Italy',
    stack: ['Arch Linux', 'Opencode', 'GLM 5.2'],
    focus: 'Shipping tts.audio',
  },
  socials: [
    { label: 'x', href: 'https://x.com/antoniofoti' },
    { label: 'github', href: 'https://github.com/antoniofoti' },
  ],
};

export const statusMeta: Record<string, { dot: string }> = {
  active: { dot: '#3fb950' },
  wip: { dot: '#d29922' },
  sunset: { dot: '#6e7681' },
  acquired: { dot: '#c6fe1e' },
  discontinued: { dot: '#f85149' },
};
