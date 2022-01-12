const colors = require('tailwindcss/colors')

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				'hero_mobile': "url('/assets/img/backgrounds/hero-bg-mobile.jpg')",
				'hero_desktop': "url('/assets/img/backgrounds/hero-bg-desktop.jpg')",
			},
			fontFamily: {
				bely: ["Bely Display"],
				filson: ["Filson Pro"]
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
				'beigewhite': '#FFF9F7'
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
