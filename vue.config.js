const { defineConfig } = require("@vue/cli-service");
const StylelintPlugin = require("stylelint-webpack-plugin");
const path = require("path");

module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  configureWebpack: {
    //配置后会使得productionSourceMap关闭
    // productionSourceMap: true//默认开启
    devtool: "cheap-module-source-map",
    plugins: [
      new StylelintPlugin({
        configFile: path.resolve(__dirname, "./.stylelintrc.js"), // 加载配置文件
        files: ["**/*.{html,vue,css,less}"], // 要检查的扩展名
        lintDirtyModulesOnly: false, // 仅检查有变化的文件
        fix: false, // 是否自动修复
        cache: false, // 是否缓存
        emitWarning: true, // 开发运行时抛出Warning提示
        emitErrors: true, // 开发运行时抛出Error提示
      }),
    ],
  },
  chainWebpack: (config) => {
    // 内置的svg处理排除指定目录下的文件
    config.module
      .rule("svg")
      .exclude.add(path.resolve("src/assets/icons"))
      .end();

    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(path.resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.module
      .rule("svgo-loader")
      .test(/\.svg$/)
      .include.add(path.resolve("src/assets/icons"))
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .options({
        removeAttrs: { attrs: "fill" },
      });
  },
});
