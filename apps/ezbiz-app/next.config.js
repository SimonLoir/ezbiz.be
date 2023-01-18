/** @type {import('next'). extConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Note: Cette fonctionnalité expérimentale est requise pour utiliser NextJS Image en mode SSG.
    // Voir https://nextjs.org/docs/messages/export-image-api pour différentes solutions de contournement.
    images: {
        unoptimized: true,
    },
    experimental: {
        transpilePackages: ['ui'],
    },
};

module.exports = nextConfig;
