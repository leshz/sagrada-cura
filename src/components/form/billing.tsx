'use client'

import { useFormik } from 'formik'
import departments from '@/mock/departments.json'
import { formSchema } from '@/schema/form'
import { useStore } from '@/store'
import { checkout } from '@/services'
import { useRouter } from 'next/navigation'

const initialValues = () => ({
  dni: '',
  name: '',
  lastName: '',
  address: '',
  department: '',
  city: '',
  postalCode: '',
  phone: '',
  email: '',
  message: ''
})

const BillingForm = () => {
  const { cart, resetCart } = useStore()
  const router = useRouter()
  const { colombia } = departments
  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting
  } = useFormik({
    initialValues: initialValues(),
    validationSchema: formSchema,
    onSubmit: async (valSubmit, actions) => {
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

      const { init_point } = await checkout({ items, buyer, ship })

      actions.resetForm()
      resetCart()
      router.push(init_point)
    }
  })

  const renderOptions = (departmentName: string) => {
    const getcities = colombia.find(
      department => department.departamento === departmentName
    )
    const cities = getcities?.ciudades || []
    return cities.map((city, index) => (
      <option key={`${index + 1}-city`} value={city} label={city} />
    ))
  }

  return (
    <div className="form-wrap mb-30">
      <form onSubmit={handleSubmit} method="POST">
        <fieldset>
          <legend>Detalles de facturación</legend>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-inner required">
                <label
                  htmlFor="name"
                  className={errors.name && touched.name ? 'input-error' : ''}
                >
                  Nombres*
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Tus nombres"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && <span>{errors.name}</span>}
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner">
                <label
                  htmlFor="lastName"
                  className={
                    errors.lastName && touched.lastName ? 'input-error' : ''
                  }
                >
                  Apellidos*
                  <input
                    required
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Tu apellido"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName && (
                    <span>{errors.lastName}</span>
                  )}
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner required">
                <label
                  htmlFor="dni"
                  className={errors.dni && touched.dni ? 'input-error' : ''}
                >
                  Cedula*
                  <input
                    id="dni"
                    type="number"
                    name="dni"
                    placeholder="Cedula de cuidadania"
                    min={0}
                    inputMode="numeric"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dni}
                  />
                  {errors.dni && touched.dni && <span>{errors.dni}</span>}
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner">
                <label
                  htmlFor="email"
                  className={errors.email && touched.email ? 'input-error' : ''}
                >
                  Email*
                  <input
                    required
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && <span>{errors.email}</span>}
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner">
                <label
                  htmlFor="phone"
                  className={errors.phone && touched.phone ? 'input-error' : ''}
                >
                  Telefono celular*
                  <input
                    required
                    id="phone"
                    type="number"
                    name="phone"
                    min={0}
                    inputMode="numeric"
                    placeholder="Numero de telefono"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone && <span>{errors.phone}</span>}
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Detalles de envio</legend>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-inner">
                <label htmlFor="country">
                  Pais / Region
                  <input type="text" readOnly name="country" value="Colombia" />
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner">
                <label
                  htmlFor="department"
                  className={
                    errors.department && touched.department ? 'input-error' : ''
                  }
                >
                  Departamento*
                  <select
                    required
                    id="department"
                    value={values.department}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Elige una opcion" />
                    {colombia.map(({ id, departamento }) => (
                      <option
                        key={id}
                        value={departamento}
                        label={departamento}
                      />
                    ))}
                  </select>
                  {errors.department && touched.department && (
                    <span>{errors.department}</span>
                  )}
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner">
                <label
                  htmlFor="department"
                  className={errors.city && touched.city ? 'input-error' : ''}
                >
                  Ciudad*
                  <select
                    required
                    id="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Elige una opcion" />
                    {renderOptions(values.department)}
                  </select>
                  {errors.city && touched.city && <span>{errors.city}</span>}
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner">
                <label
                  htmlFor="address"
                  className={
                    errors.address && touched.address ? 'input-error' : ''
                  }
                >
                  Dirección*
                  <input
                    required
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Dirección de la calle,apartamento, habitación, etc."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {errors.address && touched.address && (
                    <span>{errors.address}</span>
                  )}
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner">
                <label
                  htmlFor="postalCode"
                  className={
                    errors.postalCode && touched.postalCode ? 'input-error' : ''
                  }
                >
                  Codigo postal
                  <input
                    id="postalCode"
                    type="text"
                    name="postalCode"
                    placeholder="Codigo postal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postalCode}
                  />
                  {errors.postalCode && touched.postalCode && (
                    <span>{errors.postalCode}</span>
                  )}
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner">
                <label
                  htmlFor="message"
                  className={
                    errors.message && touched.message ? 'input-error' : ''
                  }
                >
                  Notas sobre el pedido
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Notas sobre el pedido, por ejemplo, notas especiales para la entrega."
                    rows={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && touched.message && (
                    <span>{errors.message}</span>
                  )}
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="place-order-btn">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="primary-btn3 hover-btn5"
                >
                  Realizar pedido
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export { BillingForm }
