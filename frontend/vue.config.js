const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
  {
    path: '/',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: 'hourly'
  }
]
module.exports = defineConfig({
  transpileDependencies: true,
  // Utilisation de configureWepack pour ajouter un plugin
  configureWebpack: {
    plugins: [new SitemapPlugin({
      base: 'https://mlindustrie.netlify.app',
      paths
    })]
  },
  chainWebpack: (config) => {
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
  }
})
