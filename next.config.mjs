/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB: process.env.MONGODB,
      },
};

export default nextConfig;
