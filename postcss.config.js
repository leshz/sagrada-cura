module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './src/**/*.{js,jsx,ts,tsx}',
              './src/app/**/*.{js,jsx,ts,tsx}',
              './src/components/**/*.{js,jsx,ts,tsx}'
            ],
            defaultExtractor: (content) => {
              // Capture as many selectors as possible, including alphanumeric and special characters
              const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
              const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

              return broadMatches.concat(innerMatches)
            },
            safelist: {
              // Safelist Bootstrap classes that might be added dynamically
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
                /^Toastify/
              ],
              deep: [/react-toastify/],
              greedy: [/^swiper-/, /^bi-/]
            },
            // Don't remove CSS variables
            variables: true
          }
        }
      : {}
}
