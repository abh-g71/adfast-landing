export type CategoryNode = { id: string; label: string; children?: CategoryNode[] }

export const categories: CategoryNode[] = [
  {
    id: 'house', label: 'House', children: [
      { id: 'rent', label: 'For Rent', children: [
        { id: 'flat', label: 'Flat' }, { id: 'villa', label: 'Villa' }, { id: 'duplex', label: 'Duplex' },
      ] },
      { id: 'sale', label: 'For Sale', children: [
        { id: 'flat', label: 'Flat' }, { id: 'villa', label: 'Villa' },
        { id: 'detached', label: 'Detached House' }, { id: 'coop', label: 'Cooperative' },
      ] },
    ],
  },
  {
    id: 'office', label: 'Office', children: [
      { id: 'rent', label: 'For Rent', children: [{ id: 'shop', label: 'Shop' }, { id: 'floor', label: 'Office Floor' }] },
      { id: 'sale', label: 'For Sale', children: [{ id: 'shop', label: 'Shop' }, { id: 'floor', label: 'Office Floor' }] },
    ],
  },
  {
    id: 'land', label: 'Land', children: [
      { id: 'sale', label: 'For Sale', children: [{ id: 'plot', label: 'Residential Plot' }, { id: 'farm', label: 'Farm Land' }] },
    ],
  },
]

export function getColumns(path: string[]): CategoryNode[][] {
  const cols = [categories]
  let nodes = categories
  for (const id of path) {
    const node = nodes.find((n) => n.id === id)
    if (!node?.children) break
    nodes = node.children
    cols.push(nodes)
  }
  return cols
}

export function getPathLabels(path: string[]): string[] {
  const labels: string[] = []
  let nodes = categories
  for (const id of path) {
    const node = nodes.find((n) => n.id === id)
    if (!node) break
    labels.push(node.label)
    nodes = node.children ?? []
  }
  return labels
}

export function isCategoryComplete(path: string[]): boolean {
  let nodes = categories
  let last: CategoryNode | undefined
  for (const id of path) {
    last = nodes.find((n) => n.id === id)
    if (!last) return false
    nodes = last.children ?? []
  }
  return !!last && !last.children
}

export type Promotion = { id: string; title: string; description: string; days: number; price: number }

export const promotions: Promotion[] = [
  { id: 'home', title: 'Home Page Showcase', description: 'Show your ad on our home page, visited by thousands of people every day.', days: 8, price: 100 },
  { id: 'top', title: 'Top Category Showcase', description: 'Keep your ad at the top of its category listing.', days: 8, price: 100 },
  { id: 'category', title: 'Category Showcase', description: 'Feature your ad in the showcase of its category.', days: 8, price: 100 },
  { id: 'fire', title: 'Fire Sale', description: 'Highlight a limited-time offer with a special badge.', days: 3, price: 50 },
]

export const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN')}`