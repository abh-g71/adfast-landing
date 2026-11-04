import { getPathLabels } from '../../data/postAd'
import type { StepProps } from './types'

export function Step3Preview({ data }: StepProps) {
  const symbol = data.currency === 'usd' ? '$' : '₹'

  return (
    <div>
      <h2 className="text-base font-semibold">Preview</h2>
      <p className="mt-1 text-sm text-slate-500">
        Check your ad. Click Continue if everything looks right, or Back to edit.
      </p>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-brand-100 to-slate-100 text-sm text-slate-500">
          Photo preview
        </div>
        <div className="p-5">
          <p className="text-xs text-slate-500">{getPathLabels(data.path).join(' › ')}</p>
          <div className="mt-1 flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-lg font-semibold">{data.title || 'Untitled ad'}</h3>
            <p className="text-lg font-bold text-brand-600">
              {symbol}{data.price || '0'}
            </p>
          </div>
          <p className="mt-3 text-sm text-slate-600">{data.description || 'No description added.'}</p>
        </div>
      </div>
    </div>
  )
}