'use client'

import { useFormik } from 'formik'
import { contactFormSchema } from '@/schema/form'

const ContactForm = () => {

  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting
  } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: contactFormSchema,
    onSubmit: async () => { }
  })



  return (<div className="inquiry-form">
    <div className="section-title mb-20">
      <h4>¡Escríbenos cuando quieras!</h4>
    </div>
    <form onSubmit={handleSubmit} method="POST" autoComplete="on">
      <div className="row">
        <div className="col-md-12">
          <div className="form-inner required">
            <label
              htmlFor="name"
              className={errors.name && touched.name ? 'input-error' : ''}
            >
              Nombre completo
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nombre completo"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && <span>{errors.name}</span>}
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-inner mb-20">
            <label
              htmlFor="phone"
              className={errors.phone && touched.phone ? 'input-error' : ''}
            >
              Teléfono
              <input
                id="phone"
                type="text"
                placeholder="310 xxx xx xx"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone} />
              {errors.phone && touched.phone && <span>{errors.phone}</span>}
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-inner mb-20">
            <label>Email <span>(Optional)</span></label>
            <input type="email" placeholder="Ex- info@gmail.com" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner mb-20">
            <label>Subject*</label>
            <input type="email" placeholder="Subject" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner mb-30">
            <label>Short Notes*</label>
            <textarea placeholder="Write Something..." defaultValue="" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="col-md-12">
            <div className="form-inner">
              <button type="submit" className="primary-btn3 hover-btn5">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export { ContactForm }