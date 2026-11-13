'use client'

import { useState } from 'react'
import { DataTable } from '@/components/shared/DataTable'
import type { DataTableColumn } from '@/components/shared/DataTable'
import { EmptyState } from '@/components/shared/EmptyState'
import { Select } from '@/components/ui/Select'
import { mockDailyEarnings, mockWebsiteEarnings, type EarningsRow } from '@/data/publisher'

type EarningsView = 'daily' | 'website'

export default function PublisherEarningsPage() {
  const [range, setRange] = useState('7-days')
  const [view, setView] = useState<EarningsView>('daily')
  const rows = view === 'daily' ? mockDailyEarnings : mockWebsiteEarnings

  const columns: DataTableColumn<EarningsRow>[] = [
    { key: 'date', header: view === 'daily' ? 'Date' : 'Website', render: (row) => row.date },
    { key: 'impressions', header: 'Impressions', render: (row) => row.impressions },
    { key: 'clicks', header: 'Clicks', render: (row) => row.clicks },
    { key: 'ctr', header: 'CTR', render: (row) => row.ctr },
    { key: 'earnings', header: 'Earnings', render: (row) => row.earnings },
  ]

  return (
    <div className="mx-auto max-w-7xl">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand-700">Publisher workspace</p>
          <h1 className="mt-1 text-2xl font-bold text-navy-900">Earnings</h1>
          <p className="mt-2 text-sm text-slate-600">Mock reporting; no actual earnings are shown.</p>
        </div>
        <div className="w-full sm:w-56">
          <Select
            label="Date range"
            value={range}
            onChange={(event) => setRange(event.target.value)}
            options={[
              { value: '7-days', label: 'Last 7 days' },
              { value: '30-days', label: 'Last 30 days' },
              { value: 'this-month', label: 'This month' },
            ]}
          />
        </div>
      </header>

      <div className="mt-6 flex gap-2 border-b border-slate-200" role="tablist" aria-label="Earnings breakdown">
        {([
          { id: 'daily', label: 'Daily' },
          { id: 'website', label: 'By Website' },
        ] as const).map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`earnings-tab-${tab.id}`}
            aria-selected={view === tab.id}
            aria-controls="earnings-panel"
            onClick={() => setView(tab.id)}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              view === tab.id ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section id="earnings-panel" role="tabpanel" aria-labelledby={`earnings-tab-${view}`} className="mt-5">
        <DataTable label={`${view === 'daily' ? 'Daily' : 'Website'} earnings`} columns={columns} rows={rows} />
        {rows.length === 0 && (
          <div className="mt-4">
            <EmptyState
              title="No earnings for this period"
              description="Earnings will appear here when mock reporting data is available."
            />
          </div>
        )}
      </section>
    </div>
  )
}
