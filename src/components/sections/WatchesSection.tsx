import React from 'react'
import { ProductCard } from '@/components/ui/ProductCard'

const watches = [
  {
    title: 'Reloj Astral',
    subtitle: 'Colección relojes',
    description:
      'Caja pulida, cristal de zafiro y un movimiento que combina tecnología con estilo eterno.',
    href: '#contacto',
  },
  {
    title: 'Reloj Eclipse',
    subtitle: 'Colección relojes',
    description:
      'Minimalismo sofisticado con correa de piel premium y esfera diseñada para destacar en cualquier ocasión.',
    href: '#contacto',
  },
  {
    title: 'Reloj Imperial',
    subtitle: 'Colección relojes',
    description:
      'Presencia magnética y detalles en dorado suave que elevan cada atuendo con una firma de lujo discreto.',
    href: '#contacto',
  },
]

export const WatchesSection: React.FC = () => {
  return (
    <section id="relojes" className="relative bg-[url('/Altior/images/hero-bg.png')] bg-fixed bg-cover bg-center bg-no-repeat py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.35em] text-black">Relojes</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              La excelencia del tiempo ALTIOR
            </h2>
            <p className="mt-6 text-base leading-8 text-black">
              Cada pieza está construida con materiales selectos y un lenguaje de diseño que conjuga tradición y modernidad.
            </p>
          </div>
          <a
            href="#coleccion"
            className="inline-flex items-center justify-center rounded-full border border-beige-300 bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-gold-dark hover:bg-gold-dark/20"
          >
            Explorar relojes
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {watches.map((watch) => (
            <ProductCard key={watch.title} {...watch} />
          ))}
        </div>
      </div>
    </section>
  )
}
