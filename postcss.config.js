module.exports = {
  plugins: []
  // PurgeCSS disabled temporarily for compatibility
  // Will be enabled after Phase 2 completion

  // plugins:
  //   process.env.NODE_ENV === 'production'
  //     ? {
  //         '@fullhuman/postcss-purgecss': {
  //           content: [
  //             './src/**/*.{js,jsx,ts,tsx}',
  //             './src/app/**/*.{js,jsx,ts,tsx}',
  //             './src/components/**/*.{js,jsx,ts,tsx}'
  //           ],
  //           defaultExtractor: (content) => {
  //             const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
  //             const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
  //             return broadMatches.concat(innerMatches)
  //           },
  //           safelist: {
  //             standard: [
  //               /^swiper/,
  //               /^bi-/,
  //               /^btn/,
  //               /^alert/,
  //               /^badge/,
  //               /^card/,
  //               /^nav/,
  //               /^modal/,
  //               /^dropdown/,
  //               /^collapse/,
  //               /^carousel/,
  //               /^fade/,
  //               /^show/,
  //               /^active/,
  //               /^disabled/,
  //               /^form/,
  //               /^input/,
  //               /^container/,
  //               /^row/,
  //               /^col/,
  //               /^toast/,
  //               /^Toastify/
  //             ],
  //             deep: [/react-toastify/],
  //             greedy: [/^swiper-/, /^bi-/]
  //           },
  //           variables: true
  //         }
  //       }
  //     : {}
}
