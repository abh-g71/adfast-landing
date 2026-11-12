export type NavItem = { id: string; label: string; href: string }
export type NavGroup = { title?: string; items: NavItem[] }

export const navGroups: NavGroup[] = [
  {
    items: [
      { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
      { id: 'domains', label: 'Domains', href: '/domains' },
      { id: 'post-ad', label: 'Post Ad', href: '/post-ad' },
      { id: 'email-marketing', label: 'Email Marketing', href: '/email-marketing' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { id: 'notifications', label: 'Notifications', href: '/notifications' },
      { id: 'ad-tester', label: 'Ad Tester', href: '/ad-tester' },
      { id: 'system-health', label: 'System Health', href: '/system-health' },
    ],
  },
]