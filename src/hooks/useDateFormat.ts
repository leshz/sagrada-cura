import { useState, useEffect } from 'react'
import { dateFormat } from '@/utils/helpers'

export const useDateFormat = (date: string | Date, format: string = 'medium') => {
  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    if (date) {
      try {
        const formatted = dateFormat(date, format)
        setFormattedDate(formatted)
      } catch (error) {
        console.error('Error formateando fecha:', error)
        setFormattedDate('Fecha inválida')
      }
    }
  }, [date, format])

  return formattedDate
} 