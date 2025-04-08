'use client'

import { useFormik } from 'formik'
import { communityFormSchema } from '@/schema/form'
import { sendCommunityForm } from '@/services';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Link from 'next/link';

const CommunityForm = () => {
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
      email: '',
      birthDate: '',
      gender: '',
      termsAccepted: false
    },
    validationSchema: communityFormSchema,
    onSubmit: async (data) => {
      const response = await sendCommunityForm(data);
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
      <div className="inquiry-form mt-20">
        <div className="section-title mt-40">
          <div className="row">
            <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
              <div className="success-message">
                <h2>😊 😊 😊</h2>
                <h3>Gracias por suscribirte a nuestra comunidad</h3>
              </div>
              <Link href="/" className="primary-btn3 hover-btn5">Volver al Inicio</Link>
            </div>
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
        <div className="col-md-12">
          <div className="form-inner mb-20">
            <label htmlFor='email'
              className={errors.email && touched.email ? 'input-error' : ''}
            >Email
              <input
                type="email"
                id='email'
                name="email"
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
            <label htmlFor='birthDate'
              className={errors.birthDate && touched.birthDate ? 'input-error' : ''}
            >Fecha de nacimiento
              <input
                type="date"
                id='birthDate'
                name="birthDate"
                max={new Date().toISOString().split('T')[0]}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthDate}
              />
              {errors.birthDate && touched.birthDate && <span>{errors.birthDate}</span>}
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner mb-20">
            <label htmlFor='gender'
              className={errors.gender && touched.gender ? 'input-error' : ''}
            >Género
              <select
                id='gender'
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              >
                <option value="">Selecciona una opción</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
                <option value="prefiero_no_decir">Prefiero no decir</option>
              </select>
              {errors.gender && touched.gender && <span>{errors.gender}</span>}
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

export { CommunityForm }