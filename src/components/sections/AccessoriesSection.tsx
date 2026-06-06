import React from 'react'
import { ProductCard } from '@/components/ui/ProductCard'

const accessories = [
  {
    title: 'Pulseras',
    subtitle: 'Accesorios',
    description:
      'Acabados metálicos y diseño escultural para un look refinado sin esfuerzo.',
    href: '#contacto',
  },
  {
    title: 'Collares',
    subtitle: 'Accesorios',
    description:
      'Líneas limpias y volumen cuidadosamente equilibrado para complementos de alto impacto.',
    href: '#contacto',
  },
  {
    title: 'Gafas',
    subtitle: 'Accesorios',
    description:
      'Montura contemporánea con detalles pulidos y un estilo que define la sofisticación cotidiana.',
    href: '#contacto',
  },
  {
    title: 'Anillos',
    subtitle: 'Accesorios',
    description:
      'Diseños minimalistas con carácter, creados para acompañar looks de alta gama sin competir con ellos.',
    href: '#contacto',
  },
]

export const AccessoriesSection: React.FC = () => {
  return (
    <section id="accesorios" className="relative bg-[url('/Altior/images/hero-bg.png')] bg-fixed bg-cover bg-center bg-no-repeat py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.35em] text-black">Accesorios</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Complementos con un sello distintivo
          </h2>
          <p className="mt-6 text-base leading-8 text-black">
              Descubre piezas que combinan diseño contemporáneo, materiales selectos y un acabado premium para cualquier ocasión.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-beige-300 bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-gold-dark hover:bg-gold-dark/20"
          >
            Consultar accesorios
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {accessories.map((accessory) => (
            <ProductCard key={accessory.title} {...accessory} />
          ))}
        </div>
      </div>
    </section>
  )
}
