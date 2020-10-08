const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const production = process.env.NODE_ENV === "production";
const CopyPlugin = require("copy-webpack-plugin");

const pages = ["index", "login", "register", "settings"];

const generateEntryPoints = (entry) => {
  return entry.reduce((obj, item) => {
    return {
      ...obj,
      [item]: [path.resolve("src", "components", "entrypoints", `${item}.jsx`)],
    };
  }, {});
};

const generateHtml = (entry) => {
  return entry.map((i) => {
    return new HtmlWebpackPlugin({
      chunks: [i],
      filename: `../views/pages/${i}.ejs`,
      template: path.join("src", "views", "pages", "template.ejs"),
    });
  });
};

const config = [
  {
    entry: {
      ...generateEntryPoints(pages),
    },

    output: {
      path: production
        ? path.resolve(__dirname, "dist", "static", "public")
        : path.resolve(__dirname, "src", "static", "public"),
      filename: production ? "js/[chunkhash].js" : "js/[name].js",
      publicPath: "/public/",
      globalObject: "this",
    },

    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: ["worker-loader", "babel-loader"],
          include: [path.join(__dirname, "src/workers")],
        },
        {
          test: /\.wasm$/,
          loaders: ["base64-loader"],
          type: "javascript/auto",
        },
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          exclude: [/node_modules/, /static/, /workers/],
        },
        {
          test: /\.ejs$/,
          loader: "raw-loader",
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[md5:hash:hex].[ext]",
                publicPath: "/public/img",
                outputPath: "img",
              },
            },
          ],
        },
        // {
        //   test: /\.svg$/,
        //   use: [
        //     '@svgr/webpack', {
        //       loader: 'file-loader',
        //       options: {
        //         name: 'public/[name].[ext]'
        //       }
        //     }]
        // },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          issuer: {
            test: /\.jsx?$/,
          },
          use: ["babel-loader", "@svgr/webpack", "url-loader"],
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader",
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "/fonts",
              },
            },
          ],
        },
        // {
        //   test: /opencv-4-3-0.js$/,
        //   use: [
        //     {
        //       loader: 'raw-loader',
        //       options: {
        //         esModule: false,
        //       },
        //     },
        //   ],
        // },
        {
          test: /opencv-4-3-0.js|opencv-4-4-0.js|\.xml$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "/js",
              },
            },
          ],
        },
        // {
        //   test: /\.svg$/,
        //   use: [
        //     "@svgr/webpack",
        //     {
        //       loader: "file-loader",
        //       options: {
        //         name: "/public/[name].[ext]",
        //       },
        //     },
        //   ],
        // },
      ],
    },

    resolve: {
      extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"],
    },

    optimization: {
      splitChunks: {
        automaticNameDelimiter: ".",
        cacheGroups: {
          react: {
            chunks: "initial",
          },
        },
      },
    },

    plugins: [
      // new CopyPlugin({
      //   patterns: [
      //     { from: 'assets/wasm', to: 'wasm' },
      //   ],
      // }),
      // https://stackoverflow.com/a/30355080/6907541
      new webpack.DefinePlugin({
        "process.env": {
          BROWSER: JSON.stringify(true),
        },
      }),
      new CleanWebpackPlugin(),
      // new MiniCssExtractPlugin({
      //   filename: production ? "css/[contentHash].css" : "css/[id].css",
      //   chunkFilename: production ? "css/[contentHash].css" : "css/[id].css",
      // }),
      // Ejs pages
      ...generateHtml(pages),
    ],
  },
];

module.exports = config;
