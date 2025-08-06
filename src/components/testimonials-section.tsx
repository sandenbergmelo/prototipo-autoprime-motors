/* eslint-disable @stylistic/max-len */
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    location: 'Fortaleza, CE',
    rating: 5,
    text: 'Atendimento incrível! Comprei meu carro novo com total confiança e transparência. Recomendo demais a AutoPrime para quem é de Fortaleza.',
    vehicle: 'Toyota Corolla 2023',
  },
  {
    name: 'Ana Bezerra',
    location: 'Fortaleza, CE',
    rating: 5,
    text: 'Equipe muito atenciosa e prestativa. Fizeram de tudo para eu sair satisfeita com meu seminovo. Melhor experiência de compra em Fortaleza!',
    vehicle: 'Honda HR-V 2022',
  },
  {
    name: 'João Batista',
    location: 'Juazeiro do Norte, CE',
    rating: 5,
    text: 'Fui muito bem atendido desde o primeiro contato. O carro veio impecável e o processo foi rápido. Valeu, AutoPrime!',
    vehicle: 'Chevrolet Onix 2021',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Não acredite só na nossa palavra. Veja o que nossos clientes do Ceará dizem sobre a experiência com a AutoPrime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.vehicle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
