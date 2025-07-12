export const analyticsConfig = {
  errorTracking: {
    enabled: true,
    logToConsole: process.env.NODE_ENV === 'development',
    sendToAnalytics: true
  }
}

export const seoConfig = {
  company: {
    name: 'Sagrada Cura',
    url: 'https://sagradacura.com',
    description: 'Productos naturales para tu bienestar y sanación espiritual',
    locale: 'es-CO',
    country: 'CO'
  },

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

  social: {
    facebook: 'https://www.facebook.com/people/Sagrada-Cura',
    instagram: 'https://www.instagram.com/sagradacura_',
    tiktok: 'https://www.tiktok.com/@sagradacura',
  }
} 