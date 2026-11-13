import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

type InfoPageProps = {
  title: string
  description: string
  benefits: { title: string; description: string }[]
  steps: string[]
}

export function InfoPage({ title, description, benefits, steps }: InfoPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <section className="py-16 text-center sm:py-20">
        <Badge tone="brand">RivinityADS</Badge>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {description}
        </p>
        <ButtonLink href="/signup" className="mt-7">Get started</ButtonLink>
      </section>

      <section aria-labelledby="benefits-heading" className="py-8">
        <h2 id="benefits-heading" className="text-center text-2xl font-bold text-navy-900">
          Built for your goals
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6">
              <h3 className="text-lg font-semibold text-navy-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="steps-heading" className="py-12">
        <h2 id="steps-heading" className="text-center text-2xl font-bold text-navy-900">
          How it works
        </h2>
        <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step}>
              <Card className="flex h-full items-center gap-3 p-5">
                <Badge tone="brand" aria-label={`Step ${index + 1}`}>
                  {index + 1}
                </Badge>
                <span className="text-sm font-medium text-slate-700">{step}</span>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold text-navy-900">Ready to get started?</h2>
        <p className="mt-2 text-sm text-slate-600">Create an account to explore RivinityADS.</p>
        <ButtonLink href="/signup" className="mt-5">Create your account</ButtonLink>
      </section>
    </div>
  )
}
