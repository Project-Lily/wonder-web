/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  bracketSpacing: true,
  useTabs: false,
  bracketSameLine: true,
  singleQuote: false,
  semi: true,
  trailingComma: "es5",
  arrowParens: "avoid",
  endOfLine: "auto",
  tabWidth: 2,
  arrowParens: "always",
  printWidth: 120,
};
