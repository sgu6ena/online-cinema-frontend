/** @type {import('next').NextConfig} */
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
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:4400/api/:path*',
            },
            {
                source: '/uploads/:path*',
                destination: 'http://localhost:4400/uploads/:path*',
            },
        ]
    },
}

module.exports = nextConfig
