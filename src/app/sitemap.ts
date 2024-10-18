import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://www.icreativv.com/`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `https://www.icreativv.com//contacts`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },

    {
      url: `https://www.icreativv.com/services`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `https://www.icreativv.com//about-us`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `https://www.icreativv.com//government`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `https://www.icreativv.com//legal/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
    {
      url: `https://www.icreativv.com//legal/terms-and-use`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
    {
      url: `https://www.icreativv.com//newsletter/unsubscribed`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0,
    },
  ];
}
