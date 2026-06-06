import React from 'react'
import { ProductCard } from '@/components/ui/ProductCard'

const featured = [
  {
    title: 'Reloj Imperial',
    subtitle: 'Producto destacado',
    description:
      'La pieza insignia de la colección con una silueta imponente y acabados de lujo.',
    href: '#contacto',
  },
  {
    title: 'Noir Sublime',
    subtitle: 'Producto destacado',
    description:
      'Perfume emblemático con una composición profunda que deja una huella elegante y afable.',
    href: '#contacto',
  },
  {
    title: 'Pulseras Signature',
    subtitle: 'Producto destacado',
    description:
      'Accesorios atemporales que combinan materia prima premium y un diseño cuidado al detalle.',
    href: '#contacto',
  },
]

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section id="destacados" className="relative bg-[url('/Altior/images/hero-bg.png')] bg-fixed bg-cover bg-center bg-no-repeat py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-black">Productos destacados</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Piezas seleccionadas para un estilo distinguido
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
