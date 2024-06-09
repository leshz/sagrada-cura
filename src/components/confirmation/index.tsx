import Link from 'next/link'
import { CircleCheckIcon } from './animation'

const Confirmation = () => (
  <div className="d-flex flex-column align-items-center justify-content-center min-vh-10" >
    <div className="bg-white bg-dark text-white shadow rounded-lg p-4 max-w-md w-50">
      <div className="d-flex flex-column align-items-center">
        <CircleCheckIcon className="text-success w-16 h-16 mb-4" />
        <h1 className="h2 font-weight-bold mb-2">¡Gracias por tu compra!</h1>
        <p className="text-muted mb-6">
          Tu pedido ha sido procesado con éxito.
        </p>
        <div className="bg-light bg-dark text-white rounded-lg p-4 w-100 mb-6">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">ID del pedido:</span>
            <span className="font-weight-medium">12345</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Estado del pago:</span>
            <span className="font-weight-medium text-success">Pagado</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">Monto total:</span>
            <span className="font-weight-medium">$99.99</span>
          </div>
        </div>
        <div className="d-flex gap-4 w-100">
          <button type="button" className="flex-fill btn btn-primary">
            Imprimir recibo
          </button>
          <Link href="/" className="btn btn-dark flex-fill">
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Confirmation

export { Confirmation }
