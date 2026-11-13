import Link from 'next/link'
import { Badge } from '../components/ui/Badge'
import { Button, ButtonLink } from '../components/ui/Button'
import { Select } from '@/components/ui/Select'
import type { ConsoleRole } from '@/data/navigation'

type TopBarProps = {
  role: ConsoleRole
  onRoleChange: (role: ConsoleRole) => void
  onMenuClick: () => void
}

export function TopBar({ role, onRoleChange, onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Button
          variant="ghost"
          className="px-3 lg:hidden"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          ☰
        </Button>
        <p className="hidden truncate text-sm font-medium text-slate-500 sm:block">
          {role === 'publisher' ? 'Publisher Console' : 'Advertiser Console'}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-28 sm:w-36">
          <Select
            label="Role"
            value={role}
            onChange={(event) =>
              onRoleChange(event.target.value === 'publisher' ? 'publisher' : 'advertiser')
            }
            options={[
              { value: 'advertiser', label: 'Advertiser' },
              { value: 'publisher', label: 'Publisher' },
            ]}
            className="h-9"
          />
        </div>
        {role === 'advertiser' && (
          <>
            <ButtonLink href="/campaigns/new" className="hidden px-3 py-2 sm:inline-flex">
              Create Campaign
            </ButtonLink>
            <Link
              href="/add-funds"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-2 text-sm font-semibold text-navy-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:px-3"
              aria-label="Mock balance ₹0.00. Add funds"
            >
              <span className="hidden sm:inline">₹0.00</span>
              <span aria-hidden="true">+</span>
            </Link>
          </>
        )}
        <span className="hidden text-sm font-semibold sm:inline">Abhi</span>
        <span className="hidden sm:inline-flex">
          <Badge tone="brand">{role.toUpperCase()}</Badge>
        </span>
        <Button variant="outline" className="px-3 py-1.5">
          Log out
        </Button>
      </div>
    </header>
  )
}