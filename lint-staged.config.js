module.exports = {
  linters: {
    "package.json": ["npm run format:package", "git add"],
    ".editorconfig": ["prettier --write", "git add"],
    LICENSE: ["prettier --write", "git add"],
    "**/*.{css,gql,graphql,html,json,md,mdx,yaml,yml}": [
      "prettier --write",
      "git add",
    ],
    "**/*.{js,jsx,ts,tsx}": [
      "import-sort --write",
      "prettier --write",
      "eslint --cache --ext .js,.jsx,.ts,.tsx --fix",
      "git add",
      "jest --bail --findRelatedTests",
    ],
  },
  // The formatting tools are ordered to run sequentially
  concurrent: false,
}
