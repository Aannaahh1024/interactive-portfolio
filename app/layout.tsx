import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ana Flor Delfin — AI Automation Specialist',
  description:
    'AI Automation Specialist cutting client turnaround by ~60%. Chat with my AI avatar to learn about my work and how I can automate your business.',
  openGraph: {
    title: 'Ana Flor Delfin — AI Automation Specialist',
    description: 'Chat with my AI avatar to learn about my work and how I can automate your business.',
    type: 'website',
    images: [
      {
        url: '/me.jpeg',
        width: 800,
        height: 800,
        alt: 'Ana Flor Delfin — AI Automation Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ana Flor Delfin — AI Automation Specialist',
    description: 'Chat with my AI avatar to learn about my work and how I can automate your business.',
    images: ['/me.jpeg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ana Flor Delfin',
  jobTitle: 'AI Automation Specialist',
  description: 'AI Automation Specialist cutting client turnaround by ~60% with AI automation.',
  url: 'https://interactive-portfolio-rouge.vercel.app',
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
