'use client'

import { useState } from 'react'

const plans = [
  { name: 'Free', monthly: 0, desc: 'For small businesses and startups', perks: ['1 ad platform', 'Basic reports', 'Email support'], cta: 'Start for Free' },
  { name: 'Pro', monthly: 32, desc: 'For growing businesses', perks: ['Up to 3 ad platforms', 'Advanced reports', 'Real-time monitoring', 'A/B testing'], cta: 'Start 14 Days Trial', featured: true },
  { name: 'Enterprise', monthly: null, desc: 'For large teams', perks: ['Unlimited platforms', 'Custom analytics', 'Automation', 'Custom API'], cta: 'Talk to Sales' },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-center font-mono text-xs text-slate-500">[PRICING]</p>
      <h2 className="mt-2 text-center text-3xl font-bold">Price is just a number, focus on the benefits</h2>
      <div className="mx-auto mt-6 flex w-fit rounded-full bg-white p-1 text-sm shadow-sm">
        {['Monthly', 'Annual'].map((label) => (
          <button
            key={label}
            onClick={() => setAnnual(label === 'Annual')}
            className={`rounded-full px-4 py-1.5 font-medium ${(label === 'Annual') === annual ? 'bg-slate-100' : 'text-slate-500'}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl bg-white p-6 ${p.featured ? 'shadow-xl md:-translate-y-2' : 'shadow-sm'}`}>
            <p className="text-sm font-medium text-slate-500">{p.name} plan</p>
            <p className="mt-2 text-3xl font-bold">
              {p.monthly === null ? 'Custom' : `$${annual ? Math.round(p.monthly * 0.8) : p.monthly}`}
              {p.monthly !== null && <span className="text-sm font-normal text-slate-500"> /month</span>}
            </p>
            <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
            <a href="#" className={`mt-5 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold ${p.featured ? 'bg-accent-600 text-white' : 'border border-slate-200'}`}>
              {p.cta}
            </a>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {p.perks.map((perk) => <li key={perk}>✓ {perk}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}