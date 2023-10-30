module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
        root: ["./src"],
        alias: {
          store: "./src/redux-store",
          assets: "./src/assets",
          components: "./src/components",
          translations: "./src/translations",
          models: "./src/models",
          router: "./src/router",
          pages: "./src/pages",
          services: "./src/services",
          theme: "./src/theme",
          utils: "./src/utils",
          hooks: "./src/hooks",
          "constant-variables": "./src/constant-variables",
        },
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
  ],
}
