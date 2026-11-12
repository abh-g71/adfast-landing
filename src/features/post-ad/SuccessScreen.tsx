import { FiCheck } from 'react-icons/fi'
import { Button } from '../../components/ui/Button'
import { formatPrice, promotions } from '../../data/postAd'
import type { PostAdData } from './types'

export function SuccessScreen({ data, onRestart }: { data: PostAdData; onRestart: () => void }) {
  const promo = promotions.find((p) => p.id === data.promotionId)

  return (
    <div className="rounded-2xl bg-navy-900 px-6 py-12 text-center text-white">
      <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/40" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-600">
          <FiCheck className="h-8 w-8" aria-hidden />
        </span>
      </div>

      <h2 className="mt-5 text-xl font-semibold">Your ad has been submitted</h2>
      <p className="mt-2 text-sm text-slate-300">It will go live after review.</p>

      <dl className="mx-auto mt-6 max-w-xs rounded-xl bg-white/10 p-4 text-left text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-slate-300">Ad</dt>
          <dd className="truncate font-medium">{data.title.trim() || 'Untitled ad'}</dd>
        </div>
        <div className="mt-2 flex justify-between gap-4">
          <dt className="text-slate-300">Promotion</dt>
          <dd className="font-medium">{promo ? `${promo.title} · ${formatPrice(promo.price)}` : 'None'}</dd>
        </div>
      </dl>

      <Button className="mt-6" onClick={onRestart}>Post another ad</Button>
    </div>
  )
}