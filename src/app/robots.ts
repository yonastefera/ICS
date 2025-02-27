import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api", "/newsletter"],
    },
    sitemap: `${process.env.DOMAIN}/sitemap.xml`,
  };
}
