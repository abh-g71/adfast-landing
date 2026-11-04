import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

type TopBarProps = {
  onMenuClick: () => void
}

export function TopBar({ onMenuClick }: TopBarProps) {
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
        <p className="truncate text-sm font-medium text-slate-500">Advertiser Console</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden text-sm font-semibold sm:inline">Abhi</span>
        <span className="hidden sm:inline-flex">
          <Badge tone="brand">ADVERTISER</Badge>
        </span>
        <Button variant="outline" className="px-3 py-1.5">
          Log out
        </Button>
      </div>
    </header>
  )
}