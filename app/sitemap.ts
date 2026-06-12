import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.aimpacttechnology.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/factfinder`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/devops-monthly`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aimpact-os`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/affiliates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/affiliates/login`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/sms-terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
