// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'https://github.com/mikalPaudel/Minal-Portfolio.git'; // replace with your GitHub repo name

module.exports = {
  reactStrictMode: true,
  output: 'export', // enables static HTML export
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // disables Next.js image optimization for static export
  },
};
