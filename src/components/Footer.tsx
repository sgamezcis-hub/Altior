import React from 'react'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Relojes', href: '#relojes' },
  { label: 'Perfumes', href: '#perfumes' },
  { label: 'Accesorios', href: '#accesorios' },
  { label: 'Contacto', href: '#contacto' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/altior' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/altior' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/altior' },
]

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-beige-200 bg-black py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <img
              src="/images/altior-logo-white-cropped.png"
              alt="ALTIOR logo"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-6 text-base leading-8 text-white">
              ALTIOR crea experiencias de lujo contemporáneo en relojería, perfumería y accesorios con una fuerte identidad premium.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white">Navegación</h3>
              <ul className="mt-6 space-y-3 text-sm text-white">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white">Contacto</h3>
              <p className="mt-6 text-sm leading-7 text-white">
                Tel: +57 300 123 4567
                <br />
                Email: contacto@altior.com
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white">Redes</h3>
              <ul className="mt-6 space-y-3 text-sm text-white">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} target="_blank" rel="noreferrer" className="transition text-white">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-beige-200 pt-8 text-sm text-white">
          © 2026 ALTIOR. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
