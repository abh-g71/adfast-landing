export function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium shadow-sm">
          <b>NEW UPDATE</b> Make decisions with confidence
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Optimize your advertising campaigns with real-time data
        </h1>
        <p className="mt-4 max-w-md text-slate-600">
          Monitor ad performance in real time, analyse results, and make smarter decisions for better outcomes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#" className="rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white hover:bg-accent-500">
            Get Started
          </a>
          <a href="#features" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50">
            How it Works
          </a>
        </div>
      </div>

      {/* Mock dashboard card built from simple shapes */}
      <div className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl">
        <p className="text-sm font-semibold">Performance summary</p>
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-slate-500">Engagement</p><p className="text-xl font-bold">16,928</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-slate-500">Followers</p><p className="text-xl font-bold">567</p></div>
        </div>
        <div className="mt-4 flex h-32 items-end gap-3 rounded-xl bg-slate-50 p-4">
          {[40, 70, 55, 90, 65, 80].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-accent-500" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </section>
  )
}