'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import {
  mockPublisherPlacements,
  mockPublisherWebsites,
  type PublisherPlacement,
  type PublisherWebsite,
} from '@/data/publisher'

type PublisherDataContextValue = {
  websites: PublisherWebsite[]
  placements: PublisherPlacement[]
  addWebsite: (website: PublisherWebsite) => void
  markWebsiteVerified: (websiteId: string) => void
  addPlacement: (placement: PublisherPlacement) => void
}

const PublisherDataContext = createContext<PublisherDataContextValue | null>(null)

export function PublisherDataProvider({ children }: { children: ReactNode }) {
  const [websites, setWebsites] = useState<PublisherWebsite[]>(mockPublisherWebsites)
  const [placements, setPlacements] = useState<PublisherPlacement[]>(mockPublisherPlacements)

  function addWebsite(website: PublisherWebsite) {
    setWebsites((current) => [...current, website])
  }

  function markWebsiteVerified(websiteId: string) {
    setWebsites((current) =>
      current.map((website) =>
        website.id === websiteId ? { ...website, status: 'Verified' } : website,
      ),
    )
  }

  function addPlacement(placement: PublisherPlacement) {
    setPlacements((current) => [...current, placement])
  }

  return (
    <PublisherDataContext.Provider
      value={{ websites, placements, addWebsite, markWebsiteVerified, addPlacement }}
    >
      {children}
    </PublisherDataContext.Provider>
  )
}

export function usePublisherData() {
  const context = useContext(PublisherDataContext)
  if (!context) {
    throw new Error('usePublisherData must be used within PublisherDataProvider.')
  }
  return context
}
