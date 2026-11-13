import Link from 'next/link'
import { AuthForm } from '@/components/landing/AuthForm'
import { PublicPageShell } from '@/components/landing/PublicPageShell'

export default function LoginPage() {
  return (
    <PublicPageShell>
      <div className="px-4 py-12 sm:px-6 sm:py-16">
        <AuthForm mode="login" />
        <p className="mt-5 text-center text-sm text-slate-600">
          New to RivinityADS? <Link href="/signup" className="font-semibold text-brand-700 hover:underline">Create an account</Link>
        </p>
      </div>
    </PublicPageShell>
  )
}
