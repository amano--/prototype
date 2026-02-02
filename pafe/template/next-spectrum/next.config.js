const { resolve } = require('path')

module.exports = {
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  },
}
