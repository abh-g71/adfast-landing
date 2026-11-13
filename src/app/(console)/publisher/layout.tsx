import type { ReactNode } from 'react'
import { PublisherDataProvider } from '@/components/shared/PublisherDataProvider'

export default function PublisherLayout({ children }: { children: ReactNode }) {
  return <PublisherDataProvider>{children}</PublisherDataProvider>
}
