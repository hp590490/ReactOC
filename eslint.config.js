// eslint.config.js
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";

export default [
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
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
      "linebreak-style": ["error", "windows"],
    },
  },
];
