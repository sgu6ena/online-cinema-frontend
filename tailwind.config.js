const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#E30B13'

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			//green: colors.green,
			gray: {
				300: '#d9dae8',
				500: '#999AA5',
				600: '#66676E',
				700: '#39393f',
				800: '#242529',
				900: '#191B1F',
				950: '#101215',

			},
			green:{
				950:'#00ff00'
			},
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521',
			},
		},
		extend: {
			screens: {
				'3xl': '1600px',
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'16/9': '16 / 9',
				'7/2': '7 / 2',
				'11/4': '11 / 4',
			},
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'md': '1rem',
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				60:'60',
				70:'70'
			},
			ringColor:{

			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					background:"linear-gradient(90deg, #7B4397 0%, #DC2430 100%)",
					color: '#fff',
					borderRadius: '0.2rem',
					transition: 'all .1s ease-in-out',
					'&:hover': {
						background:"linear-gradient(90deg, #7B4397 30%, #DC2430 100%)",
						// boxShadow:'0px 0px 20px  3px rgba(123,67,151,0.59);',
						// outline:'1px solid rgba(123,67,151,1)'
					},
					'&:active':{
						boxShadow:'0px 0px 20px  3px rgba(123,67,151,0.59);',
					},
					'&:disabled': {
						background: '#39393f',
					},
				},

				'.text-link': {
					textUnderlineOffset: 4,
					color: 'rgba(255, 255, 255, .9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 0, 0, 0.2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, 0.9)',
					},
				},

				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.gray.950'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg'),
				},
				'.gradient-text': {
					background: 'linear-gradient(90deg, #7B4397 0%, #DC2430 100%)',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
					'-moz-background-clip': 'text',
					'-moz-text-fill-color': 'transparent',
					// 'border-radius': '10px !important',
					display: 'inline-block',
					// padding: '0.3em 0.6em',
					// border: '3px solid transparent',
					// 'border-image': 'linear-gradient(90deg, #7B4397 0%, #DC2430 100%)',
					// '-webkit-border-image': 'linear-gradient(90deg, #7B4397 0%, #DC2430 100%)',
					// 'border-image-slice': '1',
					// '-webkit-border-image-slice': '1',
				}
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},

				})
		}),
	],
}
