import { Shipment } from '@/types/shipment'

export const mockShipments: Shipment[] = [
  {
    id: 1,
    name: 'Cundinamarca',
    price: 8000,
    code: 'CUN',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 2,
    name: 'Antioquia',
    price: 12000,
    code: 'ANT',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 3,
    name: 'Valle del Cauca',
    price: 15000,
    code: 'VAL',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

export const mockDepartments = [
  { id: 1, code: 'CUN', name: 'Cundinamarca' },
  { id: 2, code: 'ANT', name: 'Antioquia' },
  { id: 3, code: 'VAL', name: 'Valle del Cauca' }
]

export const mockCheckoutResponse = {
  init_point: 'https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=123456',
  invoiceId: 'INV-001',
  collector_id: '123456789',
  preferenceId: 'PREF-123456'
}
