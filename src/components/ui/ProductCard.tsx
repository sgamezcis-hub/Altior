import Link from 'next/link'
import React from 'react'

interface ProductCardProps {
  title: string
  subtitle: string
  description: string
  href: string
  badge?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  description,
  href,
  badge,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-beige-200 bg-black p-6 shadow-[0_24px_64px_rgba(0,0,0,0.3)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_96px_rgba(0,0,0,0.4)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white">{subtitle}</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
        </div>
        {badge ? (
          <span className="rounded-full bg-gold-light/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            {badge}
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-7 text-white">{description}</p>

      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:text-gold-dark"
      >
        Ver detalles
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
