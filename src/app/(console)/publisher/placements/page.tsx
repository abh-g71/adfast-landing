'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { DataTable } from '@/components/shared/DataTable'
import type { DataTableColumn } from '@/components/shared/DataTable'
import { EmptyState } from '@/components/shared/EmptyState'
import { FormField } from '@/components/shared/FormField'
import { Input } from '@/components/ui/Input'
import {
  createMockAdCode,
  publisherAdFormats,
  type PublisherPlacement,
} from '@/data/publisher'
import { usePublisherData } from '@/components/shared/PublisherDataProvider'

export default function PublisherPlacementsPage() {
  const { websites, placements, addPlacement } = usePublisherData()
  const [website, setWebsite] = useState('')
  const [format, setFormat] = useState('')
  const [name, setName] = useState('')
  const [touched, setTouched] = useState({ website: false, format: false, name: false })
  const [adCode, setAdCode] = useState('')
  const [copyMessage, setCopyMessage] = useState('')

  const websiteError = website ? undefined : 'Choose a website.'
  const formatError = format ? undefined : 'Choose an ad format.'
  const nameError = name.trim() ? undefined : 'Enter a placement name.'

  function createPlacement(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTouched({ website: true, format: true, name: true })
    if (websiteError || formatError || nameError) return

    const placementId = `rivinity-${name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`
    const newPlacement: PublisherPlacement = {
      id: placementId,
      name: name.trim(),
      website,
      format,
      status: 'Draft',
    }
    addPlacement(newPlacement)
    setAdCode(createMockAdCode(placementId))
    setCopyMessage('')
  }

  async function copyAdCode() {
    try {
      await navigator.clipboard.writeText(adCode)
      setCopyMessage('Copied to clipboard.')
    } catch {
      setCopyMessage('Could not access the clipboard. Select and copy the code manually.')
    }
  }

  const columns: DataTableColumn<PublisherPlacement>[] = [
    { key: 'name', header: 'Placement', render: (placement) => <span className="font-medium text-navy-900">{placement.name}</span> },
    { key: 'website', header: 'Website', render: (placement) => placement.website },
    { key: 'format', header: 'Format', render: (placement) => placement.format },
    { key: 'status', header: 'Status', render: (placement) => placement.status },
  ]

  return (
    <div className="mx-auto max-w-7xl">
      <header>
        <p className="text-sm font-medium text-brand-700">Publisher workspace</p>
        <h1 className="mt-1 text-2xl font-bold text-navy-900">Ad Placements</h1>
        <p className="mt-2 text-sm text-slate-600">Create a mock placement and preview a placeholder ad snippet.</p>
      </header>

      <Card className="mt-6 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-navy-900">Create placement</h2>
        <form className="mt-5 grid gap-5 lg:grid-cols-2" onSubmit={createPlacement} noValidate>
          <FormField id="placement-website" label="Website" error={touched.website ? websiteError : undefined}>
            <select
              id="placement-website"
              name="website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              onBlur={() => setTouched((current) => ({ ...current, website: true }))}
              aria-invalid={Boolean(touched.website && websiteError)}
              aria-describedby={touched.website && websiteError ? 'placement-website-error' : undefined}
              className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="">Choose a website</option>
              {websites.map((site) => (
                <option key={site.id} value={site.domain}>{site.domain}</option>
              ))}
            </select>
          </FormField>

          <Input
            id="placement-name"
            label="Placement name"
            name="placementName"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, name: true }))}
            error={touched.name ? nameError : undefined}
          />

          <fieldset className="lg:col-span-2">
            <legend className="mb-2 text-sm font-medium text-slate-700">Ad format</legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {publisherAdFormats.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    className="peer sr-only"
                    type="radio"
                    name="placement-format"
                    value={option}
                    checked={format === option}
                    onChange={() => setFormat(option)}
                    onBlur={() => setTouched((current) => ({ ...current, format: true }))}
                    aria-describedby={touched.format && formatError ? 'placement-format-error' : undefined}
                  />
                  <Card className={`p-4 text-center text-sm font-medium text-slate-700 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 ${
                    format === option ? 'border-brand-600 bg-brand-50 text-brand-700 ring-1 ring-brand-600' : 'hover:border-brand-500'
                  }`}>
                    {option}
                  </Card>
                </label>
              ))}
            </div>
            {touched.format && formatError && <p id="placement-format-error" className="mt-1.5 text-xs text-danger-600" role="alert">{formatError}</p>}
          </fieldset>

          <Button type="submit" className="lg:col-span-2 lg:w-fit">Create placement</Button>
        </form>
      </Card>

      {adCode && (
        <Card className="mt-6 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-navy-900">Ad code</h2>
              <p className="mt-1 text-sm text-slate-600">Mock snippet only; the reserved .example endpoint does not serve ads.</p>
            </div>
            <Button type="button" variant="outline" onClick={copyAdCode}>Copy</Button>
          </div>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-navy-950 p-4 text-xs text-slate-100">
            <code>{adCode}</code>
          </pre>
          {copyMessage && <p className="mt-2 text-sm text-slate-600" role="status">{copyMessage}</p>}
        </Card>
      )}

      <section aria-labelledby="existing-placements" className="mt-8">
        <h2 id="existing-placements" className="mb-4 text-lg font-semibold text-navy-900">Existing placements</h2>
        {placements.length > 0 ? (
          <DataTable label="Ad placements" columns={columns} rows={placements} />
        ) : (
          <EmptyState title="No placements yet" description="Create a placement to see it listed here." />
        )}
      </section>
    </div>
  )
}
