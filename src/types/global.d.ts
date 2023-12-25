declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare namespace JSX {
  interface IntrinsicElements {
    'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      navigation: string;
      // Add more properties
    };
    'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      lazy: string;
      // Add more properties
    };
  }
}

declare module '@mona-health/react-input-mask';
