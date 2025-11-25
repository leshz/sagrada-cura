import { Product } from '@/types/types'

export const mockProduct: Product = {
  id: '1',
  attributes: {},
  name: 'Aceite Esencial de Lavanda',
  price: 45000,
  slug: 'aceite-lavanda',
  stock: 10,
  sku: 'LAV-001',
  type: 'producto',
  middle_description: 'Aceite esencial puro de lavanda para aromaterapia',
  short_description: 'Aceite de lavanda 100% natural',
  promotion: {
    id: 1,
    with_discount: false,
    price_with_discount: null,
    recommended: true,
    best_seller: false,
    new: null,
    discount_tag: null
  },
  categories: {
    data: [
      {
        id: 1,
        attributes: {
          name: 'Aromaterapia',
          slug: 'aromaterapia'
        }
      }
    ]
  }
}

export const mockProductWithDiscount: Product = {
  id: '2',
  attributes: {},
  name: 'Set de Velas Aromáticas',
  price: 60000,
  slug: 'set-velas-aromaticas',
  stock: 5,
  sku: 'VEL-002',
  type: 'producto',
  middle_description: 'Set de 3 velas aromáticas naturales',
  short_description: 'Velas aromáticas naturales',
  promotion: {
    id: 2,
    with_discount: true,
    price_with_discount: 48000,
    recommended: false,
    best_seller: true,
    new: null,
    discount_tag: '20% OFF'
  },
  categories: {
    data: [
      {
        id: 2,
        attributes: {
          name: 'Velas',
          slug: 'velas'
        }
      }
    ]
  }
}

export const mockService: Product = {
  id: '3',
  attributes: {},
  name: 'Consulta de Tarot',
  price: 35000,
  slug: 'consulta-tarot',
  stock: 100,
  sku: 'TAR-001',
  type: 'servicio',
  middle_description: 'Lectura de tarot personalizada',
  short_description: 'Consulta tarot 30 min',
  promotion: {
    id: 3,
    with_discount: false,
    price_with_discount: null,
    recommended: true,
    best_seller: true,
    new: null,
    discount_tag: null
  },
  categories: {
    data: [
      {
        id: 3,
        attributes: {
          name: 'Servicios',
          slug: 'servicios'
        }
      }
    ]
  }
}

export const mockProducts = [mockProduct, mockProductWithDiscount, mockService]
