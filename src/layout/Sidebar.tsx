import { navGroups } from '../data/navigation'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
  activeId: string
}

export function Sidebar({ isOpen, onClose, activeId }: SidebarProps) {
  return (
    <>
      {/* Dark overlay behind the menu on mobile. Clicking it closes the menu. */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto bg-navy-950 px-3 py-6 text-white transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <p className="px-3 text-xl font-bold">RivinityADS</p>

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
                    <button
                      onClick={onClose}
                      className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                        item.id === activeId
                          ? 'bg-brand-600 text-white'
                          : 'text-slate-200 hover:bg-navy-800'
                      }`}
                    >
                      {item.label}
                    </button>
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