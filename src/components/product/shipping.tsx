import React from 'react'

const ShippingInfo = () => (
  <ul className="product-shipping-delivers">
    <li className="product-shipping">
      <i className="bi bi-truck" />
      Free worldwide shipping on all orders over $100
    </li>
    <li className="product-delivers">
      <i className="bi bi-box2-heart" />
      <p>
        Delivers in: 3-7 Working Days <a href="#">Shipping &amp; Return</a>
      </p>
    </li>
  </ul>
)

export { ShippingInfo }
