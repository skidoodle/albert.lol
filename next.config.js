const path = require('path')

module.exports = {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
