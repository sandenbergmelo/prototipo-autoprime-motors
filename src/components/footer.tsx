/* eslint-disable @stylistic/max-len */
import { Car, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AutoPrime Motors</span>
            </div>
            <p className="text-gray-400 mb-4">
              Seu parceiro de confiança para veículos de qualidade e serviços automotivos excepcionais desde 2013.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Veículos novos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Seminovos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Certificados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Avaliação do usado</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Financiamento</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Centro de Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Garantia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Assistência 24h</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>Rua Auto, 123</p>
              <p>Fortaleza, CE 60000-000</p>
              <p>Telefone: (85) 1234-5678</p>
              <p>E-mail: vendas@autoprime.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AutoPrime Motors. Todos os direitos reservados. | Política de Privacidade | Termos de Uso</p>
        </div>
      </div>
    </footer>
  )
}
