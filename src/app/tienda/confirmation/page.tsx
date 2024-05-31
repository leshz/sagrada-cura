'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Pepe = () => {
  const params = useSearchParams()

  return (
    <div className="container">
      <h1>Confirmation is </h1>

      <pre>{JSON.stringify(params, null, 4)} </pre>
    </div>
  )
}

const Confirmation = () => (
    <Suspense>
      <Pepe />
    </Suspense>
  )

export default Confirmation
