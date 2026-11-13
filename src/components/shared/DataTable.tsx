import type { ReactNode } from 'react'

export type DataTableColumn<T> = {
  key: string
  header: string
  render: (row: T) => ReactNode
}

type DataTableProps<T extends { id: string }> = {
  columns: DataTableColumn<T>[]
  rows: T[]
  label: string
}

export function DataTable<T extends { id: string }>({
  columns,
  rows,
  label,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table className="w-full min-w-[640px] text-left text-sm" aria-label={label}>
        <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <tr>
            {columns.map((column) => <th key={column.key} scope="col" className="px-4 py-3">{column.header}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => <td key={column.key} className="px-4 py-3">{column.render(row)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
