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
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
