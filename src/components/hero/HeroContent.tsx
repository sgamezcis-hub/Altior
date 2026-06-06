import React from 'react'

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full space-y-6 lg:space-y-8">
      <p className="text-sm font-normal tracking-[0.35em] text-black">
        Diseñado Para Destacar
      </p>

      <h1 className="max-w-3xl text-5xl font-normal leading-none tracking-tight text-black sm:text-6xl lg:text-7xl lg:tracking-tighter">
        DETALLES QUE
        <br />
        HABLAN
        <br />
        POR TI
      </h1>

      <p className="max-w-xl text-base leading-8 text-black drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] sm:text-lg">
        Relojes y accesorios diseñados para destacar.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href="#coleccion"
          className="inline-flex items-center justify-center rounded-none border border-beige-300 bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-gold-dark hover:bg-gold-light/90"
        >
          Ver colección
        </a>
        <a
          href="#relojes"
          className="inline-flex items-center justify-center rounded-none border border-beige-300 bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-gold-dark hover:bg-gold-light/90"
        >
          Explorar relojes
        </a>
      </div>
    </div>
  )
}

