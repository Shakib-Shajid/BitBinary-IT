/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export mode
  trailingSlash: true, // Ensures all routes have a trailing slash for static files
  images: {
    unoptimized: true, // Ensures Next.js does not optimize images
  },
};

export default nextConfig;








// images: {
//     domains: ["i.ibb.co"],
// }