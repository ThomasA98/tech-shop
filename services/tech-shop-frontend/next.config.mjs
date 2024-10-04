/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'pisces.bbystatic.com',
                protocol: 'https',
            },{
                hostname: 'via.placeholder.com',
                protocol: 'https',
            }
        ]
    }
};

export default nextConfig;
