export type NavItem = { id: string; label: string; href: string }
export type NavGroup = { title?: string; items: NavItem[] }
export type ConsoleRole = 'advertiser' | 'publisher'

export const navGroups: NavGroup[] = [
  {
    items: [
      { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
      { id: 'campaigns', label: 'Campaigns & Statistics', href: '/campaigns' },
      { id: 'create-campaign', label: 'Create Campaign', href: '/campaigns/new' },
      { id: 'traffic-chart', label: 'Traffic Chart', href: '/traffic-chart' },
      { id: 'conversion-tracking', label: 'Conversion Tracking', href: '/conversion-tracking' },
      { id: 'add-funds', label: 'Add Funds', href: '/add-funds' },
      { id: 'finance', label: 'Finance', href: '/finance' },
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

export const publisherNavGroups: NavGroup[] = [
  {
    items: [
      { id: 'publisher-dashboard', label: 'Dashboard', href: '/publisher' },
      { id: 'publisher-websites', label: 'Websites', href: '/publisher/websites' },
      { id: 'publisher-placements', label: 'Ad Placements', href: '/publisher/placements' },
      { id: 'publisher-earnings', label: 'Earnings', href: '/publisher/earnings' },
      { id: 'publisher-payments', label: 'Payments', href: '/publisher/payments' },
    ],
  },
]

// Role-based navigation is a UI convenience; real permissions must be enforced by the backend.
export function getNavGroups(role: ConsoleRole): NavGroup[] {
  return role === 'publisher' ? publisherNavGroups : navGroups
}