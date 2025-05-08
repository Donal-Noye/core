/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "staging.micro-courses.ru",
        "micro-courses.ru",
      ],
    },
  },
  rewrites: () => [
    {
      source: "/storage/:path*",
      destination: `${process.env.S3_ENDPOINT}/:path*`,
    },
  ],
};

module.exports = nextConfig;
