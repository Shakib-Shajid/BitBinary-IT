/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  trailingSlash: true,
};

export default nextConfig;


// images: {
//     domains: ["i.ibb.co"],
// }