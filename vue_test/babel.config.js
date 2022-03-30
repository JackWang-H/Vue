module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 这里需要将es2015改成这个
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
