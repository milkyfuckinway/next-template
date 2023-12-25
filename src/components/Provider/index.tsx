'use client';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import { store } from '../../shared/store/store';
import HeadComponent from '../head';

function ProvidersComponent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <HeadComponent />
        {children}
      </Provider>
    </ThemeProvider>
  );
}
export default ProvidersComponent;
