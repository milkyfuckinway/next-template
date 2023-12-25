import type { Metadata } from 'next';

import Providers from '@/components/Provider';
import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import '@/styles/index.scss';
import clsx from 'clsx';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  description: 'Next.js Template',
  title: 'Next.js Template',
};

const EestiFont = localFont({
  preload: true,
  src: [
    { path: '../shared/assets/fonts/GTEesti-400.woff2', weight: '400' },
    { path: '../shared/assets/fonts/GTEesti-700.woff2', weight: '700' },
  ],
  variable: '--eesti',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={clsx(EestiFont.variable)} lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
