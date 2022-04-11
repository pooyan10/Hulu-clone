/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "upload.wikimedia.org", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
