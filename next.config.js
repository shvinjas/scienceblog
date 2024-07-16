// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// // next.config.js
// module.exports = {
//     images: {
//       domains: ['images.pexels.com'],
//     },
//   };

// export default nextConfig;

// next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["images.pexels.com"],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
