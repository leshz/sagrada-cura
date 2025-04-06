'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import {
  currencyFormat,
  getConfirmationCopys,
  dateFormat,
  productsGABuilder
} from '@/utils/helpers'
import { sendGAEvent } from '@next/third-parties/google'
import { IconAnimation } from './animation'


import './style.scss'

const ConfirmationCard = ({ result, invoice }) => {
  const { payment_id, status } = result
  const {
    data: { total = 0, createdAt, products }
  } = invoice

  const { title, subtitle, state } = getConfirmationCopys(status)

  const items = productsGABuilder(products)

  useEffect(() => {
    const gaData = {
      transaction_id: payment_id,
      value: total,
      currency: 'COP',
      items
    }

    if (status === 'approved') {
      sendGAEvent('event', 'purchase', gaData)
    }
  }, [status])


  return (
    <div className="d-flex flex-column align-items-center flex-wrap justify-content-center min-vh-10">
      <div className="confirmation-card shadow">
        <div className="d-flex flex-column flex-wrap align-items-center">
          <IconAnimation status={status} />
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="bg-light rounded-lg p-4 w-100 mb-6">
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="text-muted">Fecha:</span>
              <span className="font-weight-medium">
                {dateFormat(createdAt, 'MMMM D, YYYY h:mm a')}
              </span>
            </div>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="text-muted">ID del pedido:</span>
              <span className="font-weight-medium">{payment_id}</span>
            </div>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="text-muted">Estado del pago:</span>
              <span className={`font-${status}`}>{state}</span>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <span className="text-muted">Monto total:</span>
              <span className="font-weight-medium">
                {currencyFormat.format(total)}
              </span>
            </div>
          </div>
          <div className="d-flex gap-4 mt-40 w-100 flex-wrap buttons-wrap">
            <button
              type="button"
              className="primary-btn3 black-bg hover-btn5 hover-white"
            >
              Imprimir recibo
            </button>
            <Link href="/" className="primary-btn3 hover-btn5">
              Volver a la tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ConfirmationCard }
