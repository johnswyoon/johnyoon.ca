/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }, // TODO: remove once endpoint created
      { protocol: 'https', hostname: 'utfs.io' },
    ],
  },
};

module.exports = nextConfig;
