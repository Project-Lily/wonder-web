/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus\\ Jakarta\\ Sans', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                'wonder-purple': '#8952C7'
            }
        }
    },
    plugins: []
};
