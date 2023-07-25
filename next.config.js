/** @type {import('next').NextConfig} */
const nextConfig = {
 experimental: { esmExternals: true },

 images: {
  domains:
      ["k4j3j2s7.rocketcdn.me","klbtheme.com","loremflickr.com","encrypted-tbn0.gstatic.com"],
  formats: ['image/avif', 'image/webp'],
 },
}

module.exports = nextConfig
