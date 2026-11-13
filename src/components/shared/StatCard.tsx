import { Card } from '@/components/ui/Card'

type StatCardProps = {
  label: string
  value: string
  detail?: string
}

export function StatCard({ label, value, detail = 'Mock data' }: StatCardProps) {
  return (
    <Card className="p-5">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-navy-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{detail}</p>
    </Card>
  )
}
