const getMedia = ({
  retina,
  viewport,
}: {
  retina: boolean;
  viewport: 'desktop' | 'mobile' | 'tablet';
}) => {
  const mobileBreakpoints = '(min-width: 300px) and (max-width: 767px)';
  const tabletBreakpoints = '(min-width: 768px) and (max-width: 1279px)';
  const desktopBreakpoints = '(min-width: 1280px)';
  const lowDppx = '(max-resolution: 143dpi) and (max-resolution: 1.4dppx)';
  const highDppx = '(min-resolution: 144dpi) and (min-resolution: 1.5dppx';

  if (viewport === 'mobile') {
    return `${mobileBreakpoints} and ${retina ? highDppx : lowDppx}`;
  }
  if (viewport === 'tablet') {
    return `${tabletBreakpoints} and ${retina ? highDppx : lowDppx}`;
  }
  if (viewport === 'desktop') {
    return `${desktopBreakpoints} and ${retina ? highDppx : lowDppx}`;
  }
  return '';
};

export default function LinksComponent() {
  return (
    <>
      <link
        as="image"
        href="./#.webp"
        media={getMedia({ retina: false, viewport: 'mobile' })}
        rel="preload"
      />
      <link
        as="image"
        href="./#@2x.webp"
        media={getMedia({ retina: true, viewport: 'mobile' })}
        rel="preload"
      />
    </>
  );
}
