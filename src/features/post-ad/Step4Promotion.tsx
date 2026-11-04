import { Badge } from '../../components/ui/Badge'
import { Checkbox } from '../../components/ui/Checkbox'
import { formatPrice, promotions } from '../../data/postAd'
import type { StepProps } from './types'

export function Step4Promotion({ data, update }: StepProps) {
  return (
    <div>
      <h2 className="text-base font-semibold">Promote your ad</h2>
      <p className="mt-1 text-sm text-slate-500">Add power to your ad by selecting a promotion.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {promotions.map((p) => {
          const selected = data.promotionId === p.id
          return (
            <button
              key={p.id}
              type="button"
              aria-pressed={selected}
              onClick={() => update({ promotionId: p.id, skipPromo: false })}
              className={`rounded-xl border-2 p-4 text-left transition-colors ${
                selected ? 'border-brand-600 bg-brand-50' : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold uppercase">{p.title}</h3>
                <Badge tone={selected ? 'brand' : 'neutral'}>{selected ? 'Selected' : 'Select'}</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-500">{p.description}</p>
              <p className="mt-3 text-sm font-semibold text-success-600">
                {p.days} days for {formatPrice(p.price)}
              </p>
            </button>
          )
        })}
      </div>

      <div className="mt-5">
        <Checkbox
          label="I don't want to upgrade my ad"
          checked={data.skipPromo}
          onChange={(e) =>
            update({ skipPromo: e.target.checked, promotionId: e.target.checked ? null : data.promotionId })
          }
        />
      </div>
    </div>
  )
}