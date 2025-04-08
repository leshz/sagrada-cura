'use client'

import { useFormik } from 'formik'
import { contactFormSchema } from '@/schema/form'
import { sendContactForm } from '@/services';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ContactForm = () => {
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

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
      message: '',
      termsAccepted: false
    },
    validationSchema: contactFormSchema,
    onSubmit: async (data) => {
      const response = await sendContactForm(data);
      if (response) {
        setSuccessfulSubmit(true);
      } else {
        toast('😓 Puedes intentar de nuevo en unos minutos o escribirnos directamente a cx@sagradacura.com', {
          toastId: 'error',
          type: 'error'
        });
      }
    }
  });

  if (successfulSubmit) {
    return (
      <div className="inquiry-form mt-40">
        <div className="section-title mt-40">
          <div className="success-message">
            <h3>😊 Gracias por contactarnos</h3>
            <h4>
              nos pondremos en contacto contigo en la brevedad
            </h4>
          </div>
        </div>
      </div>
    );
  }

  return (<div className="inquiry-form">
    <div className="section-title mb-20">
      <h4>¡Escríbenos cuando quieras!</h4>
    </div>
    <form onSubmit={handleSubmit} autoComplete="on">
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
            <label htmlFor='email'
              className={errors.email && touched.email ? 'input-error' : ''}
            >Email
              <input
                type="email"
                id='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="x@gmail.com" />
              {errors.email && touched.email && <span>{errors.email}</span>}
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner mb-20">
            <label htmlFor='subject'
              className={errors.subject && touched.subject ? 'input-error' : ''}
            >Asunto*
              <input
                id='subject'
                type="text"
                placeholder="Cuéntanos el motivo de tu mensaje"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              {errors.subject && touched.subject && <span>{errors.subject}</span>}
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner mb-30">
            <label htmlFor='message'
              className={errors.message && touched.message ? 'input-error' : ''}
            >Mensaje*
              <textarea id='message'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="¿Qué te gustaría compartir con nosotros?" />
              {errors.message && touched.message && <span>{errors.message}</span>}
            </label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-inner mb-20">
            <label
              htmlFor="termsAccepted"
              className={errors.termsAccepted && touched.termsAccepted ? 'input-error' : ''}
            >
              <div className="checkbox-wrapper">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  name="termsAccepted"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.termsAccepted}
                />
                <span>Acepto la <a href="/politicas/tratamiento-de-datos" target="_blank">politica de tratamiento de datos</a></span>
              </div>
              {errors.termsAccepted && touched.termsAccepted && <span>{errors.termsAccepted}</span>}
            </label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-inner">
            <button
              disabled={isSubmitting}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              type="submit"
              className="primary-btn3 hover-btn5">
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
              Enviar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  );
}

export { ContactForm }