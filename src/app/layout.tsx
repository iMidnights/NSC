import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nscsolutions.org'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | NSC Solutions',
    default: 'NSC Solutions', // a default is required when creating a template
  },
  description: "North Star Consulting Solutions is a dedicated consulting firm focused on providing top-notch services to empower small business home healthcare providers. 245D Consulting",
  keywords: ["Home Healthcare", "Consulting", "Quality Assurance", "Regulatory Compliance"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nscsolutions.com",
    siteName: "NSC Solutions",
    description: "North Star Consulting Solutions is a dedicated consulting firm focused on providing top-notch services to empower small business home healthcare providers. 245D Consulting",
    emails: ["nsconsultingsolutions@gmail.com"],
    images: ["/NSC-Logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsconsultingsolutions",
    description: "North Star Consulting Solutions is a dedicated consulting firm focused on providing top-notch services to empower small business home healthcare providers. 245D Consulting",
    title: "NSC Solutions",
    images: ["/NSC-Logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script src="//code.tidio.co/za4274qrwu8dqvrzoqauhrxpokzlie2k.js" async></script>
      </head>
      <body className="font-kanit">
        {children}
      </body>
    </html>
  );
}
