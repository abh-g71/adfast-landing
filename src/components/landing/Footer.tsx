export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6">
      <div className="rounded-3xl bg-navy-900 px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to optimize your ads?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-300">
          Start today and take control of your campaigns with real-time insights.
        </p>
        <a href="#" className="mt-6 inline-block rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold">
          Get Started for Free
        </a>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span className="font-semibold text-slate-900">AdLaunch</span>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  )
}