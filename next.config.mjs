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
  // swcMinify: true, 
  experimental: {
    esmExternals: true,
    // modern: true,
  },
  // next.config.js
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/smackathon', 
  //       permanent: false, // `false` for temporary (302), `true` for permanent (308)
  //     },
  //   ];
  // },
  async redirects() {
    return [
      {
        source: '/((?!smackathon).*)', // Match all paths except /smackathon
        destination: '/smackathon',
        permanent: false,
      },
    ]
  },

};

export default nextConfig;
