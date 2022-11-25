/**
 * @type {import('next').NextConfig}
 */
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV !== 'production',
})


module.exports = module.exports = withPWA({
	basePath:'/',
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_SERVER_APP_URL,
	},
	images: {
		domains: ['portal.idc.md'],
		dangerouslyAllowSVG: true,
	},

serviceWorker: {
		workbox: {
			debug: false,
		},
	},

})