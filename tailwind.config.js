const colors = require('tailwindcss/colors')

module.exports = {
	content: ["./src/**/*.{html,js}", "./src/assets/js/main.js", "./src/**/*.{js,jsx,ts,tsx,vue}"],

	theme: {
		extend: {
			backgroundImage: {
				'hero_mobile': "url('/assets/img/backgrounds/hero-bg-mobile.jpg')",
				'hero_desktop': "url('/assets/img/backgrounds/hero-bg-desktop.jpg')",
			},
			fontFamily: {
				outfit: ["'Outfit', serif"],
			},
			borderRadius: {
				'3_5xl': '2.7rem',
				'4xl': '4.2rem'
			},
			borderWidth: {
				'15': '15px'
			},
			colors: {
				'oceanblue': '#436489',
				'lighterblue': '#6683A3',
				'beigewhite': '#FFF9F7',
				'beige': '#FCF4F1',
				'darkbeige': '#FBF1ED',
				'mediumblue': '#1d2536',
				'darkblue': '#111723',
				'brightorange': '#FFA582',
				'darkerorange': '#EF8F6A',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')({
			className: 'wysiwyg'
		}),
		require('@tailwindcss/forms')
	]
}
