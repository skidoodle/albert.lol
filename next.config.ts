const path = require('path')

export default {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}