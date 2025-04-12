/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/portfolio#home',
          permanent: false, // use true if you want a permanent 308 redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  