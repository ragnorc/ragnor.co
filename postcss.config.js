const whitelister = require("purgecss-whitelister");

module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}"
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: whitelister([
              "./node_modules/react-confirm-alert/src/react-confirm-alert.css",
              "./node_modules/@uppy/core/dist/style.css",
              "./node_modules/@uppy/dashboard/dist/style.css"
            ])
          }
        ]
      : undefined,
    "postcss-preset-env"
  ]
};
