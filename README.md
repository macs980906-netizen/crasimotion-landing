# Cosecha Capital — Landing Webinar

Landing page premium para el registro al **webinar privado de inversión
agrícola** de Cosecha Capital. Diseñada como una invitación patrimonial
(wealth management / family office), no como una landing genérica de leads.

**Ruta principal:** `/webinar-cosecha-julio` (la raíz `/` redirige
automáticamente a esta ruta).

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (reveals on scroll)
- **next/font** (Fraunces display + Inter)
- Imágenes optimizadas con `next/image` (assets en WebP)

## Estructura

Componentes en `components/` (uno por sección):

`Header` · `Hero` · `IsItForYou` · `WhatYouLearn` · `Speaker` ·
`VideoPodcast` · `SecurityBacking` · `HostTeam` · `RegistrationForm` ·
`Footer` · `StickyMobileCTA`

## Formulario (GoHighLevel)

El registro usa el **iframe embebido oficial de GoHighLevel** dentro de
`components/RegistrationForm.tsx` (sin webhook ni API). Al enviarse, el lead
entra directamente al workflow ya configurado en GHL. El script
`form_embed.js` se carga de forma diferida (`next/script` · `lazyOnload`).

## Comportamiento

- Todos los CTA "Reservar mi lugar" hacen **scroll suave** a `#registro`.
- Header transparente que aplica **blur** elegante al hacer scroll.
- **CTA sticky** en mobile (se oculta cuando el formulario está en pantalla).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # servir build
```

## Despliegue

Listo para **Vercel**: framework Next.js detectado automáticamente, sin
configuración adicional.

## Assets

Logos, imagen hero y retratos en `public/assets/`. El logo de Cosecha incluye
una variante blanca (`logo-cosecha-white.png`) para fondos oscuros.
