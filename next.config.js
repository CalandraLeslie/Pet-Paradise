/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'get.musti.media',
      'media.zooplus.com',
      'm.media-amazon.com',
      'images.zoo.se',
      'zoolyx.se',
      'encrypted-tbn0.gstatic.com',
      'encrypted-tbn1.gstatic.com',
      'encrypted-tbn2.gstatic.com',
      'via.placeholder.com',
      'ledmegastore.se',
      'aosom.eu',
      'image.dogman.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zoo.se',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zoo.se',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zoo.se',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.nasa.gov',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kids.nationalgeographic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nationalzoo.si.edu',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.nationalgeographic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.zooplus.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zoolyx.se',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'get.musti.media',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.zoo.se',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn1.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn2.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'aosom.eu',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.dogman.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dogman.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ledmegastore.se',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.oda.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.teddytassen.se',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
