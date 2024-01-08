import clsx from 'clsx';
import { createElement } from 'react';

import styles from './index.module.scss';

export default function ContainerComponent({
  children,
  containerClassName,
  element = 'section',
  layout = 'flex-column',
  maxWidth = true,
  reference,
  wrapperClassName,
}: {
  children?: React.ReactNode;
  containerClassName?: string;
  element?: 'div' | 'footer' | 'header' | 'section';
  layout?: 'custom' | 'flex-column' | 'flex-row' | 'grid';
  maxWidth?: boolean;
  reference?: React.RefObject<HTMLElement> | null;
  wrapperClassName?: string;
}) {
  return createElement(
    element,
    {
      className: clsx(styles.wrapper, wrapperClassName),
      ref: reference || null,
    },
    <div
      className={clsx(
        styles.container,
        styles[layout],
        maxWidth ? styles.max_width : '',
        containerClassName
      )}
    >
      {children}
    </div>
  );
}
