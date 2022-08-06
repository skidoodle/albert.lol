const path = require('path')

module.export = {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}