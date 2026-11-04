import type { ReactNode } from 'react'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Checkbox } from '../../components/ui/Checkbox'
import type { StepProps } from './types'

function Section({ title, open, children }: { title: string; open?: boolean; children: ReactNode }) {
  return (
    <details open={open} className="group rounded-xl border border-slate-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
        {title}
        <span className="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <div className="border-t border-slate-100 p-4">{children}</div>
    </details>
  )
}

export function Step2Details({ data, update }: StepProps) {
  return (
    <div>
      <h2 className="text-base font-semibold">Listing details</h2>
      <p className="mt-1 text-sm text-slate-500">Create your ad by entering detailed information.</p>

      <div className="mt-5 flex flex-col gap-3">
        <Section title="Contact information">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Name" placeholder="Your name" />
            <Input label="Phone" type="tel" placeholder="+91" />
          </div>
        </Section>

        <Section title="Ad information" open>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Input
                label="Title *"
                placeholder="Enter ad title"
                value={data.title}
                onChange={(e) => update({ title: e.target.value })}
              />
            </div>
            <Input
              label="Price *"
              type="number"
              placeholder="0.00"
              value={data.price}
              onChange={(e) => update({ price: e.target.value })}
            />
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

        <Section title="Ad description">
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

        <Section title="Upload photos">
          <div className="rounded-xl border-2 border-dashed border-slate-300 p-6 text-center">
            <input type="file" multiple accept="image/*" className="text-sm" />
          </div>
        </Section>

        <Section title="Ad location">
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