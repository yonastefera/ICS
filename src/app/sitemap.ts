import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/contacts`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },

    {
      url: `${process.env.DOMAIN}/services`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/about-us`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/government`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/legal/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
    {
      url: `${process.env.DOMAIN}/newsletter/unsubscribed`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0,
    },
  ];
}
