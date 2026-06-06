import React from 'react'

export const HeroImage: React.FC = () => {
  return (
    <div className="relative h-full flex items-end justify-end overflow-hidden rounded-[32px] bg-beige-50/70 px-6 py-8 shadow-[0_40px_120px_rgba(92,63,46,0.12)] sm:px-8 sm:py-10">
      <div className="absolute inset-0 bg-gradient-to-l from-white/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-[40px] bg-gradient-to-br from-beige-300 via-beige-400 to-beige-500 opacity-90 shadow-2xl" style={{ animation: 'float 4s ease-in-out infinite' }} />
      <div className="absolute top-10 right-10 w-44 h-44 rounded-3xl bg-gradient-to-br from-beige-200 via-beige-300 to-beige-400 opacity-70 shadow-xl" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }} />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="grid gap-4 text-black">
          <div className="rounded-3xl border border-beige-200 bg-black/80 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-white">Relojes</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Astral</h3>
            <p className="mt-3 text-sm leading-7 text-white">Precisión y presencia impecable.</p>
          </div>
          <div className="rounded-3xl border border-beige-200 bg-black/80 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-white">Perfume</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Noir Sublime</h3>
            <p className="mt-3 text-sm leading-7 text-white">Aroma profundo para instantes memorables.</p>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-beige-200 bg-black p-6 shadow-[0_20px_58px_rgba(0,0,0,0.3)]">
          <p className="text-xs uppercase tracking-[0.35em] text-white">Colección premium</p>
          <p className="mt-3 text-lg font-semibold text-white">Accesorios Signature</p>
        </div>
      </div>
    </div>
  )
}
