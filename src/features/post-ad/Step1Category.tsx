import { getColumns, isCategoryComplete } from '../../data/postAd'
import type { StepProps } from './types'

export function Step1Category({ data, update }: StepProps) {
  const columns = getColumns(data.path)
  const done = isCategoryComplete(data.path)

  return (
    <div>
      <h2 className="text-base font-semibold">Select category step by step</h2>
      <p className="mt-1 text-sm text-slate-500">Choose a category, then narrow it down.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((nodes, level) => (
          <ul key={level} className="flex flex-col gap-1 rounded-xl bg-slate-50 p-2">
            {nodes.map((node) => {
              const selected = data.path[level] === node.id
              return (
                <li key={node.id}>
                  <button
                    type="button"
                    onClick={() => update({ path: [...data.path.slice(0, level), node.id] })}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      selected ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {node.label}
                    {node.children && <span aria-hidden>›</span>}
                  </button>
                </li>
              )
            })}
          </ul>
        ))}

        {done && (
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-4 text-center">
            <span className="text-3xl text-warning-500">✔</span>
            <p className="mt-2 text-sm font-semibold">Category selection has been completed.</p>
          </div>
        )}
      </div>
    </div>
  )
}