export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Meme App',
  description: 'Meme App.',
  navItems: [
    {
      label: 'Table',
      href: '/',
    },
  ],
  navMenuItems: [
    {
      label: 'Table View',
      href: '/table',
    },
    {
      label: 'List View',
      href: '/list',
    },
  ],
};
