'use client'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { FiAlignLeft, FiFileText, FiImage, FiMapPin, FiUser } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Checkbox } from '../../components/ui/Checkbox'
import { PhotoUpload } from './PhotoUpload'
import type { StepProps } from './types'

function Section({
  title,
  icon: Icon,
  open,
  children,
}: {
  title: string
  icon: IconType
  open?: boolean
  children: ReactNode
}) {
  return (
    <details open={open} className="group rounded-xl border border-slate-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          {title}
        </span>
        <span className="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <div className="border-t border-slate-100 p-4">{children}</div>
    </details>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1 text-xs text-red-600">
      {message}
    </p>
  )
}

export function Step2Details({ data, update }: StepProps) {
  const [touched, setTouched] = useState({ title: false, price: false })

  const errors = {
    title: data.title.trim() === '' ? 'Enter a title' : undefined,
    price:
      data.price.trim() === ''
        ? 'Enter a price'
        : Number(data.price) <= 0
          ? 'Price must be greater than 0'
          : undefined,
  }

  return (
    <div>
      <h2 className="text-base font-semibold">Listing details</h2>
      <p className="mt-1 text-sm text-slate-500">Create your ad by entering detailed information.</p>

      <div className="mt-5 flex flex-col gap-3">
        <Section title="Contact information" icon={FiUser}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Name" placeholder="Your name" />
            <Input label="Phone" type="tel" placeholder="+91" />
          </div>
        </Section>

        <Section title="Ad information" icon={FiFileText} open>
          <div className="grid gap-4 sm:grid-cols-2">
            <div
              className="sm:col-span-2"
              onBlur={() => setTouched((t) => ({ ...t, title: true }))}
            >
              <Input
                label="Title *"
                placeholder="Enter ad title"
                value={data.title}
                onChange={(e) => update({ title: e.target.value })}
              />
              {touched.title && <FieldError message={errors.title} />}
            </div>
            <div onBlur={() => setTouched((t) => ({ ...t, price: true }))}>
              <Input
                label="Price *"
                type="number"
                placeholder="0.00"
                value={data.price}
                onChange={(e) => update({ price: e.target.value })}
              />
              {touched.price && <FieldError message={errors.price} />}
            </div>
            <Select
              label="Currency"
              value={data.currency}
              onChange={(e) => update({ currency: e.target.value })}
              options={[
                { value: 'inr', label: 'INR (₹)' },
                { value: 'usd', label: 'USD ($)' },
              ]}
            />
          </div>
        </Section>

        <Section title="Ad description" icon={FiAlignLeft}>
          <label htmlFor="desc" className="text-sm font-medium text-slate-700">Description</label>
          <textarea
            id="desc"
            rows={4}
            value={data.description}
            onChange={(e) => update({ description: e.target.value })}
            placeholder="Describe your ad"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white p-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </Section>

        <Section title="Upload photos" icon={FiImage}>
          <PhotoUpload />
        </Section>

        <Section title="Ad location" icon={FiMapPin}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="City" placeholder="City" />
            <Input label="Area" placeholder="Area or locality" />
          </div>
        </Section>
      </div>

      <div className="mt-5">
        <Checkbox
          label="By clicking Publish, you agree to our Terms of Use and Privacy Policy and confirm you are the rightful owner of this item."
          checked={data.terms}
          onChange={(e) => update({ terms: e.target.checked })}
        />
      </div>
    </div>
  )
}