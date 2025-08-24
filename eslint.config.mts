import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "quotes": ["error", "single"],
    },
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
]);
