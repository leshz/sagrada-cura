import type { confirmation } from '@/types/confirmation'
import type { Response } from '@/types/invoice'

export type ConfirmationProps = {
  result: confirmation
  invoice: Response
}
