import { PublicPageShell } from '@/components/landing/PublicPageShell'
import { Card } from '@/components/ui/Card'

export default function PublisherDashboardPlaceholder() {
  return (
    <PublicPageShell>
      <div className="px-4 py-16 sm:px-6">
        <Card className="mx-auto max-w-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-navy-900">Publisher dashboard placeholder</h1>
          <p className="mt-3 text-sm text-slate-600">
            This demo destination is a placeholder. No publisher account or earnings data is available.
          </p>
        </Card>
      </div>
    </PublicPageShell>
  )
}
