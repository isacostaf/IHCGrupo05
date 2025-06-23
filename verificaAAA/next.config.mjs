/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 isso é o novo equivalente ao `next export`
  basePath: '/IHCGrupo05',   // substitua pelo nome do seu repo no GitHub
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig