import { useId, useState } from 'react'
import type { FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'done' | 'error'

export default function WaitlistForm({ inputWidth = 'sm:w-[250px]' }: { inputWidth?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const inputId = useId()

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    try {
      // TODO: wire to the real waitlist endpoint/provider.
      await new Promise((r) => setTimeout(r, 600))
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <p role="status" aria-live="polite" className="flex min-h-[50px] max-w-[36ch] items-center font-mono text-[12px] uppercase tracking-[0.1em] text-green">
        You're on the list — we'll write when Zora is ready.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:items-center">
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className={`h-[50px] w-full rounded-pill border border-line bg-white px-[22px] text-[15px] text-ink outline-none placeholder:text-muted/70 focus:border-green ${inputWidth}`}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex h-[50px] shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-green px-[26px] text-[15px] font-semibold text-base transition-colors duration-150 hover:bg-green-deep disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Joining…' : 'Join the waitlist'}
      </button>
      {status === 'error' && (
        <span role="alert" className="text-[13px] text-orange">Something went wrong — try again.</span>
      )}
    </form>
  )
}
