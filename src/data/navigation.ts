export type NavItem = { id: string; label: string }
export type NavGroup = { title?: string; items: NavItem[] }

export const navGroups: NavGroup[] = [
  {
    items: [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'domains', label: 'Domains' },
      { id: 'post-ad', label: 'Post Ad' },
      { id: 'email-marketing', label: 'Email Marketing' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { id: 'notifications', label: 'Notifications' },
      { id: 'ad-tester', label: 'Ad Tester' },
      { id: 'system-health', label: 'System Health' },
    ],
  },
]