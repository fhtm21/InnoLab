export const siteConfig = {
  header: {
    showSearch: true,
    utilityLinks: [
      { label: 'Home', to: '/' },
      { label: 'Contact', to: '/contact' },
    ],
    primaryCta: {
      label: 'Collaborate',
      to: '/collaborate',
    },
  },
  floatingWidget: {
    enabled: true, // RB-04 optional widget; can be toggled off
    label: 'Quick actions',
    action: { type: 'route', to: '/collaborate' }, // or { type: 'external', href: 'https://...' }
  },
  footer: {
    quickLinks: [
      { label: 'About', to: '/about' },
      { label: 'Activities', to: '/activities' },
      { label: 'Facilities', to: '/facilities' },
      { label: 'People', to: '/people' },
      { label: 'Articles', to: '/articles' },
      { label: 'Collaborate', to: '/collaborate' },
      { label: 'Contact', to: '/contact' },
    ],
    policies: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
    social: [
      { label: 'LinkedIn', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    address: {
      line1: 'BINUS @Bekasi',
      line2: 'School of Information Systems (location details TBD)',
      mapHref: '#',
    },
  },
}