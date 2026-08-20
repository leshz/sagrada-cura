export const availableIcons = {
  facebook: 'facebook',
  x: 'twitter-x',
  pinteres: 'pinterest',
  instagram: 'instagram',
  tiktok: 'tiktok'
}

export const COLLECTIONS = {
  blogs: '/blogs',
  testimonials: '/testimonials',
  categories: '/strapi-ecommerce-mercadopago/categories',
  products: '/strapi-ecommerce-mercadopago/products',
  invoices: '/strapi-ecommerce-mercadopago/invoices',
  shipment: '/strapi-ecommerce-mercadopago/shipments',
  tags: '/tags'
}

export const PARAMS_CONFIRMATION = {
  COLLECTION_ID: 'collection_id',
  COLLECTION_STATUS: 'collection_status',
  PAYMENT_ID: 'payment_id',
  STATUS: 'status',
  EXTERNAL_REFERENCE: 'external_reference',
  PAYMENT_TYPE: 'payment_type',
  MERCHANT_ORDER_ID: 'merchant_order_id',
  PREFERENCE_ID: 'preference_id',
  SITE_ID: 'site_id',
  PROCESSING_MODE: 'processing_mode',
  MERCHANT_ACCOUNT_ID: 'merchant_account_id'
}

export const PAYMENT_STATUS = {
  APPROVED: 'approved',
  PENDING: 'pending',
  FAILED: 'failed'
}

export const LIST_OF_PRODUCTS = 24

export const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/gm

export const INITIAL_CHECKOUT_FORM = {
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
}

export const ITEM_TYPES = {
  PRODUCT: 'producto',
  SERVICE: 'servicio'
}

// Redes sociales que permanecen activas tras el cierre del sitio.
// Hardcodeadas a propósito: no dependen de Strapi durante la migración v4 → v5.
export const FAREWELL_SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/sagradacura_'
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/people/Sagrada-Cura/61559396086072/'
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@sagradacura'
  }
] as const
