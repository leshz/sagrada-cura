import { QuantityCounter } from '@/components/quantity-selector'
import { ImageWrapper } from '@/components/Image'
import { Price } from '@/components/price'
import { useStore } from '@/store'
import { productPriceSummary, currencyFormat } from '@/utils/helpers'
import Link from 'next/link'

const WishListItem = ({ product }) => {
  const { price, promotion, pictures, name, slug, quantityCart } = product
  const { price_with_discount, with_discount } = promotion || {}
  const { addToCart, removeToCart, deleteToCart } = useStore()
  const link = `/tienda/${slug}`
  const { finalPrice } = productPriceSummary(product)

  return (
    <tr>
      <td aria-label="delete button">
        <button
          aria-label="borrar producto"
          type="button"
          className="delete-icon"
          onClick={() => deleteToCart(product)}
        >
          <i className="bi bi-x-lg" />
        </button>
      </td>
      <td className="table-product">
        <div className="product-img">
          <ImageWrapper image={pictures[0]} width={100} height={100} />
        </div>
        <div className="product-content">
          <h6>
            <Link href={link}>{name}</Link>
          </h6>
        </div>
      </td>
      <td className='number' aria-label="precio">
        <Price
          price={price}
          with_discount={with_discount}
          discountPrice={price_with_discount}
        />
      </td>
      <td aria-label="cantidad">
        <QuantityCounter
          product={product}
          add={addToCart}
          remove={removeToCart}
          quantity={quantityCart}
        />
      </td>
      <td className='price'  data-label="total">{currencyFormat.format(finalPrice)}</td>
    </tr>
  )
}

export { WishListItem }
