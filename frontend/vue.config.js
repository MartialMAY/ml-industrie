const { defineConfig } = require("@vue/cli-service");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

module.exports = defineConfig({
  pluginOptions: {
    sitemap: {
      baseURL: "https://mlindustrie.netlify.app",
      routes: [
        {
          path: "/",
          changefreq: "daily",
          priority: 1,
        },
        {
          path: "/programme",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/header",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/footer",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/signup",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/pdf",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/maintenance",
          changefreq: "daily",
          priority: 0.9,
        },
      ],
    },
  },
  configureWebpack: {
    target: 'node',
    output: {
      libraryTarget: 'commonjs2'
    },
    entry: './src/main.js',
    plugins: [
        new VueSSRServerPlugin(),
        new VueSSRClientPlugin()
    ]
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.entryPoints.delete("app");
    config.entry("entry-server").add("./src/server.js").end();
    config.entry("entry-client").add("./src/main.js").end();
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader");
    config.plugins.delete("pwa");
    config.plugins.delete("workbox");
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugin("server-plugin").use(VueSSRServerPlugin);
    config.plugin("client-plugin").use(VueSSRClientPlugin);
  },
});
