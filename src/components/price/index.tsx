import { currencyFormat } from '@/utils/helpers'

const Price = ({ price, discountPrice = 0, with_discount = false }) => {
  const finalPrice = with_discount ? discountPrice : price
  return (
    <p className="price">
      {currencyFormat.format(finalPrice)}
      {with_discount && <del>{currencyFormat.format(price)}</del>}
    </p>
  )
}

export { Price }
