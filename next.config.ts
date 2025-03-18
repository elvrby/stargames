/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Mengabaikan error ESLint selama proses build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
