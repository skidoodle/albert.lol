const path = require('path')

module.exports = {
  productionBrowserSourceMaps: true,
  swcMinify: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['i.albrt.hu', 'lastfm.freetls.fastly.net'],
    formats: ['image/avif', 'image/webp']
  }
}
