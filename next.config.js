/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }, // TODO: remove once endpoint created
      { protocol: 'https', hostname: 'utfs.io' },
      { protocol: 'https', hostname: 'res.cloudinary.com' }, // TODO: remove?
      { protocol: 'https', hostname: 'images.genius.com' }, // Album Cover
      { protocol: 'https', hostname: 'i.scdn.co' }, // Album Cover
    ],
  },
};

module.exports = nextConfig;
