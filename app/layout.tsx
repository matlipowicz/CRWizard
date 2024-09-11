import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from '@/context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';

const font = localFont({
  src: '../components/theme/fonts/RobotoMono.ttf',
});

export const metadata: Metadata = {
  title: 'CRWizard',
  description: 'Your AI Review Wizard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/CRWIZARD_logo.svg' sizes='any' />
      <body className={font.className}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
