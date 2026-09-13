/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Used by /devs (contributor avatars) -- unrelated to the old
        // backend, so this stays even though the old admin-managed image
        // domains (Cloudinary/S3/Google) were removed.
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
