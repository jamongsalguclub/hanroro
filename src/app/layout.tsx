import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hanroro.com'),
  title: '한로로 HANRORO',
  description: '한로로와 관련된 다양한 정보를 제공해요.',
  openGraph: {
    title: '한로로 HANRORO',
    description: '한로로와 관련된 다양한 정보를 제공해요.',
    siteName: '한로로 HANRORO',
    url: 'https://www.hanroro.com',
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
    title: '한로로 HANRORO',
    description: '한로로와 관련된 다양한 정보를 제공해요.',
    images: ['/og-image.webp'],
  },
  authors: [{ name: '한로로', url: 'https://www.hanroro.com' }],
  keywords: ['한로로', 'HANRORO', '이상비행', '집', '자몽살구클럽'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.hanroro.com',
  },
  other: {
    'naver-site-verification': '99eb1cf3ad2eae187fa4b3c0c3b694c5a1c3bbd9',
  },
};

const pretendard = localFont({
  src: '../shared/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='antialiased'>
        {children}
        <Analytics />
        <GoogleAnalytics gaId='G-XYP3PBZFC8' />
      </body>
    </html>
  );
}
