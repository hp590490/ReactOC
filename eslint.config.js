// eslint.config.js
prettier = require("eslint-config-prettier");
react = require("eslint-plugin-react");

module.exports = [
  {
    rules: {
      "linebreak-style": ["error", "windows"],
    },
  },
  prettier,
  // Configuration pour React
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      extends: ["eslint:all", "plugin:react/all"],
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
