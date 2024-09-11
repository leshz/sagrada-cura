/* eslint-disable react/jsx-no-useless-fragment */

'use client'

import { sendGAEvent } from '@next/third-parties/google'

const EventsGa = ({ event, data }) => {
  sendGAEvent('event', event, data)
  return <></>
}

export { EventsGa }
