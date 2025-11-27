# Plan de Refactorización: Componente de Galería de Imágenes de Producto

## 📋 Resumen Ejecutivo

Refactorizar el componente de previsualización de imágenes de producto para mejorar el rendimiento, mantener la estética minimalista actual y agregar funcionalidad de zoom para una mejor experiencia de usuario.

---

## 🔍 Análisis de Implementación Actual

### Componentes Involucrados

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| Product Detail Page | `src/app/tienda/[slug]/page.tsx` | Página principal del producto |
| Slider Component | `src/components/product/slider.tsx` | Carrusel de imágenes con miniaturas |
| ImageWrapper | `src/components/Image/index.tsx` | Wrapper optimizado para Next.js Image |
| Styles | `src/app/tienda/[slug]/page.scss` | Estilos del slider |

### Características Actuales

**✅ Fortalezas:**
- Sistema de doble carrusel (principal + miniaturas)
- Optimización de imágenes con Next.js (WebP, AVIF)
- Transiciones suaves con efecto fade
- Diseño responsive
- Priority loading para LCP
- Swiper.js 11.1.1 para navegación

**❌ Limitaciones:**
- **No tiene funcionalidad de zoom**
- Dependencia pesada en Swiper.js (~50KB minified)
- Configuración compleja con múltiples módulos
- No hay vista ampliada de producto
- Podría optimizarse el rendimiento

### Configuración Actual de Swiper

```typescript
{
  modules: [Thumbs, Pagination, Autoplay, EffectFade],
  thumbs: { swiper: thumbsSwiper },
  spaceBetween: 10,
  autoPlay: true,
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  effect: 'fade'
}
```

---

## 🎯 Objetivos de la Refactorización

1. **Performance**: Reducir bundle size y mejorar tiempos de carga
2. **Funcionalidad**: Agregar zoom/ampliación de imágenes
3. **Estética**: Mantener el diseño minimalista actual
4. **UX**: Mejorar la experiencia de visualización del producto
5. **Mantenibilidad**: Código más limpio y modular
6. **Accesibilidad**: Mantener/mejorar a11y

---

## 💡 Propuesta de Solución

### Opción Recomendada: React Image Gallery Custom + Zoom Modal

**Características:**
- Galería ligera personalizada sin dependencias pesadas
- Modal de zoom con react-medium-image-zoom o implementación custom
- Mantiene la estética de thumbnails + imagen principal
- Soporte para gestos táctiles en móvil
- Lazy loading inteligente
- Transiciones CSS suaves

**Ventajas:**
- ✅ Bundle más pequeño (~15-20KB vs ~50KB de Swiper)
- ✅ Control total sobre comportamiento y estilos
- ✅ Zoom nativo y modal
- ✅ Performance optimizado
- ✅ Fácil mantenimiento

**Alternativas Consideradas:**

| Librería | Tamaño | Zoom | Performance | Mantenibilidad |
|----------|--------|------|-------------|----------------|
| Swiper.js (actual) | ~50KB | ❌ No | ⭐⭐⭐ | ⭐⭐⭐ |
| React Image Gallery | ~25KB | ✅ Sí | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Lightbox Custom | ~10KB | ✅ Sí | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Photoswipe | ~35KB | ✅ Sí | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🏗️ Arquitectura Propuesta

### Estructura de Componentes

```
ProductImageGallery/
├── index.tsx                 # Componente principal
├── MainImage.tsx            # Imagen principal con zoom
├── ThumbnailGrid.tsx        # Grid de miniaturas
├── ZoomModal.tsx            # Modal de imagen ampliada
├── ImageGallery.module.scss # Estilos específicos
└── hooks/
    ├── useImageGallery.ts   # Lógica de galería
    └── useImageZoom.ts      # Lógica de zoom
```

### Flujo de Datos

```
ProductPage
    ↓ (pictures)
ProductImageGallery
    ├→ MainImage (currentImage, onZoom)
    ├→ ThumbnailGrid (images, onSelect, currentIndex)
    └→ ZoomModal (isOpen, image, onClose)
```

---

## 🎨 Especificaciones de Diseño

### Layout Desktop
```
┌─────────────────────────────────────┐
│  ┌──────────────────────────────┐   │
│  │                              │   │
│  │     Imagen Principal         │   │
│  │     (click para zoom)        │   │
│  │                              │   │
│  └──────────────────────────────┘   │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐     │
│  │  │ │▓▓│ │  │ │  │ │  │ │  │     │
│  └──┘ └──┘ └──┘ └──┘ └──┘ └──┘     │
│  Miniaturas (selección activa)      │
└─────────────────────────────────────┘
```

### Layout Mobile
```
┌──────────────────────┐
│                      │
│   Imagen Principal   │
│   (swipe/tap zoom)   │
│                      │
├──────────────────────┤
│ ○ ○ ● ○ ○           │ <- Dots indicator
├──────────────────────┤
│ [thumb][thumb][thumb]│
└──────────────────────┘
```

### Comportamiento de Zoom

**Desktop:**
- Hover: Mostrar cursor de zoom (+)
- Click: Abrir modal con imagen ampliada
- En modal: Click para cerrar, scroll para zoom in/out

**Mobile:**
- Tap: Abrir modal con imagen ampliada
- Pinch to zoom: Zoom dentro del modal
- Swipe: Navegar entre imágenes en modal

---

## 🛠️ Especificaciones Técnicas

### 1. Optimización de Imágenes

**Formatos a usar:**
- AVIF (preferido, -50% tamaño vs WebP)
- WebP (fallback, -30% vs JPEG)
- JPEG (fallback final)

**Tamaños por breakpoint:**
```typescript
const IMAGE_SIZES = {
  thumbnail: { width: 80, height: 80, quality: 75 },
  preview: { width: 600, height: 600, quality: 85 },
  zoom: { width: 1200, height: 1200, quality: 90 },
  full: { width: 2000, height: 2000, quality: 95 }
}
```

**Lazy Loading Strategy:**
- Imagen actual: Priority load
- Siguiente/anterior: Preload
- Resto: Lazy load cuando se acerque al viewport

### 2. Performance Targets

| Métrica | Target | Actual | Mejora |
|---------|--------|--------|--------|
| Bundle Size | <20KB | ~50KB | -60% |
| First Paint | <100ms | ~150ms | -33% |
| LCP | <2.5s | ~2.8s | -11% |
| CLS | <0.1 | <0.1 | = |
| Image Load (3G) | <1.5s | ~2s | -25% |

### 3. Accesibilidad

**ARIA Labels:**
```typescript
<div role="region" aria-label="Galería de imágenes del producto">
  <button aria-label="Ampliar imagen" onClick={handleZoom}>
    <img alt={product.name} />
  </button>
  <nav aria-label="Miniaturas de producto">
    {thumbnails.map((thumb, i) => (
      <button
        aria-label={`Ver imagen ${i + 1} de ${total}`}
        aria-current={i === current}
      />
    ))}
  </nav>
</div>
```

**Soporte de teclado:**
- Arrow Left/Right: Navegar imágenes
- Enter/Space: Abrir zoom
- Escape: Cerrar modal
- Tab: Navegación entre thumbnails

### 4. Implementación de Zoom

**Opción A: React Medium Image Zoom (Recomendada)**
```bash
npm install react-medium-image-zoom
# Tamaño: ~8KB gzipped
```

**Opción B: Custom Zoom Modal**
```typescript
const ZoomModal = ({ image, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Implementación de zoom con transform: scale()
  // Drag para pan cuando zoom > 1
  // Smooth transitions con CSS
}
```

---

## 📝 Checklist de Implementación

### Fase 1: Preparación y Análisis ✅
- [x] Analizar implementación actual de Slider
- [x] Analizar ImageWrapper y optimización
- [x] Documentar estructura actual
- [x] Identificar dependencias
- [x] Crear plan de refactorización
- [ ] Revisar plan con el equipo

### Fase 2: Desarrollo del Nuevo Componente ✅
- [x] **Configurar estructura de archivos**
  - [x] Crear carpeta `src/components/product/ProductImageGallery/`
  - [x] Configurar archivos TypeScript e interfaces
  - [x] Configurar módulos SCSS

- [x] **Implementar hook useImageGallery**
  - [x] Estado de imagen actual
  - [x] Navegación entre imágenes
  - [x] Preload de imágenes adyacentes
  - [ ] Tests unitarios

- [x] **Implementar hook useImageZoom**
  - [x] Estado de zoom (abierto/cerrado)
  - [x] Gestión de escala y posición
  - [x] Detección de gestos (pinch, drag)
  - [ ] Tests unitarios

- [x] **Crear componente MainImage**
  - [x] Renderizar imagen optimizada con Next.js Image
  - [x] Cursor de zoom en hover
  - [x] Click handler para abrir modal
  - [x] Touch handlers para móvil
  - [x] Loading skeleton
  - [x] Estados de error

- [x] **Crear componente ThumbnailGrid**
  - [x] Grid responsive de miniaturas
  - [x] Indicador de imagen activa
  - [x] Navegación con teclado
  - [x] Scroll automático a thumbnail activo
  - [x] Lazy loading de thumbnails

- [x] **Crear componente ZoomModal**
  - [x] Modal full-screen
  - [x] Imagen de alta resolución
  - [x] Controles de zoom (+/-)
  - [x] Pan cuando está ampliado
  - [x] Navegación entre imágenes dentro del modal
  - [x] Animaciones suaves (entrada/salida)
  - [x] Botón de cierre accesible
  - [x] Cerrar con Escape o click fuera

- [x] **Integrar ProductImageGallery**
  - [x] Actualizar `src/app/tienda/[slug]/page.tsx`
  - [x] Pasar props correctamente
  - [x] Mantener SSR/SSG compatibility
  - [x] Verificar tipos TypeScript

### Fase 3: Estilos y Diseño ✅
- [x] **Estilos del Main Image**
  - [x] Container responsive
  - [x] Aspect ratio consistente
  - [x] Transiciones suaves
  - [x] Cursor de zoom personalizado
  - [x] Loading states

- [x] **Estilos de Thumbnails**
  - [x] Grid layout (horizontal en desktop)
  - [x] Carousel en mobile
  - [x] Borde en thumbnail activo (2px #858585)
  - [x] Hover effects sutiles
  - [x] Spacing consistente (10px)

- [x] **Estilos del Modal de Zoom**
  - [x] Overlay semi-transparente
  - [x] Imagen centrada
  - [x] Controles flotantes
  - [x] Animación de entrada/salida
  - [x] Estilo minimalista coherente

- [x] **Responsive Breakpoints**
  - [x] Mobile (<768px)
  - [x] Tablet (768px-1200px)
  - [x] Desktop (>1200px)

### Fase 4: Optimización de Performance
- [ ] **Optimización de Imágenes**
  - [ ] Configurar sizes correctos para cada breakpoint
  - [ ] Implementar priority loading para imagen actual
  - [ ] Preload de imágenes siguiente/anterior
  - [ ] Lazy load resto de imágenes
  - [ ] Usar formatos modernos (AVIF/WebP)

- [ ] **Code Splitting**
  - [ ] Dynamic import del ZoomModal
  - [ ] Lazy load de thumbnails fuera del viewport
  - [ ] Tree shaking de código no usado

- [ ] **Memoization**
  - [ ] React.memo en componentes puros
  - [ ] useMemo para cálculos costosos
  - [ ] useCallback para funciones estables

- [ ] **Bundle Size**
  - [ ] Analizar bundle con webpack-bundle-analyzer
  - [ ] Verificar que sea <20KB
  - [ ] Eliminar Swiper.js y dependencias no usadas

### Fase 5: Testing
- [ ] **Tests Unitarios**
  - [ ] useImageGallery hook
  - [ ] useImageZoom hook
  - [ ] MainImage component
  - [ ] ThumbnailGrid component
  - [ ] ZoomModal component

- [ ] **Tests de Integración**
  - [ ] Navegación entre imágenes
  - [ ] Apertura/cierre de modal
  - [ ] Zoom in/out
  - [ ] Responsive behavior

- [ ] **Tests E2E (Vitest)**
  - [ ] Flujo completo de visualización
  - [ ] Click en thumbnail → cambio de imagen
  - [ ] Click en imagen → modal de zoom
  - [ ] Navegación con teclado
  - [ ] Touch gestures en mobile

- [ ] **Tests de Performance**
  - [ ] Lighthouse score >90
  - [ ] Core Web Vitals
  - [ ] Bundle size <20KB
  - [ ] Image loading times

- [ ] **Tests de Accesibilidad**
  - [ ] axe-core violations = 0
  - [ ] Navegación con teclado
  - [ ] Screen reader compatibility
  - [ ] Focus management

### Fase 6: QA y Refinamiento
- [ ] **Testing Manual**
  - [ ] Chrome (Desktop/Mobile)
  - [ ] Firefox (Desktop/Mobile)
  - [ ] Safari (Desktop/Mobile)
  - [ ] Edge

- [ ] **Performance Real**
  - [ ] Test en 3G throttling
  - [ ] Test en Slow 4G
  - [ ] Test con DevTools Performance tab
  - [ ] Verificar no hay memory leaks

- [ ] **UX Review**
  - [ ] Transiciones suaves
  - [ ] Tiempos de respuesta <100ms
  - [ ] Feedback visual claro
  - [ ] Estados de carga apropiados

### Fase 7: Deployment
- [ ] **Pre-deployment**
  - [ ] Code review
  - [ ] Update documentation
  - [ ] Verificar tipos TypeScript
  - [ ] Linter pass (0 errores)
  - [ ] Prettier format

- [ ] **Deployment**
  - [ ] Crear PR con descripción detallada
  - [ ] Screenshots antes/después
  - [ ] Performance metrics comparison
  - [ ] Aprobar e integrar

- [ ] **Post-deployment**
  - [ ] Verificar en producción
  - [ ] Monitor performance metrics
  - [ ] Monitor error tracking
  - [ ] Recopilar feedback de usuarios

### Fase 8: Limpieza
- [ ] **Eliminar código legacy**
  - [ ] Remover `src/components/product/slider.tsx`
  - [ ] Desinstalar Swiper.js si no se usa en otro lugar
  - [ ] Limpiar estilos no usados en page.scss
  - [ ] Remover imports no utilizados

- [ ] **Documentación**
  - [ ] Actualizar README si es necesario
  - [ ] Documentar nuevos componentes
  - [ ] Ejemplos de uso
  - [ ] Guía de estilos

---

## 📊 Métricas de Éxito

### Cuantitativas
- [ ] Bundle size reducido en >60% (de ~50KB a <20KB)
- [ ] LCP mejorado en >10%
- [ ] Lighthouse Performance score >90
- [ ] 0 violaciones de accesibilidad (axe-core)
- [ ] Test coverage >80%

### Cualitativas
- [ ] Funcionalidad de zoom implementada y funcional
- [ ] Estética minimalista mantenida
- [ ] Navegación fluida y responsive
- [ ] Feedback positivo del equipo/usuarios

---

## 🔄 Plan de Rollback

Si surgen problemas críticos:

1. **Identificar el problema**
   - Error en producción
   - Performance degradado
   - UX negativo

2. **Rollback inmediato**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

3. **Restaurar componente anterior**
   - Mantener `slider.tsx` en rama separada
   - Reinstalar Swiper.js si es necesario
   - Restaurar estilos anteriores

4. **Análisis post-mortem**
   - Documentar qué falló
   - Plan de corrección
   - Re-testing antes de re-deploy

---

## 📚 Recursos y Referencias

### Documentación
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [React Medium Image Zoom](https://github.com/rpearce/react-medium-image-zoom)
- [Web Vitals](https://web.dev/vitals/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Herramientas
- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [ImageOptim](https://imageoptim.com/) para optimización manual

---

## ⏱️ Estimación de Tiempo

| Fase | Estimación |
|------|------------|
| Fase 1: Preparación | ✅ Completada |
| Fase 2: Desarrollo | 8-12 horas |
| Fase 3: Estilos | 4-6 horas |
| Fase 4: Optimización | 3-4 horas |
| Fase 5: Testing | 6-8 horas |
| Fase 6: QA | 4-5 horas |
| Fase 7: Deployment | 2-3 horas |
| Fase 8: Limpieza | 2-3 horas |
| **TOTAL** | **29-41 horas** |

---

## 👥 Stakeholders y Aprobaciones

- [ ] Plan revisado por: _________________
- [ ] Diseño aprobado por: _________________
- [ ] Performance targets acordados: _________________
- [ ] Fecha objetivo de deployment: _________________

---

## 📝 Notas Adicionales

- Mantener compatibilidad con SSR/SSG de Next.js 16
- Asegurar que funciona con datos de Strapi CMS
- Considerar internacionalización (i18n) en labels
- Documentar cualquier breaking change
- Mantener backward compatibility si es posible

---

**Documento creado:** 2025-11-27
**Última actualización:** 2025-11-27
**Versión:** 1.0
**Autor:** Claude Code Assistant
