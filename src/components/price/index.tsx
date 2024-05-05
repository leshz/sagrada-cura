import { currencyFormat } from '@/utils/helpers'

const Price = ({ price, discountPrice = 0, with_discount = false }) => {
  const finalPrice = with_discount ? discountPrice : price
  return (
    <div className="price">
      <p>{currencyFormat.format(finalPrice)}
      {with_discount && (
        <span className="discount">
          <del>{currencyFormat.format(price)}</del>
        </span>
      )}
      </p>
    </div>
  )
}

export { Price }
