import { FaWallet, FaChartLine, FaWandMagicSparkles } from 'react-icons/fa6'

const card = 'rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm'
const iconTile = 'flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600'

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs text-slate-500">[KEY FEATURES]</p>
      <h2 className="mt-2 text-3xl font-bold">Everything in one console</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {/* AI Assistant */}
        <div className={card}>
          <span className={iconTile}><FaWandMagicSparkles className="h-4 w-4" /></span>
          <h3 className="mt-4 font-semibold">AI Assistant</h3>
          <p className="mt-1 text-sm text-slate-600">Build campaigns by chatting.</p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="w-fit rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2">Launch a sale for ₹5,000</p>
            <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-blue-600 px-3 py-2 text-white">Draft is ready.</p>
          </div>
        </div>

        {/* Live Metrics */}
        <div className={card}>
          <span className={iconTile}><FaChartLine className="h-4 w-4" /></span>
          <h3 className="mt-4 font-semibold">Live Metrics</h3>
          <p className="mt-1 text-sm text-slate-600">Track performance in real time.</p>
          <p className="mt-4 text-3xl font-bold text-blue-600">16,928</p>
          <svg viewBox="0 0 200 60" className="mt-2 h-14 w-full" fill="none">
            <polyline
              points="0,50 25,40 50,44 75,28 100,34 125,18 150,24 175,10 200,14"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Wallet */}
        <div className={card}>
          <span className={iconTile}><FaWallet className="h-4 w-4" /></span>
          <h3 className="mt-4 font-semibold">Easy Wallet</h3>
          <p className="mt-1 text-sm text-slate-600">Top up and manage budget fast.</p>
          <p className="mt-4 text-3xl font-bold">₹12,500</p>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Budget used</span>
              <span>68%</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[68%] rounded-full bg-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}