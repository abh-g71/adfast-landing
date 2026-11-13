export type WebsiteStatus = 'Pending' | 'Verified'

export type PublisherWebsite = {
  id: string
  domain: string
  status: WebsiteStatus
  addedDate: string
  category: string
}

export type PublisherPlacement = {
  id: string
  name: string
  website: string
  format: string
  status: string
}

export type EarningsRow = {
  id: string
  date: string
  impressions: string
  clicks: string
  ctr: string
  earnings: string
}

export type PayoutRow = {
  id: string
  date: string
  method: string
  amount: string
  status: string
}

// All values and records below are mock examples; they are not real publisher data or performance.
export const mockPublisherStats = [
  { label: 'Earnings', value: '₹1,245.50' },
  { label: 'Impressions', value: '18,420' },
  { label: 'Clicks', value: '214' },
  { label: 'CTR', value: '1.16%' },
]

export const mockPublisherChecklist = { completed: 0, total: 4 }

export const publisherWebsiteCategories = [
  'Technology',
  'News & Media',
  'Entertainment',
  'Education',
  'Other',
]

export const mockPublisherWebsites: PublisherWebsite[] = [
  {
    id: 'website-demo',
    domain: 'rivinity-demo.test',
    status: 'Pending',
    addedDate: '2026-11-13',
    category: 'Technology',
  },
]

export const publisherAdFormats = ['Banner', 'Native', 'Popunder', 'Push', 'Social Bar']

export const mockPublisherPlacements: PublisherPlacement[] = [
  {
    id: 'placement-demo',
    name: 'Demo header placement',
    website: 'rivinity-demo.test',
    format: 'Banner',
    status: 'Draft',
  },
]

export const mockDailyEarnings: EarningsRow[] = []
export const mockWebsiteEarnings: EarningsRow[] = []
export const mockPayoutHistory: PayoutRow[] = []
export const mockPublisherBalance = '₹1,245.50'
export const mockVerificationCode = '<meta name="rivinityads-site-verification" content="demo-verification-code" />'

export function createMockAdCode(placementId: string) {
  return `<script async src="https://ads.rivinityads.example/serve.js" data-placement="${placementId}"></script>`
}
