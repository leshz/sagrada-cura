import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'

const useGATrack = (event, data) => {
  useEffect(() => {
    const timertrack = setTimeout(() => sendGAEvent('event', event, data), 0)

    return () => clearTimeout(timertrack)
  }, [event, data])
}

export { useGATrack }
