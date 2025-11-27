# Plan de Corrección de URLs Canónicas

**Fecha de creación:** 2025-11-26
**Branch:** `claude/fix-canonical-urls-01Pn7GwnH5kLoD2x3CtJb76P`
**Estado:** 🔄 En Progreso

---

## 📋 Resumen Ejecutivo

### Problema Identificado
Google Search Console reporta 11 URLs con el error **"Página alternativa con etiqueta canónica adecuada"**. Este mensaje indica que las páginas están siendo indexadas con el prefijo `www` pero las etiquetas canónicas apuntan a la versión sin `www`, creando una inconsistencia.

### URLs Afectadas
1. `https://www.sagradacura.com/tienda/taller-de-sanacion-energetica`
2. `https://www.sagradacura.com/blog/cierre-ano-sagrada-cura-sanacion-conexion-naturaleza`
3. `https://www.sagradacura.com/`
4. `https://www.sagradacura.com/blog/magia-sexual-energia-atraccion-y-manifestacion`
5. `https://www.sagradacura.com/blog/proteccion-energetica-diaria-tu-escudo-invisible`
6. `https://www.sagradacura.com/blog?tag=estres`
7. `https://www.sagradacura.com/blog?tag=bienestar`
8. `https://www.sagradacura.com/tienda/terapia-sanacion`
9. `https://www.sagradacura.com/blog/sanar-el-chakra-corazon-para-atraer-amor-y-armonia`
10. `https://www.sagradacura.com/blog?tag=productividad-toxica`
11. `https://www.sagradacura.com/tienda/spray-aurico-limpieza`

### Causa Raíz
**Problema principal:** Falta de redirección entre versiones `www` y `non-www` del dominio.

- ✅ **Configurado:** Todas las etiquetas canónicas usan `https://sagradacura.com` (sin www)
- ✅ **Configurado:** Sitemap usa `https://sagradacura.com` (sin www)
- ✅ **Configurado:** Robots.txt usa `https://sagradacura.com` (sin www)
- ❌ **Faltante:** Redirección de `www.sagradacura.com` → `sagradacura.com`

**Resultado:** El sitio es accesible en ambas versiones, pero Google indexa la versión `www` mientras las etiquetas canónicas apuntan a la versión `non-www`.

---

## 🎯 Objetivos del Plan

1. **Establecer un dominio primario único:** `https://sagradacura.com` (sin www)
2. **Implementar redirecciones automáticas:** `www` → `non-www`
3. **Verificar consistencia de URLs canónicas** en todas las páginas
4. **Agregar etiquetas canónicas faltantes** en páginas sin configuración
5. **Validar cambios** con Google Search Console

---

## 📊 Análisis Actual

### Páginas CON Canonical URL Configurada ✅

| Página | Archivo | Canonical URL |
|--------|---------|---------------|
| **Home** | `src/app/page.tsx:22` | `https://sagradacura.com` |
| **Blog Listing** | `src/app/blog/page.tsx:34-48` | `https://sagradacura.com/blog` (dinámico con paginación/tags) |
| **Blog Detail** | `src/app/blog/[slug]/page.tsx:44` | `https://sagradacura.com/blog/{slug}` |
| **Product Detail** | `src/app/tienda/[slug]/page.tsx:60` | `https://sagradacura.com/tienda/{slug}` |
| **Contacto** | `src/app/contacto/page.tsx` | `https://sagradacura.com/contacto` |
| **Nuestra Marca** | `src/app/nuestra-marca/page.tsx` | `https://sagradacura.com/nuestra-marca` |

### Páginas SIN Canonical URL ⚠️

| Página | Archivo | Prioridad |
|--------|---------|-----------|
| **Tienda Main** | `src/app/tienda/page.tsx` | 🔴 Alta |
| **Carrito** | `src/app/tienda/carrito-de-compras/page.tsx` | 🟡 Media |
| **Checkout** | `src/app/tienda/checkout/page.tsx` | 🟡 Media |
| **Confirmación** | `src/app/tienda/confirmation/page.tsx` | 🟢 Baja |
| **Etiquetas** | `src/app/etiquetas/page.tsx` | 🟡 Media |
| **Comunidad** | `src/app/comunidad/page.tsx` | 🟡 Media |

---

## 🔧 Solución Propuesta

### Enfoque: Mantener `non-www` como Dominio Primario

**Ventajas:**
- ✅ Requiere menos cambios en el código
- ✅ Mantiene consistencia con configuración actual
- ✅ URLs más cortas y limpias
- ✅ Sitemap y robots.txt ya configurados

**Implementación:**
1. Agregar middleware de Next.js para redirigir `www` → `non-www`
2. Agregar etiquetas canónicas faltantes
3. Verificar todas las etiquetas canónicas existentes
4. Actualizar Google Search Console

---

## ✅ Checklist de Implementación

### Fase 1: Redirecciones de Dominio 🚀

- [ ] **Tarea 1.1:** Crear middleware en `src/middleware.ts`
  - [ ] Detectar si la request viene de `www.sagradacura.com`
  - [ ] Redirigir con código 301 (permanente) a `https://sagradacura.com`
  - [ ] Preservar path y query parameters
  - [ ] Agregar tests para validar redirecciones

- [ ] **Tarea 1.2:** Alternativa: Configurar en `next.config.js`
  - [ ] Agregar regla de redirect en la función `redirects()`
  - [ ] Documentar la configuración

- [ ] **Tarea 1.3:** Validar redirecciones localmente
  - [ ] Probar `http://www.localhost` → `http://localhost`
  - [ ] Verificar preservación de rutas: `/blog`, `/tienda/[slug]`, etc.
  - [ ] Verificar preservación de query params: `?tag=estres&page=2`

---

### Fase 2: Agregar Canonical URLs Faltantes 🏷️

#### 2.1 Página Principal de Tienda
- [ ] **Archivo:** `src/app/tienda/page.tsx`
  - [ ] Verificar si existe función `generateMetadata`
  - [ ] Si existe, agregar: `alternates: { canonical: 'https://sagradacura.com/tienda' }`
  - [ ] Si no existe, crear función completa con metadata
  - [ ] Agregar soporte para paginación si aplica
  - [ ] Agregar robots meta: `{ index: true, follow: true }`

#### 2.2 Página de Carrito
- [ ] **Archivo:** `src/app/tienda/carrito-de-compras/page.tsx`
  - [ ] Agregar canonical: `https://sagradacura.com/tienda/carrito-de-compras`
  - [ ] Considerar: `noindex, nofollow` (páginas de proceso de compra no deberían indexarse)

#### 2.3 Página de Checkout
- [ ] **Archivo:** `src/app/tienda/checkout/page.tsx`
  - [ ] Agregar canonical: `https://sagradacura.com/tienda/checkout`
  - [ ] Agregar robots: `{ index: false, follow: false }`
  - [ ] Considerar agregar `X-Robots-Tag: noindex` en headers

#### 2.4 Página de Confirmación
- [ ] **Archivo:** `src/app/tienda/confirmation/page.tsx`
  - [ ] Agregar canonical: `https://sagradacura.com/tienda/confirmation`
  - [ ] Agregar robots: `{ index: false, follow: false }`

#### 2.5 Página de Etiquetas
- [ ] **Archivo:** `src/app/etiquetas/page.tsx`
  - [ ] Verificar propósito de la página
  - [ ] Agregar canonical apropiado
  - [ ] Si es listado, considerar paginación

#### 2.6 Página de Comunidad
- [ ] **Archivo:** `src/app/comunidad/page.tsx`
  - [ ] Agregar canonical: `https://sagradacura.com/comunidad`
  - [ ] Verificar metadata completa (title, description, keywords)

---

### Fase 3: Verificar URLs Canónicas Existentes 🔍

#### 3.1 Home Page
- [ ] **Archivo:** `src/app/page.tsx`
  - [x] ✅ Verificado: canonical configurado en línea 22
  - [ ] Validar que no hay duplicación de meta tags
  - [ ] Verificar que OpenGraph url coincide con canonical

#### 3.2 Blog Listing
- [ ] **Archivo:** `src/app/blog/page.tsx`
  - [x] ✅ Verificado: canonical dinámico con soporte de tags y paginación
  - [ ] **Revisar lógica de query params:**
    - [ ] Tag único: `?tag=estres` → `https://sagradacura.com/blog?tag=estres`
    - [ ] Tag + página: `?tag=estres&page=2` → incluir ambos parámetros
    - [ ] Solo página: `?page=2` → incluir parámetro
  - [ ] Verificar que OpenGraph url coincide con canonical
  - [ ] Verificar orden de parámetros es consistente

#### 3.3 Blog Detail
- [ ] **Archivo:** `src/app/blog/[slug]/page.tsx`
  - [x] ✅ Verificado: canonical configurado en línea 44
  - [ ] Validar formato: `https://sagradacura.com/blog/{slug}`
  - [ ] Verificar que no incluye trailing slash
  - [ ] Verificar que OpenGraph url coincide

#### 3.4 Product Detail
- [ ] **Archivo:** `src/app/tienda/[slug]/page.tsx`
  - [x] ✅ Verificado: canonical con hreflang en línea 60-65
  - [ ] Validar formato: `https://sagradacura.com/tienda/{slug}`
  - [ ] Verificar configuración de hreflang:
    - [ ] `es-CO`: configurado correctamente
    - [ ] `es`: configurado correctamente
    - [ ] `x-default`: configurado correctamente
  - [ ] Verificar que OpenGraph url coincide

#### 3.5 Contacto
- [ ] **Archivo:** `src/app/contacto/page.tsx`
  - [ ] Leer archivo y verificar canonical
  - [ ] Validar metadata completa

#### 3.6 Nuestra Marca
- [ ] **Archivo:** `src/app/nuestra-marca/page.tsx`
  - [ ] Leer archivo y verificar canonical
  - [ ] Validar metadata completa

---

### Fase 4: Actualizar Configuraciones SEO 📝

#### 4.1 Sitemap
- [ ] **Archivo:** `src/app/sitemap.ts`
  - [x] ✅ Verificado: usa `https://sagradacura.com` (línea 6)
  - [ ] Considerar agregar URLs de blog con tags principales
  - [ ] Validar que prioridades son correctas
  - [ ] Verificar que lastModified se actualiza correctamente

#### 4.2 Robots.txt
- [ ] **Archivo:** `src/app/robots.ts`
  - [x] ✅ Verificado: usa `https://sagradacura.com` (línea 4)
  - [ ] Verificar que sitemap apunta a URL correcta
  - [ ] Validar reglas de disallow

#### 4.3 Layout Root
- [ ] **Archivo:** `src/app/layout.tsx`
  - [ ] Verificar hreflang tags (líneas 70-73)
  - [ ] Asegurar que usan dominio sin www
  - [ ] Validar configuración de geo-targeting para Colombia

---

### Fase 5: Testing y Validación 🧪

#### 5.1 Tests Locales
- [ ] Iniciar servidor de desarrollo: `npm run dev`
- [ ] **Test de redirecciones:**
  - [ ] Modificar `/etc/hosts` para simular `www.localhost`
  - [ ] Verificar redirect de `www` → `non-www`

- [ ] **Test de canonical tags:**
  - [ ] Inspeccionar HTML de cada página
  - [ ] Buscar: `<link rel="canonical" href="..."/>`
  - [ ] Validar que href no contiene `www`

- [ ] **Test de metadata:**
  - [ ] Usar herramienta de SEO (ej: Lighthouse, SEO Minion)
  - [ ] Verificar que cada página tiene canonical único
  - [ ] Verificar que no hay conflictos

#### 5.2 Tests de Build
- [ ] Ejecutar build de producción: `npm run build`
- [ ] Verificar que no hay errores de compilación
- [ ] Revisar warnings relacionados con metadata
- [ ] Ejecutar: `npm run start`
- [ ] Probar rutas principales en modo producción

#### 5.3 Validación de Sitemap
- [ ] Acceder a `/sitemap.xml`
- [ ] Verificar que todas las URLs usan `https://sagradacura.com`
- [ ] Verificar formato XML válido
- [ ] Contar cantidad de URLs (debe incluir productos + blogs + estáticas)

#### 5.4 Validación de Robots
- [ ] Acceder a `/robots.txt`
- [ ] Verificar que sitemap apunta a dominio correcto
- [ ] Verificar reglas de crawling

---

### Fase 6: Deployment y Monitoreo 🚀

#### 6.1 Pre-deployment
- [ ] Crear commit con mensaje descriptivo
- [ ] Push al branch `claude/fix-canonical-urls-01Pn7GwnH5kLoD2x3CtJb76P`
- [ ] Revisar diff en GitHub
- [ ] Asegurar que no hay breaking changes

#### 6.2 Deployment
- [ ] Mergear a rama principal (main/master)
- [ ] Deploy a producción
- [ ] Verificar que el sitio sigue funcionando correctamente

#### 6.3 Configuración DNS (si aplica)
- [ ] Verificar configuración DNS del dominio
- [ ] Si es posible, configurar registro A solo para `sagradacura.com`
- [ ] Configurar registro A para `www` que apunte al mismo servidor
- [ ] Esperar propagación DNS (24-48 horas)

#### 6.4 Google Search Console
- [ ] Acceder a [Google Search Console](https://search.google.com/search-console)
- [ ] Verificar ambas versiones del dominio:
  - [ ] `https://sagradacura.com`
  - [ ] `https://www.sagradacura.com`

- [ ] Configurar dominio preferido (non-www)
- [ ] Solicitar re-crawl de páginas principales
- [ ] Enviar sitemap actualizado: `https://sagradacura.com/sitemap.xml`

#### 6.5 Monitoreo Post-deployment
- [ ] **Semana 1:**
  - [ ] Revisar Google Search Console diariamente
  - [ ] Verificar que errores de canonical están disminuyendo
  - [ ] Monitorear tráfico orgánico (Google Analytics)

- [ ] **Semana 2-4:**
  - [ ] Revisar nuevos errores de indexación
  - [ ] Verificar posicionamiento de palabras clave
  - [ ] Analizar cambios en CTR (Click-Through Rate)

- [ ] **Mes 2:**
  - [ ] Verificar que todos los errores han sido resueltos
  - [ ] Documentar mejoras en indexación
  - [ ] Crear reporte final de implementación

---

## 🛠️ Implementación Técnica Detallada

### Opción 1: Middleware (Recomendada)

**Archivo:** `src/middleware.ts`

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Redirect www to non-www
  if (hostname.startsWith('www.')) {
    const newHostname = hostname.replace('www.', '')
    url.host = newHostname
    url.protocol = 'https'

    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

**Ventajas:**
- ✅ Ejecución a nivel de Edge (muy rápida)
- ✅ No requiere cambios en next.config.js
- ✅ Fácil de testear y mantener
- ✅ Compatible con Vercel, Netlify, etc.

---

### Opción 2: Next.js Config

**Archivo:** `next.config.js` (agregar en la función `redirects()`)

```javascript
async redirects() {
  return [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'www.sagradacura.com',
        },
      ],
      destination: 'https://sagradacura.com/:path*',
      permanent: true,
    },
    {
      source: '/admin',
      destination: `${process.env.ADMIN_PATH}`,
      basePath: false,
      permanent: false
    }
  ]
}
```

**Ventajas:**
- ✅ Configuración centralizada
- ✅ No requiere archivo adicional
- ✅ Funciona en cualquier plataforma de hosting

---

### Template para Agregar Canonical URLs

```typescript
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Título de la Página | Sagrada Cura',
    description: 'Descripción de la página para SEO',
    keywords: 'palabras clave relevantes',
    alternates: {
      canonical: 'https://sagradacura.com/ruta-de-la-pagina'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: 'Título de la Página',
      description: 'Descripción de la página',
      url: 'https://sagradacura.com/ruta-de-la-pagina',
      type: 'website',
      locale: 'es_CO',
      siteName: 'Sagrada Cura'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Título de la Página',
      description: 'Descripción de la página'
    }
  }
}
```

---

## 📈 Métricas de Éxito

### KPIs a Monitorear

| Métrica | Valor Actual | Objetivo | Plazo |
|---------|--------------|----------|-------|
| Errores de canonical en GSC | 11 | 0 | 4 semanas |
| Páginas indexadas | ? | +100% | 8 semanas |
| Cobertura del sitemap | ? | 100% | 2 semanas |
| Tiempo de carga (Core Web Vitals) | ? | < 2.5s | Mantener |
| Posicionamiento palabras clave | ? | +10% | 12 semanas |

### Indicadores de Progreso

- ✅ **Verde:** Error resuelto, página indexada correctamente
- 🟡 **Amarillo:** En progreso, esperando re-crawl
- 🔴 **Rojo:** Error persistente, requiere investigación

---

## 🚨 Troubleshooting

### Problema 1: Redirect Loop
**Síntomas:** Navegador muestra "Demasiados redireccionamientos"

**Soluciones:**
- Verificar que middleware solo redirige una vez
- Asegurar que condición `hostname.startsWith('www.')` es correcta
- Revisar configuración de DNS
- Limpiar caché del navegador

### Problema 2: URLs con www Siguen Indexadas
**Síntomas:** Google Search Console sigue mostrando versión www

**Soluciones:**
- Esperar que Google re-crawlee (puede tomar 2-4 semanas)
- Solicitar indexación manual en GSC
- Verificar que redirect devuelve código 301 (no 302)
- Revisar que sitemap solo incluye versión sin www

### Problema 3: Canonical Tags No Se Renderizan
**Síntomas:** `<link rel="canonical">` no aparece en HTML

**Soluciones:**
- Verificar que función `generateMetadata` es `async`
- Revisar que `alternates.canonical` está correctamente escrito
- Verificar build de Next.js completó sin errores
- Limpiar `.next` folder y rebuildar

### Problema 4: Páginas Dinámicas Sin Canonical
**Síntomas:** Rutas como `/blog?tag=x` no tienen canonical

**Soluciones:**
- Implementar lógica en `generateMetadata` para incluir query params
- Asegurar que `searchParams` se pasan correctamente
- Validar que URL se construye con todos los parámetros

---

## 📚 Referencias y Recursos

### Documentación Oficial
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Google Search Central - Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Schema.org Documentation](https://schema.org/)

### Herramientas de Validación
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Lighthouse SEO Audit](https://developer.chrome.com/docs/lighthouse/seo/)
- [Screaming Frog SEO Spider](https://www.screamingfrogseoseo.com/)

### Herramientas de Testing
- [Redirect Checker](https://www.redirect-checker.org/)
- [HTTP Status Checker](https://httpstatus.io/)
- [Canonical Tag Checker](https://www.seoreviewtools.com/canonical-tag-checker/)

---

## 📝 Notas y Consideraciones

### Consideraciones de Implementación

1. **Tiempo de Propagación DNS:**
   - Los cambios de DNS pueden tomar 24-48 horas
   - Planificar implementación en día/hora de bajo tráfico

2. **Impacto en SEO:**
   - Los redirects 301 son seguros para SEO
   - Google puede tomar 2-4 semanas para re-indexar
   - No se perderá autoridad de dominio

3. **Rendimiento:**
   - Middleware de Next.js ejecuta en Edge (muy rápido)
   - Impacto mínimo en tiempo de carga
   - Considerar caché de CDN

4. **Compatibilidad:**
   - Solución compatible con Vercel, Netlify, Docker
   - Funciona con todas las versiones de Next.js 13+

### Preguntas Frecuentes

**¿Por qué usar non-www en lugar de www?**
- URLs más cortas y limpias
- Menor complejidad en configuración DNS
- Tendencia moderna en web (ej: google.com, amazon.com)
- Ya configurado en el código actual

**¿Se perderá el posicionamiento actual?**
- No, los redirects 301 preservan el "link juice"
- Google reconoce la canonicalización y transfiere autoridad
- El posicionamiento puede mejorar al resolver duplicados

**¿Cuánto tiempo toma ver resultados?**
- Corrección técnica: Inmediata
- Re-crawl de Google: 1-2 semanas
- Resolución completa de errores: 4-6 semanas
- Mejora en posicionamiento: 8-12 semanas

---

## ✅ Checklist Rápido de Verificación Final

Antes de marcar el proyecto como completo, verificar:

- [ ] Todas las páginas públicas tienen canonical tags
- [ ] Todas las canonical URLs usan `https://sagradacura.com` (sin www)
- [ ] Middleware o redirects configurados y testeados
- [ ] Build de producción completa sin errores
- [ ] Sitemap.xml accesible y válido
- [ ] Robots.txt accesible y correcto
- [ ] No hay redirect loops
- [ ] Páginas de checkout tienen `noindex`
- [ ] OpenGraph URLs coinciden con canonical URLs
- [ ] Google Search Console actualizado
- [ ] Documentación completa y actualizada

---

## 📅 Timeline Estimado

| Fase | Duración Estimada | Dependencias |
|------|-------------------|--------------|
| **Fase 1:** Redirecciones | 2-4 horas | Ninguna |
| **Fase 2:** Canonical URLs | 4-6 horas | Fase 1 |
| **Fase 3:** Verificación | 2-3 horas | Fase 2 |
| **Fase 4:** Configuración SEO | 1-2 horas | Fase 3 |
| **Fase 5:** Testing | 3-4 horas | Todas las anteriores |
| **Fase 6:** Deployment | 1-2 horas | Fase 5 |
| **Monitoreo Post-deploy** | 4 semanas | Deployment |

**Total tiempo de desarrollo:** 13-21 horas
**Total tiempo de monitoreo:** 4 semanas

---

## 🎉 Criterios de Éxito

El proyecto se considerará exitoso cuando:

1. ✅ Cero errores de canonical en Google Search Console
2. ✅ Todas las URLs indexadas usan la versión sin www
3. ✅ 100% de páginas públicas tienen canonical tags
4. ✅ Redirects funcionan correctamente (301)
5. ✅ Sitemap y robots.txt actualizados
6. ✅ No hay impacto negativo en métricas de tráfico
7. ✅ Documentación completa y actualizada

---

**Última actualización:** 2025-11-26
**Próxima revisión:** Después de implementar Fase 1
**Responsable:** Claude AI / Equipo de Desarrollo
