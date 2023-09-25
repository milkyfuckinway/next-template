import HtmlProvider from '@/store/HtmlProvider';
import ReduxProvider from '@/store/ReduxProvider';
import Header from '@/components/base/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Next.js Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <HtmlProvider>
        <Header />
        <main>{children}</main>
      </HtmlProvider>
    </ReduxProvider>
  );
}
