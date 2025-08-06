/* eslint-disable @stylistic/max-len */
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-16 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">Visite nosso showroom</h2>
          <p className="text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Venha conhecer nossos veículos pessoalmente e experimente nosso atendimento excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">Endereço</h3>
                  <p className="text-gray-600 dark:text-zinc-300">
                    Rua Auto, 123<br />
                    Fortaleza, CE 60000-000
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">Telefone</h3>
                  <p className="text-gray-600 dark:text-zinc-300">
                    Vendas: (85) 1234-5678<br />
                    Oficina: (85) 1234-5679
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">Horário</h3>
                  <p className="text-gray-600 dark:text-zinc-300">
                    Seg-Sáb: 9h às 20h<br />
                    Domingo: 11h às 18h
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">E-mail</h3>
                  <p className="text-gray-600 dark:text-zinc-300">
                    vendas@autoprime.com.br<br />
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 flex-1">
                Agendar test drive
              </Button>
              <Button size="lg" variant="outline" className="flex-1 text-gray-700 dark:text-zinc-200 dark:border-zinc-700">
                Ver rotas
              </Button>
            </div>
          </div>

          <div className="bg-gray-200 dark:bg-zinc-800 rounded-lg overflow-hidden">
            <img
              src="/car-dealership-exterior.png"
              alt="Showroom AutoPrime"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
