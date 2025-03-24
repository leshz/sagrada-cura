import { ConfirmationCard } from '@/components/confirmation'
import { ColorBar } from '@/components/color-bar'
import { confirmation } from '@/types/confirmation'
import { getCollections } from '@/services/get-collections'
import { COLLECTIONS } from '@/utils/constants'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Confirmación'
})

const Confirmation = async ({
  searchParams
}: {
  searchParams: confirmation
}) => {
  const { status, external_reference } = searchParams

  const invoice = await getCollections(COLLECTIONS.invoices, {
    slug: external_reference,
    fetch: { cache: 'no-store' }
  })

  return (
    <>
      <ColorBar status={status} />
      <ConfirmationCard result={searchParams} invoice={invoice} />
    </>
  )
}

export default Confirmation
