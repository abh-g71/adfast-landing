'use client'
import { useState } from 'react'
import { FiCheckCircle, FiImage, FiMapPin, FiPhone, FiUser } from 'react-icons/fi'
import { getPathLabels } from '../../data/postAd'
import type { StepProps } from './types'

const tones = ['from-brand-100 to-blue-200', 'from-blue-100 to-brand-200', 'from-sky-100 to-blue-200', 'from-blue-50 to-brand-100']

export function Step3Preview({ data }: StepProps) {
  const [active, setActive] = useState(0)

  const symbol = data.currency === 'usd' ? '$' : '₹'
  const priceNum = Number(data.price)
  const price = priceNum > 0 ? `${symbol}${priceNum.toLocaleString(data.currency === 'usd' ? 'en-US' : 'en-IN')}` : '—'
  const labels = getPathLabels(data.path)
  const category = labels.length ? labels.join(' › ') : '—'

  const specs = [
    ['Category', category],
    ['Price', price],
    ['Currency', data.currency.toUpperCase()],
    ['Condition', 'Used – good'],
    ['Posted', 'Just now'],
  ]

  return (
    <div>
      <h2 className="text-base font-semibold">Preview</h2>
      <p className="mt-1 text-sm text-slate-500">
        Check your ad. Click Continue if everything looks right, or Back to edit.
      </p>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className={`flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br ${tones[active]}`}>
            <FiImage className="h-10 w-10 text-brand-600/60" aria-hidden />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {tones.map((tone, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Photo ${i + 1}`}
                className={`aspect-video rounded-lg bg-gradient-to-br ${tone} ring-offset-2 ${
                  active === i ? 'ring-2 ring-brand-500' : 'opacity-70 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          <h3 className="mt-5 text-xl font-semibold">{data.title.trim() || 'Untitled ad'}</h3>
          <p className="mt-2 whitespace-pre-line text-sm text-slate-600">
            {data.description.trim() || 'No description added.'}
          </p>

          <table className="mt-5 w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
            <tbody>
              {specs.map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100 last:border-0">
                  <th scope="row" className="w-1/3 bg-slate-50 px-4 py-2.5 text-left font-medium text-slate-600">
                    {label}
                  </th>
                  <td className="px-4 py-2.5">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 p-5">
          <p className="text-2xl font-bold text-brand-600">{price}</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
            <FiMapPin aria-hidden /> Your city
          </p>

          <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <FiUser aria-hidden />
            </span>
            <div>
              <p className="text-sm font-medium">Seller name</p>
              <p className="flex items-center gap-1 text-xs text-slate-500">
                <FiCheckCircle className="text-green-600" aria-hidden /> Verified seller
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white"
          >
            <FiPhone aria-hidden /> Show phone number
          </button>
        </aside>
      </div>
    </div>
  )
}