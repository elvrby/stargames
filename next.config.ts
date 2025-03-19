/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Mengabaikan error ESLint selama proses build
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com'], // Tambahkan domain Cloudinary
  },
}

module.exports = nextConfig
