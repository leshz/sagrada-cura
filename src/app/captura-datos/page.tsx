'use client'

import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { submitClientData } from '@/services/client-data'

// Schema de validación para el formulario
const clientDataSchema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  phone: yup
    .string()
    .matches(/^3\d{9}$/, { message: 'Teléfono inválido' })
    .required('El teléfono es requerido'),
  email: yup.string().email('Email inválido').required('El email es requerido'),
  dataPolicyAccepted: yup.boolean().oneOf([true], 'Debes aceptar las políticas de datos').required('Debes aceptar las políticas de datos')
})

// Valores iniciales del formulario
const initialValues = {
  name: '',
  phone: '',
  email: '',
  dataPolicyAccepted: false
}

const ClientDataCapture = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: clientDataSchema,
    onSubmit: async (values, actions) => {
      setIsSubmitting(true)
      
      try {
        // Enviar datos usando el servicio
        const response = await submitClientData(values)
        
        if (response.success) {
          toast.success('¡Datos enviados exitosamente! Te contactaremos pronto.')
          actions.resetForm()
        } else {
          toast.error(response.message || 'Error al enviar los datos. Por favor intenta nuevamente.')
        }
      } catch (error) {
        toast.error('Error al enviar los datos. Por favor intenta nuevamente.')
        console.error('Error:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  })

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue
  } = formik

  return (
    <main id="main-content">
      <section className="client-data-capture">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="capture-form-wrapper">
                <div className="form-header text-center mb-5">
                  <h1 className="section-title">Captura de Datos</h1>
                  <p className="section-subtitle">
                    Completa el siguiente formulario para que podamos contactarte y brindarte la mejor atención
                  </p>
                </div>

                <div className="form-container">
                  <form onSubmit={handleSubmit} className="client-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-inner required">
                          <label
                            htmlFor="name"
                            className={errors.name && touched.name ? 'input-error' : ''}
                          >
                            Nombre completo*
                            <input
                              id="name"
                              type="text"
                              name="name"
                              placeholder="Tu nombre completo"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              className={errors.name && touched.name ? 'error' : ''}
                            />
                            {errors.name && touched.name && (
                              <span className="error-message">{errors.name}</span>
                            )}
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-inner required">
                          <label
                            htmlFor="phone"
                            className={errors.phone && touched.phone ? 'input-error' : ''}
                          >
                            Teléfono*
                            <input
                              id="phone"
                              type="tel"
                              name="phone"
                              placeholder="Ej: 3001234567"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              className={errors.phone && touched.phone ? 'error' : ''}
                            />
                            {errors.phone && touched.phone && (
                              <span className="error-message">{errors.phone}</span>
                            )}
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-inner required">
                          <label
                            htmlFor="email"
                            className={errors.email && touched.email ? 'input-error' : ''}
                          >
                            Correo electrónico*
                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="tu@email.com"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className={errors.email && touched.email ? 'error' : ''}
                            />
                            {errors.email && touched.email && (
                              <span className="error-message">{errors.email}</span>
                            )}
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-inner checkbox-field">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              name="dataPolicyAccepted"
                              checked={values.dataPolicyAccepted}
                              onChange={(e) => setFieldValue('dataPolicyAccepted', e.target.checked)}
                              className={errors.dataPolicyAccepted && touched.dataPolicyAccepted ? 'error' : ''}
                            />
                            <span className="checkmark"></span>
                            <span className="checkbox-text">
                              Autorizo el uso de mis datos personales de acuerdo con las{' '}
                              <a href="/politicas" target="_blank" rel="noopener noreferrer">
                                políticas de datos
                              </a>
                              *
                            </span>
                          </label>
                          {errors.dataPolicyAccepted && touched.dataPolicyAccepted && (
                            <span className="error-message">{errors.dataPolicyAccepted}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-submit">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Enviando...' : 'Enviar datos'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ClientDataCapture