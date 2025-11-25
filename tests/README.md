# Tests - Sagrada Cura

Este proyecto incluye pruebas unitarias con **Vitest** y pruebas E2E con **Playwright**.

## 📋 Cobertura de Tests

### Tests Unitarios

#### Cart Store (`tests/unit/store/cart/index.test.ts`)
- ✅ Agregar productos al carrito
- ✅ Incrementar cantidad de productos existentes
- ✅ Validación de límite de stock
- ✅ Decrementar y eliminar productos
- ✅ Limpiar carrito completo
- ✅ Gestión de departamento para envío

#### Helpers de Precios (`tests/unit/utils/helpers.test.ts`)
- ✅ Cálculo de precio por producto (con y sin descuento)
- ✅ Cálculo total del carrito
- ✅ Cálculo de precio de envío por departamento
- ✅ Precio total con envío
- ✅ Formateo de teléfono y moneda

#### Servicio Checkout (`tests/unit/services/checkout.test.ts`)
- ✅ Llamada API exitosa
- ✅ Manejo de errores de red
- ✅ Manejo de errores del servidor
- ✅ Validación de formato de datos

### Tests E2E

#### Flujo de Compra (`tests/e2e/purchase-flow.spec.ts`)
- 🛒 Navegación a la tienda
- 🔍 Selección de producto
- ➕ Agregar producto al carrito
- 👁️ Visualización del carrito
- 📝 Completar formulario de checkout
- ✅ Validación de campos requeridos
- 🗑️ Eliminar productos del carrito

## 🚀 Comandos Disponibles

### Tests Unitarios (Vitest)

```bash
# Ejecutar tests en modo watch
yarn test

# Ejecutar tests una sola vez
yarn test:run

# Ver interfaz gráfica de tests
yarn test:ui

# Generar reporte de cobertura
yarn test:coverage
```

### Tests E2E (Playwright)

```bash
# Instalar navegadores (primera vez)
yarn playwright:install

# Ejecutar tests E2E
yarn test:e2e

# Ejecutar con interfaz visual
yarn test:e2e:ui

# Ejecutar con navegador visible
yarn test:e2e:headed
```

## 📁 Estructura

La estructura de tests unitarios **refleja la estructura del proyecto** para facilitar su localización:

```
tests/
├── unit/                   # Tests unitarios (estructura espejo de src/)
│   ├── store/
│   │   └── cart/
│   │       └── index.test.ts      # Tests del store del carrito
│   ├── utils/
│   │   └── helpers.test.ts        # Tests de utilidades de precios
│   └── services/
│       └── checkout.test.ts       # Tests del servicio de checkout
├── e2e/
│   └── purchase-flow.spec.ts      # Test del flujo completo de compra
├── fixtures/
│   ├── products.ts                # Datos mock de productos
│   └── checkout.ts                # Datos mock de checkout y envío
└── setup.ts                       # Configuración de Vitest
```

**Estructura espejo:** Los tests siguen la misma organización que el código fuente:
- `src/store/cart/index.ts` → `tests/unit/store/cart/index.test.ts`
- `src/utils/helpers.ts` → `tests/unit/utils/helpers.test.ts`
- `src/services/checkout.ts` → `tests/unit/services/checkout.test.ts`

## 🔧 Configuración

- **vitest.config.ts** - Configuración de Vitest con soporte para React y TypeScript
- **playwright.config.ts** - Configuración de Playwright para tests E2E

## 📊 Estadísticas

- **40 tests unitarios** ✅
- **4 tests E2E** 🎭
- **Cobertura**: Funciones críticas del flujo de compra

## 🎯 Alcance

Este conjunto de tests cubre las funcionalidades críticas del e-commerce:
- Gestión completa del carrito de compras
- Cálculos de precios y descuentos
- Costos de envío por departamento
- Proceso de checkout
- Flujo completo de compra (E2E)

---

**Nota**: Los tests están diseñados para ser acotados y enfocados en el path crítico de compra del proyecto.
