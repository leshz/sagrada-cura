# Plan de Actualización a Next.js 15

## Estado Actual

**Versiones Actuales:**
- Next.js: `14.2.26`
- React: `18.3.1`
- TypeScript: `5.4.5`
- Node.js: `20.x`

**Características en Uso:**
- ✅ App Router (`src/app`)
- ✅ Server Components (async)
- ✅ Client Components (`'use client'` en 20 archivos)
- ✅ Metadata API (`generateMetadata`)
- ✅ Dynamic Routes (`[slug]`, `[id]`)
- ✅ Image Optimization
- ✅ Google Fonts (next/font)
- ✅ Error Boundaries
- ✅ Sitemap y Robots.txt dinámicos
- ✅ CSP Headers personalizados
- ✅ Redirects configurados

---

## Objetivo

Actualizar a **Next.js 15.x** (última versión estable) con cero tiempo de inactividad y sin romper funcionalidades existentes.

---

## Fases de Actualización

### **FASE 1: Preparación y Análisis** ⏱️ ~15 min

#### 1.1 Verificación Inicial
- [ ] Verificar rama actual: `claude/plan-nextjs-upgrade-01MYcvz8oWSaQ4CJJrAxbu1n`
- [ ] Asegurar que el código actual compila sin errores
```bash
npm run build
```

#### 1.2 Breaking Changes Identificados

**Principales Breaking Changes en Next.js 15 que nos afectan:**

1. **React 19 RC requerido** (actualmente en React 18.3.1)
   - Cambios en tipos y APIs
   - Algunas librerías pueden no ser compatibles aún

2. **Async Request APIs** ⚠️ **CRÍTICO**
   - `headers()`, `cookies()`, `params` ahora son promesas
   - Requiere `await` en todos los Server Components
   - Archivos afectados: ~14 páginas

3. **Fetch caching cambió**
   - Antes: `cache: 'force-cache'` por defecto
   - Ahora: `cache: 'no-store'` por defecto
   - Puede afectar performance si no se ajusta

4. **Cambios en next.config.js**
   - Algunas opciones deprecated
   - Imports innecesarios deben eliminarse

---

### **FASE 2: Actualización de Dependencias** ⏱️ ~30 min

#### 2.1 Dependencias Core
```json
{
  "next": "15.x.x",           // de 14.2.26
  "react": "19.x.x",          // de 18.3.1
  "react-dom": "19.x.x",      // de 18.3.1
  "@types/react": "19.x.x",   // de 18.3.1
  "@types/react-dom": "19.x.x" // de 18.3.0
}
```

#### 2.2 Dependencias que Revisar Compatibilidad
- [ ] `@next/third-parties`: `15.2.4` → Verificar compatibilidad con Next.js 15
- [ ] `@vercel/speed-insights`: `^1.0.10` → Verificar compatibilidad
- [ ] `eslint-config-next`: `14.2.3` → Actualizar a `15.x.x`
- [ ] `formik`: `^2.4.6` → Verificar compatibilidad con React 19
- [ ] `react-toastify`: `^10.0.6` → Verificar compatibilidad con React 19
- [ ] `zustand`: `4.5.6` → Verificar compatibilidad con React 19
- [ ] `swiper`: `11.1.1` → Verificar compatibilidad
- [ ] `@strapi/blocks-react-renderer`: `^1.0.1` → Verificar compatibilidad

#### 2.3 DevDependencies
- [ ] `@typescript-eslint/eslint-plugin`: `7.13.0` → Actualizar a versión compatible
- [ ] `typescript`: `5.4.5` → Actualizar a `5.6.x` (recomendado para Next.js 15)
- [ ] `@types/node`: `20.12.14` → Actualizar a última versión de 20.x

#### 2.4 Comandos de Actualización
```bash
# Paso 1: Actualizar Next.js y React
npm install next@latest react@rc react-dom@rc

# Paso 2: Actualizar tipos
npm install -D @types/react@rc @types/react-dom@rc eslint-config-next@latest

# Paso 3: Actualizar TypeScript (opcional pero recomendado)
npm install -D typescript@latest

# Paso 4: Verificar dependencias
npm outdated
```

---

### **FASE 3: Ajustes de Código** ⏱️ ~2-3 horas

#### 3.1 Actualizar APIs Asíncronas (Critical)

**Archivos que requieren cambios:**
- `src/app/layout.tsx`
- `src/app/page.tsx`
- Todos los archivos en `src/app/**/**/page.tsx`

**Cambios Requeridos:**

**ANTES (Next.js 14):**
```typescript
import { headers, cookies } from 'next/headers'

export async function generateMetadata() {
  const headersList = headers()
  const cookieStore = cookies()
  // ...
}
```

**DESPUÉS (Next.js 15):**
```typescript
import { headers, cookies } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const cookieStore = await cookies()
  // ...
}
```

**Archivos a Revisar:**
- [ ] `src/app/layout.tsx:39` - Verificar uso de headers/cookies
- [ ] Todos los archivos con `generateMetadata`
- [ ] Todos los Server Components que usen `headers()` o `cookies()`

#### 3.2 Actualizar Dynamic Params (Critical)

**ANTES (Next.js 14):**
```typescript
export default async function Page({ params }) {
  const { slug } = params
}
```

**DESPUÉS (Next.js 15):**
```typescript
export default async function Page({ params }) {
  const { slug } = await params
}
```

**Archivos Afectados:**
- [ ] `src/app/blog/[slug]/page.tsx`
- [ ] `src/app/politicas/[id]/page.tsx`
- [ ] `src/app/tienda/[slug]/page.tsx`

#### 3.3 Actualizar Fetch Caching

**Cambio:** En Next.js 15, `fetch()` ahora usa `cache: 'no-store'` por defecto (antes era `force-cache`).

**Acciones:**
- [ ] Auditar todos los `fetch()` en el proyecto
- [ ] Agregar explícitamente `cache: 'force-cache'` donde se requiera caching
- [ ] Documentar estrategia de caching

**Comando de búsqueda:**
```bash
grep -r "fetch(" src/
```

#### 3.4 Revisar Error Boundary

**Archivo:** `src/app/layout.tsx:84`

El código actual usa:
```typescript
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
```

**⚠️ Problema:** Importar desde `next/dist/*` es anti-patrón.

**Acción:**
- [ ] Verificar si Next.js 15 expone ErrorBoundary oficialmente
- [ ] Si no, migrar a usar `error.tsx` convencional de Next.js
- [ ] Alternativa: Implementar ErrorBoundary personalizado con React 19

#### 3.5 Actualizar next.config.js

**Archivo:** `next.config.js`

**Cambios Potenciales:**
- [ ] Verificar si `reactStrictMode: false` sigue siendo válido (considerar habilitarlo)
- [ ] Revisar si las opciones de `images` tienen cambios
- [ ] Verificar compatibilidad de `sassOptions`
- [ ] Revisar formato de `headers()` y `redirects()`

**Líneas específicas a revisar:**
- Línea 2: `const { redirect } = require('next/dist/server/api-utils')` - No se usa, eliminar
- Línea 3: `const { headers } = require('next/headers')` - No se usa, eliminar

#### 3.6 Revisar TypeScript Config

**Archivo:** `tsconfig.json`

**Cambios Recomendados para Next.js 15:**
```json
{
  "compilerOptions": {
    "target": "ES2020",  // actualizar de "es5"
    "lib": ["dom", "dom.iterable", "esnext"],
    "moduleResolution": "bundler",
    "strict": true,
    // ... resto igual
  }
}
```

- [ ] Actualizar `target` de `es5` a `ES2020` o superior
- [ ] Considerar habilitar `strictNullChecks` si no está habilitado
- [ ] Verificar que `moduleResolution: "bundler"` es correcto

---

### **FASE 4: Testing y Validación** ⏱️ ~1-2 horas

#### 4.1 Build y Compilación
```bash
# Limpiar caché
rm -rf .next
rm -rf node_modules/.cache

# Build de producción
npm run build

# Verificar errores de TypeScript
npx tsc --noEmit
```

- [ ] El build completa sin errores
- [ ] No hay warnings críticos
- [ ] El bundle size es similar o menor

#### 4.2 Testing Local
```bash
# Desarrollo
npm run dev

# Producción local
npm run build && npm start
```

**Páginas Críticas a Probar:**
- [ ] `/` (Home)
- [ ] `/blog` (Lista de blogs)
- [ ] `/blog/[slug]` (Detalle de blog)
- [ ] `/tienda` (Tienda)
- [ ] `/tienda/[slug]` (Detalle de producto)
- [ ] `/tienda/carrito-de-compras` (Carrito)
- [ ] `/tienda/checkout` (Checkout)
- [ ] `/contacto` (Contacto)
- [ ] `/politicas/[id]` (Políticas)

#### 4.3 Validación de Funcionalidades

**Frontend:**
- [ ] Navegación entre páginas funciona
- [ ] Imágenes se cargan correctamente
- [ ] Formularios (contacto, checkout) funcionan
- [ ] Toast notifications funcionan
- [ ] Carrito de compras funciona
- [ ] Google Fonts se cargan
- [ ] Swiper/Slider funciona
- [ ] Instagram feed carga

**SEO y Metadata:**
- [ ] Metadata se genera correctamente
- [ ] Sitemap accesible en `/sitemap.xml`
- [ ] Robots.txt accesible en `/robots.txt`
- [ ] Open Graph tags correctos
- [ ] Structured data (JSON-LD) presente

**Performance:**
- [ ] Lighthouse score similar o mejor
- [ ] Core Web Vitals no degradados
- [ ] Time to Interactive aceptable
- [ ] Vercel Speed Insights funciona

**Security:**
- [ ] CSP headers aplicados
- [ ] Redirects funcionan (`/admin`)
- [ ] Headers de seguridad presentes

#### 4.4 Verificar Console y Network
- [ ] No hay errores en consola del navegador
- [ ] No hay warnings de hydration
- [ ] Requests a CDN funcionan
- [ ] Analytics funciona

---

### **FASE 5: Deploy y Monitoreo** ⏱️ ~30 min

#### 5.1 Pre-Deploy
- [ ] Crear commit con cambios
- [ ] Push a la rama de desarrollo
- [ ] Crear PR con checklist de cambios
- [ ] Solicitar code review (opcional)

#### 5.2 Deploy a Preview (Vercel)
- [ ] Deploy automático en Vercel (preview)
- [ ] Probar en preview environment
- [ ] Verificar variables de entorno
- [ ] Verificar integración con Strapi

#### 5.3 Monitoreo Post-Deploy
- [ ] Verificar logs en Vercel
- [ ] Monitorear errores en tiempo real
- [ ] Verificar Analytics
- [ ] Revisar Speed Insights

---

### **FASE 6: Optimizaciones Post-Upgrade** ⏱️ ~2-3 horas (Opcional)

#### 6.1 Aprovechar Nuevas Features de Next.js 15

**1. Turbopack Estable (Experimental en 15)**
```bash
# En development con Turbopack
npm run dev --turbo
```
- [ ] Probar Turbopack en desarrollo
- [ ] Medir mejora en tiempo de compilación

**2. Partial Prerendering (PPR) - Experimental**
- [ ] Investigar si PPR beneficia al proyecto
- [ ] Implementar en páginas candidatas

**3. React 19 Features**
- [ ] Investigar nuevos hooks de React 19
- [ ] Considerar usar `useActionState` para forms
- [ ] Revisar `useOptimistic` para UX optimista

#### 6.2 Mejoras de Configuración
- [ ] Habilitar `reactStrictMode: true` en next.config.js
- [ ] Optimizar `images.deviceSizes` basado en analytics
- [ ] Revisar y optimizar CSP headers

#### 6.3 Migrar Imports Deprecados
- [ ] Eliminar imports de `next/dist/*`
- [ ] Usar APIs públicas oficiales
- [ ] Actualizar imports deprecated

---

## Checklist de Verificación Final

### Pre-Upgrade
- [ ] Verificar rama correcta: `claude/plan-nextjs-upgrade-01MYcvz8oWSaQ4CJJrAxbu1n`
- [ ] Build actual sin errores
- [ ] Breaking changes identificados

### Durante Upgrade
- [ ] Dependencies actualizadas
- [ ] Código migrado a nuevas APIs
- [ ] Build exitoso sin errores
- [ ] Tests locales pasados
- [ ] No hay imports de `next/dist/*`

### Post-Upgrade
- [ ] Deploy preview exitoso
- [ ] Todas las páginas funcionan
- [ ] Metadata y SEO correctos
- [ ] Performance no degradado
- [ ] Sin errores en consola
- [ ] Analytics funcionando

---

## Plan de Rollback

En caso de problemas críticos:

### Rollback Rápido
```bash
# Revertir cambios en package.json
git checkout HEAD~1 package.json package-lock.json

# Reinstalar dependencias
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Rollback Completo
```bash
# Revertir al commit anterior
git revert HEAD

# Push del revert
git push origin claude/plan-nextjs-upgrade-01MYcvz8oWSaQ4CJJrAxbu1n
```

---

## Recursos y Referencias

### Documentación Oficial
- [Next.js 15 Release Blog](https://nextjs.org/blog/next-15)
- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [Async Request APIs](https://nextjs.org/docs/messages/sync-dynamic-apis)

### Breaking Changes Detallados
- [Async Dynamic APIs](https://nextjs.org/docs/messages/sync-dynamic-apis)
- [Fetch Cache Changes](https://nextjs.org/docs/app/api-reference/functions/fetch)
- [Config Changes](https://nextjs.org/docs/app/api-reference/next-config-js)

### Community Resources
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [Next.js Discord](https://nextjs.org/discord)

---

## Notas Importantes

### ⚠️ Warnings
1. **React 19 es RC**: Aunque estable, aún no es versión final
2. **Dependencias de terceros**: Algunas librerías pueden no soportar React 19 aún
3. **ErrorBoundary**: El import desde `next/dist` debe ser corregido
4. **Fetch caching**: Comportamiento por defecto cambió

### ✅ Beneficios Esperados
1. **Performance**: Mejoras en compilación y runtime
2. **Developer Experience**: Mejores mensajes de error
3. **Features**: Acceso a nuevas APIs de React 19
4. **Security**: Últimos patches de seguridad
5. **Future-proof**: Preparado para futuras versiones

### 🎯 Criterios de Éxito
- ✅ Build exitoso sin errores
- ✅ Todas las páginas cargan correctamente
- ✅ Lighthouse score >= 90
- ✅ Sin errores en consola
- ✅ Core Web Vitals en verde
- ✅ Funcionalidades críticas operativas:
  - Navegación
  - Carrito de compras
  - Checkout
  - Formularios
  - Blog

---

## Timeline Estimado

| Fase | Duración Estimada |
|------|-------------------|
| Fase 1: Preparación y Análisis | 15 minutos |
| Fase 2: Actualización de Dependencias | 30 minutos |
| Fase 3: Ajustes de Código | 2-3 horas |
| Fase 4: Testing y Validación | 1-2 horas |
| Fase 5: Deploy y Monitoreo | 30 minutos |
| Fase 6: Optimizaciones (Opcional) | 2-3 horas |
| **TOTAL (sin optimizaciones)** | **4.5-6.5 horas** |
| **TOTAL (con optimizaciones)** | **6.5-9.5 horas** |

---

## Estado Actual del Plan

📅 **Creado:** 2025-11-23
🎯 **Objetivo:** Next.js 15.x
📊 **Progreso:** 0% - Plan creado, actualización no iniciada
👤 **Responsable:** Claude AI + Equipo de Desarrollo

---

**Última actualización:** 2025-11-23
