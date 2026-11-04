'use client'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './Topbar'

type ConsoleLayoutProps = {
  activeId: string
  children: ReactNode
}

export function ConsoleLayout({ activeId, children }: ConsoleLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />

      <div className="lg:pl-64">
        <TopBar onMenuClick={() => setMenuOpen(true)} />
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}