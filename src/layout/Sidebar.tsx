'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getNavGroups, type ConsoleRole } from '@/data/navigation'

type SidebarProps = { role: ConsoleRole; isOpen: boolean; onClose: () => void }

export function Sidebar({ role, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const navGroups = getNavGroups(role)

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={onClose} />}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto bg-navy-950 px-3 py-6 text-white transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link href="/" className="block px-3 text-xl font-bold">RivinityADS</Link>

        <nav className="mt-8 flex flex-col gap-6">
          {navGroups.map((group, index) => (
            <div key={group.title ?? index}>
              {group.title && (
                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {group.title}
                </p>
              )}
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        pathname === item.href ? 'bg-brand-600 text-white' : 'text-slate-200 hover:bg-navy-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}