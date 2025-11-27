# Guía de Estilos - Sagrada Cura

## 📋 Tabla de Contenidos

1. [Arquitectura CSS](#arquitectura-css)
2. [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Variables Disponibles](#variables-disponibles)
5. [Componentes Reutilizables](#componentes-reutilizables)
6. [Mixins y Utilidades](#mixins-y-utilidades)
7. [Mejores Prácticas](#mejores-prácticas)
8. [Cómo Agregar Nuevos Estilos](#cómo-agregar-nuevos-estilos)

---

## 🏗️ Arquitectura CSS

### Filosofía

El proyecto utiliza una **arquitectura modular basada en SCSS** con las siguientes características:

- **Modularidad**: Cada componente tiene su propio archivo
- **Orden de cascada**: Los imports siguen un orden lógico (vendors → base → components → pages)
- **Separación de concerns**: Variables, utilidades, componentes y páginas separados
- **BEM-like**: Nomenclatura descriptiva y jerárquica
- **Mobile-first**: Diseño responsive desde el inicio

### Orden de Imports (main.scss)

```scss
1. VENDORS          → Bootstrap custom, Icons
2. BASE             → Mixins, Variables, Resets, Scrollbar
3. ANIMATIONS       → Transitions, Keyframes
4. UTILITIES        → Accessibility, Helpers
5. COMPONENTS       → Componentes reutilizables (8 archivos)
6. PAGES            → Estilos específicos de páginas
7. LEGACY/VARIANTS  → Variantes de diseño (home2)
8. REMAINING        → Código temporal a refactorizar
```

Este orden garantiza que:
- Las variables estén disponibles primero
- Los estilos base se apliquen antes que componentes
- La especificidad de CSS funcione correctamente

---

## 📝 Convenciones de Nomenclatura

### Archivos

#### Archivos SCSS Parciales
- Prefijo con `_` (underscore): `_variables.scss`, `_buttons.scss`
- Nombres en kebab-case: `_range-slider.scss`, `_gift-card.scss`
- Descriptivos y específicos: `_newsletter.scss` no `_form.scss`

#### Carpetas
- Nombres en plural: `components/`, `pages/`, `utilities/`
- Minúsculas: `base/`, `animations/`
- Descriptivas: `legacy/` para código de versiones anteriores

### Clases CSS

#### Componentes
```scss
// ✅ Bueno - Descriptivo y jerárquico
.newsletter-section {
  .newsletter-banner {
    .newsletter-content { }
  }
}

// ❌ Evitar - Demasiado genérico
.section {
  .banner {
    .content { }
  }
}
```

#### Estados y Modificadores
```scss
// Modificadores con sufijos numéricos
.primary-btn1  // Botón primario estilo 1
.primary-btn2  // Botón primario estilo 2

// Modificadores con clases adicionales
.newsletter-section.style-2

// Estados con &:
.accordion-button {
  &:hover { }
  &:not(.collapsed) { }
}
```

#### Clases Utilitarias
```scss
// Bootstrap-style utilities
.visually-hidden
.d-flex
.container

// Custom utilities con prefijo
.sr-only  // Screen reader only
```

---

## 📁 Estructura de Archivos

### Vista Completa

```
src/styles/
├── main.scss                          # Archivo de entrada principal
├── _global-remaining.scss             # Código temporal (a refactorizar)
├── global-backup.scss                 # Backup del global.scss original
│
├── vendors/
│   └── _bootstrap-custom.scss         # Bootstrap optimizado (solo módulos usados)
│
├── base/
│   ├── mixins.scss                    # Mixins del proyecto (no partial)
│   ├── _variables.scss                # Variables CSS y colores
│   ├── _reset.scss                    # Resets básicos HTML
│   └── _scrollbar.scss                # Scrollbar personalizado
│
├── animations/
│   └── _transitions.scss              # View Transitions API
│
├── utilities/
│   └── _accessibility.scss            # Utilidades de accesibilidad
│
├── components/                        # Componentes reutilizables
│   ├── _skip-links.scss               # Skip navigation
│   ├── _breadcrumbs.scss              # Breadcrumbs de navegación
│   ├── _faq.scss                      # Accordion de FAQ
│   ├── _testimonials.scss             # Slider de testimonios
│   ├── _range-slider.scss             # Range slider de filtros
│   ├── _newsletter.scss               # Formulario newsletter
│   ├── _instagram-feed.scss           # Grid de Instagram
│   └── _gift-card.scss                # Sección gift card
│
├── pages/
│   └── _product-not-found.scss        # Página 404 de productos
│
└── legacy/                            # ⚠️ Código de variantes (home2)
    └── _home2.scss                    # Topbar, banner, titles alternos
```

### Tamaños de Referencia

| Archivo | Líneas | Estado |
|---------|--------|--------|
| main.scss | ~66 | ✅ Organizado |
| _variables.scss | ~35 | ✅ Conciso |
| _faq.scss | ~140 | ✅ Moderado |
| _testimonials.scss | ~195 | ✅ Moderado |
| _newsletter.scss | ~135 | ✅ Moderado |
| _global-remaining.scss | ~4,197 | ⚠️ A refactorizar |

---

## 🎨 Variables Disponibles

### Variables CSS (Custom Properties)

**Ubicación**: `base/_variables.scss`

```scss
:root {
  // Fuentes
  --font-primary: var(--font-primary-next);
  --font-secondary: var(--font-secondary-next);

  // Colores principales
  --white-color: #fff;
  --black-color: #000000;
  --primary-color1: #222222;
  --important-color1: #c08558;

  // Estados (RGB para opacidad)
  --success: 7, 188, 12;
  --warning: 241, 196, 15;
  --error: 231, 76, 60;

  // Third-party
  --toastify-color-success: rgb(var(--success));
  --toastify-color-warning: rgb(var(--warning));
  --toastify-color-error: rgb(var(--error));
}
```

### Uso de Variables

```scss
// ✅ Correcto
.button {
  background-color: var(--primary-color1);
  color: var(--white-color);
}

// ✅ Con opacidad
.overlay {
  background-color: rgba(var(--success), 0.8);
}

// ❌ Evitar valores hardcodeados
.button {
  background-color: #222222;  // Usar var(--primary-color1)
  color: #fff;                 // Usar var(--white-color)
}
```

---

## 🧩 Componentes Reutilizables

### 1. Skip Links (`_skip-links.scss`)

**Propósito**: Navegación por teclado para accesibilidad

```scss
// Uso en HTML/JSX
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

**Características**:
- Visible solo en :focus
- Posicionamiento absoluto
- Alto contraste para accesibilidad

---

### 2. Breadcrumbs (`_breadcrumbs.scss`)

**Propósito**: Navegación de rastro de migas

```scss
// Clases disponibles
.breadcrumb-section
  .breadcrumb-content
    .breadcrumb-link
```

**Estados**:
- Hover con underline
- Color inherit para links
- Separadores con ::after

---

### 3. FAQ (`_faq.scss`)

**Propósito**: Acordeón de preguntas frecuentes

```scss
// Estructura
.faq-section
  .faq-title
  .faq-item
  .faq-content
    .accordion
      .accordion-item
        .accordion-header
          .accordion-button
        .accordion-body
```

**Características**:
- Acordeón Bootstrap personalizado
- Iconos de Bootstrap (F4FE/F2EA)
- Border bottom en cada item
- Sin backgrounds en estados

---

### 4. Testimonials (`_testimonials.scss`)

**Propósito**: Slider de testimonios de clientes

```scss
// Estructura principal
.testimonial-section
  .testimonial-slider      // Con gradientes laterales
  .testimonial-card        // Card individual
    .testimonial-content
    .testimonial-bottom
      .author-area
      .testimonial-qoute
  .author-img-and-rating   // Visible en slide activo
```

**Características**:
- Integración con Swiper
- Gradientes laterales (::before, ::after)
- Card activo con flecha inferior
- Rating con estrellas
- Responsive design

---

### 5. Range Slider (`_range-slider.scss`)

**Propósito**: Slider de rango para filtros de precio

```scss
// Elementos principales
.range-wrap
  .slider-labels
  .noUi-target
    .noUi-handle
    .noUi-connect
```

**Variantes**:
- `.range-wrap` - Versión básica
- `.range-wrap.style-2` - Con dropdown y animación

**Integración**: noUi-slider library

---

### 6. Newsletter (`_newsletter.scss`)

**Propósito**: Formulario de suscripción

```scss
// Estructura
.newsletter-section
  .newsletter-banner
    .newsletter-content
      h2
      .from-inner
        input
        .from-arrow

// Variantes
.newsletter-section.style-2  // Tema claro
```

**Características**:
- 2 temas: oscuro (default) y claro (style-2)
- Background con gradiente e imagen
- Input transparente
- Decoraciones en esquinas (style-2)

---

### 7. Instagram Feed (`_instagram-feed.scss`)

**Propósito**: Grid de fotos de Instagram

```scss
.instagram-section
  .instagram-wrapper
    img
```

**Características**:
- Minimalista (9 líneas)
- Overflow hidden
- Imágenes responsive

---

### 8. Gift Card (`_gift-card.scss`)

**Propósito**: Sección promocional de tarjetas

```scss
.gift-section
  .gift-img1           // Decoración izquierda
  .gift-img2           // Decoración derecha
  .gift-wrapper
    h5
    .gift-card-content
      p
    .primary-btn1
```

**Características**:
- Background #f5f3f1
- Imágenes decorativas posicionadas absolutamente
- Layout flex que cambia a columna en mobile
- Círculo decorativo como pseudo-elemento

---

## 🔧 Mixins y Utilidades

### Mixins de Breakpoints

**Ubicación**: `base/mixins.scss`

```scss
// Mobile
@include sm-down-device() { }     // < 576px
@include sm-device() { }           // 576px - 767px

// Tablet
@include md-down-device() { }     // < 768px
@include md-device() { }           // 768px - 991px

// Desktop
@include lg-down-device() { }     // < 992px
@include lg-device() { }           // 992px - 1199px
@include xl-down-device() { }     // < 1200px
@include xl-device() { }           // 1200px - 1399px

// Large Desktop
@include xxl-device() { }          // ≥ 1400px
@include seventeen-down-device() { } // < 1700px
```

### Uso de Mixins

```scss
// ✅ Correcto - Mobile first
.component {
  padding: 20px;

  @include md-down-device() {
    padding: 15px;
  }

  @include sm-down-device() {
    padding: 10px;
  }
}

// ❌ Evitar - Dificulta mantenimiento
@media (max-width: 768px) {
  .component {
    padding: 15px;
  }
}
```

### Utilidades de Accesibilidad

```scss
// Screen reader only
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## ✅ Mejores Prácticas

### 1. Orden de Propiedades CSS

```scss
.component {
  // 1. Posicionamiento
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  // 2. Box model
  display: flex;
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  // 3. Tipografía
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-color1);

  // 4. Visual
  background-color: var(--white-color);
  border: 1px solid var(--primary-color1);
  border-radius: 5px;

  // 5. Otros
  transition: 0.3s;
  cursor: pointer;
}
```

### 2. Anidamiento SCSS

```scss
// ✅ Bueno - Máximo 3 niveles
.component {
  .component-header {
    .component-title { }
  }
}

// ❌ Evitar - Demasiado anidado
.component {
  .wrapper {
    .inner {
      .content {
        .title { }  // 5 niveles!
      }
    }
  }
}
```

### 3. Variables vs. Valores Hardcodeados

```scss
// ✅ Usar variables
.button {
  background-color: var(--primary-color1);
  padding: 12px 40px;  // OK si es específico del componente
}

// ❌ Evitar valores mágicos repetidos
.button-1 { color: #222222; }
.button-2 { color: #222222; }  // Usar variable!
```

### 4. Comentarios

```scss
// ✅ Comentarios útiles
/*================================================
  Component Name - Purpose
  Brief description of component usage
=================================================*/

// Sección importante
.component { }

// ❌ Comentarios obvios
.red { color: red; }  // Makes text red
```

### 5. Responsividad

```scss
// ✅ Mobile-first approach
.component {
  font-size: 14px;  // Mobile

  @include md-device() {
    font-size: 16px;  // Tablet
  }

  @include lg-device() {
    font-size: 18px;  // Desktop
  }
}

// ❌ Desktop-first (menos flexible)
.component {
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}
```

---

## 🆕 Cómo Agregar Nuevos Estilos

### Para un Nuevo Componente

1. **Crear archivo en `/components`**
   ```bash
   touch src/styles/components/_mi-componente.scss
   ```

2. **Agregar header descriptivo**
   ```scss
   /*================================================
     Mi Componente - Sagrada Cura
     Descripción breve del propósito
   =================================================*/

   .mi-componente {
     // estilos aquí
   }
   ```

3. **Importar en main.scss**
   ```scss
   // En la sección de COMPONENTS
   @import './components/mi-componente';
   ```

4. **Usar en JSX/TSX**
   ```tsx
   <div className="mi-componente">
     // contenido
   </div>
   ```

### Para Estilos de Página

1. **Crear archivo en `/pages`**
   ```bash
   touch src/styles/pages/_mi-pagina.scss
   ```

2. **Importar en main.scss en sección PAGES**

### Para Nueva Utilidad

1. **Agregar en `utilities/_helpers.scss`** (crear si no existe)
2. **Usar convención de nomenclatura clara**
   ```scss
   .u-text-center { text-align: center; }
   .u-mt-20 { margin-top: 20px; }
   ```

---

## 🎯 Checklist para Pull Requests

Antes de hacer commit de cambios CSS:

- [ ] ¿Usé variables en lugar de valores hardcodeados?
- [ ] ¿Está el archivo en la carpeta correcta?
- [ ] ¿Agregué el import en main.scss?
- [ ] ¿Usé mixins para media queries?
- [ ] ¿El anidamiento es <= 3 niveles?
- [ ] ¿Agregué comentarios donde sea necesario?
- [ ] ¿El componente es reutilizable?
- [ ] ¿Probé en mobile y desktop?
- [ ] ¿Las clases tienen nombres descriptivos?
- [ ] ¿Eliminé código comentado innecesario?

---

## 📚 Recursos Adicionales

### Documentación del Proyecto
- `docs/plan-reduccion-css.md` - Plan maestro
- `docs/fase-[1-5]-completada.md` - Resúmenes de cada fase
- `docs/analisis-global-scss.md` - Análisis inicial

### Herramientas Configuradas
- **PurgeCSS**: Elimina CSS no usado en producción
- **Stylelint**: Linting de SCSS
- **Bundle Analyzer**: Análisis de tamaño de bundles

### Comandos Útiles

```bash
# Linting
yarn lint:css           # Verificar estilos
yarn lint:css:fix       # Auto-fix de problemas

# Build
yarn build              # Build de producción (con PurgeCSS)
yarn analyze            # Analizar bundle size

# Desarrollo
yarn dev                # Servidor de desarrollo
```

---

## 🔄 Changelog de Estilos

### v2.0.0 (Noviembre 2025)
- ✅ Arquitectura modular implementada
- ✅ Bootstrap reducido 60%
- ✅ 8 componentes extraídos
- ✅ PurgeCSS habilitado para producción
- ✅ 26% de reducción en global.scss

### v1.0.0 (Original)
- global.scss monolítico (5,690 líneas)
- Bootstrap completo
- Sin organización modular

---

**Mantenido por**: Equipo de Desarrollo Sagrada Cura
**Última actualización**: 25 de noviembre de 2025
**Versión**: 2.0.0
