/** @type {import('next').NextConfig} */
const nextConfig = {

}

module.exports = nextConfig



module.exports = async (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
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
	}
	return nextConfig
}