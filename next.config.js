/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chenyuqi.me',
      },
      {
        protocol: 'https',
        hostname: '*.aliyuncs.com',
      },
    ],
  },
}

module.exports = nextConfig
