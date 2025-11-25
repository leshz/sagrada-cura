# Análisis Detallado de global.scss

## 📊 Información General
- **Archivo**: `src/styles/global.scss`
- **Total de líneas**: 5,690
- **Porcentaje del CSS total**: 42%
- **Fecha de análisis**: 25 de noviembre de 2025

## 🔍 Estructura Actual

### Imports (Líneas 1-3)
```scss
@import '~bootstrap/scss/bootstrap';        // ⚠️ TODO Bootstrap (~10,000 líneas)
@import '~bootstrap-icons/font/bootstrap-icons';
@import './mixins';
```

**🚨 PROBLEMA CRÍTICO**: Se está importando TODO Bootstrap, no solo los módulos necesarios.

### Variables CSS (Líneas 5-30)
- Variables de colores
- Fuentes
- Estados (success, warning, error)
- Configuración de Toastify
- Border radius

### Secciones Principales Identificadas

| Línea | Sección | Contenido | Prioridad |
|-------|---------|-----------|-----------|
| 32 | 01. COMMON CSS | Estilos base, resets, utilidades | 🔴 ALTA |
| 187 | 2. Global Css | Estilos globales generales | 🔴 ALTA |
| 4076 | Range Slider | Componente de slider | 🟡 MEDIA |
| 4230 | FAQ Css | Componente de FAQs | 🟡 MEDIA |
| 4371 | Error Css | Páginas de error | 🟢 BAJA |
| 4585 | home2 Topbar Css | Topbar específico (¿obsoleto?) | 🔴 ALTA |
| 4686 | home2 Banner Css | Banner específico (¿obsoleto?) | 🔴 ALTA |
| 4917 | home2 Section title Css | Títulos específicos (¿obsoleto?) | 🔴 ALTA |
| 5029 | Product-Banner-Section Css | Banner de productos | 🟡 MEDIA |
| 5203 | Suggest-Section Css | Sección de sugerencias | 🟡 MEDIA |
| 5288 | Brand-Section Css | Sección de marca | 🟡 MEDIA |
| 5391 | Testimonial-Section Css | Sección de testimonios | 🟡 MEDIA |
| 5614 | Scrollbar CSS | Estilos de scrollbar | 🟢 BAJA |
| 5636 | Product Not Found | Página de producto no encontrado | 🟢 BAJA |

### Elementos Específicos Detectados

#### Líneas 43-74: View Transitions
- Animaciones de transición de página
- Usa API moderna `view-transition`
- **Acción**: Mover a archivo `_animations.scss`

#### Líneas 86-97: Accessibility Utilities
- Clase `.visually-hidden`
- **Acción**: Mover a archivo `_utilities.scss`

#### Líneas 99-185: Skip Links & Breadcrumbs
- Skip links para accesibilidad
- Estilos de breadcrumbs de productos
- **Acción**: Mover a componentes específicos

#### Líneas 5614-5634: Scrollbar Personalizados
- Estilos para Firefox y Chromium
- **Acción**: Mover a archivo `_base.scss`

## 🎯 Problemas Identificados

### 1. Import Completo de Bootstrap (CRÍTICO)
**Línea**: 1
**Problema**: Se importa todo Bootstrap (~10,000 líneas de CSS compilado)
**Impacto**: Enorme cantidad de CSS no utilizado
**Solución**:
```scss
// En lugar de:
@import '~bootstrap/scss/bootstrap';

// Usar solo lo necesario:
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/root';
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/containers';
@import '~bootstrap/scss/utilities';
// ... solo los módulos que realmente se usen
```

### 2. Estilos de "home2" (IMPORTANTE)
**Líneas**: 4585, 4686, 4917
**Problema**: Referencias a "home2" sugieren código de un diseño anterior o tema no usado
**Solución**: Revisar si estas secciones se están usando actualmente. Si no, eliminarlas.

### 3. Componentes Mezclados con Estilos Globales (IMPORTANTE)
**Problema**: Componentes específicos (testimonials, FAQ, sliders) mezclados en archivo global
**Solución**: Mover a archivos de componentes individuales

### 4. Falta de Organización Modular (IMPORTANTE)
**Problema**: Todo en un solo archivo de 5,690 líneas
**Solución**: Dividir en archivos lógicos

## 📋 Plan de Refactorización Propuesto

### Estructura Nueva de Archivos

```
src/styles/
├── vendors/
│   └── _bootstrap-custom.scss      (solo módulos necesarios de Bootstrap)
├── base/
│   ├── _variables.scss             (variables del proyecto)
│   ├── _reset.scss                 (resets básicos)
│   ├── _typography.scss            (tipografía)
│   └── _scrollbar.scss             (estilos de scrollbar)
├── utilities/
│   ├── _accessibility.scss         (utilidades de accesibilidad)
│   └── _helpers.scss               (clases helper)
├── animations/
│   └── _transitions.scss           (view transitions y animaciones)
├── components/
│   ├── _buttons.scss               (botones)
│   ├── _forms.scss                 (formularios)
│   ├── _breadcrumbs.scss           (breadcrumbs)
│   ├── _range-slider.scss          (slider)
│   ├── _faq.scss                   (FAQ)
│   ├── _testimonials.scss          (testimonios)
│   └── _skip-links.scss            (skip links)
├── sections/
│   ├── _product-banner.scss        (banner de productos)
│   ├── _suggestions.scss           (sugerencias)
│   └── _brand.scss                 (marca)
├── pages/
│   ├── _error.scss                 (páginas de error)
│   └── _product-not-found.scss     (producto no encontrado)
├── legacy/
│   └── _home2.scss                 (código legacy - revisar y eliminar)
├── mixins.scss                     (mixins existentes)
└── main.scss                       (archivo principal que importa todo)
```

### Archivo Principal (main.scss)

```scss
// 1. Vendors
@import 'vendors/bootstrap-custom';
@import '~bootstrap-icons/font/bootstrap-icons';

// 2. Base
@import 'base/variables';
@import 'base/reset';
@import 'base/typography';
@import 'base/scrollbar';

// 3. Mixins
@import 'mixins';

// 4. Utilities
@import 'utilities/accessibility';
@import 'utilities/helpers';

// 5. Animations
@import 'animations/transitions';

// 6. Components
@import 'components/buttons';
@import 'components/forms';
@import 'components/breadcrumbs';
@import 'components/range-slider';
@import 'components/faq';
@import 'components/testimonials';
@import 'components/skip-links';

// 7. Sections
@import 'sections/product-banner';
@import 'sections/suggestions';
@import 'sections/brand';

// 8. Pages
@import 'pages/error';
@import 'pages/product-not-found';
```

## 🔢 Estimación de Reducción

### Antes
- **Bootstrap completo**: ~10,000 líneas compiladas
- **global.scss**: 5,690 líneas
- **Total aproximado**: ~15,690 líneas

### Después (Estimado)
- **Bootstrap personalizado**: ~2,000 líneas (80% reducción)
- **Estilos propios optimizados**: ~3,500 líneas (40% reducción)
- **Total aproximado**: ~5,500 líneas
- **Reducción total**: ~65% (10,190 líneas menos)

## 📝 Tareas Específicas para global.scss

### Tarea A: Optimizar Bootstrap
- [ ] Analizar qué módulos de Bootstrap se usan realmente
- [ ] Crear `vendors/_bootstrap-custom.scss` con solo módulos necesarios
- [ ] Configurar PurgeCSS para eliminar clases Bootstrap no usadas
- [ ] Estimar: 4 horas

### Tarea B: Dividir Variables y Base
- [ ] Crear `base/_variables.scss` con todas las variables CSS
- [ ] Crear `base/_reset.scss` con resets básicos
- [ ] Crear `base/_typography.scss` con estilos tipográficos
- [ ] Crear `base/_scrollbar.scss` con estilos de scrollbar
- [ ] Estimar: 2 horas

### Tarea C: Extraer Componentes
- [ ] Identificar y extraer componentes a archivos individuales
- [ ] Priorizar componentes más grandes (testimonials, FAQ, slider)
- [ ] Estimar: 6 horas

### Tarea D: Revisar Código Legacy
- [ ] Buscar todas las referencias a "home2"
- [ ] Determinar si se usa actualmente
- [ ] Eliminar o mover a carpeta legacy
- [ ] Estimar: 2 horas

### Tarea E: Crear main.scss
- [ ] Crear nuevo archivo main.scss con todos los imports
- [ ] Actualizar layout.tsx para importar main.scss
- [ ] Testing visual para verificar que nada se rompa
- [ ] Estimar: 1 hora

## 🚨 Precauciones

1. **Backup**: Mantener global.scss original como backup
2. **Testing**: Revisar todas las páginas después de cada cambio
3. **Git**: Hacer commits frecuentes para poder revertir si es necesario
4. **Incremental**: Hacer los cambios de forma incremental, no todo de una vez

## 📊 Análisis de Código Duplicado (Preliminar)

### Patrones Repetidos Detectados
- Múltiples definiciones de `.btn` y variantes
- Estilos de contenedores repetidos
- Media queries dispersas (oportunidad para consolidar)

**Siguiente paso**: Usar herramienta de detección de duplicados (csscomb, stylelint)

---

**Estado**: Análisis completado
**Próximo paso**: Instalar herramientas de análisis CSS
**Responsable**: Equipo de desarrollo
