/* eslint-disable @stylistic/max-len */
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/forgot-password')({
  component: RouteComponent,
})

function RouteComponent() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Informe seu e-mail.')
      return
    }

    setSent(true)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
      }}
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Recuperar senha</CardTitle>
          <CardDescription className="text-center">
            Informe seu e-mail para receber o link de recuperação
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {sent
              ? (
                <div className="text-green-600 text-center">
                  Se o e-mail informado existir, você receberá um link para redefinir sua senha.
                </div>
                )
              : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="exemplo@email.com"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm text-center mt-2">{error}</div>
                  )}
                </>
                )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 mt-4">
            {!sent && (
              <Button type="submit" className="w-full dark:text-white cursor-pointer">
                Enviar link
              </Button>
            )}
            <div className="text-center text-sm dark:text-gray-200">
              <Link to="/login" className="text-blue hover:text-blue-500 font-medium">
                Voltar para login
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
