'use client'

import { useEffect } from 'react'
import Image from 'next/image'

const ErrorComponent = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main
      className="error-pages position-relative d-flex justify-content-evenly align-items-center flex-column "
      style={{ height: '95vh' }}
    >
      <Image
        src="https://strapi-aws-develop-bucket.s3.us-east-2.amazonaws.com/close_up_pattern_veins_leaf_7a06fd7e48.avif"
        fill
        alt="Free pick image"
        className="error-bg"
      />

      <div className="error-message">
        <h1>Ups! 😅</h1>
        <h2>Algo no salio bien </h2>
        <button
          type="button"
          className="primary-btn3 hover-btn5 "
          onClick={() => reset()}
        >
          Recargar página
        </button>
      </div>
    </main>
  )
}

export default ErrorComponent
