/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			'wonder-purple': '#8952C7',
			'wonder-dark': '#4D267A',
			'wonder-background': 'rgba(246, 254, 233, 0) 81%)',
			'wonder-text': '#14383D',
			'wonder-purple-transparent': 'rgba(137, 82, 199, 0.20)',
		}},
	},
	plugins: [],
}
