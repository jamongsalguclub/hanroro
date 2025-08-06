import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '한로로, HANRORO',
  description: '한로로와 관련된 다양한 정보를 제공해요.',
  openGraph: {
    title: '한로로, HANRORO',
    description: '한로로와 관련된 다양한 정보를 제공해요.',
    siteName: '한로로, HANRORO',
    url: 'https://hanroro.com',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '한로로, HANRORO',
    description: '한로로와 관련된 다양한 정보를 제공해요.',
    images: ['/og-image.webp'],
  },
  authors: [{ name: '한로로', url: 'https://hanroro.com' }],
  keywords: ['한로로', 'HANRORO', '이상비행', '집', '자몽살구클럽'],
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://hanroro.com',
  },
  other: {
    'naver-site-verification': '99eb1cf3ad2eae187fa4b3c0c3b694c5a1c3bbd9',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='antialiased'>
        {children}
        <GoogleAnalytics gaId='G-XYP3PBZFC8' />
      </body>
    </html>
  );
}
