import { QuantityCounter } from '@/components/quantity-selector'

const OrdenSumary = () => (
  <div className="added-product-summary mb-30">
    <h5>Order Summary</h5>
    <ul className="added-products">
      <li className="single-product">
        <div className="product-area">
          <div className="product-img">
            <img
              src="/assets/img/inner-page/checkout-product-img1.png"
              alt=""
            />
          </div>
          <div className="product-info">
            <h5>
              <a href="#">Brand new Nail Polish</a>
            </h5>
            <div className="product-total">
              <QuantityCounter
                quantity={undefined}
                add={undefined}
                remove={undefined}
                product={undefined}
              />
              <strong>
                <i className="bi bi-x-lg px-2" />
                <span className="product-price">$39.00</span>
              </strong>
            </div>
          </div>
        </div>
        <div className="delete-btn">
          <i className="bx bx-x" />
        </div>
      </li>
      <li className="single-product">
        <div className="product-area">
          <div className="product-img">
            <img
              src="/assets/img/inner-page/checkout-product-img2.png"
              alt=""
            />
          </div>
          <div className="product-info">
            <h5>
              <a href="#">Brand new Face Product</a>
            </h5>
            <div className="product-total">
              <QuantityCounter
                quantity={undefined}
                add={undefined}
                remove={undefined}
                product={undefined}
              />
              <strong>
                {' '}
                <i className="bi bi-x-lg px-2" />
                <span className="product-price">$60.00</span>
              </strong>
            </div>
          </div>
        </div>
        <div className="delete-btn">
          <i className="bx bx-x" />
        </div>
      </li>
      <li className="single-product">
        <div className="product-area">
          <div className="product-img">
            <img
              src="/assets/img/inner-page/checkout-product-img3.png"
              alt=""
            />
          </div>
          <div className="product-info">
            <h5>
              <a href="#">Brand new Shampoo</a>
            </h5>
            <div className="product-total">
              <QuantityCounter
                quantity={undefined}
                add={undefined}
                remove={undefined}
                product={undefined}
              />
              <strong>
                {' '}
                <i className="bi bi-x-lg px-2" />
                <span className="product-price">$40.00</span>
              </strong>
            </div>
          </div>
        </div>
        <div className="delete-btn">
          <i className="bx bx-x" />
        </div>
      </li>
    </ul>
  </div>
)

export { OrdenSumary }
