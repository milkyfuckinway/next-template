'use client';

import { calculateScrollbarWidth } from '@/shared/utils/helpers';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from '../../shared/store/store';
import HeadComponent from './HeadComponent';

function ProvidersComponent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    calculateScrollbarWidth();
  }, []);

  return (
    <ThemeProvider>
      <HeadComponent>
        <Provider store={store}>{children}</Provider>
      </HeadComponent>
    </ThemeProvider>
  );
}
export default ProvidersComponent;
