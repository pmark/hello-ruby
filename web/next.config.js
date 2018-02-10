module.exports = {
  webpack(config, { dev }) {
    config.devtool.sourceMap = undefined;
    return config;
  },

  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: "Hello Next.js" } },
      '/p/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
      '/p/deploy-nextjs': { page: '/post', query: { title: "Deploy apps with Zeit" } }
    }
  }
}
