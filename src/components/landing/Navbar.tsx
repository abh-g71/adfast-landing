'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '/' },
  { label: 'For Advertisers', href: '/advertisers' },
  { label: 'For Publishers', href: '/publishers' },
  { label: 'Ad Formats', href: '/ad-formats' },
  { label: 'Pricing', href: '/#pricing' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white">A</span>
        RivinityADS
      </Link>

      <nav className="hidden gap-8 text-sm font-medium md:flex">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={pathname === l.href ? 'text-accent-600' : 'text-slate-700 hover:text-slate-950'}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3 text-sm font-semibold">
        <Link href="/login" className="hidden sm:inline">Sign in</Link>
        <Link href="/signup" className="rounded-full bg-navy-900 px-4 py-2 text-white hover:bg-navy-800">
          Sign up
        </Link>
        <button
          type="button"
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full z-50 flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-lg md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}