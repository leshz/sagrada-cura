'use client'

import { useSearchParams } from 'next/navigation'

const Confirmation = () => {
  const params = useSearchParams()
  return (
    <div className="container">
      <h1>Confirmation is </h1>

      <pre>{JSON.stringify(params, null, 4)} </pre>
    </div>
  )
}

export default Confirmation
