const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (webpackConfigEnv) => {
  const orgName = "org";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      historyApiFallback: true,
      // writeToDisk: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === "true",
          orgName,
        },
      }),
      new CopyPlugin({
        patterns: [
          { from: './src/css/index.css', to: './css/index.css'},
          { from: './src/css/css_variables.css', to: './css/css_variables.css'},
        ],
      }),
    ],
  });
};
