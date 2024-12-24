/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				light: 'var(--light-color)',
				white: 'var(--white-color)',
				black: 'var(--black-color)',
				gray: 'var(--gray-color)',
			},
      screens:{
        'tn': '400px'
      },
			backgroundImage: {
        'heroDesktop': "	background: url(src/assets/images/hero/hero_bg.svg",
      },
		},
	},
	plugins: [],
}
