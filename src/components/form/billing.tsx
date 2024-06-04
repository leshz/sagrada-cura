'use client'

import { useFormik } from 'formik'
import departments from '@/mock/departments.json'

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
  const { colombia } = departments
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async () => {}
  })

  const renderOptions = (departmentName: string) => {
    const getcities = colombia.find(
      department => department.departamento === departmentName
    )

    const cities = getcities?.ciudades || []

    return cities.map((city, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <option key={index} value={city} label={city} />
    ))
  }

  return (
    <div className="form-wrap mb-30">
      <h4>Detalles de facturación</h4>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-inner required">
              <label htmlFor="name">
                Nombres*
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Tus nombres"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inner">
              <label htmlFor="lastName">
                Apellidos*
                <input
                  required
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Tu apellido"
                />
              </label>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-inner required">
              <label htmlFor="dni">
                Cedula*
                <input
                  id="dni"
                  type="number"
                  name="dni"
                  placeholder="Cedula de cuidadania"
                  min={0}
                  inputMode="numeric"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.dni}
                />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="country">
                Pais / Region
                <input type="text" readOnly name="country" value="Colombia" />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="address">
                Dirección*
                <input
                  required
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Dirección de la calle,apartamento, habitación, etc."
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="department">
                Departamento*
                <select
                  required
                  id="department"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="department">
                Ciudad*
                <select
                  required
                  id="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" label="Elige una opcion" />
                  {renderOptions(formik.values.department)}
                </select>
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="postalCode">
                Codigo postal
                <input
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  placeholder="Codigo postal "
                  onChange={formik.handleChange}
                  value={formik.values.postalCode}
                />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="phone">
                Telefono celular*
                <input
                  required
                  id="phone"
                  type="number"
                  name="phone"
                  min={0}
                  inputMode="numeric"
                  placeholder="Numero de telefono"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="email">
                Email*
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label htmlFor="message">
                Notas sobre el pedido
                <textarea
                  id="message"
                  name="message"
                  placeholder="Notas sobre el pedido, por ejemplo, notas especiales para la entrega."
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="place-order-btn">
              <button type="submit" className="primary-btn1 hover-btn3">
                Realizar pedido
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export { BillingForm }
