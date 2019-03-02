// https://github.com/iamturns/create-exposed-app
module.exports = {
  // no end of line semicolon
  semi: false,
  // leave trailing comma after last element
  trailingComma: "all",
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
}
