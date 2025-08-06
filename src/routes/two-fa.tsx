/* eslint-disable @stylistic/max-len */
import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { createFileRoute } from '@tanstack/react-router'
import { useState, type MouseEvent } from 'react'

export const Route = createFileRoute('/two-fa')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TwoFAPage />
}

export default function TwoFAPage() {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')

  function handleConfirm(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setError('')
    if (otp.length !== 6) {
      setError('Código inválido.')
      return
    }
    window.location.href = '/'
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
      }}
    >
      <div className="flex flex-col items-center gap-6 bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Verificação em 2 Fatores</h2>
        <p className="text-center text-muted-foreground mb-2">
          Digite o código enviado para seu e-mail
        </p>
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={setOtp}
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
        <Button className="w-full mt-2 dark:text-white cursor-pointer" onClick={handleConfirm}>
          Confirmar
        </Button>
      </div>
    </div>
  )
}
