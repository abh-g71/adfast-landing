import type { ReactNode } from 'react'
import { ConsoleLayout } from '@/layout/ConsoleLayout'

export default function ConsoleRootLayout({ children }: { children: ReactNode }) {
  return <ConsoleLayout>{children}</ConsoleLayout>
}