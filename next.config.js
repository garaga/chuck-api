/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 0,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
