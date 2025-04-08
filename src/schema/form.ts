import * as yup from 'yup'

const requiredText = 'campo requerido'
const phoneValidation = /^3\d{9}$/

export const formSchema = yup.object().shape({
  name: yup.string().required(requiredText),
  lastName: yup.string().required(requiredText),
  dni: yup.number().integer().positive().required(requiredText),
  department: yup.string().required(requiredText),
  city: yup.string().required(requiredText),
  address: yup.string().required(requiredText),
  postalCode: yup.number().min(6, 'el codigo postal debe tener 6 digitos'),
  phone: yup
    .string()
    .matches(phoneValidation, { message: 'telefono invalido' })
    .required(requiredText),
  email: yup.string().email('Email invalido').required(requiredText),
  message: yup.string()
})

export const contactFormSchema = yup.object().shape({
  name: yup.string().required(requiredText),
  phone: yup
    .string()
    .matches(phoneValidation, { message: 'telefono invalido' })
    .required(requiredText),
  email: yup.string().email('Email invalido').required(requiredText),
  subject: yup.string().required(requiredText),
  message: yup.string().required(requiredText),
  termsAccepted: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones').required('Debes aceptar los términos y condiciones')
})

export const communityFormSchema = yup.object().shape({
  name: yup.string().required(requiredText),
  email: yup.string().email('Email invalido').required(requiredText),
  birthDate: yup.date().required(requiredText),
  gender: yup.string().required(requiredText),
  termsAccepted: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones').required('Debes aceptar los términos y condiciones')
})
