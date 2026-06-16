# sebastianmalbaceda.dev

Sitio web personal de **Sebastián Malbaceda Leyva** construido con
[Astro](https://astro.build), TypeScript y Tailwind CSS.

## Stack

- [Astro 5](https://astro.build) — Framework principal
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS 3](https://tailwindcss.com/) — Estilos
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — Sitemap automático

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run check    # type-check del proyecto
```

## Estructura

```
src/
├── components/   # Componentes reutilizables (Navbar, Hero, etc.)
├── content/
│   ├── blog/     # Artículos en Markdown
│   └── config.ts # Esquema de la colección
├── data/         # Datos estáticos (proyectos, skills, redes)
├── layouts/      # Layouts base
├── pages/        # Rutas del sitio
└── styles/       # Estilos globales (Tailwind + componentes)
```

## Contenido

- **Proyectos** y **habilidades** se editan en `src/data/site.ts`.
- **Artículos del blog** son Markdown en `src/content/blog/` con frontmatter validado por Zod (`src/content/config.ts`).
- **SEO y meta tags** están en `src/layouts/BaseLayout.astro`.

## Seguridad

- Cabeceras HTTP configuradas en `public/_headers` (HSTS, CSP, X-Frame-Options, etc.).
- `public/.well-known/security.txt` con contacto de seguridad.
- `public/_redirects` fuerza el dominio canónico.

## Deploy

Sitio estático — apuntar Cloudflare Pages (o similar) a este repositorio:

- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **Node version:** 20+

## Licencia

© Sebastián Malbaceda Leyva. Todos los derechos reservados.
