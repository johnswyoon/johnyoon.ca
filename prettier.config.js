module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      options: {
        singleQuote: true,
        trailingComma: "all",
        tabWidth: 2,
        arrowParens: "always",
      },
    },
  ],
};
