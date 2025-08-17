/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ["res.cloudinary.com", "upsurge2k24.s3.ap-south-1.amazonaws.com"],
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
  // swcMinify: true, 
  experimental: {
    esmExternals: true,
    // modern: true,
  },
  // next.config.js
  //  async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/smackathon',  
  //       permanent: false, // `false` for temporary (302), `true` for permanent (308)
  //     },
  //   ];
  // },
};

export default nextConfig;
