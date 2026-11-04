const features = [
  { title: 'Track Engagement', text: 'Get real-time insights into total engagement and compare performance to the previous month.' },
  { title: 'Follower Growth', text: 'Monitor the growth of your followers across all connected platforms.' },
  { title: 'Visits & Impressions', text: 'See how your campaign performs with detailed reports on visits and impressions.' },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs text-slate-500">[KEY FEATURES]</p>
      <h2 className="mt-2 text-3xl font-bold">Powerful ads management features</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-accent-600">★</span>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}