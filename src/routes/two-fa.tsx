/* eslint-disable @stylistic/max-len */
import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { createFileRoute } from '@tanstack/react-router'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/two-fa')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TwoFAPage />
}

export default function TwoFAPage() {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')

  function handleConfirm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (otp.length !== 6) {
      setError('Código inválido.')
      return
    }

    localStorage.setItem('isLoggedIn', 'true')
    window.location.href = '/'
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
      }}
    >
      <form
        className="flex flex-col items-center gap-6 bg-card p-8 rounded-lg shadow-md"
        onSubmit={handleConfirm}
      >
        <h2 className="text-2xl font-bold text-center">Verificação em 2 Fatores</h2>
        <p className="text-center text-muted-foreground mb-2">
          Digite o código enviado para seu e-mail
        </p>
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={setOtp}
          pattern={REGEXP_ONLY_DIGITS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <Button type="submit" className="w-full mt-2 dark:text-white cursor-pointer">
          Confirmar
        </Button>
      </form>
    </div>
  )
}
