import type { NextConfig } from 'next'

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
}

export default nextConfig
