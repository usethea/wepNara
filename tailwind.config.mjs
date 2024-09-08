/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				sadayana: {
					"primary": "#495d49",
					"secondary": "#4a5363",
					"accent": "#b4c5de",
					"neutral": "#f7f4ef",
					"base-100": "#ffffff",
					"info": "#3b82f6",	
					"success": "#a3e635",		
					"warning": "#fbbf24",		
					"error": "#dc2626",
				},
			},
		],
	},
	plugins: [
		require('daisyui')
	],
}
