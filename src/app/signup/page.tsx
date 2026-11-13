import Link from 'next/link'
import { AuthForm } from '@/components/landing/AuthForm'
import { PublicPageShell } from '@/components/landing/PublicPageShell'

export default function SignupPage() {
  return (
    <PublicPageShell>
      <div className="px-4 py-12 sm:px-6 sm:py-16">
        <AuthForm mode="signup" />
        <p className="mt-5 text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="font-semibold text-brand-700 hover:underline">Sign in</Link>
        </p>
      </div>
    </PublicPageShell>
  )
}
