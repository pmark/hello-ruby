module.exports = {
  webpack(config, { dev }) {
    config.devtool.sourceMap = undefined;
    return config;
  },

  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
}
