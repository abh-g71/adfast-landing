import { FaHouse, FaInbox, FaBell, FaChartPie, FaFileLines, FaFlag, FaChartLine, FaPlug } from 'react-icons/fa6'

const topNav = [
  { label: 'Home', Icon: FaHouse, count: 4 },
  { label: 'Inbox', Icon: FaInbox, count: 32 },
  { label: 'Notifications', Icon: FaBell, count: 4 },
]

const mainNav = [
  { label: 'Dashboard', Icon: FaChartPie, active: true },
  { label: 'Report', Icon: FaFileLines },
  { label: 'Campaigns', Icon: FaFlag },
  { label: 'Ads Performance', Icon: FaChartLine },
  { label: 'Integration', Icon: FaPlug },
]

export function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium shadow-sm">
          <b>NEW UPDATE</b> Make decisions with confidence
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Create, track and optimize campaigns from one simple console.
        </h1>
        <p className="mt-4 max-w-md text-slate-600">
          Monitor ad performance in real time, analyse results, and make smarter decisions for better outcomes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/post-ad" className="rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white hover:bg-accent-500" >
            Get Started
          </a>
          <a href="#features" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50">
            How it Works
          </a>
        </div>
      </div>

      {/* Mock dashboard: sidebar + content */}
      <div className="flex overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-xl lg:[transform:perspective(1200px)_rotateY(-14deg)_rotateX(4deg)]">
        <aside className="hidden w-44 shrink-0 border-r border-slate-100 bg-white p-3 text-xs sm:block">
          <p className="font-semibold">Acme Inc.</p>
          <div className="mt-3 rounded-lg border border-slate-200 px-2 py-1.5 text-slate-400">Search here...</div>

          <ul className="mt-3 space-y-1 text-slate-600">
            {topNav.map(({ label, Icon, count }) => (
              <li key={label} className="flex items-center justify-between px-2 py-1.5">
                <span className="flex items-center gap-2"><Icon className="h-3.5 w-3.5" />{label}</span>
                <span className="text-slate-400">{count}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 px-2 text-slate-400">Workspace</p>
          <ul className="mt-1 space-y-1 text-slate-600">
            {mainNav.map(({ label, Icon, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${active ? 'bg-slate-100 font-semibold text-slate-900' : ''}`}
              >
                <Icon className="h-3.5 w-3.5" />{label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-5">
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
      </div>
    </section>
  )
}