import { checkout } from '@/services'
import deparmentList from '@/mock/departments.json'
import { getDepartmentCode, productsGABuilder } from '@/utils/helpers'
import { sendGAEvent } from '@next/third-parties/google'
import { toast } from 'react-toastify'

export const submitForm = async (
  valSubmit,
  actions,
  cart,
  router,
  departmentId
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

  const shipCode = getDepartmentCode(deparmentList.colombia, departmentId)

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
    message,
    type: shipCode
  }
  try {
    const { data: { init_point } } = await checkout({ items, buyer, ship })
    const gaproducts = productsGABuilder(cart)
    sendGAEvent('event', 'begin_checkout', { items: gaproducts })
    actions.resetForm()
    router.push(init_point)
  } catch (e) {
    toast('😓 No podemos generar la orden de pago, intenta más tarde', {
      toastId: 'error',
      type: 'error'
    })
  }
}
