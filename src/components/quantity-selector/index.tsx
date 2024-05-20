'use client'

import React from 'react'

const QuantityCounter = ({ quantity, add, remove, product }) => (
  <div className="quantity-counter">
    <button
      aria-label="menos 1 producto"
      type="button"
      className="quantity__minus"
      onClick={() => {
        remove(product)
      }}
      style={{ cursor: 'pointer' }}
    >
      <i className="bi bi-dash" />
    </button>
    <input
      name="quantity"
      type="text"
      className="quantity__input"
      value={quantity}
      readOnly
    />
    <button
      className="quantity__plus"
      style={{ cursor: 'pointer' }}
      aria-label="menos 1 producto"
      type="button"
      onClick={() => add({product})}
    >
      <i className="bi bi-plus" />
    </button>
  </div>
)

export { QuantityCounter }
