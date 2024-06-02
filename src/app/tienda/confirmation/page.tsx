'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Pepe = () => {
  const params = useSearchParams()
  const parapapam: any = {}

  params.forEach((value, key) => {
    parapapam[key] = value
  })

  return (
    <div className="container">
      <h1>Confirmation is {parapapam?.status}</h1>

      <pre>{JSON.stringify(parapapam, null, 4)} </pre>
    </div>
  )
}

const Confirmation = () => (
  <Suspense>
    <Pepe />
  </Suspense>
)

export default Confirmation
