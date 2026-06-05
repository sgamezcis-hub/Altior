# ALTIOR - Luxury Brand Website

Sitio web de e-commerce de lujo para ALTIOR, especializado en relojes, perfumes y accesorios premium con identidad visual elegante y coherente.

## Inicio Rápido

### Requisitos Previos
- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Construcción para Producción

```bash
npm run build
npm start
```

## Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: Montserrat Alternates (tipografía principal)
- **Animaciones**: CSS nativas

## Estructura del Proyecto

```
altior/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz con metadatos y tipografía
│   │   ├── page.tsx            # Página de inicio completa
│   │   └── globals.css         # Estilos globales
│   └── components/
│       ├── hero/
│       │   ├── Hero.tsx
│       │   ├── HeroNavigation.tsx
│       │   ├── HeroContent.tsx
│       │   ├── HeroImage.tsx
│       │   └── index.ts
│       ├── sections/
│       │   ├── FeaturedCollection.tsx
│       │   ├── WatchesSection.tsx
│       │   ├── PerfumesSection.tsx
│       │   ├── AccessoriesSection.tsx
│       │   ├── WalletsSection.tsx
│       │   ├── FeaturedProductsSection.tsx
│       │   ├── BrandBenefitsSection.tsx
│       │   ├── TestimonialsSection.tsx
│       │   └── ContactSection.tsx
│       ├── ui/
│       │   └── ProductCard.tsx
│       └── Footer.tsx
├── public/
│   └── images/                 # Logo oficial y fondo principal
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── tsconfig.json               # Configuración de TypeScript
├── package.json                # Dependencias del proyecto
└── next.config.js              # Configuración de Next.js
```

## Paleta de Colores

### Colores Base
- **Cream**: #FEFBF7, #FDF9F3, #FCF3E8
- **Beige**: Rango completo del #C89A7B al #5C3F2E
- **Ivory**: #FFFEF9
- **Gold**: Light (#D4AF89), Default (#C9A961), Dark (#B8860B)
- **Warm White**: #FAF8F5

### Uso
- **Fondos principales**: Cream, Ivory, Warm White
- **Texto**: Beige-900, Beige-800
- **Acentos**: Gold light, Gold default
- **Contraste**: Beige-900

## Componentes

### Hero
El componente Hero es modular y está dividido en:

1. **HeroNavigation**: Barra de navegación fija con logo y enlaces
2. **HeroContent**: Contenido principal (título, subtítulo, CTA)
3. **HeroImage**: Elementos visuales decorativos
4. **Hero**: Componente contenedor que integra todo

### Características
- Responsive (Mobile First)
- Navegación adaptable
- Animaciones elegantes
- Accesibilidad (ARIA labels, focus states)
- Performance optimizado

## Animaciones

- `fade-in`: Desvanecimiento suave
- `slide-up`: Movimiento ascendente
- `float`: Flotación continua
- `bounce`: Rebote en scroll indicator

## Tipos de Pantalla

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

El diseño utiliza **Mobile First** con breakpoints `sm`, `lg`.

## Fuentes

Las fuentes se cargan desde Google Fonts:
- **Playfair Display**: Títulos y headings (serif elegante)
- **Inter**: Cuerpo y navegación (sans-serif moderna)

## Mejores Prácticas

- ✅ Componentes funcionales con TypeScript
- ✅ Estilos con Tailwind CSS
- ✅ Estructura modular y reutilizable
- ✅ Sin duplicación de código
- ✅ Mobile First responsive
- ✅ Animaciones CSS nativas
- ✅ Accesibilidad integrada

## Próximos Pasos

- [ ] Agregar imágenes de productos reales
- [ ] Implementar secciones adicionales (Colecciones, Productos)
- [ ] Sistema de carrito de compras
- [ ] Página de contacto/formulario
- [ ] Integración con backend
- [ ] Optimización de SEO

## Licencia

Propiedad de ALTIOR - Marca de Lujo
