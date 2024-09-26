import path from 'path'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['Shared'] = path.resolve('..', '../Shared'); 
    return config;
  },
};

export default nextConfig;
