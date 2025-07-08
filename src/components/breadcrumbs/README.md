# Componente Breadcrumbs Unificado

Este componente reemplaza los anteriores `BlogBreadcrumbs`, `StaticBreadcrumbs` y `ProductBreadcrumbs` en un solo componente flexible.

## Uso

```tsx
import { Breadcrumbs } from '@/components/breadcrumbs'
```

## Props

```typescript
interface BreadcrumbsProps {
  type: 'static' | 'blog' | 'product' | 'custom'
  items?: BreadcrumbItem[]
  currentPage?: string
  tagName?: string
  tagSlug?: string
  categoryName?: string
  categorySlug?: string
  className?: string
}
```

## Ejemplos de Uso

### Breadcrumbs de Blog
```tsx
// Blog simple
<Breadcrumbs type="blog" currentPage="Mi Artículo" />

// Blog con tag
<Breadcrumbs 
  type="blog" 
  currentPage="Mi Artículo" 
  tagName="Tecnología" 
  tagSlug="tecnologia" 
/>
```

### Breadcrumbs de Producto
```tsx
// Producto simple
<Breadcrumbs type="product" currentPage="Mi Producto" />

// Producto con categoría
<Breadcrumbs 
  type="product" 
  currentPage="Mi Producto" 
  categoryName="Electrónicos" 
  categorySlug="electronicos" 
/>
```

### Breadcrumbs Estáticos/Custom
```tsx
<Breadcrumbs 
  type="static" 
  items={[
    { name: 'Inicio', href: '/' },
    { name: 'Sección', href: '/seccion' },
    { name: 'Subsección', href: '/seccion/subseccion' }
  ]}
  currentPage="Página Actual"
/>
```

## Migración desde Componentes Anteriores

### BlogBreadcrumbs → Breadcrumbs
```tsx
// Antes
<BlogBreadcrumbs currentPage="Artículo" tagName="Tag" tagSlug="tag" />

// Ahora
<Breadcrumbs type="blog" currentPage="Artículo" tagName="Tag" tagSlug="tag" />
```

### ProductBreadcrumbs → Breadcrumbs
```tsx
// Antes
<ProductBreadcrumbs productName="Producto" categoryName="Categoría" categorySlug="categoria" />

// Ahora
<Breadcrumbs type="product" currentPage="Producto" categoryName="Categoría" categorySlug="categoria" />
```

### StaticBreadcrumbs → Breadcrumbs
```tsx
// Antes
<StaticBreadcrumbs currentPage="Página" path={items} />

// Ahora
<Breadcrumbs type="static" currentPage="Página" items={items} />
``` 