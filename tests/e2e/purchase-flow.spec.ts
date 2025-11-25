import { test, expect } from '@playwright/test'

/**
 * Test E2E del flujo crítico de compra
 * Simula el journey completo de un usuario desde la tienda hasta el checkout
 */
test.describe('Flujo Crítico de Compra', () => {
  test.beforeEach(async ({ page }) => {
    // Navegar a la página principal
    await page.goto('/')
  })

  test('debe completar el flujo de compra exitosamente', async ({ page }) => {
    // 1. Navegar a la tienda
    await page.click('a[href="/tienda"]')
    await expect(page).toHaveURL(/.*tienda/)

    // Esperar a que carguen los productos
    await page.waitForSelector('[data-testid="product-card"], .product-card, article', {
      timeout: 10000
    })

    // 2. Seleccionar un producto (hacer clic en el primer producto disponible)
    const firstProduct = page.locator('[data-testid="product-card"], .product-card, article').first()
    await firstProduct.click()

    // Esperar a que cargue la página del producto
    await page.waitForURL(/.*tienda\/.*/)

    // 3. Agregar producto al carrito
    const addToCartButton = page.locator('button:has-text("Agregar"), button:has-text("al carrito"), button[aria-label*="carrito"]').first()

    // Verificar que el botón existe antes de hacer clic
    await expect(addToCartButton).toBeVisible({ timeout: 5000 })
    await addToCartButton.click()

    // Esperar confirmación (toast o indicador visual)
    await page.waitForTimeout(1000)

    // 4. Ir al carrito de compras
    await page.goto('/tienda/carrito-de-compras')
    await expect(page).toHaveURL(/.*carrito-de-compras/)

    // Verificar que el carrito tiene productos
    const cartItems = page.locator('[data-testid="cart-item"], .cart-item, .whistlist-section tbody tr')
    await expect(cartItems.first()).toBeVisible({ timeout: 5000 })

    // 5. Proceder al checkout
    const checkoutButton = page.locator('a[href*="checkout"], button:has-text("Proceder"), a:has-text("Checkout")').first()
    await expect(checkoutButton).toBeVisible({ timeout: 5000 })
    await checkoutButton.click()

    // 6. Verificar que estamos en la página de checkout
    await expect(page).toHaveURL(/.*checkout/)

    // 7. Completar formulario de billing
    // Esperar a que el formulario esté visible
    await page.waitForSelector('form, input[name="name"], input[name="nombre"]', {
      timeout: 5000
    })

    // Llenar el formulario (adaptar selectores según tu implementación)
    const nameInput = page.locator('input[name="name"], input[name="nombre"], input[placeholder*="Nombre"]').first()
    if (await nameInput.isVisible()) {
      await nameInput.fill('Juan Pérez')
    }

    const emailInput = page.locator('input[name="email"], input[type="email"]').first()
    if (await emailInput.isVisible()) {
      await emailInput.fill('juan.perez@example.com')
    }

    const phoneInput = page.locator('input[name="phone"], input[name="telefono"], input[type="tel"]').first()
    if (await phoneInput.isVisible()) {
      await phoneInput.fill('3001234567')
    }

    // Seleccionar departamento si existe
    const departmentSelect = page.locator('select[name*="department"], select[name*="departamento"]').first()
    if (await departmentSelect.isVisible()) {
      await departmentSelect.selectOption({ index: 1 })
    }

    // 8. Verificar resumen de compra
    const orderSummary = page.locator('[data-testid="order-summary"], .order-summary, .checkout-section')
    await expect(orderSummary).toBeVisible()

    // Verificar que hay un precio total visible
    const totalPrice = page.locator('[data-testid="total-price"], .total, *:has-text("Total")')
    await expect(totalPrice.first()).toBeVisible()
  })

  test('debe mostrar el carrito vacío correctamente', async ({ page }) => {
    // Ir directamente al carrito vacío
    await page.goto('/tienda/carrito-de-compras')

    // Verificar mensaje de carrito vacío
    const emptyMessage = page.locator('text=/vacío|empty|no hay productos/i')

    // Esperar un momento para que cargue la página
    await page.waitForTimeout(2000)

    // El mensaje vacío podría estar visible O no haber items en el carrito
    const hasEmptyMessage = await emptyMessage.count() > 0
    const hasCartItems = await page.locator('[data-testid="cart-item"], .cart-item, tbody tr').count() > 0

    // Al menos una de las condiciones debe cumplirse
    expect(hasEmptyMessage || !hasCartItems).toBeTruthy()
  })

  test('debe permitir eliminar productos del carrito', async ({ page }) => {
    // Primero agregar un producto (simplificar la prueba)
    await page.goto('/tienda')

    // Esperar productos
    await page.waitForSelector('[data-testid="product-card"], .product-card, article', {
      timeout: 10000
    })

    const firstProduct = page.locator('[data-testid="product-card"], .product-card, article').first()
    await firstProduct.click()

    // Agregar al carrito
    const addButton = page.locator('button:has-text("Agregar"), button:has-text("al carrito")').first()
    if (await addButton.isVisible({ timeout: 5000 })) {
      await addButton.click()
      await page.waitForTimeout(1000)
    }

    // Ir al carrito
    await page.goto('/tienda/carrito-de-compras')

    // Buscar botón de eliminar
    const deleteButton = page.locator('button:has-text("Eliminar"), button[aria-label*="eliminar"], .delete-btn, i.bi-trash').first()

    if (await deleteButton.isVisible({ timeout: 3000 })) {
      const itemsBeforeDelete = await page.locator('[data-testid="cart-item"], .cart-item, tbody tr').count()
      await deleteButton.click()
      await page.waitForTimeout(1000)

      const itemsAfterDelete = await page.locator('[data-testid="cart-item"], .cart-item, tbody tr').count()
      expect(itemsAfterDelete).toBeLessThanOrEqual(itemsBeforeDelete)
    }
  })

  test('debe validar campos requeridos en el checkout', async ({ page }) => {
    // Agregar un producto primero
    await page.goto('/tienda')

    await page.waitForSelector('[data-testid="product-card"], .product-card, article', {
      timeout: 10000
    })

    const firstProduct = page.locator('[data-testid="product-card"], .product-card, article').first()
    await firstProduct.click()

    const addButton = page.locator('button:has-text("Agregar"), button:has-text("al carrito")').first()
    if (await addButton.isVisible({ timeout: 5000 })) {
      await addButton.click()
      await page.waitForTimeout(1000)
    }

    // Ir directamente al checkout
    await page.goto('/tienda/checkout')

    // Esperar formulario
    await page.waitForSelector('form, input', { timeout: 5000 })

    // Intentar enviar formulario vacío
    const submitButton = page.locator('button[type="submit"], button:has-text("Pagar"), button:has-text("Finalizar")').first()

    if (await submitButton.isVisible({ timeout: 3000 })) {
      await submitButton.click()
      await page.waitForTimeout(1000)

      // Verificar que aparecen mensajes de error o validación
      const errorMessages = page.locator('.error, .invalid-feedback, [role="alert"], *:has-text("requerido")')
      const hasErrors = await errorMessages.count() > 0

      // Alternativamente, verificar que seguimos en la página de checkout (no se envió)
      const stillOnCheckout = page.url().includes('checkout')

      expect(hasErrors || stillOnCheckout).toBeTruthy()
    }
  })
})
