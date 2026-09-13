import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:image" content={siteConfig.ogImage} />
      </head>
      <body className="font-anton min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
