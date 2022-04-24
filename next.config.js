const path = require('path')

module.exports = {
  productionBrowserSourceMaps: true,
  swcMinify: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}