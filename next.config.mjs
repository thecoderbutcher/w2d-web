/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'docs',
    output: 'export',
    assetPrefix: './',
    basePath: '/w2d-web',
    images: {
        unoptimized: true, 
    }
};

export default nextConfig;
