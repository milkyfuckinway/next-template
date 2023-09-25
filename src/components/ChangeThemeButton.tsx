'use client';

import { Clound, MoonIcon, Star, SunIcon } from '@/assets/svg/index.svg';
import { useAppSelector } from '@/store/store';
import { toggle } from '@/store/theme.slice';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ChangeThemeButton.module.scss';

function ChangeThemeButton() {
  const dispatch = useDispatch();
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const [isLight, setIsLight] = useState(currentTheme === 'light');

  useEffect(() => {
    setIsLight(currentTheme === 'light');
  }, [currentTheme]);

  const variants = {
    cloudFirst: {
      visible: { x: 29, y: 0 },
      hidden: { x: 29, y: 50 },
    },
    cloudSecond: {
      visible: { x: 28, y: 14 },
      hidden: { x: 28, y: 50 },
    },
    cloudThird: {
      visible: { x: 39, y: 4 },
      hidden: { x: 39, y: 50 },
    },
    starFirst: {
      visible: { x: 8, y: 2 },
      hidden: { x: 8, y: -50 },
    },
    starSecond: {
      visible: { x: 12, y: 14 },
      hidden: { x: 12, y: -50 },
    },
    starThird: {
      visible: { x: 18, y: 2 },
      hidden: { x: 18, y: -50 },
    },
  };

  return (
    <button
      aria-label="Change theme."
      className={clsx(styles.switch, currentTheme === 'light' ? styles.light : styles.dark)}
      type="button"
      onClick={() => dispatch(toggle())}
    >
      <motion.div className={styles.toggler} transition={{ delayChildren: 2 }}>
        <motion.div
          className={styles['background-icon']}
          animate={isLight ? 'visible' : 'hidden'}
          variants={variants.cloudFirst}
          initial={false}
          transition={isLight ? { delay: 0.2 } : { delay: 0 }}
        >
          <Clound width={10} fill="#fff" />
        </motion.div>
        <motion.div
          className={styles['background-icon']}
          animate={isLight ? 'visible' : 'hidden'}
          variants={variants.cloudSecond}
          initial={false}
          transition={isLight ? { delay: 0.4 } : { delay: 0 }}
        >
          <Clound width={14} fill="#fff" />
        </motion.div>
        <motion.div
          className={styles['background-icon']}
          animate={isLight ? 'visible' : 'hidden'}
          variants={variants.cloudThird}
          initial={false}
          transition={isLight ? { delay: 0.6 } : { delay: 0 }}
        >
          <Clound width={18} fill="#fff" />
        </motion.div>
        <motion.div
          className={styles['background-icon']}
          animate={isLight ? 'hidden' : 'visible'}
          variants={variants.starFirst}
          initial={false}
          transition={isLight ? { delay: 0 } : { delay: 0.2 }}
        >
          <Star width={7} fill="#cdc6bd" />
        </motion.div>
        <motion.div
          className={styles['background-icon']}
          animate={isLight ? 'hidden' : 'visible'}
          variants={variants.starSecond}
          initial={false}
          transition={isLight ? { delay: 0 } : { delay: 0.4 }}
        >
          <Star width={11} fill="#cdc6bd" />
        </motion.div>
        <motion.div
          className={styles['background-icon']}
          animate={isLight ? 'hidden' : 'visible'}
          variants={variants.starThird}
          initial={false}
          transition={isLight ? { delay: 0 } : { delay: 0.6 }}
        >
          <Star width={14} fill="#cdc6bd" />
        </motion.div>
        <div className={styles.pin}>
          {currentTheme === 'light' ? (
            <SunIcon className={styles.icon} />
          ) : (
            <MoonIcon className={styles.icon} />
          )}
        </div>
      </motion.div>
    </button>
  );
}

export default ChangeThemeButton;
