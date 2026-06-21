import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ana Flor Delfin — AI Automation Specialist',
  description:
    'AI-Powered Virtual Assistant & Executive Support Specialist. Cuts client turnaround by ~60% with AI automation.',
  openGraph: {
    title: 'Ana Flor Delfin — AI Automation Specialist',
    description: 'Chat with my AI avatar to learn about my work and how I can automate your business.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
