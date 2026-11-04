
type StepperProps = {
  steps: string[]
  current: number
}

export const Stepper = ({ steps, current }: StepperProps) => {
  return (
    <>
      {/* Mobile progress */}
      <div className="sm:hidden">
        <p className="text-sm font-medium text-slate-700">
          Step {current + 1} of {steps.length} · {steps[current]}
        </p>

        <div className="mt-2 h-2 rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-brand-600 transition-all"
            style={{
              width: `${((current + 1) / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Desktop progress */}
      <ol className="hidden sm:flex">
        {steps.map((label, i) => {
          const done = i < current
          const active = i === current

          return (
            <li
              key={label}
              className="relative flex flex-1 flex-col items-center"
            >
              {i > 0 && (
                <span
                  aria-hidden
                  className={`absolute -left-1/2 top-5 w-full -translate-y-1/2 ${
                    i <= current
                      ? 'h-0.5 bg-brand-600'
                      : 'border-t-2 border-dashed border-slate-300'
                  }`}
                />
              )}

              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                  done
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : active
                      ? 'border-brand-600 bg-white text-brand-600'
                      : 'border-slate-300 bg-white text-slate-400'
                }`}
              >
                {done ? '✓' : i + 1}
              </span>

              <span
                className={`mt-2 text-xs ${
                  active || done
                    ? 'font-medium text-slate-900'
                    : 'text-slate-400'
                }`}
              >
                {label}
              </span>
            </li>
          )
        })}
      </ol>
    </>
  )
}
