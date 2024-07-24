module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      ["inline-import", { extensions: [".sql"] }],
      "react-native-reanimated/plugin",
    ],
    env: {
      production: {
        plugins: [
          "react-native-paper/babel",
          "expo-router/babel",
          "react-native-reanimated/plugin",
          ["inline-import", { extensions: [".sql"] }],
        ],
      },
    },
  };
};
