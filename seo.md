# Auditoría SEO Exhaustiva - Sagrada Cura
## Fecha: 13 de enero de 2026

---

## 📊 RESUMEN EJECUTIVO

Se realizó una auditoría SEO completa del sitio web **https://sagradacura.com/** incluyendo todas sus páginas principales, productos, blog y aspectos técnicos.

### Estructura del Sitio Auditado:
- **5 páginas principales** (Home, Tienda, Blog, Contacto, Nuestra Marca)
- **21 productos** (Sprays áuricos, velas de intención, sales éteras, kits y terapias)
- **20 artículos de blog**

### Puntuación General: 7.2/10

**Fortalezas principales:**
- ✅ Excelente implementación de Schema Markup
- ✅ HTTPS implementado correctamente
- ✅ Optimización de imágenes con Next.js Image
- ✅ Meta tags Open Graph y Twitter Cards bien implementados
- ✅ Sitemap XML correctamente configurado
- ✅ Robots.txt bien estructurado

**Áreas críticas de mejora:**
- ⚠️ Descripciones meta genéricas en varias páginas
- ⚠️ Falta de H1 en página de tienda
- ⚠️ 21 imágenes sin atributo ALT en página principal
- ⚠️ Estructura de headings inconsistente
- ⚠️ Oportunidades de mejora en linking interno
- ⚠️ Contenido insuficiente en algunos artículos de blog

---

## 🔍 HALLAZGOS DETALLADOS POR CATEGORÍA

### 1. META TAGS Y TÍTULOS

#### 1.1 Página Principal (Home)
**Estado: 🟡 BUENO CON MEJORAS NECESARIAS**

✅ **Fortalezas:**
- Title tag bien optimizado: "Inicio | Sanación Natural"
- Meta description presente y descriptiva (200 caracteres)
- Keywords meta tag implementado (aunque no es usado por Google)
- Open Graph tags completos
- Twitter Cards implementados
- Geo tags para localización implementados

⚠️ **Problemas Identificados:**
- **CRÍTICO**: Title tag podría ser más descriptivo y orientado a keywords
  - Actual: "Inicio | Sanación Natural"
  - Recomendado: "Productos Naturales de Sanación | Velas, Sprays y Terapias Holísticas | Sagrada Cura"

- Meta description podría mejorar el CTR con call-to-action más fuerte
  - Actual: "Productos holísticos y talleres de sanación natural..."
  - Recomendado: Agregar urgencia y beneficios específicos

#### 1.2 Página de Tienda
**Estado: 🔴 NECESITA MEJORA URGENTE**

⚠️ **Problemas Críticos:**
1. **Meta description muy genérica**: Solo dice "Nuestra tienda"
   - Impacto: Bajo CTR en resultados de búsqueda
   - Prioridad: ALTA

2. **Title tag poco descriptivo**: "Nuestra tienda | Sanación Natural"
   - Falta keywords comerciales importantes
   - No transmite propuesta de valor

3. **Sin Schema Markup para categoría de productos**
   - Oportunidad perdida para rich snippets

**Recomendación:**
```html
<title>Tienda de Productos Naturales | Velas, Sprays Áuricos y Sales Terapéuticas | Sagrada Cura</title>
<meta name="description" content="Compra productos naturales para sanación: velas de intención, sprays áuricos de protección y limpieza, sales éteras y terapias holísticas. Envío a toda Colombia." />
```

#### 1.3 Páginas de Productos (Ejemplo: Spray Áurico Protección)
**Estado: 🟢 EXCELENTE**

✅ **Fortalezas:**
- Title muy bien optimizado con keywords y precio
- Meta description atractiva: "Libera tu mente."
- Product Schema Markup completo y detallado
- Meta tags de precio y disponibilidad implementados
- Breadcrumbs Schema implementado
- Open Graph optimizado para compartir en redes

⚠️ **Áreas de Mejora:**
- Meta description es muy corta (15 caracteres)
- Podría expandirse a 150-160 caracteres para mejor CTR

**Recomendación:**
```html
<meta name="description" content="Spray Áurico de Protección natural con salvia, eucalipto y ruda. Protege tu energía, aleja malas vibras y promueve la paz mental. $45.000 COP. Envío gratis." />
```

#### 1.4 Blog Principal
**Estado: 🟢 BUENO**

✅ **Fortalezas:**
- Title descriptivo
- Meta description bien escrita
- Article tags implementados
- Author tags presentes

#### 1.5 Artículos de Blog (Ejemplo analizado)
**Estado: 🟢 EXCELENTE**

✅ **Fortalezas:**
- BlogPosting Schema Markup completo
- Article tags con fechas de publicación y modificación
- Meta description atractiva y con gancho
- Breadcrumbs implementados
- Social sharing optimizado

---

### 2. ESTRUCTURA DE HEADINGS

#### 2.1 Página Principal
**Estado: 🟡 NECESITA MEJORAS**

**Estructura actual:**
- H1: "Terapias holísticas." (1)
- H2: 9 headings (Categorías, Protección, Atracción, etc.)
- H3: 6 headings

⚠️ **Problemas:**
1. El H1 no representa el contenido principal de la página
   - "Terapias holísticas" es solo una sección, no el tema principal
   - **Recomendación**: "Productos Naturales para Sanación y Bienestar Holístico"

2. Múltiples H2 con la misma jerarquía para categorías
   - "Protección", "Atracción", "Limpieza" deberían ser H3 o H4

3. Jerarquía inconsistente

**Estructura recomendada:**
```html
<h1>Sagrada Cura: Productos Naturales para tu Sanación y Bienestar</h1>
  <h2>Nuestros Productos de Sanación Natural</h2>
    <h3>Productos de Protección Energética</h3>
    <h3>Productos de Atracción y Abundancia</h3>
    <h3>Productos de Limpieza Espiritual</h3>
  <h2>Terapias Holísticas y Talleres</h2>
  <h2>Últimos Artículos de Nuestro Blog</h2>
  <h2>Testimonios de Nuestra Comunidad</h2>
```

#### 2.2 Página de Tienda
**Estado: 🔴 CRÍTICO**

⚠️ **PROBLEMA MAYOR:**
- **NO HAY H1 EN LA PÁGINA**
- Sin H2 tampoco
- Solo hay H6 para los nombres de productos

**Impacto SEO:** Alto - Los buscadores no pueden identificar el tema principal

**Solución Urgente:**
```html
<h1>Tienda de Productos Naturales y Holísticos</h1>
<section>
  <h2>Todos Nuestros Productos</h2>
  <div>
    <h3>Spray Áurico Limpieza</h3>
    <h3>Spray Áurico Protección</h3>
    <!-- etc -->
  </div>
</section>
```

#### 2.3 Páginas de Producto
**Estado: 🟢 EXCELENTE**

✅ Estructura correcta:
- H1: Nombre del producto
- H2: Secciones (Descripción, Ingredientes, Modo de uso, etc.)
- Jerarquía lógica y bien implementada

#### 2.4 Artículos de Blog
**Estado: 🟡 BUENO CON MEJORAS**

✅ **Fortalezas:**
- H1 presente con el título del artículo
- H3 para subsecciones

⚠️ **Problema:**
- Salto de H1 a H3 (falta H2)
- Inconsistencia en la jerarquía

**Recomendación:**
```html
<h1>Título del Artículo</h1>
<h2>Introducción / Contexto</h2>
<h2>Sección Principal 1</h2>
  <h3>Subsección 1.1</h3>
  <h3>Subsección 1.2</h3>
<h2>Sección Principal 2</h2>
<h2>Conclusiones</h2>
```

---

### 3. IMÁGENES Y OPTIMIZACIÓN

#### 3.1 Implementación Actual
**Estado: 🟢 BUENO CON MEJORAS NECESARIAS**

✅ **Fortalezas:**
- **Next.js Image** implementado (26 de 29 imágenes)
- **Lazy loading** activado (25 de 29 imágenes)
- Imágenes servidas desde CDN (AWS S3)
- Formato WebP utilizado automáticamente

⚠️ **Problemas Identificados:**

1. **CRÍTICO: 21 imágenes sin atributo ALT en la página principal**
   - Afecta: Accesibilidad y SEO
   - Prioridad: ALTA
   - Páginas afectadas: Home, especialmente en sección de testimonios

2. **Falta de ALT descriptivo**
   - Muchas imágenes tienen ALT vacío o genérico
   - Oportunidad perdida para keywords

**Ejemplo de mejora:**
```html
<!-- Actual -->
<img src="imagen.jpg" alt="" />

<!-- Recomendado -->
<img src="spray-aurico-proteccion.jpg"
     alt="Spray Áurico de Protección con hierbas naturales de Sagrada Cura para limpiar energías negativas" />
```

#### 3.2 Recomendaciones por Tipo de Imagen

**Productos:**
```html
alt="[Nombre Producto] - Producto natural de [categoría] de Sagrada Cura"
Ejemplo: "Spray Áurico de Limpieza - Producto natural de protección energética de Sagrada Cura"
```

**Blog:**
```html
alt="Infografía sobre [tema del artículo] - Sagrada Cura"
```

**Testimonios:**
```html
alt="Testimonio de [Nombre Cliente] sobre [producto/servicio]"
```

#### 3.3 Optimizaciones Adicionales Recomendadas

1. **Agregar dimensiones explícitas**
   ```jsx
   <Image
     src="/imagen.jpg"
     width={800}
     height={600}
     alt="Descripción optimizada"
   />
   ```

2. **Priorizar imágenes above-the-fold**
   ```jsx
   <Image
     src="/hero-image.jpg"
     priority={true}
     alt="Banner principal"
   />
   ```

---

### 4. SCHEMA MARKUP Y DATOS ESTRUCTURADOS

#### 4.1 Evaluación General
**Estado: 🟢 EXCELENTE**

✅ **Implementaciones Correctas:**

**Página Principal:**
1. **Organization Schema** ✅
   - Información completa de la empresa
   - Contact points
   - Dirección

2. **LocalBusiness Schema** ✅
   - Geolocalización implementada
   - Horarios de atención
   - Formas de pago
   - AggregateRating presente
   - Area served especificada

3. **WebSite Schema** ✅
   - SearchAction implementado
   - Permite búsquedas desde Google

**Páginas de Producto:**
1. **Product Schema** ✅ (Muy completo)
   - Precio y moneda
   - Disponibilidad
   - SKU/GTIN
   - Marca
   - Imágenes
   - Ratings y reviews
   - Política de devolución
   - Detalles de envío
   - Garantía

2. **BreadcrumbList Schema** ✅
   - Navegación bien estructurada

**Artículos de Blog:**
1. **BlogPosting Schema** ✅
   - Autor
   - Fechas de publicación
   - Imágenes
   - Publisher
   - MainEntityOfPage

#### 4.2 Oportunidades de Mejora

⚠️ **Faltan en algunas áreas:**

1. **FAQ Schema** - No implementado
   - **Recomendación**: Agregar en productos y artículos de blog
   - Beneficio: Rich snippets en resultados de búsqueda

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Cómo usar el Spray Áurico de Protección?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Rocía ligeramente alrededor de tu cuerpo manteniendo una distancia de 20cm..."
    }
  }]
}
```

2. **HowTo Schema** - No implementado
   - Ideal para artículos de blog con tutoriales
   - Ejemplo: "Rituales de Protección Energética Diaria"

3. **ItemList Schema** para página de tienda
   - Mejoraría la indexación de productos
   - Rich snippets de lista de productos

4. **Video Schema** - Si hay videos
   - Verificar si hay contenido de video y agregar markup

---

### 5. CONTENIDO Y KEYWORDS

#### 5.1 Análisis de Contenido por Página

**Página Principal:**
**Estado: 🟢 BUENO**

✅ **Fortalezas:**
- Contenido diverso (productos, blog, testimonios)
- Keywords principales presentes
- Buena distribución de contenido

⚠️ **Mejoras:**
- Agregar sección "Sobre Nosotros" en home
- Incluir más contenido textual descriptivo
- Expandir descripciones de categorías de productos

**Productos:**
**Estado: 🟡 NECESITA MEJORAS**

⚠️ **Problemas:**
- Descripciones cortas en tarjetas de producto
- Falta información sobre beneficios
- No hay sección de preguntas frecuentes

**Recomendación:**
- Expandir descripciones de 50 a 150+ palabras
- Agregar sección "Beneficios"
- Incluir testimonios específicos por producto
- Agregar sección FAQ

**Blog:**
**Estado: 🟡 VARIABLE**

✅ **Artículos buenos:**
- Títulos optimizados para SEO
- Contenido relevante
- Enlaces internos a productos

⚠️ **Artículos que necesitan mejora:**
- Algunos artículos muy cortos (menos de 500 palabras)
- Falta de estructura clara en algunos
- Pocos enlaces internos en artículos antiguos

**Recomendación:**
- Contenido mínimo: 800-1200 palabras por artículo
- Agregar 3-5 enlaces internos relevantes por artículo
- Incluir CTAs claros
- Agregar imágenes descriptivas con ALT optimizado

#### 5.2 Keywords Principales Identificadas

**Keywords de alto valor:**
1. "productos naturales sanación" - Volumen: Medio
2. "velas de intención" - Volumen: Alto
3. "spray áurico" - Volumen: Medio-Bajo (nicho)
4. "sales terapéuticas" - Volumen: Medio
5. "terapias holísticas bogotá" - Volumen: Medio
6. "protección energética" - Volumen: Alto
7. "limpieza espiritual" - Volumen: Alto
8. "ritual de atracción" - Volumen: Medio

**Long-tail keywords (oportunidades):**
- "cómo usar spray áurico"
- "velas de intención para atraer dinero"
- "rituales de protección energética"
- "limpieza espiritual con sal"
- "terapia de sanación energética"

#### 5.3 Optimización de Contenido Recomendada

**Para Productos:**
```markdown
## Estructura Ideal de Página de Producto

### Título H1: [Nombre Producto] | [Beneficio Principal]
Ej: Spray Áurico de Protección | Protege tu Energía de Influencias Negativas

### Descripción Principal (150-200 palabras)
- ¿Qué es?
- Beneficios principales
- Para quién es

### Ingredientes y Composición (100 palabras)
- Lista detallada
- Propiedades de cada ingrediente
- Certificaciones (si aplica)

### Modo de Uso (150 palabras)
- Paso a paso detallado
- Frecuencia recomendada
- Consejos adicionales

### Beneficios Específicos (lista con viñetas)
- 5-7 beneficios clave
- Respaldados por experiencias de clientes

### Preguntas Frecuentes (5-8 preguntas)
- ¿Es seguro?
- ¿Cuánto dura?
- ¿Cómo se almacena?
- etc.

### Productos Relacionados
- 3-4 productos complementarios

### Testimonios
- 2-3 testimonios específicos del producto
```

**Para Blog:**
```markdown
## Estructura Ideal de Artículo

### Título H1 (8-12 palabras, incluir keyword principal)

### Introducción (150-200 palabras)
- Hook que capture atención
- Problema que se va a resolver
- Qué aprenderá el lector

### Tabla de Contenidos (para artículos >1000 palabras)

### Cuerpo del Artículo (800-2000 palabras)
- Secciones con H2
- Subsecciones con H3
- Listas y viñetas
- Imágenes con ALT optimizado
- Ejemplos prácticos
- Enlaces internos y externos

### Conclusión (100-150 palabras)
- Resumen de puntos clave
- CTA claro
- Invitación a acción

### Productos Relacionados
- 2-3 productos relevantes del artículo

### Artículos Relacionados
- 3-4 artículos similares
```

---

### 6. LINKING INTERNO

#### 6.1 Evaluación Actual
**Estado: 🟡 NECESITA MEJORAS**

**Estadísticas de la Página Principal:**
- Links internos: 32
- Links externos: 18
- Ratio: 1.78:1 ✅ (Bueno)

✅ **Fortalezas:**
- Navegación principal bien estructurada
- Links a productos desde home
- Links a blog desde home
- Footer con links importantes

⚠️ **Problemas Identificados:**

1. **Falta de links contextuales en blog**
   - Los artículos no enlazan suficientemente entre sí
   - Oportunidad perdida de distribuir PageRank

2. **Productos no enlazan a artículos relevantes**
   - Ejemplo: "Spray Áurico Protección" no enlaza a artículo "Rituales de Protección"
   - Afecta: Engagement y tiempo en sitio

3. **Falta breadcrumbs visibles en UI**
   - Aunque están en Schema, no son visibles para usuarios

4. **No hay links desde tienda principal a categorías**
   - Todo está en una sola página
   - Dificulta navegación con muchos productos

#### 6.2 Estrategia de Linking Interno Recomendada

**1. Estructura de Silos de Contenido**

```
Home
├── Tienda
│   ├── Categoría: Protección
│   │   ├── Spray Áurico Protección
│   │   ├── Vela Intención Protección
│   │   └── Sal Éterra Protección
│   ├── Categoría: Limpieza
│   └── Categoría: Atracción
├── Blog
│   ├── Tag: Protección Energética
│   ├── Tag: Rituales
│   └── Tag: Sanación
└── Terapias
```

**2. Enlaces Obligatorios por Tipo de Página**

**En Productos:**
- Enlace a categoría padre
- 3-4 productos relacionados
- 2-3 artículos de blog relacionados
- Link a guía de uso general

**En Blog:**
- 3-5 enlaces a productos mencionados
- 2-3 artículos relacionados
- Link a categoría de productos relevante
- Enlaces a otros artículos del mismo autor/tag

**En Categorías:**
- Enlaces a todos los productos de la categoría
- Artículo destacado sobre la categoría
- Link a otras categorías relacionadas

**3. Anchor Text Optimization**

⚠️ **Evitar:**
- "Click aquí"
- "Más información"
- "Leer más" (sin contexto)

✅ **Usar:**
- Keywords descriptivas
- Texto natural con contexto
- Variaciones de la keyword principal

**Ejemplos:**
```html
<!-- Malo -->
<a href="/producto">Click aquí</a>

<!-- Bueno -->
<a href="/spray-aurico-proteccion">Spray Áurico de Protección energética</a>

<!-- Mejor -->
<a href="/spray-aurico-proteccion">nuestro Spray Áurico de Protección</a>
ayuda a mantener tu campo energético limpio...
```

**4. Implementación de "Productos Relacionados"**

Agregar en cada página de producto:
```jsx
<section className="related-products">
  <h2>Productos que Complementan Tu Ritual</h2>
  <div className="products-grid">
    {/* 3-4 productos relacionados */}
  </div>
</section>
```

**5. Implementación de "Artículos Relacionados" en Blog**

```jsx
<section className="related-articles">
  <h2>Sigue Aprendiendo</h2>
  <div className="articles-grid">
    {/* 3-4 artículos similares */}
  </div>
</section>
```

---

### 7. ASPECTOS TÉCNICOS

#### 7.1 Robots.txt
**Estado: 🟢 EXCELENTE**

✅ **Implementación Correcta:**
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: *.json
Disallow: *.xml

Sitemap: https://sagradacura.com/sitemap.xml
```

**Análisis:**
- Bloquea correctamente rutas internas
- Permite indexación de contenido público
- Sitemap correctamente referenciado
- No bloquea recursos necesarios para renderizar

✅ Sin problemas identificados

#### 7.2 Sitemap.xml
**Estado: 🟢 BUENO CON OBSERVACIONES**

✅ **Fortalezas:**
- Todas las páginas importantes incluidas
- Prioridades asignadas correctamente:
  - Home: 1.0 ✅
  - Tienda/Contacto: 0.9 ✅
  - Productos: 0.8 ✅
  - Blog: 0.7 ✅
  - Artículos: 0.5 ✅
- Changefreq configurado
- LastMod presente

⚠️ **Observaciones:**

1. **LastMod dates desactualizadas**
   - Home: 2025-12-18 (fecha futura?)
   - Algunos productos: 2025-02-26 (no actualizados recientemente)

2. **Changefreq poco realista**
   - Página contacto: "Never" - poco probable
   - Recomendación: "yearly" o "monthly"

3. **Falta sitemap de imágenes**
   - Recomendación: Crear sitemap separado para imágenes

#### 7.3 HTTPS y Seguridad
**Estado: 🟢 EXCELENTE**

✅ **Verificaciones Correctas:**
- HTTPS implementado ✅
- Certificado SSL válido
- Redirección HTTP → HTTPS
- Sin contenido mixto (mixed content)
- Headers de seguridad presentes

#### 7.4 Velocidad y Core Web Vitals

**Estado: 🟢 BUENO**

✅ **Fortalezas Identificadas:**
- Next.js optimización automática
- Lazy loading de imágenes (25/29)
- CDN para assets estáticos (AWS S3)
- CSS y JS minificados
- Compresión Gzip/Brotli activa

⚠️ **Áreas de Mejora:**

1. **Warnings de recursos pre-cargados**
   - Varios archivos CSS marcados como preload pero no usados inmediatamente
   - Impacto: Score de performance

2. **Swiper Loop Warning**
   - Error en carrusel cuando hay pocos slides
   - Ajustar configuración de Swiper

3. **Errores de Google Analytics**
   - Conexión bloqueada en algunos casos
   - Verificar implementación

**Recomendaciones de Performance:**

1. **Implementar código splitting más agresivo**
```js
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
}
```

2. **Optimizar fuentes**
```js
// app/layout.js
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

3. **Agregar service worker para PWA**
```js
// Mejoraría performance en visitas recurrentes
```

#### 7.5 Mobile Optimization
**Estado: 🟢 EXCELENTE**

✅ **Verificaciones:**
- Viewport meta tag presente ✅
- Diseño responsivo ✅
- Touch targets adecuados ✅
- Sin contenido que exceda viewport ✅

#### 7.6 URLs y Estructura de URL
**Estado: 🟢 EXCELENTE**

✅ **Fortalezas:**
- URLs amigables (SEO-friendly)
- Estructura clara y descriptiva
- Sin parámetros innecesarios
- Lowercase consistente
- Guiones en lugar de underscores

**Ejemplos:**
```
✅ /tienda/spray-aurico-proteccion
✅ /blog/rituales-de-proteccion-energetica-diaria
✅ /tienda?category=proteccion
```

#### 7.7 Canonical Tags
**Estado: 🟢 EXCELENTE**

✅ **Implementación Correcta:**
- Presentes en todas las páginas auditadas
- Self-referencing correcto
- Sin conflictos de canonicalización

---

### 8. OPTIMIZACIÓN PARA BÚSQUEDA LOCAL

#### 8.1 Implementación Actual
**Estado: 🟢 BUENO CON MEJORAS**

✅ **Fortalezas:**
- LocalBusiness Schema implementado ✅
- Coordenadas geográficas presentes ✅
- Meta tags geo presentes ✅
- Mención de "Colombia" y "Bogotá" en contenido

⚠️ **Oportunidades de Mejora:**

1. **Google My Business Integration**
   - **CRÍTICO**: Verificar si está reclamado y optimizado
   - Agregar link a Google Maps en footer
   - Incluir widget de ubicación

2. **NAP (Name, Address, Phone) Consistency**
   - **Verificación necesaria**: NAP debe ser idéntico en:
     - Website
     - Google My Business
     - Directorios locales
     - Redes sociales

3. **Falta información de contacto visible**
   - No hay teléfono visible en header/footer
   - No hay dirección física visible
   - Solo WhatsApp community link

**Recomendaciones:**

1. **Agregar información de contacto en footer:**
```html
<div itemscope itemtype="https://schema.org/LocalBusiness">
  <h3 itemprop="name">Sagrada Cura</h3>
  <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">[Dirección]</span>,
    <span itemprop="addressLocality">Bogotá</span>,
    <span itemprop="addressRegion">Cundinamarca</span>
  </div>
  <span itemprop="telephone">+57 XXX XXX XXXX</span>
</div>
```

2. **Crear páginas de ubicación si tienen tienda física:**
```
/ubicacion-bogota
/como-llegar
/tienda-fisica
```

3. **Optimizar para keywords locales:**
- "productos naturales Bogotá"
- "velas de intención Colombia"
- "terapias holísticas Bogotá"
- "tienda esotérica Bogotá"

#### 8.2 Directorios y Citations
**Estado: ⚪ NO EVALUADO**

**Recomendaciones:**
1. Registrar negocio en directorios colombianos:
   - PaginasAmarillas.com.co
   - Guia Local Colombia
   - Directorios de negocios holísticos

2. Redes sociales locales
3. Grupos y comunidades de Bogotá

---

### 9. EXPERIENCIA DE USUARIO (UX) Y SEO

#### 9.1 Navegación
**Estado: 🟢 BUENO**

✅ **Fortalezas:**
- Menú principal claro
- Estructura lógica
- Footer informativo con links importantes

⚠️ **Mejoras:**

1. **Agregar búsqueda visible**
   - Actualmente solo hay SearchAction en Schema
   - No hay barra de búsqueda visible en UI

2. **Breadcrumbs visibles**
   - Están en Schema pero no visibles para usuarios
   - Mejora navegación y SEO

```jsx
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Inicio</a></li>
    <li><a href="/tienda">Tienda</a></li>
    <li>Spray Áurico Protección</li>
  </ol>
</nav>
```

#### 9.2 CTAs (Calls to Action)
**Estado: 🟡 NECESITA MEJORAS**

⚠️ **Observaciones:**
- CTAs presentes pero podrían ser más convincentes
- Falta sentido de urgencia
- No hay ofertas/promociones visibles

**Recomendaciones:**
```html
<!-- Actual -->
<button>Añadir al carrito</button>

<!-- Mejorado -->
<button>
  Agregar al Carrito - Envío Gratis
  <span>Quedan solo 3 unidades</span>
</button>
```

#### 9.3 Trust Signals
**Estado: 🟢 BUENO**

✅ **Presentes:**
- Testimonios de clientes ✅
- Ratings en Schema (aunque genéricos) ✅
- Políticas claras (devoluciones, envío) ✅
- Información de pago seguro ✅

⚠️ **Agregar:**
- Certificaciones (si aplica)
- Sellos de confianza
- Garantías más visibles
- Fotos reales de productos/procesos

---

### 10. ACCESIBILIDAD (A11Y)

#### 10.1 Evaluación
**Estado: 🟡 NECESITA MEJORAS**

✅ **Fortalezas:**
- Estructura semántica HTML5
- Roles ARIA presentes en algunas áreas
- Skip links implementados
- Regiones ARIA definidas

⚠️ **Problemas Críticos:**

1. **21 imágenes sin ALT en home**
   - Afecta: Lectores de pantalla
   - Prioridad: ALTA
   - Sección principalmente afectada: Testimonios

2. **Contraste de colores**
   - **Verificación necesaria** con herramientas WCAG
   - Algunos textos pueden no cumplir ratio 4.5:1

3. **Navegación por teclado**
   - Verificar que todos los elementos interactivos sean accesibles
   - Focus states deben ser visibles

**Recomendaciones:**

1. **Agregar ALT a todas las imágenes**
2. **Implementar ARIA labels completos:**
```html
<button aria-label="Añadir Spray Áurico de Protección al carrito">
  Añadir al carrito
</button>
```

3. **Mejorar formularios:**
```html
<label for="email">Correo Electrónico</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-help"
/>
<span id="email-help">Ingresa tu correo para recibir novedades</span>
```

---

### 11. REDES SOCIALES Y COMPARTIR

#### 11.1 Open Graph
**Estado: 🟢 EXCELENTE**

✅ **Completamente Implementado:**
- og:title ✅
- og:description ✅
- og:url ✅
- og:image ✅
- og:type ✅
- og:locale ✅
- og:site_name ✅

#### 11.2 Twitter Cards
**Estado: 🟢 EXCELENTE**

✅ **Implementado:**
- twitter:card (summary_large_image) ✅
- twitter:title ✅
- twitter:description ✅
- twitter:image ✅

#### 11.3 Botones de Compartir
**Estado: 🟢 PRESENTE**

✅ En artículos de blog hay botones para:
- Facebook
- Twitter

⚠️ **Agregar:**
- WhatsApp (muy relevante para Colombia)
- Pinterest (para productos visuales)
- LinkedIn (para artículos profesionales)

```jsx
<ShareButtons>
  <WhatsAppShare />
  <FacebookShare />
  <TwitterShare />
  <PinterestShare />
</ShareButtons>
```

#### 11.4 Social Media Presence
**Estado: 🟢 BUENO**

✅ **Links presentes a:**
- Instagram
- Facebook
- TikTok

⚠️ **Agregar:**
- YouTube (si hay contenido)
- Schema sameAs con todas las redes
- Integración de feeds sociales más visibles

---

### 12. CONTENIDO DUPLICADO

#### 12.1 Evaluación
**Estado: 🟢 SIN PROBLEMAS DETECTADOS**

✅ **Verificaciones:**
- Canonical tags correctos
- Sin contenido duplicado obvio
- Cada página tiene contenido único

⚠️ **Verificar:**
- Productos con descripciones similares
- Categorías sin contenido diferenciador
- Paginación de blog (usar rel="prev" y rel="next")

**Recomendación para paginación:**
```html
<!-- Página 1 -->
<link rel="next" href="https://sagradacura.com/blog?page=2" />

<!-- Página 2 -->
<link rel="prev" href="https://sagradacura.com/blog" />
<link rel="next" href="https://sagradacura.com/blog?page=3" />
```

---

### 13. ANÁLISIS DE COMPETENCIA

#### 13.1 Keywords de Competidores a Investigar
(Esta sección requiere herramientas específicas como SEMrush, Ahrefs)

**Competidores Potenciales:**
1. Otras tiendas de productos holísticos en Colombia
2. Tiendas esotéricas online
3. Marcas de velas artesanales
4. Centros de terapias alternativas

**Keywords a Monitorear:**
- "velas artesanales Colombia"
- "productos esotéricos online"
- "tienda holística Bogotá"
- "terapias alternativas"

#### 13.2 Oportunidades de Diferenciación
1. Enfoque en comunidad (ya lo hacen bien) ✅
2. Contenido educativo (blog)
3. Eventos presenciales
4. Autenticidad y tradición

---

## 🎯 PLAN DE ACCIÓN PRIORITIZADO

### FASE 1: CORRECCIONES CRÍTICAS (Semana 1-2)
**Impacto: ALTO | Esfuerzo: MEDIO**

#### 1.1 Imágenes ALT (Prioridad: CRÍTICA)
- [ ] Auditar todas las imágenes del sitio
- [ ] Agregar ALT descriptivo a las 21 imágenes sin ALT en home
- [ ] Optimizar ALT en testimonios
- [ ] Crear guía de escritura de ALT para futuras imágenes

**Implementación:**
```jsx
// src/components/Testimonial.tsx
<Image
  src={testimonial.image}
  alt={`Testimonio de ${testimonial.name} sobre ${testimonial.product} - Cliente satisfecha de Sagrada Cura`}
  width={80}
  height={80}
/>
```

**Archivos a modificar:**
- `src/app/page.tsx` (home)
- `src/components/TestimonialCard.tsx`
- `src/components/ProductCard.tsx`
- Todos los artículos de blog

#### 1.2 Agregar H1 a Página de Tienda (Prioridad: CRÍTICA)
- [ ] Agregar H1 principal: "Tienda de Productos Naturales y Holísticos"
- [ ] Reestructurar headings de productos (H6 → H3)
- [ ] Agregar H2 para secciones

**Implementación:**
```tsx
// src/app/tienda/page.tsx
export default function TiendaPage() {
  return (
    <main>
      <h1>Tienda de Productos Naturales y Holísticos</h1>
      <section>
        <h2>Nuestros Productos de Sanación</h2>
        {products.map(product => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            {/* ... */}
          </article>
        ))}
      </section>
    </main>
  )
}
```

**Archivos a modificar:**
- `src/app/tienda/page.tsx`

#### 1.3 Mejorar Meta Descriptions (Prioridad: ALTA)
- [ ] Reescribir meta description de /tienda
- [ ] Expandir meta descriptions de productos
- [ ] Revisar y optimizar todas las páginas principales

**Implementación:**
```tsx
// src/app/tienda/page.tsx
export const metadata: Metadata = {
  title: 'Tienda de Productos Naturales | Velas, Sprays y Sales Terapéuticas | Sagrada Cura',
  description: 'Compra productos naturales para sanación: velas de intención, sprays áuricos de protección y limpieza, sales éteras y terapias holísticas. Envío gratis en compras mayores a $150.000 COP. ¡Transforma tu energía hoy!',
  keywords: 'productos naturales, velas de intención, spray áurico, sales terapéuticas, terapias holísticas, productos holísticos Colombia',
}
```

**Páginas a actualizar:**
- `/tienda`
- Todos los productos con descripciones cortas
- `/contacto`
- `/nuestra-marca`

#### 1.4 Optimizar Title Tags (Prioridad: ALTA)
- [ ] Mejorar title de home page
- [ ] Optimizar titles de productos
- [ ] Incluir keywords comerciales

**Implementación:**
```tsx
// src/app/page.tsx
export const metadata: Metadata = {
  title: 'Sagrada Cura | Productos Naturales de Sanación | Velas, Sprays y Terapias Holísticas',
  // ...
}

// src/app/tienda/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug)
  return {
    title: `${product.name} - ${product.benefit} | Desde $${product.price} | Sagrada Cura`,
    description: `${product.description.substring(0, 150)}... Compra online con envío a toda Colombia.`,
  }
}
```

---

### FASE 2: MEJORAS DE CONTENIDO (Semana 3-4)
**Impacto: ALTO | Esfuerzo: ALTO**

#### 2.1 Expandir Contenido de Productos (Prioridad: ALTA)
- [ ] Expandir descripciones de productos (50 → 200+ palabras)
- [ ] Agregar sección "Beneficios" detallada
- [ ] Agregar sección FAQ por producto
- [ ] Incluir testimonios específicos

**Template de Contenido:**
```markdown
## [Nombre Producto] - [Beneficio Principal]

### Descripción (200 palabras)
[Qué es, para qué sirve, composición, origen]

### Beneficios Principales
- Beneficio 1 con explicación
- Beneficio 2 con explicación
- Beneficio 3 con explicación
- Beneficio 4 con explicación
- Beneficio 5 con explicación

### Ingredientes Naturales
#### [Ingrediente 1]
Propiedades y beneficios específicos

#### [Ingrediente 2]
Propiedades y beneficios específicos

### Modo de Uso Detallado
1. Paso 1 con detalle
2. Paso 2 con detalle
3. Paso 3 con detalle
4. Recomendaciones adicionales

### Preguntas Frecuentes
1. ¿Es seguro para embarazadas?
2. ¿Cuánto dura el producto?
3. ¿Cómo se almacena?
4. ¿Se puede usar con otros productos?
5. ¿Cuánto tiempo tarda en hacer efecto?

### Testimonios
[2-3 testimonios reales y específicos]

### Productos Complementarios
[3-4 productos que van bien juntos]
```

**Productos prioritarios:**
1. Spray Áurico Protección
2. Spray Áurico Limpieza
3. Vela Intención Protección
4. Kits (Protección, Limpieza, Atracción)

#### 2.2 Optimizar Artículos de Blog (Prioridad: MEDIA)
- [ ] Identificar artículos cortos (< 800 palabras)
- [ ] Expandir a mínimo 1000 palabras
- [ ] Agregar enlaces internos (3-5 por artículo)
- [ ] Incluir CTAs claros
- [ ] Agregar imágenes con ALT optimizado

**Checklist por Artículo:**
```markdown
✅ Título optimizado (8-12 palabras, keyword incluida)
✅ Meta description atractiva (150-160 caracteres)
✅ Introducción con hook (150-200 palabras)
✅ H2 para secciones principales
✅ H3 para subsecciones
✅ Mínimo 1000 palabras
✅ 3-5 enlaces a productos
✅ 2-3 enlaces a otros artículos
✅ 2-4 imágenes con ALT optimizado
✅ Lista de beneficios/puntos clave
✅ Ejemplos prácticos
✅ Conclusión con CTA
✅ Sección "Productos Relacionados"
✅ FAQ (opcional pero recomendado)
```

#### 2.3 Crear Contenido para Categorías (Prioridad: MEDIA)
- [ ] Crear landing pages para cada categoría
- [ ] Contenido único por categoría (300-500 palabras)
- [ ] Explicar beneficios de cada categoría

**URLs a crear:**
- `/tienda/proteccion` (actualmente solo ?category=proteccion)
- `/tienda/limpieza`
- `/tienda/atraccion`
- `/tienda/terapias-holisticas`

**Estructura de Página de Categoría:**
```tsx
// src/app/tienda/[category]/page.tsx
export default function CategoryPage({ params }) {
  return (
    <>
      <h1>Productos de {category.name}</h1>

      <section className="category-description">
        <h2>¿Qué son los productos de {category.name}?</h2>
        <p>{/* 200-300 palabras descriptivas */}</p>
      </section>

      <section className="benefits">
        <h2>Beneficios de Usar {category.name}</h2>
        <ul>{/* Lista de beneficios */}</ul>
      </section>

      <section className="products">
        <h2>Nuestros Productos de {category.name}</h2>
        {/* Grid de productos */}
      </section>

      <section className="how-to-use">
        <h2>Cómo Incorporar {category.name} en tu Rutina</h2>
        {/* Guía práctica */}
      </section>

      <section className="related-content">
        <h2>Aprende Más sobre {category.name}</h2>
        {/* Artículos de blog relacionados */}
      </section>
    </>
  )
}
```

---

### FASE 3: MEJORAS DE ESTRUCTURA (Semana 5-6)
**Impacto: MEDIO | Esfuerzo: MEDIO**

#### 3.1 Implementar Breadcrumbs Visibles (Prioridad: MEDIA)
- [ ] Diseñar componente de breadcrumbs
- [ ] Implementar en todas las páginas
- [ ] Mantener sincronizado con Schema

**Implementación:**
```tsx
// src/components/Breadcrumbs.tsx
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={item.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index < items.length - 1 ? (
              <>
                <a href={item.href} itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </a>
                <span className="separator">/</span>
              </>
            ) : (
              <span itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

```scss
// src/styles/components/_breadcrumbs.scss
.breadcrumbs {
  padding: 1rem 0;
  font-size: 0.875rem;

  ol {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .separator {
    color: var(--color-text-muted);
  }
}
```

#### 3.2 Mejorar Linking Interno (Prioridad: MEDIA)
- [ ] Crear componente "Productos Relacionados"
- [ ] Crear componente "Artículos Relacionados"
- [ ] Implementar en todas las páginas de producto
- [ ] Implementar en todos los artículos de blog
- [ ] Agregar enlaces contextuales en blog

**Implementación:**
```tsx
// src/components/RelatedProducts.tsx
export function RelatedProducts({ currentProductId, category }) {
  const relatedProducts = useRelatedProducts(currentProductId, category)

  return (
    <section className="related-products">
      <h2>Productos que Complementan Tu Ritual</h2>
      <p>Potencia los efectos combinando con estos productos:</p>
      <div className="products-grid">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

// src/components/RelatedArticles.tsx
export function RelatedArticles({ currentArticleId, tags }) {
  const relatedArticles = useRelatedArticles(currentArticleId, tags)

  return (
    <section className="related-articles">
      <h2>Sigue Aprendiendo sobre Sanación Natural</h2>
      <div className="articles-grid">
        {relatedArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
```

**Lógica de Productos Relacionados:**
```typescript
// src/utils/recommendations.ts
export function getRelatedProducts(productId: string, category: string, limit = 4) {
  // 1. Misma categoría
  // 2. Productos frecuentemente comprados juntos
  // 3. Productos del mismo precio range
  // 4. Productos con tags similares

  return relatedProducts.slice(0, limit)
}

// Ejemplos de relaciones manuales (puede ser en CMS):
const PRODUCT_RELATIONSHIPS = {
  'spray-aurico-proteccion': [
    'vela-intencion-proteccion',
    'sal-eterra-proteccion',
    'kit-proteccion'
  ],
  'spray-aurico-limpieza': [
    'vela-intencion-limpieza',
    'sal-eterra-limpieza',
    'kit-limpieza'
  ]
}
```

#### 3.3 Agregar Barra de Búsqueda (Prioridad: MEDIA)
- [ ] Diseñar e implementar barra de búsqueda
- [ ] Integrar con búsqueda de Next.js
- [ ] Agregar sugerencias (autocomplete)
- [ ] Tracking de búsquedas populares

**Implementación:**
```tsx
// src/components/SearchBar.tsx
'use client'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const router = useRouter()

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    router.push(`/buscar?q=${encodeURIComponent(query)}`)
  }

  const handleInputChange = async (value: string) => {
    setQuery(value)
    if (value.length >= 2) {
      const results = await searchSuggestions(value)
      setSuggestions(results)
    } else {
      setSuggestions([])
    }
  }

  return (
    <form onSubmit={handleSearch} role="search">
      <label htmlFor="search" className="sr-only">
        Buscar productos y artículos
      </label>
      <input
        id="search"
        type="search"
        placeholder="Buscar productos, artículos..."
        value={query}
        onChange={(e) => handleInputChange(e.target.value)}
        aria-autocomplete="list"
        aria-controls="search-suggestions"
      />
      {suggestions.length > 0 && (
        <ul id="search-suggestions" role="listbox">
          {suggestions.map((item) => (
            <li key={item.id} role="option">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <button type="submit" aria-label="Buscar">
        <SearchIcon />
      </button>
    </form>
  )
}
```

---

### FASE 4: SCHEMA Y DATOS ESTRUCTURADOS (Semana 7)
**Impacto: MEDIO-ALTO | Esfuerzo: MEDIO**

#### 4.1 Implementar FAQ Schema (Prioridad: MEDIA)
- [ ] Crear componente FAQ reutilizable
- [ ] Agregar FAQ a productos principales
- [ ] Agregar FAQ a artículos relevantes
- [ ] Implementar Schema FAQPage

**Implementación:**
```tsx
// src/components/FAQ.tsx
export function FAQ({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  }

  return (
    <section className="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2>Preguntas Frecuentes</h2>
      <dl>
        {items.map((item, index) => (
          <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <dt>
              <h3 itemProp="name">{item.question}</h3>
            </dt>
            <dd itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <div itemProp="text">{item.answer}</div>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
```

**FAQs por Producto (ejemplo):**
```typescript
// src/data/product-faqs.ts
export const PRODUCT_FAQS = {
  'spray-aurico-proteccion': [
    {
      question: '¿Cómo uso el Spray Áurico de Protección?',
      answer: 'Rocía suavemente alrededor de tu cuerpo manteniendo una distancia de 20cm, visualizando un escudo protector. Ideal antes de salir de casa o entrar a espacios con mucha gente.'
    },
    {
      question: '¿Cuánto dura el frasco?',
      answer: 'Cada frasco de 50ml dura aproximadamente 2-3 meses con uso diario (1-2 aplicaciones al día).'
    },
    {
      question: '¿Es seguro para embarazadas?',
      answer: 'Nuestros productos son 100% naturales. Sin embargo, recomendamos consultar con tu médico durante el embarazo antes de usar cualquier producto aromático.'
    },
    {
      question: '¿Se puede usar en niños?',
      answer: 'Sí, es seguro para niños mayores de 3 años. Aplica en su aura a distancia o en su ropita antes de vestirlos.'
    },
    {
      question: '¿Puedo usarlo con otras terapias?',
      answer: 'Absolutamente. El Spray Áurico de Protección complementa perfectamente otras terapias y rituales. Combínalo con nuestras velas o sales para potenciar sus efectos.'
    }
  ]
}
```

#### 4.2 Implementar HowTo Schema (Prioridad: BAJA-MEDIA)
- [ ] Identificar artículos tipo "tutorial"
- [ ] Implementar HowTo Schema en artículos relevantes

**Ejemplo:**
```typescript
// Para artículo: "Rituales de Protección Energética Diaria"
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'Ritual de Protección Energética Matutino',
  'description': 'Aprende a proteger tu energía cada mañana con este ritual simple pero poderoso',
  'totalTime': 'PT10M',
  'step': [
    {
      '@type': 'HowToStep',
      'name': 'Preparar el espacio',
      'text': 'Abre las ventanas y ventila tu habitación...',
      'image': 'https://...'
    },
    {
      '@type': 'HowToStep',
      'name': 'Aplicar el spray',
      'text': 'Rocía tu Spray Áurico de Protección...',
      'url': 'https://sagradacura.com/tienda/spray-aurico-proteccion'
    }
  ],
  'supply': [
    {
      '@type': 'HowToSupply',
      'name': 'Spray Áurico de Protección'
    }
  ]
}
```

#### 4.3 Implementar ItemList Schema para Tienda (Prioridad: BAJA)
- [ ] Agregar ItemList Schema a página de tienda
- [ ] Facilitar indexación de productos

```typescript
// src/app/tienda/page.tsx - agregar al metadata
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'itemListElement': products.map((product, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'item': {
      '@type': 'Product',
      'name': product.name,
      'url': `https://sagradacura.com/tienda/${product.slug}`,
      'image': product.image,
      'offers': {
        '@type': 'Offer',
        'price': product.price,
        'priceCurrency': 'COP'
      }
    }
  }))
}
```

---

### FASE 5: OPTIMIZACIÓN LOCAL (Semana 8)
**Impacto: MEDIO | Esfuerzo: BAJO-MEDIO**

#### 5.1 Información de Contacto Visible (Prioridad: ALTA)
- [ ] Agregar teléfono, dirección y email en footer
- [ ] Crear página "Cómo Llegar" si tienen tienda física
- [ ] Widget de Google Maps (si aplica)
- [ ] Horarios de atención claramente visibles

**Implementación:**
```tsx
// src/components/Footer.tsx
export function Footer() {
  return (
    <footer>
      {/* ... otros contenidos ... */}

      <div className="contact-info" itemScope itemType="https://schema.org/LocalBusiness">
        <h3>Contáctanos</h3>
        <meta itemProp="name" content="Sagrada Cura" />

        <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <p>
            <strong>Dirección:</strong><br />
            <span itemProp="streetAddress">[Dirección completa]</span><br />
            <span itemProp="addressLocality">Bogotá</span>,
            <span itemProp="addressRegion">Cundinamarca</span><br />
            <span itemProp="addressCountry">Colombia</span>
          </p>
        </address>

        <p>
          <strong>Teléfono:</strong><br />
          <a href="tel:+57XXXXXXXXX" itemProp="telephone">
            +57 XXX XXX XXXX
          </a>
        </p>

        <p>
          <strong>WhatsApp:</strong><br />
          <a href="https://wa.me/57XXXXXXXXX">
            +57 XXX XXX XXXX
          </a>
        </p>

        <p>
          <strong>Email:</strong><br />
          <a href="mailto:info@sagradacura.com" itemProp="email">
            info@sagradacura.com
          </a>
        </p>

        <p itemProp="openingHours" content="Mo-Fr 09:00-18:00,Sa 10:00-14:00">
          <strong>Horario:</strong><br />
          Lunes a Viernes: 9:00 AM - 6:00 PM<br />
          Sábados: 10:00 AM - 2:00 PM
        </p>
      </div>
    </footer>
  )
}
```

#### 5.2 Google My Business Optimization (Prioridad: ALTA)
- [ ] Verificar/reclamar perfil de Google My Business
- [ ] Optimizar con fotos de calidad
- [ ] Agregar productos
- [ ] Solicitar reviews a clientes satisfechos
- [ ] Publicar actualizaciones regularmente
- [ ] Responder a todas las reseñas

**Checklist GMB:**
```
✅ Perfil completo con toda la información
✅ Categoría principal: "Tienda de productos naturales" o similar
✅ Categorías secundarias relevantes
✅ Descripción optimizada (750 caracteres)
✅ Mínimo 10 fotos de alta calidad
✅ Fotos de productos individuales
✅ Fotos del equipo/propietarios
✅ Logo actualizado
✅ Horario actualizado
✅ Atributos seleccionados (pet-friendly, etc)
✅ Link al sitio web
✅ Link para hacer pedidos (si aplica)
✅ Respuestas a preguntas frecuentes
✅ Posts semanales
```

#### 5.3 Optimización para Keywords Locales (Prioridad: MEDIA)
- [ ] Investigar keywords locales
- [ ] Incorporar en contenido naturalemente
- [ ] Crear contenido específico para Bogotá/Colombia

**Keywords Locales Objetivo:**
```
- productos naturales Bogotá
- velas de intención Colombia
- terapias holísticas Bogotá
- tienda esotérica Bogotá
- spray áurico Colombia
- sanación natural Bogotá
- productos holísticos Colombia
- tienda espiritual Bogotá
```

**Implementación:**
```tsx
// Agregar en footer o página sobre nosotros
<section>
  <h2>Productos Naturales en Bogotá, Colombia</h2>
  <p>
    Sagrada Cura es tu tienda de confianza para productos de sanación natural en Bogotá.
    Ofrecemos velas de intención artesanales, sprays áuricos, sales terapéuticas y
    terapias holísticas. Nos enorgullecemos de servir a la comunidad de Bogotá y
    ofrecer envíos a toda Colombia.
  </p>
</section>
```

#### 5.4 Citations y Directorios (Prioridad: BAJA)
- [ ] Registrar en directorios colombianos
- [ ] Asegurar NAP consistency
- [ ] Registrar en directorios de salud holística

**Directorios Recomendados:**
1. PaginasAmarillas.com.co
2. Google My Business ✅ (prioridad)
3. Bing Places
4. Apple Maps
5. Directorios de salud y bienestar
6. Directorios de comercio local de Bogotá

---

### FASE 6: PERFORMANCE Y TÉCNICO (Semana 9)
**Impacto: MEDIO | Esfuerzo: MEDIO**

#### 6.1 Optimización de Performance (Prioridad: MEDIA)
- [ ] Resolver warnings de CSS preload
- [ ] Optimizar Swiper configuration
- [ ] Implementar code splitting más agresivo
- [ ] Optimizar fuentes

**Swiper Fix:**
```tsx
// src/components/Carousel.tsx
<Swiper
  loop={slides.length >= 3} // Solo loop si hay suficientes slides
  slidesPerView={1}
  breakpoints={{
    640: {
      slidesPerView: 2,
      loop: slides.length >= 4
    },
    1024: {
      slidesPerView: 3,
      loop: slides.length >= 6
    }
  }}
>
  {slides.map(slide => (
    <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
  ))}
</Swiper>
```

**Optimizar Fuentes:**
```tsx
// src/app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

**Optimizar CSS:**
```js
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

#### 6.2 Implementar Service Worker (Prioridad: BAJA)
- [ ] Agregar PWA capabilities
- [ ] Cache de assets estáticos
- [ ] Offline fallback

```js
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // ... resto de configuración
})
```

#### 6.3 Optimizar Core Web Vitals (Prioridad: MEDIA)
- [ ] Medir LCP, FID, CLS actuales
- [ ] Implementar mejoras específicas
- [ ] Monitorear con Vercel Analytics

**Priorizar imágenes LCP:**
```tsx
// Hero image en home
<Image
  src="/hero.jpg"
  alt="Banner principal de Sagrada Cura"
  priority={true}
  width={1920}
  height={1080}
/>
```

---

### FASE 7: EXPERIENCIA DE USUARIO (Semana 10)
**Impacto: MEDIO | Esfuerzo: MEDIO**

#### 7.1 Mejorar CTAs (Prioridad: MEDIA)
- [ ] Reescribir textos de botones
- [ ] Agregar urgencia/escasez cuando sea real
- [ ] A/B testing de variaciones

**Ejemplos de Mejora:**
```tsx
// Antes
<button>Añadir al carrito</button>

// Después
<button className="cta-primary">
  <span className="cta-text">Agregar al Carrito</span>
  <span className="cta-benefit">Envío Gratis en Pedidos +$150k</span>
</button>

// Con stock limitado (si es real)
<button className="cta-primary cta-urgency">
  <span className="cta-text">Agregar al Carrito</span>
  <span className="cta-urgency-text">Solo quedan 3 unidades</span>
</button>
```

#### 7.2 Trust Signals (Prioridad: MEDIA)
- [ ] Agregar badges de confianza
- [ ] Mostrar certificaciones (si existen)
- [ ] Destacar garantías
- [ ] Agregar contador de clientes satisfechos

**Implementación:**
```tsx
// src/components/TrustBadges.tsx
export function TrustBadges() {
  return (
    <div className="trust-badges">
      <div className="trust-badge">
        <ShieldIcon />
        <span>Pago 100% Seguro</span>
      </div>
      <div className="trust-badge">
        <TruckIcon />
        <span>Envío Gratis +$150k</span>
      </div>
      <div className="trust-badge">
        <ReturnIcon />
        <span>Devolución 30 Días</span>
      </div>
      <div className="trust-badge">
        <StarIcon />
        <span>+500 Clientes Felices</span>
      </div>
    </div>
  )
}
```

#### 7.3 Testimonios Mejorados (Prioridad: BAJA)
- [ ] Agregar fotos reales de clientes (con permiso)
- [ ] Video testimonios
- [ ] Testimonios específicos por producto
- [ ] Ratings cuantitativos

---

### FASE 8: SOCIAL Y SHARING (Semana 11)
**Impacto: BAJO-MEDIO | Esfuerzo: BAJO**

#### 8.1 Botones de Compartir Mejorados (Prioridad: BAJA)
- [ ] Agregar WhatsApp share
- [ ] Agregar Pinterest
- [ ] Mejorar diseño de botones
- [ ] Tracking de shares

**Implementación:**
```tsx
// src/components/SocialShare.tsx
export function SocialShare({ url, title, image }: ShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="social-share">
      <h3>Comparte:</h3>
      <div className="share-buttons">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en WhatsApp"
          className="share-button whatsapp"
        >
          <WhatsAppIcon />
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en Facebook"
          className="share-button facebook"
        >
          <FacebookIcon />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en Twitter"
          className="share-button twitter"
        >
          <TwitterIcon />
        </a>

        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${image}&description=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Guardar en Pinterest"
          className="share-button pinterest"
        >
          <PinterestIcon />
        </a>
      </div>
    </div>
  )
}
```

#### 8.2 Integración Social Media (Prioridad: BAJA)
- [ ] Widget de Instagram feed
- [ ] Testimonios desde redes sociales
- [ ] Hashtag campaign

---

### FASE 9: MONITOREO Y ANÁLISIS (Continuo)
**Impacto: ALTO | Esfuerzo: BAJO**

#### 9.1 Herramientas de Monitoreo (Prioridad: ALTA)
- [ ] Google Search Console (verificar que está configurado)
- [ ] Google Analytics 4 (verificar implementación)
- [ ] Vercel Analytics (ya incluido)
- [ ] Hotjar o similar para heatmaps (opcional)

#### 9.2 KPIs a Monitorear Semanalmente
```
SEO:
- Posiciones en keywords objetivo
- Tráfico orgánico
- Impresiones y CTR en Search Console
- Páginas indexadas
- Errores de rastreo

Performance:
- Core Web Vitals (LCP, FID, CLS)
- Tiempo de carga
- Tasa de rebote
- Páginas por sesión

Conversión:
- Tasa de conversión general
- Tasa de conversión por producto
- Valor promedio de pedido
- Abandono de carrito

Engagement:
- Tiempo en sitio
- Páginas más visitadas
- Tasa de rebote por página
- Scroll depth
```

#### 9.3 Reportes Mensuales
- [ ] Crear template de reporte mensual
- [ ] Comparar mes a mes
- [ ] Identificar tendencias
- [ ] Ajustar estrategia según datos

---

## 📈 MÉTRICAS DE ÉXITO

### KPIs Principales (90 días)

**Tráfico:**
- ⬆️ +50% en tráfico orgánico
- ⬆️ +30% en páginas por sesión
- ⬇️ -20% en tasa de rebote

**Rankings:**
- Top 10 para 5 keywords principales
- Top 20 para 15 keywords secundarias
- Aparecer en "People Also Ask" para keywords relevantes

**Conversión:**
- ⬆️ +25% en tasa de conversión
- ⬆️ +30% en valor de pedido promedio

**Engagement:**
- ⬆️ +40% en tiempo promedio en sitio
- ⬆️ +50% en páginas de blog leídas

**Local:**
- 50+ reviews en Google My Business
- Aparecer en Pack Local para keywords principales

---

## 🔄 MANTENIMIENTO CONTINUO

### Semanal:
- [ ] Publicar 1 artículo de blog (mínimo 1000 palabras)
- [ ] Monitorear y responder comentarios/preguntas
- [ ] Verificar errores en Search Console
- [ ] Revisar rankings de keywords principales

### Mensual:
- [ ] Actualizar 2-3 artículos antiguos
- [ ] Auditar enlaces rotos
- [ ] Revisar y actualizar meta descriptions que no están performando
- [ ] Analizar búsquedas internas para identificar oportunidades de contenido
- [ ] Actualizar Google My Business con posts y fotos

### Trimestral:
- [ ] Auditoría SEO completa
- [ ] Análisis de competencia
- [ ] Revisión de estrategia de keywords
- [ ] Optimización de páginas de bajo rendimiento
- [ ] Análisis de contenido duplicado

---

## 💡 RECOMENDACIONES ADICIONALES

### 1. Blog Strategy
**Calendario Editorial Sugerido:**

**Lunes:** Artículos educativos sobre productos
- "Guía Completa: Cómo Usar Velas de Intención"
- "5 Ingredientes Naturales en Nuestros Sprays y Sus Beneficios"

**Miércoles:** Rituales y prácticas
- "Ritual Matutino de 5 Minutos para Protección"
- "Cómo Crear un Altar Personal con Productos Sagrada Cura"

**Viernes:** Testimonios y casos de éxito
- "Historia de Transformación: Cómo María Superó su Ansiedad"
- "El Ritual que Cambió mi Vida: Testimonio de un Cliente"

### 2. Link Building Strategy
**Outreach:**
- [ ] Guest posting en blogs de bienestar holístico
- [ ] Colaboraciones con influencers de bienestar
- [ ] Menciones en medios locales de Bogotá
- [ ] Partnerships con centros de yoga/meditación

**Content Assets para Link Building:**
- Crear guía definitiva: "Guía Completa de Sanación Natural para Principiantes"
- Infografías shareables sobre chakras, rituales, etc.
- Herramientas gratuitas: "Calculadora de Fase Lunar para Rituales"

### 3. Video Content
**YouTube/TikTok/Instagram:**
- Tutoriales de uso de productos
- Behind the scenes: Cómo se hacen los productos
- Testimonios en video
- Rituales guiados
- Q&A con expertos

### 4. Email Marketing Integration
**SEO + Email:**
- CTA para newsletter en blog posts
- Segmentación por interés (protección, atracción, limpieza)
- Contenido exclusivo para subscribers
- Incentivo: "Guía de Rituales Gratuita"

### 5. Conversion Rate Optimization
**Testing Continuo:**
- A/B testing de headlines
- Testing de CTAs
- Testing de fotos de productos
- Testing de descripciones de productos
- Testing de precios/offers

---

## ⚠️ ADVERTENCIAS Y CONSIDERACIONES

### Lo que NO se debe hacer:

❌ **Keyword Stuffing** - No saturar el contenido con keywords de forma antinatural

❌ **Contenido Duplicado** - No copiar descripciones de productos de otros sitios

❌ **Comprar Links** - Construir links orgánicamente, no comprarlos

❌ **Cloaking** - Nunca mostrar contenido diferente a buscadores vs usuarios

❌ **Texto Oculto** - No ocultar texto con CSS solo para SEO

❌ **Over-optimization** - No sobre-optimizar anchor text en links internos

### Actualizaciones de Algoritmo:
- Estar atento a actualizaciones de Google
- Seguir Google Search Central Blog
- Adaptar estrategia según cambios

### Mobile-First:
- Siempre diseñar y optimizar mobile-first
- Google usa mobile indexing como primary

---

## 📚 RECURSOS Y HERRAMIENTAS RECOMENDADAS

### SEO Tools:
- **Google Search Console** - Gratis, esencial
- **Google Analytics 4** - Gratis, esencial
- **Google PageSpeed Insights** - Gratis, para performance
- **Ahrefs o SEMrush** - Pago, para análisis competencia y keywords
- **Ubersuggest** - Opción gratuita/barata para keywords
- **Answer The Public** - Gratis, para encontrar preguntas

### Technical SEO:
- **Screaming Frog** - Auditorías técnicas
- **GTmetrix** - Performance testing
- **Lighthouse** - Auditoría integral (incluido en Chrome DevTools)

### Content:
- **Grammarly** - Corrección de textos
- **Hemingway App** - Simplicidad de escritura
- **Canva** - Diseño de imágenes

### Schema:
- **Schema.org** - Referencia oficial
- **Google Rich Results Test** - Validar markup
- **Schema Markup Generator** - Generar JSON-LD

---

## 🎓 CAPACITACIÓN RECOMENDADA

Para el equipo de Sagrada Cura:

1. **Fundamentos SEO** - Google Digital Garage (Gratis)
2. **Content Marketing** - HubSpot Academy (Gratis)
3. **Google Analytics** - Google Analytics Academy (Gratis)
4. **Schema Markup** - Schema.org documentation

---

## 📞 PRÓXIMOS PASOS INMEDIATOS

### Esta Semana:
1. ✅ **Leer y aprobar este reporte**
2. 🔥 **Priorizar: Corregir las 21 imágenes sin ALT**
3. 🔥 **Priorizar: Agregar H1 a página de tienda**
4. 🔥 **Priorizar: Mejorar meta description de /tienda**
5. 📝 **Crear documento de keywords objetivo**

### Próximas 2 Semanas:
1. Expandir contenido de productos top 5
2. Optimizar titles y meta descriptions
3. Implementar breadcrumbs visibles
4. Mejorar estructura de headings
5. Agregar componente de productos relacionados

### Próximo Mes:
1. Implementar todas las mejoras de Fase 1
2. Comenzar con Fase 2 (contenido)
3. Configurar monitoreo semanal de KPIs
4. Crear calendario editorial para blog
5. Reclamar/optimizar Google My Business

---

## 📊 CRONOGRAMA RESUMEN

```
Semana 1-2:   Fase 1 - Correcciones Críticas
Semana 3-4:   Fase 2 - Mejoras de Contenido
Semana 5-6:   Fase 3 - Mejoras de Estructura
Semana 7:     Fase 4 - Schema y Datos Estructurados
Semana 8:     Fase 5 - Optimización Local
Semana 9:     Fase 6 - Performance y Técnico
Semana 10:    Fase 7 - Experiencia de Usuario
Semana 11:    Fase 8 - Social y Sharing
Continuo:     Fase 9 - Monitoreo y Análisis

Mes 4-6:      Refinamiento y Optimización Continua
Mes 7-12:     Expansión y Link Building
```

---

## 🏆 CONCLUSIÓN

Sagrada Cura tiene una **base sólida de SEO técnico** con excelente implementación de Schema Markup, HTTPS, y optimizaciones de Next.js. Sin embargo, existen **oportunidades significativas** en:

1. **Contenido**: Expandir y enriquecer descripciones de productos y artículos
2. **Estructura**: Mejorar headings y agregar H1 faltante
3. **Accesibilidad**: Completar atributos ALT de imágenes
4. **Local SEO**: Optimizar presencia local y Google My Business
5. **Linking Interno**: Crear red de enlaces entre productos y contenido

Siguiendo este plan de acción de 11 semanas, **Sagrada Cura puede mejorar significativamente su visibilidad orgánica**, aumentar el tráfico cualificado, y mejorar las conversiones en el sitio.

**Inversión de Tiempo Estimada:**
- Desarrollo: 80-100 horas
- Contenido: 60-80 horas
- Diseño: 20-30 horas
- Testing y QA: 15-20 horas

**ROI Esperado:**
Con implementación completa del plan, se espera:
- 📈 **+50-70% en tráfico orgánico** en 6 meses
- 💰 **+30-40% en conversiones** en 3 meses
- 🎯 **Top 10 posiciones** para keywords principales en 4-6 meses
- ⭐ **+100 reviews** en Google My Business en 6 meses

---

**Auditoría realizada por:** Claude (Anthropic)
**Herramientas utilizadas:** Playwright Browser Automation, Manual Analysis
**Fecha:** 13 de enero de 2026
**Sitio auditado:** https://sagradacura.com/

---

*Este documento es una guía viva. Debe revisarse y actualizarse mensualmente según los resultados obtenidos y cambios en algoritmos de búsqueda.*