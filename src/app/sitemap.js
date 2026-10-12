export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: 'https://agency.appseapro.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}

