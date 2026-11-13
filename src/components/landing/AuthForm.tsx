'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'

type AuthMode = 'login' | 'signup'
type AccountRole = 'advertiser' | 'publisher'
type FormErrors = {
  name?: string
  email?: string
  password?: string
  role?: string
}

export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<AccountRole | ''>('')
  const [errors, setErrors] = useState<FormErrors>({})
  const isSignup = mode === 'signup'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: FormErrors = {}

    if (isSignup && !name.trim()) nextErrors.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (password.length < 8) nextErrors.password = 'Use at least 8 characters.'
    if (isSignup && !role) nextErrors.role = 'Choose an account type.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    router.push(isSignup && role === 'publisher' ? '/dashboard/publisher' : '/post-ad')
  }

  return (
    <Card className="mx-auto w-full max-w-md p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-navy-900">
        {isSignup ? 'Create your account' : 'Welcome back'}
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        {isSignup ? 'Demo form — no account is created.' : 'Demo sign in — no account is required.'}
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        {isSignup && (
          <Input
            id="signup-name"
            label="Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={errors.name}
          />
        )}
        <Input
          id={`${mode}-email`}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={errors.email}
        />
        <Input
          id={`${mode}-password`}
          label="Password"
          name="password"
          type="password"
          autoComplete={isSignup ? 'new-password' : 'current-password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={errors.password}
        />

        {isSignup && (
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-slate-700">I am a</legend>
            <div className="grid grid-cols-2 gap-3">
              {(['advertiser', 'publisher'] as const).map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    className="peer sr-only"
                    type="radio"
                    name="role"
                    value={option}
                    checked={role === option}
                    onChange={() => setRole(option)}
                    aria-describedby={errors.role ? 'signup-role-error' : undefined}
                  />
                  <Card
                    className={`p-4 text-center text-sm font-medium capitalize transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 ${
                      role === option
                        ? 'border-brand-600 bg-brand-50 text-brand-700'
                        : 'text-slate-700 hover:border-brand-500'
                    }`}
                  >
                    {option}
                  </Card>
                </label>
              ))}
            </div>
            {errors.role && <p id="signup-role-error" className="mt-1 text-xs text-danger-600">{errors.role}</p>}
          </fieldset>
        )}

        <Button type="submit" className="w-full">
          {isSignup ? 'Create account' : 'Sign in'}
        </Button>
      </form>
    </Card>
  )
}
