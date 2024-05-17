'use client'

import Link from 'next/link'
import React from 'react'

export const Buttons = () => (
    <div className="shop-details-btn">
      <Link className="primary-btn1 hover-btn3" href="/shop/cart">
        Add to Cart
      </Link>
      <Link className="primary-btn1 style-3 hover-btn4" href="/checkout">
        Buy Now
      </Link>
    </div>
  )
