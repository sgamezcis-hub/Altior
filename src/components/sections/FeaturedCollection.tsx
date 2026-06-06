import React from 'react'
import { ProductCard } from '@/components/ui/ProductCard'

const features = [
  {
    title: 'Relojes de edición limitada',
    subtitle: 'Colección destacada',
    description:
      'Un viaje entre acabados artesanales y precisión premium para cada momento distinguido.',
    href: '#relojes',
    badge: 'Relojes',
  },
  {
    title: 'Perfumes con firma olfativa',
    subtitle: 'Colección destacada',
    description:
      'Aromas creados para dejar una impresión duradera y una elegancia inolvidable.',
    href: '#perfumes',
    badge: 'Perfumes',
  },
  {
    title: 'Accesorios en piel noble',
    subtitle: 'Colección destacada',
    description:
      'Diseños funcionales y sofisticados pensados para complementar el estilo contemporáneo.',
    href: '#accesorios',
    badge: 'Accesorios',
  },
]

export const FeaturedCollection: React.FC = () => {
  return (
    <section id="coleccion" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.35em] text-black">Colección destacada</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Curaduría premium para cada categoría de ALTIOR
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-black">
            Explora nuestras propuestas más selectas en relojería, perfumes y accesorios con una experiencia visual y funcional preparada para un cliente real.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <ProductCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
