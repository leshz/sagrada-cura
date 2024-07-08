import { ConfirmationCard } from '@/components/confirmation'
import { ColorBar } from '@/components/color-bar'
import { confirmation } from '@/types/confirmation'
import { getColletions } from '@/services/get-colletions'
import { COLLECTIONS } from '@/utils/constants'

const Page = async ({ searchParams }: { searchParams: confirmation }) => {
  const { status, external_reference } = searchParams

  const invoice = await getColletions(COLLECTIONS.invoices, {
    slug: external_reference,
    next: { revalidate: process.env.REVALIDATE_PRODUCTS }
  })

  return (
    <>
      <ColorBar status={status} />
      <ConfirmationCard result={searchParams} invoice={invoice} />
    </>
  )
}

export default Page
