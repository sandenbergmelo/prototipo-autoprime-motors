/* eslint-disable @stylistic/max-len */
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/fake-proposal')({
  component: RouteComponent,
})

function RouteComponent() {
  const [documents, setDocuments] = useState<FileList | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      alert(
        'Proposta registrada!\n\nSua proposta foi registrada com validade de 48h. Você poderá acompanhar o status por e-mail.',
      )
      setIsSubmitting(false)
      window.location.href = '/proposals'
    }, 800)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-8">Finalizar Proposta</h1>
        <Card className="bg-white dark:bg-zinc-950 rounded-lg shadow p-6">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="documents" className="mb-2 block">
                Documentos (CNH, comprovante de renda, etc)
              </Label>
              <Input
                id="documents"
                type="file"
                multiple
                className="w-full"
                onChange={e => setDocuments(e.target.files)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 text-white font-semibold py-3 rounded transition-colors cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'Enviando...'
                : 'Fazer proposta'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
