import { Suspense } from 'react'
import { Confirmation } from '@/components/confirmation'
import { ColorBar } from '@/components/color-bar'

const Page = () => (
  <Suspense>
    <ColorBar  status="success"/>
    <Confirmation />
  </Suspense>
)

export default Page
