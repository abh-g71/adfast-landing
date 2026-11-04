import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const rows = [
  { platform: 'Facebook', Icon: FaFacebook, color: 'text-[#1877f2]', campaign: 'Mobile App Design', clicks: '718', impressions: '12,910' },
  { platform: 'Instagram', Icon: FaInstagram, color: 'text-[#e4405f]', campaign: 'Web App Design', clicks: '450', impressions: '8,200' },
  { platform: 'LinkedIn', Icon: FaLinkedin, color: 'text-[#0a66c2]', campaign: 'Responsive Design', clicks: '540', impressions: '7,300' },
  { platform: 'X', Icon: FaXTwitter, color: 'text-black', campaign: 'Landing Page Design', clicks: '540', impressions: '7,121' },
]

const notes = [
  { title: 'Real-Time Tracking.', text: 'Track your advertising expenditure in real time and see how effectively your budget is being used.' },
  { title: 'Budget Adjustments.', text: 'Adjust your budget at any time to keep your ads within optimal limits.' },
  { title: 'Cost Per Conversion.', text: 'Analysis of ad spend based on conversions to calculate a more accurate ROI.' },
]

export function Budget() {
  return (
    <section id="product" className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-center font-mono text-xs text-slate-500">[BUDGETING FOR AD]</p>
      <h2 className="mt-2 text-center text-3xl font-bold">Manage and optimize your advertising budget</h2>

      <div className="mt-8 rounded-2xl bg-gradient-to-b from-orange-200 to-transparent p-1 pt-2">
        <div className="overflow-x-auto rounded-xl bg-white p-4 shadow-sm">
          <p className="mb-3 font-semibold">Ad spent</p>
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                {['Platform', 'Campaign', 'Clicks', 'Impressions'].map((h) => (
                  <th key={h} className="px-3 py-2 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ platform, Icon, color, campaign, clicks, impressions }) => (
                <tr key={platform} className="border-t border-slate-100">
                  <td className="px-3 py-3 font-medium">
                    <span className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${color}`} />
                      {platform}
                    </span>
                  </td>
                  <td className="px-3 py-3">{campaign}</td>
                  <td className="px-3 py-3">{clicks}</td>
                  <td className="px-3 py-3">{impressions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
        {notes.map((n) => (
          <div key={n.title}>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-xs text-accent-600">●</span>
            <p className="mt-3 text-sm">
              <b>{n.title}</b> <span className="text-slate-600">{n.text}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}