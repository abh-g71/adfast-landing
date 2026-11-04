const links = ['Home', 'Product', 'Features', 'Pricing', 'About']

export function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
      <div className="flex items-center gap-2 text-lg font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white">A</span>
        RivinityADS
      </div>
      <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-slate-950">{l}</a>
        ))}
      </nav>
      <div className="flex items-center gap-3 text-sm font-semibold">
        <a href="#" className="hidden sm:inline">Sign in</a>
        <a href="#" className="rounded-full bg-navy-900 px-4 py-2 text-white hover:bg-navy-800">Sign up</a>
      </div>
    </header>
  )
}