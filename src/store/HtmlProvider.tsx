'use client';

// main styles
import '@/styles/index.scss';
//
import SpinnerComponent from '@/components/SpinnerComponent';
import calculateDocumentHeight from '@/utils/CalculateDocumentHeight';
import localFont from 'next/font/local';
import { StrictMode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './store';
import { setTheme } from './theme.slice';

const EestiFont = localFont({
  src: [
    { path: '../fonts/GTEesti-400.woff2', weight: '400' },
    { path: '../fonts/GTEesti-700.woff2', weight: '700' },
  ],
  variable: '--eesti',
  preload: true,
});

function HtmlProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const currentTheme = useAppSelector((state) => state.theme.theme);
  useEffect(() => {
    // Create dvh variable
    calculateDocumentHeight();

    // Apply theme from local storage
    const theme = localStorage.getItem('theme');
    if (theme) {
      dispatch(setTheme(theme));
    }

    // Set isLoading to false
    setIsLoading(false);
  }, [dispatch]);
  return (
    <StrictMode>
      <html lang="en" className={EestiFont.variable} data-theme={currentTheme}>
        <body className={isLoading ? 'no-transition' : ''}>
          {isLoading ? <SpinnerComponent /> : children}
        </body>
      </html>
    </StrictMode>
  );
}

export default HtmlProvider;
