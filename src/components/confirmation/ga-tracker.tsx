'use client'

import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'
import { productsGABuilder } from '@/utils/helpers'

interface GATrackerProps {
  transactionStatus: string
  txId: string
  total: number
  products: any[]
  state: string
}

export const GATracker = ({ 
  transactionStatus, 
  txId, 
  total, 
  products, 
  state 
}: GATrackerProps) => {
  useEffect(() => {
    const eventMapping = {
      'approved': 'purchase',
      'rejected': 'purchase_failed',
      'failed': 'purchase_failed',
      'pending': 'purchase_pending',
      'cancelled': 'purchase_cancelled',
      'expired': 'purchase_failed',
      'in_process': 'purchase_pending'
    }

    const eventName = eventMapping[transactionStatus]

    if (eventName) {
      const items = productsGABuilder(products)

      const gaData: any = {
        transaction_id: txId,
        value: total,
        currency: 'COP',
        items
      }

      if (eventName !== 'purchase') {
        gaData.failure_reason = transactionStatus
        gaData.status = state
      }

      try {
        sendGAEvent('event', eventName, gaData)
      } catch (error) {
        console.error('Error al enviar evento a Google Analytics:', error)
      }
    }
  }, [transactionStatus, txId, total, products, state])

  // Este componente no renderiza nada visual
  return null
} 