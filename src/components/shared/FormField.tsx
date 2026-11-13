import type { ReactNode } from 'react'

type FormFieldProps = {
  id: string
  label: string
  error?: string
  children: ReactNode
}

export function FormField({ id, label, error, children }: FormFieldProps) {
  const errorId = `${id}-error`

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}</label>
      {children}
      {error && <p id={errorId} className="text-xs text-danger-600" role="alert">{error}</p>}
    </div>
  )
}
