import type { NextConfig } from 'next'

const OS_URL = process.env.AIMPACT_OS_URL || 'https://aimpactos.vercel.app'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/report',
        destination: '/factfinder',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/app',
        destination: `${OS_URL}/app`,
      },
      {
        source: '/app/:path*',
        destination: `${OS_URL}/app/:path*`,
      },
    ]
  },
}

export default nextConfig
