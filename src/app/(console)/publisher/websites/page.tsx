'use client'

import { useState, type FormEvent } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { DataTable } from '@/components/shared/DataTable'
import type { DataTableColumn } from '@/components/shared/DataTable'
import { FormField } from '@/components/shared/FormField'
import { Input } from '@/components/ui/Input'
import {
  mockVerificationCode,
  publisherWebsiteCategories,
  type PublisherWebsite,
} from '@/data/publisher'
import { usePublisherData } from '@/components/shared/PublisherDataProvider'

const domainPattern = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i

export default function PublisherWebsitesPage() {
  const { websites, addWebsite, markWebsiteVerified } = usePublisherData()
  const [domain, setDomain] = useState('')
  const [category, setCategory] = useState('')
  const [touched, setTouched] = useState({ domain: false, category: false })
  const [selectedWebsiteId, setSelectedWebsiteId] = useState(
    websites.find((website) => website.status === 'Pending')?.id ?? '',
  )

  const normalizedDomain = domain.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '')
  const domainError = !normalizedDomain
    ? 'Enter a domain.'
    : !domainPattern.test(normalizedDomain)
      ? 'Enter a valid domain, such as example.com.'
      : websites.some((website) => website.domain === normalizedDomain.toLowerCase())
        ? 'This domain has already been added.'
        : undefined
  const categoryError = category ? undefined : 'Choose a category.'
  const selectedWebsite = websites.find((website) => website.id === selectedWebsiteId)

  function handleAddWebsite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTouched({ domain: true, category: true })
    if (domainError || categoryError) return

    const newWebsite: PublisherWebsite = {
      id: `website-${Date.now()}`,
      domain: normalizedDomain.toLowerCase(),
      status: 'Pending',
      addedDate: new Date().toISOString().slice(0, 10),
      category,
    }
    addWebsite(newWebsite)
    setSelectedWebsiteId(newWebsite.id)
    setDomain('')
    setCategory('')
    setTouched({ domain: false, category: false })
  }

  function verifySelectedWebsite() {
    if (selectedWebsite) markWebsiteVerified(selectedWebsite.id)
  }

  const columns: DataTableColumn<PublisherWebsite>[] = [
    { key: 'domain', header: 'Domain', render: (website) => <span className="font-medium text-navy-900">{website.domain}</span> },
    {
      key: 'status',
      header: 'Status',
      render: (website) => (
        <Badge tone={website.status === 'Verified' ? 'success' : 'warning'}>{website.status}</Badge>
      ),
    },
    { key: 'added-date', header: 'Added date', render: (website) => website.addedDate },
    {
      key: 'actions',
      header: 'Actions',
      render: (website) => (
        <Button
          type="button"
          variant="ghost"
          className="px-2 py-1"
          onClick={() => setSelectedWebsiteId(website.id)}
          aria-label={`Select ${website.domain} for verification`}
        >
          {website.status === 'Verified' ? 'View verification' : 'Verify ownership'}
        </Button>
      ),
    },
  ]

  return (
    <div className="mx-auto max-w-7xl">
      <header>
        <p className="text-sm font-medium text-brand-700">Publisher workspace</p>
        <h1 className="mt-1 text-2xl font-bold text-navy-900">Websites</h1>
        <p className="mt-2 text-sm text-slate-600">Add a site and verify that you own it. Demo changes are kept in memory and reset on refresh.</p>
      </header>

      <section aria-label="Your websites" className="mt-6">
        <DataTable label="Publisher websites" columns={columns} rows={websites} />
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-navy-900">Add a website</h2>
          <form className="mt-4 space-y-4" onSubmit={handleAddWebsite} noValidate>
            <Input
              id="publisher-domain"
              label="Domain"
              name="domain"
              placeholder="example.com"
              autoComplete="url"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              onBlur={() => setTouched((current) => ({ ...current, domain: true }))}
              error={touched.domain ? domainError : undefined}
            />
            <FormField id="publisher-category" label="Category" error={touched.category ? categoryError : undefined}>
              <select
                id="publisher-category"
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                onBlur={() => setTouched((current) => ({ ...current, category: true }))}
                aria-invalid={Boolean(touched.category && categoryError)}
                aria-describedby={touched.category && categoryError ? 'publisher-category-error' : undefined}
                className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Choose a category</option>
                {publisherWebsiteCategories.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </FormField>
            <Button type="submit">Add website</Button>
          </form>
        </Card>

        <Card className="p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-navy-900">Verify ownership</h2>
          {selectedWebsite ? (
            <>
              <p className="mt-2 text-sm text-slate-600">
                Add this mock verification tag to <span className="font-medium text-navy-900">{selectedWebsite.domain}</span>:
              </p>
              <pre className="mt-4 overflow-x-auto rounded-lg bg-navy-950 p-4 text-xs text-slate-100">
                <code>{mockVerificationCode}</code>
              </pre>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button type="button" onClick={verifySelectedWebsite} disabled={selectedWebsite.status === 'Verified'}>
                  {selectedWebsite.status === 'Verified' ? 'Verified' : 'Verify'}
                </Button>
                <p className="text-xs text-slate-500">
                  {selectedWebsite.status === 'Verified' ? 'Mock verification complete.' : 'Demo only; no site check is performed.'}
                </p>
              </div>
            </>
          ) : (
            <p className="mt-2 text-sm text-slate-600">Add a website to begin ownership verification.</p>
          )}
        </Card>
      </div>
    </div>
  )
}
