module.exports = (api) => {
  const file = api.file || ''
  const isCSSModule = file.includes('.module.')

  return {
    plugins:
      process.env.NODE_ENV === 'production' && !isCSSModule
        ? [
            [
              '@fullhuman/postcss-purgecss',
              {
                content: [
                  './src/**/*.{js,jsx,ts,tsx}',
                  './src/app/**/*.{js,jsx,ts,tsx}',
                  './src/components/**/*.{js,jsx,ts,tsx}'
                ],
                defaultExtractor: (content) => {
                  const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                  const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                  return broadMatches.concat(innerMatches)
                },
                safelist: {
                  standard: [
                    /^swiper/,
                    /^bi-/,
                    /^btn/,
                    /^alert/,
                    /^badge/,
                    /^card/,
                    /^nav/,
                    /^modal/,
                    /^dropdown/,
                    /^collapse/,
                    /^carousel/,
                    /^fade/,
                    /^show/,
                    /^active/,
                    /^disabled/,
                    /^form/,
                    /^input/,
                    /^container/,
                    /^row/,
                    /^col/,
                    /^toast/,
                    /^Toastify/,
                    // Clases de nuestros componentes personalizados
                    /^newsletter/,
                    /^testimonial/,
                    /^faq/,
                    /^range/,
                    /^instagram/,
                    /^gift/,
                    /^banner-2/,
                    /^top-bar2/,
                    /^section-title3/,
                    /^primary-btn/,
                    // Product Image Gallery
                    /^product-image-gallery/,
                    /^product-image-main/,
                    /^product-image-wrapper/,
                    /^product-image-zoom/,
                    /^product-image-thumbnail/,
                    /^product-image-placeholder/
                  ],
                  deep: [/react-toastify/],
                  greedy: [/^swiper-/, /^bi-/]
                },
                variables: true
              }
            ]
          ]
        : []
  }
}
