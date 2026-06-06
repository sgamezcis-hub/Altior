import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ALTIOR - Relojes, Perfumes y Accesorios Premium',
  description:
    'Descubre nuestra colección de relojes, perfumes y accesorios premium diseñados para aquellos que valoran la calidad y la elegancia. Detalles que hablan por ti.',
  keywords: [
    'relojes premium',
    'perfumes lujo',
    'accesorios elegantes',
    'ALTIOR',
    'marca de lujo',
  ],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className} bg-[url('/images/hero-bg.png')] bg-fixed bg-no-repeat bg-cover bg-center bg-warm-white text-black`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
