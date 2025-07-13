import { dateFormat } from '@/utils/helpers'

interface FormattedDateProps {
  date: string | Date
  format?: string
  className?: string
  children?: (formattedDate: string) => React.ReactNode
}

export const FormattedDate = ({ 
  date, 
  format = 'medium', 
  className,
  children 
}: FormattedDateProps) => {
  try {
    const formattedDate = dateFormat(date, format)
    
    if (children) {
      return <>{children(formattedDate)}</>
    }
    
    return (
      <span className={className}>
        {formattedDate}
      </span>
    )
  } catch (error) {
    console.error('Error formateando fecha:', error)
    return (
      <span className={className}>
        Fecha inválida
      </span>
    )
  }
} 