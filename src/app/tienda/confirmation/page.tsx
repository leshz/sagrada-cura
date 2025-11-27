import { ConfirmationCard } from '@/components/confirmation'
import { ColorBar } from '@/components/color-bar'
import { confirmation } from '@/types/confirmation'
import { getCollections } from '@/services/collections'
import { COLLECTIONS } from '@/utils/constants'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Confirmación',
  description: 'Confirmación de compra - Sagrada Cura',
  alternates: {
    canonical: 'https://sagradacura.com/tienda/confirmation'
  },
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: 'Confirmación',
    url: `https://sagradacura.com/tienda/confirmation`,
    type: 'website'
  }
})

const Confirmation = async ({
  searchParams
}: {
  searchParams: Promise<confirmation>
}) => {
  const { status, external_reference } = await searchParams

  const invoice = await getCollections<any>(COLLECTIONS.invoices, {
    slug: external_reference,
    fetch: { cache: 'no-store' }
  })

  const { data: { payment_status } } = invoice

  return (
    <>
      <ColorBar status={status || payment_status} />
      <ConfirmationCard result={searchParams} invoice={invoice} />
    </>
  )
}

export default Confirmation
