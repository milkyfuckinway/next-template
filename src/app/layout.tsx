import type { Metadata } from 'next';

import Header from '@/components/base/Header';
import ProvidersComponent from '@/store/ProvidersComponent';
import '@/styles/index.scss';
import clsx from 'clsx';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  description: 'Next.js Template',
  title: 'Next.js Template',

  // Prevent zoom
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

const EestiFont = localFont({
  preload: true,
  src: [
    { path: '../fonts/GTEesti-400.woff2', weight: '400' },
    { path: '../fonts/GTEesti-700.woff2', weight: '700' },
  ],
  variable: '--eesti',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={clsx(EestiFont.variable)} lang="en" suppressHydrationWarning>
      <body>
        <ProvidersComponent>
          <Header />
          <main>{children}</main>
        </ProvidersComponent>
      </body>
    </html>
  );
}
