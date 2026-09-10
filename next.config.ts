import type {NextConfig} from 'next';

// The site is a fully static export served by GitHub Pages, so every route
// must resolve to a real file: trailing slashes give each page its own
// index.html and the image optimizer is disabled because there is no server.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
