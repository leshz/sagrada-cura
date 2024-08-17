import { checkout } from '@/services'

export const submitForm = async (
  valSubmit,
  actions,
  cart,
  resetCart,
  router
) => {
  const {
    dni,
    name,
    lastName,
    address,
    department,
    city,
    postalCode,
    phone,
    email,
    message
  } = valSubmit
  const items = cart.map(({ sku, quantityCart }) => ({
    sku,
    quantity: quantityCart
  }))

  const buyer = {
    dni,
    name,
    lastName,
    email,
    phone
  }
  const ship = {
    address,
    department,
    city,
    postalCode,
    message
  }
  try {
    const { init_point } = await checkout({ items, buyer, ship })
    actions.resetForm()
    resetCart()
    router.push(init_point)
  } catch (e) {
    console.log(e)
  }
}
