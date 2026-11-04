import { FaTiktok, FaXTwitter, FaLinkedinIn, FaGoogle, FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa6'

const platforms = [
  { name: 'TikTok', Icon: FaTiktok, color: 'text-black', offset: 'md:mt-0' },
  { name: 'X', Icon: FaXTwitter, color: 'text-black', offset: 'md:mt-8' },
  { name: 'LinkedIn', Icon: FaLinkedinIn, color: 'text-[#0a66c2]', offset: 'md:mt-14' },
  { name: 'Google', Icon: FaGoogle, color: 'text-[#ea4335]', offset: 'md:mt-[72px]' },
  { name: 'Facebook', Icon: FaFacebookF, color: 'text-[#1877f2]', offset: 'md:mt-14' },
  { name: 'Instagram', Icon: FaInstagram, color: 'text-[#e4405f]', offset: 'md:mt-8' },
  { name: 'Pinterest', Icon: FaPinterestP, color: 'text-[#e60023]', offset: 'md:mt-0' },
]

export function Integrations() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
      <p className="font-mono text-xs text-slate-500">[INTEGRATION]</p>
      <h2 className="mt-2 text-3xl font-bold">Easy integration with your advertising platforms</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
        Connect RivinityADS with the advertising platforms and tools you already use.
      </p>
      <a href="#" className="mt-5 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm">
        See how integration works ›
      </a>

      <div className="mt-10 flex flex-wrap items-start justify-center gap-4 md:flex-nowrap md:gap-8">
        {platforms.map(({ name, Icon, color, offset }) => (
          <div
            key={name}
            title={name}
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ${offset}`}
          >
            <Icon className={`h-5 w-5 ${color}`} />
          </div>
        ))}
      </div>
    </section>
  )
}