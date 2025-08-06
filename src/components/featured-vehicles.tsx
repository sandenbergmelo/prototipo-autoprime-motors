/* eslint-disable @stylistic/max-len */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Eye, Heart } from 'lucide-react'

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
  },
]

export function FeaturedVehicles() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Veículos em destaque</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção especial de veículos de qualidade, todos revisados e prontos para rodar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={vehicle.image || '/placeholder.svg'}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {vehicle.condition}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2 flex space-x-1">
                  <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/80 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    R$ {vehicle.price.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-sm text-gray-500">
                    {vehicle.mileage.toLocaleString('pt-BR')} km
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Ver detalhes
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Contato
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Ver todo o estoque
          </Button>
        </div>
      </div>
    </section>
  )
}
