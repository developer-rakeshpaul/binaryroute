const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},
	daisyui: {
		themes: [
			{
				default: {
					primary: '#793EF9',
					secondary: '#F000B8',
					accent: '#37CDBE',
					neutral: '#2A2E37',
					'base-100': '#3D4451',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
