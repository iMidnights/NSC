import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.nscsolutions.org',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.nscsolutions.org/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.nscsolutions.org/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.nscsolutions.org/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://calendar.google.com/calendar/u/0/appointments/AcZssZ3ZYItRQMUfvsxfrruS2kPsBE9RqyvFQwiQ7SU=',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
  ]
}
