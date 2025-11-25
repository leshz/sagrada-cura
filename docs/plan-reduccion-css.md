# Plan de Reducción de CSS/SCSS - Sagrada Cura

## 📊 Estado Actual del Proyecto

### Resumen Ejecutivo
- **Total de líneas CSS/SCSS en src/**: 13,634 líneas
- **Reglas CSS cargadas en página principal**: 4,880 reglas
- **Archivos SCSS**: 25 archivos
- **Fecha de análisis**: 25 de noviembre de 2025

### Análisis de Archivos por Tamaño

| Archivo | Líneas | Prioridad | Observaciones |
|---------|--------|-----------|---------------|
| `src/styles/global.scss` | 5,690 | 🔴 ALTA | Archivo crítico - posible código duplicado o no utilizado |
| `src/components/layout/styles/header.scss` | 1,790 | 🔴 ALTA | Header muy grande - revisar componentes |
| `src/app/tienda/[slug]/page.scss` | 1,196 | 🟡 MEDIA | Página de producto individual |
| `src/app/tienda/checkout/page.scss` | 646 | 🟡 MEDIA | Checkout - revisar componentes reutilizables |
| `src/app/blog/[slug]/page.scss` | 526 | 🟡 MEDIA | Post individual |
| `src/app/tienda/carrito-de-compras/page.scss` | 399 | 🟢 BAJA | Tamaño razonable |
| `src/components/product-card/styles/card.scss` | 362 | 🟢 BAJA | Componente reutilizable |
| Otros archivos (18) | 4,025 | 🟢 BAJA | Archivos pequeños y medianos |

### Problemas Detectados

#### 🚨 Críticos
1. **Referencias a CSS inexistente**
   - `http://localhost:3000/assets/css/style.css` - Error MIME type
   - `http://localhost:3000/assets/css/bootstrap.min.css` - Error MIME type
   - Estos archivos no existen y generan errores 404 en consola

2. **Bootstrap completo cargado**
   - Se carga Bootstrap completo (~10,000 líneas)
   - Probablemente solo se usa el 20-30% de las utilidades

3. **global.scss desproporcionado**
   - 5,690 líneas en un solo archivo
   - Representa el 42% del CSS total del proyecto
   - Alto riesgo de código duplicado y no utilizado

#### ⚠️ Importantes
4. **Mixins redundantes**
   - El archivo `src/styles/mixins.scss` tiene solo 112 líneas
   - Algunos mixins podrían ser redundantes con utilidades de Bootstrap

5. **CSS específico de página muy grande**
   - Las páginas de tienda y blog tienen archivos SCSS muy grandes
   - Posible duplicación de estilos entre páginas

## 🎯 Objetivos del Proyecto

1. **Reducir el tamaño total del CSS en al menos 40%**
2. **Eliminar código CSS no utilizado**
3. **Migrar a un enfoque más modular y mantenible**
4. **Mejorar el rendimiento de carga de la aplicación**
5. **Reducir el bundle size del CSS**

## 📋 Plan de Acción

### Fase 1: Auditoría y Limpieza Inicial (Semana 1-2)

#### ✅ Tarea 1.1: Eliminar referencias a CSS inexistente
- **Archivos a revisar**: Layout principal y cualquier archivo que importe estos CSS
- **Acción**: Buscar y eliminar imports de:
  - `/assets/css/style.css`
  - `/assets/css/bootstrap.min.css`
- **Estimado**: 1 hora

#### ✅ Tarea 1.2: Analizar global.scss
- **Acción**: Desglosar el archivo en secciones lógicas:
  - Variables y configuración
  - Estilos base
  - Utilidades
  - Componentes
  - Layouts
- **Crear reporte**: Identificar código duplicado y no utilizado
- **Estimado**: 4 horas

#### ✅ Tarea 1.3: Instalar herramientas de análisis CSS
- **Herramientas recomendadas**:
  - PurgeCSS para eliminar CSS no utilizado
  - postcss-purgecss para integración con Next.js
- **Acción**:
  ```bash
  npm install -D @fullhuman/postcss-purgecss
  ```
- **Estimado**: 2 horas

### Fase 2: Optimización de Bootstrap (Semana 2-3)

#### ✅ Tarea 2.1: Analizar uso de Bootstrap
- **Acción**: Crear lista de componentes y utilidades de Bootstrap realmente utilizados
- **Método**:
  - Buscar clases Bootstrap en todos los archivos TSX/JSX
  - Usar DevTools para ver estilos aplicados
- **Estimado**: 3 horas

#### ✅ Tarea 2.2: Implementar Bootstrap personalizado
- **Opción A**: Crear archivo SCSS que importe solo módulos necesarios de Bootstrap
  ```scss
  // bootstrap-custom.scss
  @import "bootstrap/scss/functions";
  @import "bootstrap/scss/variables";
  @import "bootstrap/scss/mixins";
  @import "bootstrap/scss/grid";
  @import "bootstrap/scss/utilities";
  // ... solo lo necesario
  ```
- **Opción B**: Migrar a Tailwind CSS (más drástico)
- **Recomendación**: Opción A (menos disruptivo)
- **Estimado**: 4 horas

#### ✅ Tarea 2.3: Configurar PurgeCSS para Bootstrap
- **Acción**: Configurar PurgeCSS para eliminar clases de Bootstrap no utilizadas
- **Archivo**: `postcss.config.js`
- **Estimado**: 2 horas

### Fase 3: Refactorización de global.scss (Semana 3-4)

#### ✅ Tarea 3.1: Dividir global.scss
- **Estructura propuesta**:
  ```
  src/styles/
  ├── _variables.scss       (variables del proyecto)
  ├── _base.scss            (resets y estilos base)
  ├── _typography.scss      (tipografía)
  ├── _utilities.scss       (utilidades propias)
  ├── _animations.scss      (animaciones)
  └── main.scss             (archivo principal que importa todo)
  ```
- **Estimado**: 6 horas

#### ✅ Tarea 3.2: Eliminar código duplicado
- **Acción**:
  - Buscar selectores duplicados
  - Consolidar estilos repetidos
  - Usar variables SCSS para valores repetidos
- **Herramienta**: csscomb o stylelint
- **Estimado**: 4 horas

#### ✅ Tarea 3.3: Convertir estilos a utilidades cuando sea posible
- **Acción**: Identificar patrones que pueden ser utilidades reutilizables
- **Estimado**: 3 horas

### Fase 4: Optimización de Componentes (Semana 4-5)

#### ✅ Tarea 4.1: Refactorizar header.scss (1,790 líneas)
- **Análisis**: Identificar por qué el header tiene tantas líneas
- **Acciones**:
  - Extraer componentes reutilizables
  - Eliminar estilos específicos de viewport (usar mixins de Bootstrap)
  - Consolidar media queries
- **Estimado**: 5 horas

#### ✅ Tarea 4.2: Crear componentes SCSS reutilizables
- **Componentes candidatos**:
  - Botones
  - Cards
  - Forms
  - Modals
  - Inputs
- **Ubicación**: `src/styles/components/`
- **Estimado**: 4 horas

#### ✅ Tarea 4.3: Optimizar páginas de tienda
- **Archivos**:
  - `tienda/[slug]/page.scss` (1,196 líneas)
  - `tienda/checkout/page.scss` (646 líneas)
  - `tienda/carrito-de-compras/page.scss` (399 líneas)
- **Acción**: Extraer estilos comunes a componentes compartidos
- **Estimado**: 6 horas

### Fase 5: Configuración y Automatización (Semana 5-6)

#### ✅ Tarea 5.1: Configurar PurgeCSS en producción
- **Archivo**: `next.config.js` o `postcss.config.js`
- **Configuración**:
  ```js
  module.exports = {
    plugins: {
      '@fullhuman/postcss-purgecss': {
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './src/app/**/*.{js,jsx,ts,tsx}',
        ],
        safelist: {
          standard: [/^swiper/, /^bi-/], // Clases dinámicas
        }
      }
    }
  }
  ```
- **Estimado**: 3 horas

#### ✅ Tarea 5.2: Configurar análisis de bundle
- **Herramienta**: `@next/bundle-analyzer`
- **Acción**:
  ```bash
  npm install -D @next/bundle-analyzer
  ```
- **Configurar script**: `"analyze": "ANALYZE=true next build"`
- **Estimado**: 1 hora

#### ✅ Tarea 5.3: Crear documentación de estilos
- **Archivo**: `docs/guia-estilos.md`
- **Contenido**:
  - Convenciones de nomenclatura
  - Estructura de archivos
  - Componentes reutilizables
  - Variables disponibles
- **Estimado**: 2 horas

### Fase 6: Testing y Validación (Semana 6)

#### ✅ Tarea 6.1: Testing visual
- **Acción**: Revisar todas las páginas manualmente
- **Páginas críticas**:
  - / (Home)
  - /tienda
  - /tienda/[producto]
  - /tienda/checkout
  - /tienda/carrito-de-compras
  - /blog
  - /blog/[slug]
  - /contacto
  - /comunidad
  - /nuestra-marca
- **Estimado**: 4 horas

#### ✅ Tarea 6.2: Medir mejoras
- **Métricas**:
  - Tamaño del bundle CSS (antes vs después)
  - Tiempo de carga (Lighthouse)
  - Performance score
  - Número de líneas de código
- **Herramientas**: Lighthouse, WebPageTest
- **Estimado**: 2 horas

#### ✅ Tarea 6.3: Ajustes finales
- **Acción**: Corregir cualquier problema visual encontrado
- **Estimado**: 3 horas

## 📈 Métricas de Éxito

### Antes (Baseline)
- ✅ Total líneas CSS/SCSS: 13,634
- ✅ Reglas CSS cargadas: 4,880
- ✅ Archivos SCSS: 25
- 🔲 Bundle size CSS: TBD (medir con bundle analyzer)
- 🔲 Lighthouse Performance: TBD

### Después (Objetivo)
- 🎯 Total líneas CSS/SCSS: <8,000 (reducción del 40%)
- 🎯 Reglas CSS cargadas: <3,000 (reducción del 40%)
- 🎯 Archivos SCSS: ~30-35 (más modulares pero mejor organizados)
- 🎯 Bundle size CSS: Reducción del 50%
- 🎯 Lighthouse Performance: >90

## 🔧 Herramientas Necesarias

### Análisis
- [ ] @fullhuman/postcss-purgecss
- [ ] @next/bundle-analyzer
- [ ] Chrome DevTools Coverage

### Desarrollo
- [ ] stylelint (linting de CSS)
- [ ] prettier (formateo)
- [ ] csscomb (ordenamiento de propiedades)

### Testing
- [ ] Lighthouse CI
- [ ] Percy o Chromatic (visual regression testing) - opcional

## 📝 Comandos de Instalación

```bash
# Análisis y optimización
npm install -D @fullhuman/postcss-purgecss
npm install -D @next/bundle-analyzer

# Linting y formateo
npm install -D stylelint stylelint-config-standard-scss
npm install -D stylelint-config-prettier

# Análisis de bundle
npm install -D webpack-bundle-analyzer
```

## 🚨 Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Romper estilos existentes | Alta | Alto | Testing visual exhaustivo, control de versiones |
| PurgeCSS elimina clases necesarias | Media | Alto | Configurar safelist correctamente |
| Incompatibilidad con Next.js 16 | Baja | Alto | Revisar documentación de Next.js |
| Regresión visual | Media | Medio | Screenshots antes/después, testing manual |

## 📅 Cronograma Estimado

| Fase | Duración | Inicio | Fin |
|------|----------|--------|-----|
| Fase 1: Auditoría | 2 semanas | - | - |
| Fase 2: Bootstrap | 1 semana | - | - |
| Fase 3: global.scss | 1-2 semanas | - | - |
| Fase 4: Componentes | 2 semanas | - | - |
| Fase 5: Automatización | 1 semana | - | - |
| Fase 6: Testing | 1 semana | - | - |
| **TOTAL** | **7-8 semanas** | - | - |

## 📚 Recursos y Referencias

- [Next.js CSS Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/css)
- [PurgeCSS Documentation](https://purgecss.com/)
- [Bootstrap Customization](https://getbootstrap.com/docs/5.3/customize/sass/)
- [CSS Architecture Best Practices](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)

## 🔄 Seguimiento

### Reuniones de Revisión
- Revisión semanal del progreso
- Demo de cambios importantes
- Ajustes al plan según necesidades

### Reporte de Progreso
| Fase | Estado | Progreso | Notas |
|------|--------|----------|-------|
| Fase 1 | 🔲 | 0% | - |
| Fase 2 | 🔲 | 0% | - |
| Fase 3 | 🔲 | 0% | - |
| Fase 4 | 🔲 | 0% | - |
| Fase 5 | 🔲 | 0% | - |
| Fase 6 | 🔲 | 0% | - |

---

**Última actualización**: 25 de noviembre de 2025
**Responsable**: Equipo de desarrollo
**Revisión**: Pendiente
