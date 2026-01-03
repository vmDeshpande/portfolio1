/** @type {import('next').NextConfig} */
const repoName = "portfolio" // 🔁 CHANGE THIS to your GitHub repo name

const nextConfig = {
  output: "export",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // GitHub Pages support
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
}

export default nextConfig
