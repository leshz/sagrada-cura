import Link from 'next/link'
import {
  currencyFormat,
  getConfirmationCopies, dateFormat
} from '@/utils/helpers'
import { IconAnimation } from './animation'
import { GATracker } from './ga-tracker'

import './style.scss'

const ConfirmationCard = ({ result, invoice }) => {
  const { status, external_reference } = result

  const {
    data: { total = 0, createdAt, products, payment_status, id, preference_id = '' }
  } = invoice

  const initialPreferenceId = preference_id.match(/^[^-]+/)
  const transactionStatus = status || payment_status
  const txId = `${external_reference || id}${initialPreferenceId ? `-${initialPreferenceId[0]}` : ''}`
  const { title, subtitle, state } = getConfirmationCopies(transactionStatus)

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
                {dateFormat(createdAt, 'MMMM D, YYYY h:mm a')}
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

      <GATracker
        transactionStatus={transactionStatus}
        txId={txId}
        total={total}
        products={products}
        state={state}
      />
    </div>
  )
}

export { ConfirmationCard }
