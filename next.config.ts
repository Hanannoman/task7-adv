import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'export',
  basePath: '/task7-adv', // تأكدي أن يكون نفس اسم مستودعك على غيت هاب تماماً
  assetPrefix: '/task7-adv/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
