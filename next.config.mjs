/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: "**",
            },
        ],
    },
    env: {
        STRAPI_URL: process.env.STRAPI_URL,
        MEILISEARCH_URL: process.env.MEILISEARCH_URL,
        MEILISEARCH_API_KEY: process.env.MEILISEARCH_API_KEY,
    },
}

export default nextConfig
