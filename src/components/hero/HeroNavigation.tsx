'use client'

import { useState } from 'react'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'COLECCIÓN', href: '#coleccion' },
  { label: 'RELOJES', href: '#relojes' },
  { label: 'PERFUMES', href: '#perfumes' },
  { label: 'ACCESORIOS', href: '#accesorios' },
  { label: 'CONTACTO', href: '#contacto' },
]

export const HeroNavigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-beige-200 bg-[url('/Altior/images/hero-bg.png')] bg-fixed bg-no-repeat bg-cover bg-center backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="inline-flex h-full items-center justify-center" aria-label="ALTIOR">
          <img src="/Altior/images/altiorfondo.png" alt="ALTIOR" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
        </a>

        <nav className="hidden h-full items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm leading-none font-medium uppercase tracking-[0.25em] text-black transition hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-black transition hover:text-gold-dark"
            aria-label="Buscar"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-black transition hover:text-gold-dark"
            aria-label="Cuenta"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-black transition hover:text-gold-dark md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú móvil"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-beige-200 bg-[url('/Altior/images/hero-bg.png')] bg-fixed bg-no-repeat bg-cover bg-center px-4 py-5 md:hidden">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-base font-medium uppercase tracking-[0.25em] text-black transition hover:text-gold-dark"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
