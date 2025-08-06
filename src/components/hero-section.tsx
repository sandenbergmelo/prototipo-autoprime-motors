/* eslint-disable @stylistic/max-len */
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Filter, Search } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/60" />
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(\'/placeholder-0jq0n.png\')',
        }}
      >
        <div className="bg-gradient-to-r from-blue-900/90 to-blue-700/90 ">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Encontre o veículo perfeito para você hoje
              </h1>
              <p className="text-xl mb-8 text-blue-100 dark:text-zinc-300">
                Descubra nossa ampla coleção de veículos novos e seminovos de qualidade.
                De sedãs a SUVs, temos o carro ideal para cada estilo de vida e orçamento.
              </p>

              <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Marca" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="ford">Ford</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camry">Camry</SelectItem>
                      <SelectItem value="accord">Accord</SelectItem>
                      <SelectItem value="f150">F-150</SelectItem>
                      <SelectItem value="3series">3 Series</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Faixa de preço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under20k">Até R$ 100.000</SelectItem>
                      <SelectItem value="20k-40k">R$ 100.000 - R$ 200.000</SelectItem>
                      <SelectItem value="40k-60k">R$ 200.000 - R$ 300.000</SelectItem>
                      <SelectItem value="over60k">Acima de R$ 300.000</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-800 dark:hover:bg-blue-900">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="text-gray-700 dark:text-zinc-200 dark:border-zinc-700">
                    <Filter className="h-4 w-4 mr-1" />
                    Filtros avançados
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-700 dark:text-zinc-200 dark:border-zinc-700">
                    Novidades
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-700 dark:text-zinc-200 dark:border-zinc-700">
                    Certificados
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
