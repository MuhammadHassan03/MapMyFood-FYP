import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['react-native'] = 'react-native-web';
    config.resolve.alias['Shared'] = path.resolve('..', '../../packages/Shared');
    return config;
  },
};

export default nextConfig;
