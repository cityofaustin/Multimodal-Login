const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: "current",
      },
    },
  ],
  ["@babel/preset-react"],
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-async-to-generator",
  "@babel/plugin-transform-runtime",
];

if (process.env.COMPILER_ENV === "server") {
  plugins.push(
    [
      "file-loader",
      {
        name: "[hash].[ext]",
        extensions: ["png", "jpg", "jpeg", "gif", "svg"],
        publicPath: "/public/img",
        outputPath: null,
      },
      "img-file-loader-plugin",
    ],
    [
      "file-loader",
      {
        name: "[hash].[ext]",
        extensions: ["css", "sass", "scss"],
        publicPath: "/public/css",
        outputPath: null,
      },
      "css-file-loader-plugin",
    ]
  );
}

const addConfigs = {
  sourceMaps: "inline",
  retainLines: true,
};

module.exports = { plugins, presets, ...addConfigs };
