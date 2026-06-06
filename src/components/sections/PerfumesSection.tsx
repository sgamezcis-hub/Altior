import React from 'react'
import { ProductCard } from '@/components/ui/ProductCard'

const perfumes = [
  {
    title: 'Noir Sublime',
    subtitle: 'Colección perfumes',
    description:
      'Aroma profundo con notas de cuero suave, incienso y madera oscura para una presencia inolvidable.',
    href: '#contacto',
  },
  {
    title: 'Blanc Opaline',
    subtitle: 'Colección perfumes',
    description:
      'Frescura oriental con ámbar perlado, flor de naranjo y un acabado noble que añade sofisticación.',
    href: '#contacto',
  },
  {
    title: 'Rose Éternelle',
    subtitle: 'Colección perfumes',
    description:
      'Rosa aterciopelada, pachulí y almizcle inmaculado diseñados para una experiencia sensorial premium.',
    href: '#contacto',
  },
]

export const PerfumesSection: React.FC = () => {
  return (
    <section id="perfumes" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.35em] text-black">Perfumes</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Fragancias hechas para dejar huella
          </h2>
          <p className="mt-6 text-base leading-8 text-black">
            Selecciona aromas cuidadosamente formulados para acompañar jornadas excepcionales con una firma olfativa única.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {perfumes.map((perfume) => (
            <ProductCard key={perfume.title} {...perfume} />
          ))}
        </div>
      </div>
    </section>
  )
}
