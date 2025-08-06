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
import type { MouseEvent } from 'react'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function entrar(e: MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  window.location.href = '/two-fa'
}

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Entrar</CardTitle>
          <CardDescription className="text-center">
            Informe seu e-mail e senha para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="exemplo@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input id="remember" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Lembrar de mim
              </Label>
            </div>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Esqueceu a senha?
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full dark:text-white cursor-pointer" onClick={entrar}>Entrar</Button>
          <div className="text-center text-sm dark:text-gray-200">
            {'Não tem uma conta? '}
            <Link to="/signup" className="text-blue hover:text-blue-500 font-medium">
              Cadastre-se
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
