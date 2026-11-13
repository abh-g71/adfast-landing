'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { DataTable } from '@/components/shared/DataTable'
import type { DataTableColumn } from '@/components/shared/DataTable'
import { EmptyState } from '@/components/shared/EmptyState'
import { Select } from '@/components/ui/Select'
import { mockPayoutHistory, mockPublisherBalance, type PayoutRow } from '@/data/publisher'

export default function PublisherPaymentsPage() {
  const [method, setMethod] = useState('upi')

  const columns: DataTableColumn<PayoutRow>[] = [
    { key: 'date', header: 'Date', render: (row) => row.date },
    { key: 'method', header: 'Method', render: (row) => row.method },
    { key: 'amount', header: 'Amount', render: (row) => row.amount },
    { key: 'status', header: 'Status', render: (row) => row.status },
  ]

  return (
    <div className="mx-auto max-w-7xl">
      <header>
        <p className="text-sm font-medium text-brand-700">Publisher workspace</p>
        <h1 className="mt-1 text-2xl font-bold text-navy-900">Payments</h1>
        <p className="mt-2 text-sm text-slate-600">Mock payout settings and history.</p>
      </header>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <p className="text-sm font-medium text-slate-500">Available balance</p>
          <p className="mt-2 text-3xl font-bold text-navy-900">{mockPublisherBalance}</p>
          <p className="mt-2 text-sm text-slate-500">Mock balance only. Minimum payout is set by platform.</p>
        </Card>
        <Card className="p-6">
          <Select
            label="Payout method"
            value={method}
            onChange={(event) => setMethod(event.target.value)}
            options={[
              { value: 'upi', label: 'UPI' },
              { value: 'bank-transfer', label: 'Bank Transfer' },
            ]}
          />
          <p className="mt-3 text-xs text-slate-500">Demo selection only; no payment details are collected or saved.</p>
        </Card>
      </div>

      <section aria-labelledby="payout-history" className="mt-8">
        <h2 id="payout-history" className="mb-4 text-lg font-semibold text-navy-900">Payout history</h2>
        {mockPayoutHistory.length > 0 ? (
          <DataTable label="Payout history" columns={columns} rows={mockPayoutHistory} />
        ) : (
          <EmptyState title="No payouts yet" description="Your payout history will appear here when available." />
        )}
      </section>
    </div>
  )
}
