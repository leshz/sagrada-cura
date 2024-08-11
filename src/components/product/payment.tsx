import { paymentMethods } from '@/mock/payment-methods'
import { ImageWrapper } from '@/components/Image'

const PaymentsInformation = ({ message }) => (
  <div className="payment-method">
    <h6>{message}</h6>
    <ul className="payment-card-list">
      {paymentMethods.map(method => {
        const { id, status, secure_thumbnail } = method

        if (status === 'active') {
          return (
            <li key={id}>
              <ImageWrapper
                image={secure_thumbnail}
                className="payment-method-image"
                width={39}
                height={26}
              />
            </li>
          )
        }
        return null
      })}
    </ul>
  </div>
)

export { PaymentsInformation }
