module.exports = {
  "presets": [
    "module:metro-react-native-babel-preset"
  ],
  "plugins": [
    [
      "module:react-native-dotenv",
      {
        "moduleName": "@dotenv",
        "path": ".env",
        "allowUndefined": false
      }
    ]
  ]
};
