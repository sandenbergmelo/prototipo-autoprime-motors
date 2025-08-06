/* eslint-disable @stylistic/max-len */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'

const vehicles = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 28999,
    mileage: 15000,
    image: '/2023-toyota-camry-sedan.png',
    condition: 'Certificado',
    features: ['Híbrido', 'Navegação', 'Câmera de ré'],
    description: 'Sedan confortável, econômico e com tecnologia de ponta.',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'CR-V',
    year: 2024,
    price: 32999,
    mileage: 8000,
    image: '/2024-honda-crv.png',
    condition: 'Seminovo',
    features: ['AWD', 'Teto solar', 'Apple CarPlay'],
    description: 'SUV espaçoso, seguro e com ótimo desempenho.',
  },
  {
    id: 3,
    make: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 42999,
    mileage: 22000,
    image: '/2022-bmw-3-series.png',
    condition: 'Excelente',
    features: ['Couro', 'Som premium', 'Pacote esportivo'],
    description: 'Luxo, esportividade e conforto em um só carro.',
  },
  {
    id: 4,
    make: 'Ford',
    model: 'F-150',
    year: 2023,
    price: 45999,
    mileage: 12000,
    image: '/2023-ford-f-150.png',
    condition: 'Certificado',
    features: ['4x4', 'Pacote de reboque', 'Cabine dupla'],
    description: 'Picape robusta, pronta para qualquer desafio.',
  },
]

function maskCpf(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14)
}

export const Route = createFileRoute('/car/$carId')({
  component: RouteComponent,
})

function simulateInstallments(price: number, downPayment: number, months: number) {
  // Simulação simples de taxas de 1.2% a 1.6% ao mês
  const partners = [
    { name: 'Banco A', rate: 0.012 },
    { name: 'Banco B', rate: 0.014 },
    { name: 'Banco C', rate: 0.016 },
  ]
  const financed = price - downPayment
  return partners.map(partner => {
    const monthly = (financed * partner.rate * Math.pow(1 + partner.rate, months)) / (Math.pow(1 + partner.rate, months) - 1)
    return {
      partner: partner.name,
      rate: (partner.rate * 100).toFixed(2) + '% a.m.',
      installment: monthly.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      months,
      total: (monthly * months).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    }
  })
}

function RouteComponent() {
  const params = Route.useParams()
  const car = vehicles.find(v => String(v.id) === params.carId)

  const [showFinance, setShowFinance] = useState(false)
  const [downPayment, setDownPayment] = useState('')
  const [months, setMonths] = useState('36')
  const [cpf, setCpf] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [error, setError] = useState('')

  if (!car) {
    return <div className="text-center py-20 text-2xl">Veículo não encontrado.</div>
  }

  function handleFinance(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (!downPayment || !months || !cpf) {
      setError('Preencha todos os campos.')
      return
    }
    if (Number(downPayment) < 0 || Number(downPayment) > car!.price) {
      setError('Valor de entrada inválido.')
      return
    }
    if (cpf.replace(/\D/g, '').length !== 11) {
      setError('CPF inválido.')
      return
    }
    setShowOptions(true)
  }

  function handleContinueProposal() {
    alert('Proposta enviada!\n\nSua proposta de financiamento foi enviada para a sua dashboard. Você poderá acompanhar o andamento por lá.')
  }

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src={car.image}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="w-full h-80 object-cover rounded-lg shadow"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">{car.year} {car.make} {car.model}</h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">{car.condition}</Badge>
            <span className="text-2xl font-bold text-blue-600">
              R$ {car.price.toLocaleString('pt-BR')}
            </span>
            <span className="text-gray-600">{car.mileage.toLocaleString('pt-BR')} km</span>
            <div className="flex flex-wrap gap-2">
              {car.features.map((f, i) => (
                <Badge key={i} variant="outline" className="text-xs">{f}</Badge>
              ))}
            </div>
            <p className="text-gray-700">{car.description}</p>
            <Button className="bg-blue-600 hover:bg-blue-700 w-fit cursor-pointer" onClick={() => setShowFinance(true)}>
              Simular Financiamento
            </Button>
          </div>
        </div>

        {showFinance && (
          <Card className="mt-10 max-w-xl mx-auto">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Simule seu financiamento</h2>
              <form onSubmit={handleFinance} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium" htmlFor="downPayment">Valor de entrada (R$)</label>
                  <input
                    id="downPayment"
                    type="number"
                    min={0}
                    max={car.price}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Ex: 10.000"
                    value={downPayment}
                    onChange={e => setDownPayment(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium" htmlFor="months">Número de parcelas</label>
                  <select
                    id="months"
                    className="w-full border rounded px-3 py-2"
                    value={months}
                    onChange={e => setMonths(e.target.value)}
                  >
                    <option value="12">12x</option>
                    <option value="24">24x</option>
                    <option value="36">36x</option>
                    <option value="48">48x</option>
                    <option value="60">60x</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium" htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={e => setCpf(maskCpf(e.target.value))}
                    maxLength={14}
                  />
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">Ver opções</Button>
              </form>
            </CardContent>
          </Card>
        )}

        {showOptions && (
          <Card className="mt-8 max-w-xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Opções de financiamento</h3>
              <div className="space-y-4">
                {simulateInstallments(car.price, Number(downPayment), Number(months)).map((option, i) => (
                  <div key={i} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <span className="font-semibold">{option.partner}</span>
                      <span className="ml-2 text-sm text-gray-500">{option.rate}</span>
                    </div>
                    <div>
                      <span className="font-medium">Parcela: </span>
                      <span className="text-blue-600 font-bold">{option.installment}</span>
                      <span className="ml-2 text-sm text-gray-500">({option.months}x)</span>
                    </div>
                    <div>
                      <span className="font-medium">Total: </span>
                      <span className="text-gray-800">{option.total}</span>
                    </div>
                    <Button
                      className="bg-green-600 hover:bg-green-700 mt-2 md:mt-0 cursor-pointer"
                      type="button"
                      onClick={handleContinueProposal}
                    >
                      Continuar com esta proposta
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
