'use client'

import { useEffect } from 'react'

const ErrorComponent = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1 className="text-center">Ups! Algo salio mal</h1>
      <h2 className="text-center">Algo salio mal</h2>
      <button
        type="button"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      >
        Recargar página
      </button>
    </main>
  )
}

export default ErrorComponent
