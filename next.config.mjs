/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.creativefabrica.com",
      },
      {
        protocol: "https",
        hostname: "ig-api-s3.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "intz.com.br",
      },
    ],
  }
};

export default nextConfig;
