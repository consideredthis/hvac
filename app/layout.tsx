import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Oswald } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Compressor Rebuilding & Remanufacturing Calgary | Precision Hermetic',
  description:
    'Commercial and industrial compressor rebuilding in Calgary. Precision Hermetic remanufactures Copeland Discus, Carlyle 05G/06E, Bitzer, York, Trane, Vilter and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern_favicon_precision_hermetic_rebuilders-hvpFdfdNAt6joruNSsjvpfhn1xrkN9.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Precision Hermetic Rebuilders Inc.",
              url: "https://precisionhermetic.ca",
              telephone: "+1-403-287-2398",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bay #4, 4451 64 Avenue SE",
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T2C 2C8",
                addressCountry: "CA",
              },
              openingHoursSpecification: [{
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "16:30",
              }],
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
