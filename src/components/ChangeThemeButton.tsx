'use client';

import { useAppSelector } from '@/store/store';
import { toggle } from '@/store/theme.slice';
import { useDispatch } from 'react-redux';
import styles from './ChangeThemeButton.module.scss';
import { MoonIcon, SunIcon } from './svg';

function ChangeThemeButton() {
  const dispatch = useDispatch();

  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <button
      aria-label="Change theme."
      className={`${styles.switch} ${currentTheme === 'light' ? styles.light : styles.dark}`}
      type="button"
      onClick={() => {
        dispatch(toggle());
      }}
    >
      <div className={styles.toggler}>
        <div className={styles.pin}>
          {currentTheme === 'light' ? (
            <SunIcon className={styles.icon} />
          ) : (
            <MoonIcon className={styles.icon} />
          )}
        </div>
      </div>
    </button>
  );
}

export default ChangeThemeButton;
