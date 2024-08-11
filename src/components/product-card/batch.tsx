import type { Promotion } from '@/types/products'

type Props = {
  info: Promotion | undefined
}

const Batch = ({ info }: Props) => {
  const {
    with_discount,
    best_seller,
    discount_tag,
    new: newTag,
    recommended
  } = info || {}

  const show = best_seller || newTag || recommended || with_discount

  if (show) {
    return (
      <div className="batch">
        <span>{discount_tag}</span>
      </div>
    )
  }
  return null
}

export { Batch }
