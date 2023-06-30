/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["cva"],
};
