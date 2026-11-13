import { PublicPageShell } from '@/components/landing/PublicPageShell'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

const formats = [
  { name: 'Banner', description: 'A display placement shown within page content.', bestFor: 'Brand visibility' },
  { name: 'Native', description: 'An ad styled to fit alongside surrounding content.', bestFor: 'Content discovery' },
  { name: 'Popunder', description: 'A page that opens behind the active browser window.', bestFor: 'Landing page visits' },
  { name: 'Push Notification', description: 'A brief message delivered as a browser notification.', bestFor: 'Timely updates' },
  { name: 'Social Bar', description: 'An interactive, floating ad placement on a page.', bestFor: 'Engagement' },
]

export default function AdFormatsPage() {
  return (
    <PublicPageShell>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <header className="py-16 text-center sm:py-20">
          <Badge tone="brand">Ad formats</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
            Choose a format that fits
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore common ad placements and consider what suits your campaign or website.
          </p>
        </header>

        <section aria-label="Available ad formats" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <Card key={format.name} className="p-6">
              <h2 className="text-lg font-semibold text-navy-900">{format.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{format.description}</p>
              <p className="mt-5 text-sm text-slate-700">
                <span className="font-semibold">Best for:</span> {format.bestFor}
              </p>
            </Card>
          ))}
        </section>
      </div>
    </PublicPageShell>
  )
}
