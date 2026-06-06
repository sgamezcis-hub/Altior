import React from 'react'

const testimonials = [
  {
    quote:
      'ALTIOR elevó mi elección de accesorios a un nivel totalmente nuevo. La calidad y el detalle son impecables.',
    author: 'Valentina Ramirez',
    role: 'Estilista de lujo',
  },
  {
    quote:
      'Los relojes transmiten carácter y precisión. Es una experiencia de compra que realmente se siente premium.',
    author: 'Jorge Martínez',
    role: 'Coleccionista',
  },
  {
    quote:
      'El perfume Rose Éternelle es el equilibrio perfecto entre modernidad y sofisticación. Impacta en cada ocasión.',
    author: 'Camila Ríos',
    role: 'Directora creativa',
  },
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="relative bg-[url('/images/hero-bg.png')] bg-fixed bg-cover bg-center bg-no-repeat py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-black">Testimonios</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Historias reales de clientes exigentes
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.author}
              className="rounded-[32px] border border-beige-200 bg-black p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
            >
              <p className="text-base leading-8 text-white">“{item.quote}”</p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-white">{item.author}</p>
                <p className="text-sm text-white">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
