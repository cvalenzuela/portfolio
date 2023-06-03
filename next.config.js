const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '',
  experimental: {
    appDir: true,
  },
}

module.exports = isProd ? nextConfig : {};