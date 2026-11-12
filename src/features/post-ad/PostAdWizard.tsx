'use client'
import { useEffect, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Stepper } from '../../components/wizard/Stepper'
import { isCategoryComplete } from '../../data/postAd'
import { Step1Category } from './Step1Category'
import { Step2Details } from './Step2Details'
import { Step3Preview } from './Step3Preview'
import { Step4Promotion } from './Step4Promotion'
import { Step5Summary } from './Step5Summary'
import type { PostAdData } from './types'

const stepLabels = ['Category', 'Listing details', 'Preview', 'Promotion', 'Summary']
const DRAFT_KEY = 'post-ad-draft'

const initialData: PostAdData = {
  path: [],
  title: '',
  price: '',
  currency: 'inr',
  description: '',
  terms: false,
  promotionId: null,
  skipPromo: false,
}

export function PostAdWizard() {
  const [step, setStep] = useState(0)
  const [finished, setFinished] = useState(false)
  const [data, setData] = useState<PostAdData>(initialData)
  const [loaded, setLoaded] = useState(false)

  // Load saved draft once, after the page opens
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY)
      if (raw) {
        const saved = JSON.parse(raw)
        setData({ ...initialData, ...saved.data })
        setStep(typeof saved.step === 'number' ? saved.step : 0)
      }
    } catch {}
    setLoaded(true)
  }, [])

  // Save draft on every change
  useEffect(() => {
    if (!loaded || finished) return
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ data, step }))
    } catch {}
  }, [data, step, loaded, finished])

  const update = (patch: Partial<PostAdData>) => setData((prev) => ({ ...prev, ...patch }))

  const canContinue = [
    isCategoryComplete(data.path),
    data.title.trim() !== '' && data.price.trim() !== '' && data.terms,
    true,
    data.promotionId !== null || data.skipPromo,
    true,
  ][step]

  const finish = () => {
    localStorage.removeItem(DRAFT_KEY)
    setFinished(true)
  }

  const restart = () => {
    localStorage.removeItem(DRAFT_KEY)
    setData(initialData)
    setStep(0)
    setFinished(false)
  }

  const stepProps = { data, update }
  const isLast = step === stepLabels.length - 1

  return (
    <div className="rounded-3xl bg-gradient-to-br from-brand-50 via-indigo-50 to-blue-50 p-3 sm:p-6">
      <Card className="mx-auto max-w-5xl p-5 sm:p-8">
        {finished ? (
          <div className="rounded-2xl bg-navy-900 px-6 py-12 text-center text-white">
            <p className="text-4xl">🎉</p>
            <h2 className="mt-3 text-xl font-semibold">Your ad has been submitted</h2>
            <p className="mt-2 text-sm text-slate-300">It will go live after review.</p>
            <Button className="mt-6" onClick={restart}>Post another ad</Button>
          </div>
        ) : (
          <>
            <p className="text-xs text-slate-500">
              Home <span aria-hidden>›</span> <span className="text-brand-600">Post Ad</span>
            </p>
            <h1 className="mt-1 text-2xl font-bold">Post Ad</h1>

            <div className="mt-6">
              <Stepper steps={stepLabels} current={step} />
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 p-4 sm:p-6">
              {step === 0 && <Step1Category {...stepProps} />}
              {step === 1 && <Step2Details {...stepProps} />}
              {step === 2 && <Step3Preview {...stepProps} />}
              {step === 3 && <Step4Promotion {...stepProps} />}
              {step === 4 && <Step5Summary {...stepProps} />}
            </div>

            <div className="mt-6 flex justify-between gap-3">
              <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>
                Back
              </Button>
              <Button
                disabled={!canContinue}
                onClick={() => (isLast ? finish() : setStep(step + 1))}
              >
                {isLast ? 'Finish' : 'Continue'}
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}