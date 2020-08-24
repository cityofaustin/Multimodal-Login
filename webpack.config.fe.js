const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/fe.html',
  filename: './index.html',
  // favicon: 'public/favicon.ico'
});

const config = {
  mode: 'development',
  entry: './src/fe.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'src', 'static', 'public'),
    filename: '[name].js',
    globalObject: 'this'
  },
  devServer: {
    proxy: {
      "/api/*": "http://localhost:5001",
    },
    port: 3002,
    // to get private IP addresses to work to test on emulators
    host: '0.0.0.0',
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    historyApiFallback: {
      rewrites: [
        {from: /^\/$/, to: '/index.html'},
        {from: /^\/subpage/, to: '/index.html'},
        {from: /./, to: '/index.html'}
      ]
    },
    contentBase: path.resolve(__dirname, 'src'),
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true),
        FE: JSON.stringify(true)
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: ['worker-loader', 'babel-loader'],
        include: [path.join(__dirname, 'src/workers')],
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: [/node_modules/, /static/],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: 'static/[name].[ext]'
          }
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack', {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[ext]'
            }
          }]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /opencv-4-3-0.js|opencv-4-4-0.js|opencv-4-4-0_js.js|opencv--3.4.4.js|\.xml$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'js/',
            },
          },
        ],
      },
    ]
  }
};

// const config = [
//   {
//     entry: {
//       ...generateEntryPoints(pages),
//     },

//     output: {
//       path: production
//         ? path.resolve(__dirname, "dist", "static", "public")
//         : path.resolve(__dirname, "src", "static", "public"),
//       filename: production ? "js/[chunkhash].js" : "js/[name].js",
//       publicPath: "/public",
//     },

//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx)$/,
//           use: {
//             loader: "babel-loader",
//             options: {
//               presets: ["@babel/preset-env", "@babel/preset-react"],
//             },
//           },
//           exclude: [/node_modules/, /static/],
//         },
//         {
//           test: /\.ejs$/,
//           loader: "raw-loader",
//         },
//         {
//           test: /\.s?css$/,
//           use: ["style-loader", "css-loader", "sass-loader"],
//         },
//         {
//           test: /\.(jpg|jpeg|png|svg|gif)$/,
//           use: [
//             {
//               loader: "file-loader",
//               options: {
//                 name: "[md5:hash:hex].[ext]",
//                 publicPath: "/public/img",
//                 outputPath: "img",
//               },
//             },
//           ],
//         },
//         // {
//         //   test: /\.svg$/,
//         //   use: [
//         //     '@svgr/webpack', {
//         //       loader: 'file-loader',
//         //       options: {
//         //         name: 'public/[name].[ext]'
//         //       }
//         //     }]
//         // },
//         {
//           test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//           issuer: {
//             test: /\.jsx?$/
//           },
//           use: ['babel-loader', '@svgr/webpack', 'url-loader']
//         },
//         {
//           test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//           loader: 'url-loader'
//         },
//         {
//           test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
//           use: [
//             {
//               loader: "file-loader",
//               options: {
//                 name: "[name].[ext]",
//                 outputPath: "/fonts",
//               },
//             },
//           ],
//         },
//         // {
//         //   test: /\.svg$/,
//         //   use: [
//         //     "@svgr/webpack",
//         //     {
//         //       loader: "file-loader",
//         //       options: {
//         //         name: "/public/[name].[ext]",
//         //       },
//         //     },
//         //   ],
//         // },
//       ],
//     },

//     resolve: {
//       extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"],
//     },

//     optimization: {
//       splitChunks: {
//         automaticNameDelimiter: ".",
//         cacheGroups: {
//           react: {
//             chunks: "initial",
//           },
//         },
//       },
//     },

//     plugins: [
//       // https://stackoverflow.com/a/30355080/6907541
//       new webpack.DefinePlugin({
//         "process.env": {
//           BROWSER: JSON.stringify(true),
//         },
//       }),
//       new CleanWebpackPlugin(),
//       new HtmlWebpackPlugin(),
//       // new MiniCssExtractPlugin({
//       //   filename: production ? "css/[contentHash].css" : "css/[id].css",
//       //   chunkFilename: production ? "css/[contentHash].css" : "css/[id].css",
//       // }),
//       // Ejs pages
//       ...generateHtml(pages),
//     ],
//   },
// ];

module.exports = config;
