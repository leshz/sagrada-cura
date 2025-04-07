import { GoogleAnalytics } from '@next/third-parties/google'

const Analytics = () => (
  <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} debugMode={process.env.NODE_ENV === 'development'} />
)

export { Analytics }
