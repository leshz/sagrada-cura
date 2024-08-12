import Link from 'next/link'
import { ImageWrapper } from '@/components/Image'

const CategoryProduct = ({ product }) => {
  const { first_line, second_line, link, image } = product
  return (
    <div className="col-lg-4 col-md-6">
      <div className="choose-product-card hover-img style-2">
        <Link href={link}>
          <ImageWrapper image={image} width={415} height={520} format='medium' />
        </Link>
        <div className="choose-product-card-content">
          {first_line && <h2 className="first-text">{first_line}</h2>}
          {second_line && <h2 className="second-text">{second_line}</h2>}
        </div>
      </div>
    </div>
  )
}

const ChooseProduct = ({ products }) => {
  const { title, categories } = products || {}
  return (
    <div className="choose-product-section mb-110">
      <div className="container">
        <div className="section-title text-center">
          <h3>{title}</h3>
        </div>
        <div className="row gy-4 justify-content-center">
          {categories.map(product => (
            <CategoryProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { ChooseProduct }
