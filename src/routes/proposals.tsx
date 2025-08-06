/* eslint-disable @stylistic/max-len */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/proposals')({
  component: RouteComponent,
})

function RouteComponent() {
  // Proposta fake para exibição
  const proposal = {
    id: 1,
    car: {
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      image: '/2023-toyota-camry-sedan.png',
    },
    downPayment: 10000,
    installment: 'R$ 1.200,00',
    months: 36,
    total: 'R$ 43.200,00',
    status: 'Pendente',
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-8">Minhas Propostas</h1>
        <Card className="mb-6 bg-white dark:bg-zinc-950">
          <div className="flex flex-col md:flex-row gap-6 items-center p-6">
            <img
              src={proposal.car.image}
              alt={`${proposal.car.year} ${proposal.car.make} ${proposal.car.model}`}
              className="w-40 h-28 object-cover rounded shadow"
            />
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100">
                {proposal.car.year} {proposal.car.make} {proposal.car.model}
              </h2>
              <div className="flex gap-2 items-center">
                <span className="text-gray-700 dark:text-zinc-200">Entrada:</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  R$ {proposal.downPayment.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-gray-700 dark:text-zinc-200">Parcela:</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">{proposal.installment}</span>
                <span className="text-gray-500 dark:text-zinc-400">({proposal.months}x)</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-gray-700 dark:text-zinc-200">Total:</span>
                <span className="font-medium text-gray-900 dark:text-zinc-100">{proposal.total}</span>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  {proposal.status}
                </Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <Link to="/fake-proposal">
                <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 text-white w-full md:w-auto cursor-pointer">
                  Prosseguir com a proposta
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
