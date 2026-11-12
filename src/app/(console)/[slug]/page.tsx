import { Card } from '@/components/ui/Card'

export default async function PlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <Card className="mt-6 p-8 text-center text-slate-500">This page will be built later.</Card>
    </div>
  )
}