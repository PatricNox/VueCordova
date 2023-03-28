const path = require("path");
const fs = require("fs");

const ArbitraryCodeAfterReload = function(cb) {
  this.apply = function(compiler) {
    if (compiler.hooks && compiler.hooks.done) {
      compiler.hooks.done.tap("webpack-arbitrary-code", cb);
    }
  };
};

const myCallback = function() {
  fs.unlinkSync(path.resolve(__dirname, "./www/index.html"));
  fs.copyFile(
    path.resolve(__dirname, "./index.html"),
    path.resolve(__dirname, "./www/index.html"),
    err => {
      if (err) throw err;
    },
  );
};

const plugins = [];
const isDev = process.env.VUE_APP_ENV === "local";
if (isDev) {
  plugins.push(new ArbitraryCodeAfterReload(myCallback));
}

module.exports = {
  outputDir: path.resolve(__dirname, "./www"),
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  css: {
    extract: true,
  },
  devServer: {
    allowedHosts: "all",
    https: false,
    devMiddleware: {
      writeToDisk: false,
    },
  },
  configureWebpack: {
    plugins,
  },
};
