const faqs = [
  ['What is AdLaunch?', 'AdLaunch is an ads dashboard that helps you optimize, track and manage campaigns across platforms.'],
  ['Is there a free trial?', 'Yes. The Pro plan includes a 14-day free trial.'],
  ['Can I connect multiple ad platforms?', 'Yes. The number of platforms depends on your plan.'],
]

export function Faq() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
      <div>
        <p className="font-mono text-xs text-slate-500">[FAQ]</p>
        <h2 className="mt-2 text-3xl font-bold">Got questions? We have answers.</h2>
      </div>
      <div className="space-y-3">
        {faqs.map(([q, a], i) => (
          <details key={q} open={i === 0} className="rounded-xl bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-sm text-slate-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}