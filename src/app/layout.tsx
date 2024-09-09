import type { Metadata } from 'next'
import { details } from '@/config/config'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nscsolutions.org'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | NSC Solutions',
    default: 'NSC Solutions',
  },
  description:
    'North Star Consulting Solutions is a dedicated consulting firm focused on providing top-notch services to empower small business home healthcare providers.',
  keywords: [
    'Home Healthcare',
    'Consulting',
    'Quality Assurance',
    'Regulatory Compliance',
    '245D Compliance',
    'Support Correction',
    'Order Support Notice of Reinspections',
    'Organizational Systems',
    'Program Audits',
    'Quality Assurance',
    'Application Support',
    'Routine Oversight',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nscsolutions.com',
    siteName: 'North Star Consulting Solutions',
    description:
      'North Star Consulting Solutions is a dedicated consulting firm focused on providing top-notch services to empower small business home healthcare providers.',
    emails: [details.email],
    images: ['/NSC-Logo.png'],
  },
  twitter: {
    card: 'summary',
    site: '@nsconsultingsolutions',
    description:
      'North Star Consulting Solutions is a dedicated consulting firm focused on providing top-notch services to empower small business home healthcare providers.',
    title: 'NSC Solutions',
    images: ['/NSC-Logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-kanit">{children}</body>
    </html>
  )
}
