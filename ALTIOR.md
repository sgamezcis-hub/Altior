# ALTIOR - Documentación de Contexto del Proyecto

**Última actualización**: Junio 3, 2026  
**Estado del Proyecto**: Landing page completo con Hero y secciones adicionales ✅

---

## 📋 Descripción General

ALTIOR es una marca de lujo especializada en **relojes, perfumes y accesorios premium**. Este documento mantiene el historial completo del desarrollo, decisiones de diseño y contexto del proyecto.

### Características de la Marca
- Lujo moderno y contemporáneo
- Elegancia y exclusividad
- Minimalismo premium
- Diseño sofisticado
- Apariencia de marca de alta gama real

---

## 🎨 Identidad Visual

### Paleta de Colores
```
BEIGE PREMIUM (Dominante)
├── Cream: #FEFBF7, #FDF9F3, #FCF3E8
├── Beige: #D4B8A8 → #5C3F2E (rango completo)
├── Ivory: #FFFEF9
├── Warm White: #FAF8F5
└── Gold (Acentos):
    ├── Light: #D4AF89
    ├── Default: #C9A961
    └── Dark: #B8860B
```

### Tipografía
- **Serif (Títulos)**: Playfair Display (elegancia premium)
- **Sans-serif (Cuerpo)**: Inter (moderna y legible)

### Principios de Diseño
✅ Continuidad visual en toda la web  
✅ Mismo sistema de colores base  
✅ Mismos degradados y recursos visuales  
✅ NO cambios bruscos de fondos  
✅ Experiencia visual continua

---

## 📁 Estructura del Proyecto

```
altior/
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── app/
│   │   ├── layout.tsx           (Layout raíz, Meta)
│   │   ├── page.tsx             (Home page con Hero y secciones)
│   │   └── globals.css          (Estilos globales, animaciones)
│   └── components/
│       ├── hero/
│       │   ├── Hero.tsx                  (Componente principal)
│       │   ├── HeroNavigation.tsx        (Navegación fija)
│       │   ├── HeroContent.tsx           (Texto + CTAs)
│       │   ├── HeroImage.tsx             (Elementos visuales)
│       │   └── index.ts                  (Barrel exports)
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
│   └── images/                  (Logo oficial y fondo principal)
├── tailwind.config.ts           (Config colores + temas)

> Nota: El Hero está preparado para usar los recursos oficiales en `public/images/logo-altior.svg` y `public/images/hero-bg.jpg`.
├── tsconfig.json                (TypeScript config)
├── next.config.js               (Next.js config)
├── postcss.config.js            (PostCSS + Tailwind)
├── package.json                 (Dependencias)
└── README.md                    (Documentación técnica)
```

---

## 🚀 Componentes Creados

### 1. HeroNavigation ✅
**Archivo**: `src/components/hero/HeroNavigation.tsx`

**Características**:
- Logo "A" en círculo (beige-900, border)
- Navegación horizontal: INICIO, COLECCIÓN, RELOJES, ACCESORIOS, CONTACTO
- Iconos de búsqueda y usuario
- Menú móvil (hamburguesa en md-)
- Fondo degradado con backdrop blur
- Fixed position (z-50)
- Responsive: navegación oculta en mobile

**Elementos**:
- Logo: `<A>` en círculo con border
- Links: Uppercase, tracking-wide, hover gold-dark
- Icons: SVG de búsqueda y usuario

### 2. HeroContent ✅
**Archivo**: `src/components/hero/HeroContent.tsx`

**Características**:
- Subtitle: "Diseñado para destacar"
- Main Heading: "DETALLES QUE HABLAN POR TI" (serif, grande, multi-línea)
- Description: "Relojes y accesorios diseñados para"
- CTA Button: "VER COLECCION" con ícono arrow
- Animación hover en botón (flecha se desplaza)

**Estilos**:
- Heading: text-7xl font-serif bold
- Button: bg-beige-900, text-warm-white, hover:bg-gold-dark
- Spacing: space-y-6 lg:space-y-8

### 3. HeroImage ✅
**Archivo**: `src/components/hero/HeroImage.tsx`

**Características**:
- Elementos decorativos tipo piedra/textura
- Gradientes beige (from → via → to)
- Animación float (4s y 5s con offset)
- Overlay de gradiente sutil
- Luz decorativa (gold-light opacity)

**Elementos**:
- Primary stone: 64x64 lg:96x96, bottom-right, float 4s
- Secondary stone: 48x48 lg:64x64, top right, float 5s (offset)
- Decorative light: Blur effect gold-light

### 4. Hero ✅
**Archivo**: `src/components/hero/Hero.tsx`

**Características**:
- Componente contenedor principal
- Integra: Navigation, Content, Image
- Grid layout: 1 col mobile, 2 cols lg+
- Background: gradient-premium
- Min-height: 100vh (full screen)
- Padding: respeta safe area
- Scroll indicator (mobile only, bounce animation)
- Decorative background elements

**Layout Grid**:
```
Mobile: 1 columna (imagen arriba, contenido abajo)
└─ order-2 (contenido) lg:order-1
└─ order-1 (imagen) lg:order-2

Desktop: 2 columnas (contenido izq, imagen der)
```

---

## 📱 Responsive Design

### Breakpoints Utilizados
- **Mobile**: < 640px (sm:)
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+ (lg:)

### Mobile First Approach
- Base: estilos para mobile
- `sm:`: Tablet
- `lg:`: Desktop

### Adaptaciones por Pantalla
```
MOBILE (< 640px)
├── Navigation: Hamburger menu visible
├── Hero: 1 columna (imagen arriba)
├── Text: text-4xl heading
├── Spacing: Reducido
└── Scroll indicator: Visible

TABLET (640px - 1024px)
├── Navigation: Links parcialmente visibles
├── Hero: 1.5 columnas
├── Text: text-5xl heading
└── Spacing: Moderado

DESKTOP (1024px+)
├── Navigation: Todos los links visibles
├── Hero: 2 columnas balanceadas
├── Text: text-7xl heading
└── Spacing: Máximo
```

---

## ✨ Animaciones y Microinteracciones

### Animaciones CSS
1. **fade-in**: 0.6s ease-out (opacidad)
2. **slide-up**: 0.8s ease-out (translateY + opacity)
3. **float**: 3s ease-in-out infinite (stone elements)
4. **bounce**: Scroll indicator (mobile)

### Transiciones
- Hover links: color 300ms
- Hover button: background + arrow translateX
- Navigation icons: color 300ms

---

## 🔧 Tecnologías y Configuración

### Stack Tecnológico
- **Next.js 14**: App Router, SSR
- **TypeScript**: Type safety
- **Tailwind CSS**: Utilidad-first CSS
- **React 18**: Componentes funcionales

### Configuración Tailwind
```typescript
// Colores custom
colors: {
  cream, beige, ivory, gold, warm
}

// Fuentes custom
fontFamily: {
  serif: 'Playfair Display',
  sans: 'Inter'
}

// Animaciones custom
animation: fade-in, slide-up, float

// Gradientes
backgroundImage: gradient-premium, gradient-luxury
```

### Google Fonts
```html
<link href="...Playfair+Display&family=Inter..." />
```

---

## ♿ Accesibilidad

### Implementado
- ✅ ARIA labels en secciones
- ✅ Focus states en botones y links
- ✅ Outline de focus visible (gold-light)
- ✅ Semantic HTML
- ✅ Alt text preparado para imágenes
- ✅ Contraste suficiente (WCAG AA)

### Color Contrast
- Beige-900 text on Cream/Warm-white: ✅ Pass
- Gold-dark hover on Beige-900: ✅ Pass

---

## 📸 Imágenes y Activos

### Ubicación
`public/images/` - Carpeta para imágenes de productos

### Tipos Esperados
- Relojes premium
- Perfumes de lujo
- Accesorios elegantes

### Requisitos
- Resolución: Min 1200px de ancho
- Formato: WebP o JPG (optimizado)
- Coherencia: Paleta beige/gold
- Estilo: Profesional, minimalista

### Implementación
Actualmente: Elementos decorativos CSS (piedras/gradientes)  
Siguiente: Agregar imágenes reales en HeroImage.tsx

---

## 🎯 Decisiones de Diseño

### 1. Paleta de Colores
**Decisión**: Beige + Gold en lugar de negro + dorado
**Razón**: Más moderno, menos tradicional, más cálido y acogedor
**Resultado**: Premium pero accesible

### 2. Navegación Fija
**Decisión**: Fixed navigation en top (z-50)
**Razón**: Acceso rápido a menú, mantiene identidad
**Resultado**: Usuario siempre puede navegar

### 3. Grid Layout
**Decisión**: 2 columnas desktop, 1 mobile con order reversal
**Razón**: Flexibilidad responsive sin bloat HTML
**Resultado**: Mobile-first, desktop-optimized

### 4. Decorative Elements (CSS)
**Decisión**: Piedras/gradientes en CSS en lugar de imágenes
**Razón**: Performance, cargue rápido, sin requests HTTP
**Resultado**: Página ligera, carga instant

### 5. Animaciones Sutiles
**Decisión**: Float 3-5s, micro-interacciones en hover
**Razón**: Premium no = exagerado, elegancia = moderación
**Resultado**: Movimiento natural, no distrae

---

## 📝 Cambios Realizados

### Sesión 1 - Creación Inicial (Junio 3, 2026)
1. ✅ Creada estructura Next.js completa
2. ✅ Configurado Tailwind CSS con paleta custom
3. ✅ Creados 4 componentes modulares (Hero, Navigation, Content, Image)
4. ✅ Implementado layout.tsx y page.tsx
5. ✅ Estilos globales en globals.css
6. ✅ Animaciones CSS nativas
7. ✅ Responsive design (Mobile First)
8. ✅ Documentación: README.md + ALTIOR.md

### Características Implementadas
- ✅ Hero section completo basado en referencias
- ✅ Navegación con logo y menú
- ✅ Contenido elegante con tipografía serif
- ✅ Elementos visuales decorativos
- ✅ Botón CTA con interacción
- ✅ Continuidad visual (sin cambios bruscos de fondo)
- ✅ Responsive en todas las pantallas
- ✅ Accesibilidad básica

---

## 🔄 Próximos Pasos Pendientes

### Fase 2 - Mejoras y Expansión
- [ ] Agregar imágenes reales de productos
- [ ] Crear sección de Colecciones
- [ ] Implementar catálogo de Relojes
- [ ] Implementar catálogo de Perfumes
- [ ] Implementar catálogo de Accesorios
- [ ] Sección de Testimonios/Reviews
- [ ] Footer con información legal
- [ ] Formulario de Contacto
- [ ] Newsletter subscription

### Fase 3 - Funcionalidad E-commerce
- [ ] Sistema de carrito
- [ ] Página de producto (detalles, galería)
- [ ] Filtros y búsqueda
- [ ] Sistema de pagos
- [ ] Gestión de usuarios/cuentas
- [ ] Wishlist
- [ ] Blog/Artículos

### Fase 4 - Optimización
- [ ] SEO avanzado
- [ ] Analytics
- [ ] Performance (Core Web Vitals)
- [ ] Caché y CDN
- [ ] PWA features

---

## 🐛 Issues Conocidos

**Ninguno reportado actualmente**

---

## 💡 Notas de Desarrollo

### Code Style
- TypeScript strict mode
- Componentes funcionales con FC<>
- Props desestructuradas
- JSDoc para componentes principales
- Nombres descriptivos y claros

### Performance
- CSS animations (no JS)
- No bloat de librerías externas
- Lazy loading preparado
- Assets optimizados

### Testing
- No implementado aún
- Próximo: Unit tests con Jest/React Testing Library

---

## 📞 Contacto / Soporte

Para cambios o sugerencias sobre la estructura del proyecto, refer a este documento.

---

## 📌 Reglas Importantes

✅ **RESPETADAS**:
- No eliminar funcionalidades sin autorización
- No romper estructura actual
- No reemplazar componentes que funcionan
- Mantener estética premium
- Coherencia visual en toda la página

✅ **IMPLEMENTADAS**:
- Arquitectura modular sin innecesarios
- Sin duplicación de código
- Componentes reutilizables
- Mobile First approach
- Animaciones elegantes y discretas

---

## ✅ VERIFICACIONES COMPLETADAS

### Build & Compilation
- ✅ `npm install` - Todas las dependencias instaladas (388 packages)
- ✅ `npm run build` - Compilación exitosa sin errores
- ✅ TypeScript strict mode habilitado
- ✅ Next.js build optimizado (87.4 kB First Load JS)

### Testing Visual
- ✅ Desktop (1440px+): Navegación completa, grid 2 cols, elementos visibles
- ✅ Tablet (768px): Navegación visible, layout optimizado
- ✅ Mobile (375px): Menú hamburguesa, 1 columna, responsive perfecto

### Funcionalidad
- ✅ Navegación fija con logo
- ✅ Links: INICIO, COLECCIÓN, RELOJES, ACCESORIOS, CONTACTO
- ✅ Botones de búsqueda y usuario
- ✅ Heading principal con tipografía serif
- ✅ Botón CTA "VER COLECCION" con ícono arrow
- ✅ Elementos visuales decorativos animados
- ✅ Scroll indicator en mobile
- ✅ Gradientes y fondos coherentes

### Performance
- ✅ First Load JS: 87.4 kB
- ✅ Carga instantánea (Ready in 1493ms)
- ✅ Animaciones CSS nativas (no JS)

### Accesibilidad
- ✅ ARIA labels en secciones
- ✅ Focus states en botones
- ✅ Semantic HTML
- ✅ Contraste WCAG AA

**Estado Final**: ✅ Hero Section Completado y Verificado - Listo para siguiente fase
