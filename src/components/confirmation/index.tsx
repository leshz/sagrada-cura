'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import {
  currencyFormat,
  getConfirmationCopies,
  productsGABuilder
} from '@/utils/helpers'
import { sendGAEvent } from '@next/third-parties/google'
import { useDateFormat } from '@/hooks'
import { IconAnimation } from './animation'

import './style.scss'

const ConfirmationCard = ({ result, invoice }) => {
  const { status, external_reference } = result

  const {
    data: { total = 0, createdAt, products, payment_status, id, preference_id = '' }
  } = invoice

  const initialPreferenceId = preference_id.match(/\d{0,}/)

  const transactionStatus = status || payment_status

  const txId = `${external_reference || id}-${initialPreferenceId[0]}`

  const { title, subtitle, state } = getConfirmationCopies(transactionStatus)

  const items = productsGABuilder(products)

  const formattedDate = useDateFormat(createdAt, 'MMMM D, YYYY h:mm a')

  useEffect(() => {
    const eventMapping = {
      'approved': 'purchase',
      'rejected': 'purchase_failed',
      'failed': 'purchase_failed',
      'pending': 'purchase_pending',
      'cancelled': 'purchase_cancelled',
      'expired': 'purchase_failed',
      'in_process': 'purchase_pending'
    }

    const eventName = eventMapping[transactionStatus]

    if (eventName) {

      const gaData: any = {
        transaction_id: txId,
        value: total,
        currency: 'COP',
        items
      }

      if (eventName !== 'purchase') {
        gaData.failure_reason = transactionStatus
        gaData.status = state
      }

      try {
        sendGAEvent('event', eventName, gaData)
      } catch (error) {
        console.error('Error al enviar evento a Google Analytics:', error)
      }

    }
  }, [])


  return (
    <div className="d-flex flex-column align-items-center flex-wrap justify-content-center min-vh-10">
      <div className="confirmation-card shadow">
        <div className="d-flex flex-column flex-wrap align-items-center">
          <IconAnimation status={transactionStatus} />
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="bg-light rounded-lg p-4 w-100 mb-6">
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="text-muted">Fecha:</span>
              <span className="font-weight-medium">
                {formattedDate || 'Cargando...'}
              </span>
            </div>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="text-muted">ID del pedido:</span>
              <span className="font-weight-medium">{txId}</span>
            </div>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="text-muted">Estado del pago:</span>
              <span className={`font-${transactionStatus}`}>{state}</span>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <span className="text-muted">Monto total:</span>
              <span className="font-weight-medium">
                {currencyFormat.format(total)}
              </span>
            </div>
          </div>
          <div className="d-flex gap-4 mt-40 w-100 flex-wrap buttons-wrap">
            {/* TODO: Add print button */}
            {/* <button
              type="button"
              className="primary-btn3 black-bg hover-btn5 hover-white"
              onClick={() => {
                window.print()
              }}
            >
              Imprimir recibo
            </button> */}
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
