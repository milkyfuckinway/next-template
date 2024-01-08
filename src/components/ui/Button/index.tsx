import clsx from 'clsx';

import styles from './index.module.scss';

export default function ButtonComponent({
  children,
  className,
  disabled,
  onClick,
  style,
  type = 'button',
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: 'button' | 'submit';
}) {
  return (
    <button
      className={clsx(styles.button, className)}
      disabled={disabled}
      onClick={onClick}
      style={style}
      type={type === 'button' ? 'button' : 'submit'}
    >
      {children}
    </button>
  );
}
