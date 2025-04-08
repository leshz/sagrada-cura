'use client'

import { useEffect } from 'react'
import { useFormik } from 'formik'
import { formSchema } from '@/schema/form'
import { useStore } from '@/store'
import departmentsList from '@/mock/departments.json'
import { INITIAL_CHECKOUT_FORM } from '@/utils/constants'
import { useRouter } from 'next/navigation'
import { submitForm } from './submit'

const BillingForm = () => {
  const { cart, resetCart, setDepartment, department } = useStore()
  const router = useRouter()
  const { colombia } = departmentsList
  const formik = useFormik({
    initialValues: INITIAL_CHECKOUT_FORM,
    validationSchema: formSchema,
    onSubmit: async (valSubmit, actions) => {
      await submitForm(valSubmit, actions, cart, router, department)
    }
  })

  const renderOptions = (departmentName: string) => {
    const getcities = colombia.find(
      departmentsInfo => departmentsInfo.departamento === departmentName
    )
    const cities = getcities?.ciudades || []
    return cities.map((city, index) => (
      <option key={`${index + 1}-city`} value={city} label={city} />
    ))
  }

  useEffect(() => {
    if (department) {
      setDepartment(null)
    }

    return () => {
      resetCart()
    }
  }, [])

  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting
  } = formik

  return (
    <div className="form-wrap mb-30">
      <form onSubmit={handleSubmit} method="POST" autoComplete="on">
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
                    autoComplete="email"
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
                    onBlur={(e: React.FocusEvent<HTMLSelectElement>) => {
                      const {
                        target: {
                          options: { selectedIndex: selected },
                          options
                        }
                      } = e

                      const id =
                        options[selected].getAttribute('data-id') ?? null
                      setDepartment(Number(id))
                      handleBlur(e)
                    }}
                  >
                    <option value="" label="Elige una opcion" />
                    {colombia.map(({ id, departamento }) => (
                      <option
                        data-id={id}
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
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  {isSubmitting && (
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #fff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}
                    />
                  )}
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
