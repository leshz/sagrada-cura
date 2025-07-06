// Configuración de Analytics y Monitoreo
export const analyticsConfig = {
  // Google Search Console
  googleSearchConsole: {
    verificationCode: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION || '',
    enabled: !!process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION
  },

  // Google Analytics
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  },

  // Core Web Vitals
  webVitals: {
    enabled: true,
    logToConsole: process.env.NODE_ENV === 'development',
    sendToAnalytics: true
  },

  // Error Tracking
  errorTracking: {
    enabled: true,
    logToConsole: process.env.NODE_ENV === 'development',
    sendToAnalytics: true
  }
}

// Configuración de SEO
export const seoConfig = {
  // Información de la empresa
  company: {
    name: 'Sagrada Cura',
    url: 'https://sagradacura.com',
    description: 'Productos naturales para tu bienestar y sanación espiritual',
    locale: 'es-CO',
    country: 'CO'
  },

  // Configuración de localización
  localization: {
    defaultLocale: 'es-CO',
    supportedLocales: ['es-CO', 'es'],
    geoLocation: {
      latitude: '4.5709',
      longitude: '-74.2973',
      region: 'CO',
      placename: 'Colombia'
    }
  },

  // Configuración de redes sociales
  social: {
    facebook: '', // Agregar cuando esté disponible
    instagram: '', // Agregar cuando esté disponible
    twitter: '', // Agregar cuando esté disponible
    youtube: '' // Agregar cuando esté disponible
  }
} 