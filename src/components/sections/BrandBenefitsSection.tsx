import React from 'react'

const benefits = [
  {
    title: 'Artesanía excepcional',
    description:
      'Cada producto se fabrica con cuidado y atención al detalle para ofrecer un acabado premium.',
  },
  {
    title: 'Materiales exclusivos',
    description:
      'Cuero, metales suaves y aromas seleccionados que refuerzan la experiencia de lujo.',
  },
  {
    title: 'Diseño atemporal',
    description:
      'Líneas pulidas y propuestas sofisticadas que perduran más allá de las tendencias.',
  },
  {
    title: 'Experiencia personalizada',
    description:
      'Atención dedicada y servicio de alto nivel en cada contacto con ALTIOR.',
  },
]

export const BrandBenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-black">Beneficios</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Una experiencia ALTIOR en cada detalle
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black">
            Descubre por qué nuestra propuesta es el punto de encuentro entre lujo, calidad y diseño pensado para hoy.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[28px] border border-beige-200 bg-black p-8 shadow-[0_20px_58px_rgba(0,0,0,0.3)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white">{benefit.title}</h3>
              <p className="mt-4 text-base leading-8 text-white">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
