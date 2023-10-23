'use client';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import { store } from '../../shared/store/store';

function ProvidersComponent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
export default ProvidersComponent;
