/* eslint-disable @stylistic/max-len */
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-6">Sobre a AutoPrime Motors</h1>
        <p className="text-lg text-gray-700 dark:text-zinc-200 mb-4">
          A <span className="font-semibold text-blue-600 dark:text-blue-400">AutoPrime Motors</span> é uma concessionária de veículos novos e seminovos com sede em Fortaleza (CE) e filiais nas cidades de Teresina (PI), Natal (RN) e São Luís (MA).
        </p>
        <p className="text-lg text-gray-700 dark:text-zinc-200 mb-4">
          Fundada em 2013 por três sócios apaixonados por automóveis e inovação, a empresa sempre buscou se diferenciar pelo atendimento personalizado, pelas condições facilitadas de financiamento e por manter uma curadoria rigorosa na escolha de veículos seminovos, garantindo qualidade e procedência em cada negociação.
        </p>
        <p className="text-lg text-gray-700 dark:text-zinc-200 mb-4">
          Ao longo da última década, a AutoPrime conquistou uma clientela fiel e consolidou-se como referência regional no segmento de vendas e trocas de veículos. Nosso compromisso é proporcionar uma experiência única, transparente e segura para todos os clientes, tornando o sonho do carro novo ou seminovo uma realidade acessível.
        </p>
      </div>
    </section>
  )
}
