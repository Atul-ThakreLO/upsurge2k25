/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  swcMinify: true, 
  experimental: {
    esmExternals: true,
    modern: true,
  },
};

export default nextConfig;
