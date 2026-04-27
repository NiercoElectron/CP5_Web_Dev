import React from 'react'
import Card from '../components/Card'
import jogo from '../assets/imgs/jogo1.png'

const produtos = [
  {
    id: 1,
    name: 'Jogo de Tabuleiro Premium',
    description: 'Um jogo estratégico para toda a família. Diversão garantida para 2 a 6 jogadores.',
    price: 149.9,
    oldPrice: 199.9,
    category: 'Jogos',
    image: jogo,
  },
  {
    id: 2,
    name: 'Expansão — Conquistas',
    description: 'Adicione novas missões e peças exclusivas ao jogo base.',
    price: 79.9,
    oldPrice: null,
    category: 'Expansão',
    image: jogo,
  },
  {
    id: 3,
    name: 'Edição Colecionador',
    description: 'Versão limitada com componentes em metal e caixa personalizada.',
    price: 349.9,
    oldPrice: 399.9,
    category: 'Colecionador',
    image: jogo,
  },
]

export default function Produtos() {
  return (
    <section className="px-7 py-10 text-left">
      <h2 className="text-3xl font-bold tracking-tight text-(--text-h) mb-8">Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  )
}