// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: [...defaultTheme.fontFamily.sans],
        body: ["'Plus Jakarta Sans Variable'"],
        "jakarta-sans": ["Plus Jakarta Sans Variable", "sans-serif"],
      },
      colors: {
        "wonder-purple": "#8952C7",
        "wonder-dark": "#4D267A",
        "wonder-background": "rgba(246, 254, 233, 0) 81%)",
        "wonder-text": "#14383D",
        "wonder-purple-transparent": "rgba(137, 82, 199, 0.20)",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
