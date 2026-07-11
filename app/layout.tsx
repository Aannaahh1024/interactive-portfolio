import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://interactive-portfolio-rouge.vercel.app'),
  title: 'Ana Flor Delfin: AI Automation Specialist',
  description:
    'AI Automation Specialist building n8n, Make.com, GoHighLevel, and Airtable systems that cut client turnaround by ~60%. Chat with my AI avatar to explore seven in-depth case studies.',
  openGraph: {
    title: 'Ana Flor Delfin: AI Automation Specialist',
    description: 'Chat with my AI avatar to explore seven in-depth automation case studies and how I can automate your business.',
    type: 'website',
    images: [
      {
        url: '/me.jpeg',
        width: 800,
        height: 800,
        alt: 'Ana Flor Delfin, AI Automation Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ana Flor Delfin: AI Automation Specialist',
    description: 'Chat with my AI avatar to explore seven in-depth automation case studies and how I can automate your business.',
    images: ['/me.jpeg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ana Flor Delfin',
  jobTitle: 'AI Automation Specialist',
  description: 'AI Automation Specialist building n8n, Make.com, GoHighLevel, and Airtable systems that cut client turnaround by ~60%.',
  url: 'https://interactive-portfolio-rouge.vercel.app',
  email: 'vadelfinanaflor28@gmail.com',
  telephone: '+639973401975',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Naval',
    addressRegion: 'Biliran',
    addressCountry: 'PH',
  },
  knowsAbout: [
    'AI Automation',
    'n8n',
    'GoHighLevel',
    'Make.com',
    'Airtable',
    'Notion AI',
    'ChatGPT',
    'Claude Code',
    'Executive Support',
    'Business Operations',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
