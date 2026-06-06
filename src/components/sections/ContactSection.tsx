import React from 'react'

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-black">Contacto</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              Hablemos de tu próxima pieza ALTIOR
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black">
              Nuestro equipo está listo para ayudarte a seleccionar el producto ideal y asesorarte en cada detalle.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+570000000000"
                className="rounded-3xl border border-beige-200 bg-black p-6 text-base font-semibold text-white transition hover:border-gold-dark hover:bg-gold-dark/20"
              >
                Teléfono
                <span className="block mt-2 text-sm font-normal text-white">+57 300 123 4567</span>
              </a>
              <a
                href="mailto:contacto@altior.com"
                className="rounded-3xl border border-beige-200 bg-black p-6 text-base font-semibold text-white transition hover:border-gold-dark hover:bg-gold-dark/20"
              >
                Correo
                <span className="block mt-2 text-sm font-normal text-white">contacto@altior.com</span>
              </a>
              <a
                href="https://wa.me/573001234567"
                className="rounded-3xl border border-beige-200 bg-black p-6 text-base font-semibold text-white transition hover:border-gold-dark hover:bg-gold-dark/20"
              >
                WhatsApp
                <span className="block mt-2 text-sm font-normal text-white">+57 300 123 4567</span>
              </a>
              <div className="rounded-3xl border border-beige-200 bg-black p-6 text-base font-semibold text-white">
                Dirección
                <span className="block mt-2 text-sm font-normal text-white">
                  Carrera 34 #18-20, Bogotá, Colombia
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-beige-200 bg-black p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
            <h3 className="text-xl font-semibold text-white">Escríbenos</h3>
            <p className="mt-4 text-base leading-7 text-white">
              Envía tus detalles y te contactaremos para coordinar tu pedido premium.
            </p>
            <form action="mailto:contacto@altior.com" method="post" encType="text/plain" className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-semibold text-white">Nombre completo</span>
                <input
                  type="text"
                  name="Nombre"
                  required
                  className="mt-3 w-full rounded-3xl border border-beige-200 bg-black/30 px-5 py-4 text-base text-white outline-none transition focus:border-gold-default focus:ring-4 focus:ring-gold-light/30 placeholder:text-white/50"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-white">Correo</span>
                <input
                  type="email"
                  name="Correo"
                  required
                  className="mt-3 w-full rounded-3xl border border-beige-200 bg-black/30 px-5 py-4 text-base text-white outline-none transition focus:border-gold-default focus:ring-4 focus:ring-gold-light/30 placeholder:text-white/50"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-white">Mensaje</span>
                <textarea
                  name="Mensaje"
                  rows={5}
                  required
                  className="mt-3 w-full rounded-3xl border border-beige-200 bg-black/30 px-5 py-4 text-base text-white outline-none transition focus:border-gold-default focus:ring-4 focus:ring-gold-light/30 placeholder:text-white/50"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-gold-dark"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
