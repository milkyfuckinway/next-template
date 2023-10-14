'use client';

import { Clound, MoonIcon, Star, SunIcon } from '@/assets/svg/index.svg';
import { calculateDocumentHeight } from '@/utils/helpers';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import styles from './ChangeThemeButton.module.scss';

function ChangeThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    calculateDocumentHeight();
  }, []);

  if (!mounted) {
    return null;
  }

  const variants = {
    cloudFirst: {
      hidden: { x: 29, y: 50 },
      visible: { x: 29, y: 0 },
    },
    cloudSecond: {
      hidden: { x: 28, y: 50 },
      visible: { x: 28, y: 14 },
    },
    cloudThird: {
      hidden: { x: 39, y: 50 },
      visible: { x: 39, y: 4 },
    },
    starFirst: {
      hidden: { x: 8, y: -50 },
      visible: { x: 8, y: 2 },
    },
    starSecond: {
      hidden: { x: 12, y: -50 },
      visible: { x: 12, y: 14 },
    },
    starThird: {
      hidden: { x: 18, y: -50 },
      visible: { x: 18, y: 2 },
    },
  };

  const onClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      aria-label="Change theme."
      className={clsx(styles.switch, resolvedTheme === 'light' ? styles.light : styles.dark)}
      onClick={onClick}
      type="button"
    >
      <motion.div className={styles.toggler} transition={{ delayChildren: 2 }}>
        <motion.div
          animate={resolvedTheme === 'light' ? 'visible' : 'hidden'}
          className={styles['background-icon']}
          initial={false}
          transition={resolvedTheme === 'light' ? { delay: 0.2 } : { delay: 0 }}
          variants={variants.cloudFirst}
        >
          <Clound fill="#fff" width={10} />
        </motion.div>
        <motion.div
          animate={resolvedTheme === 'light' ? 'visible' : 'hidden'}
          className={styles['background-icon']}
          initial={false}
          transition={resolvedTheme === 'light' ? { delay: 0.4 } : { delay: 0 }}
          variants={variants.cloudSecond}
        >
          <Clound fill="#fff" width={14} />
        </motion.div>
        <motion.div
          animate={resolvedTheme === 'light' ? 'visible' : 'hidden'}
          className={styles['background-icon']}
          initial={false}
          transition={resolvedTheme === 'light' ? { delay: 0.6 } : { delay: 0 }}
          variants={variants.cloudThird}
        >
          <Clound fill="#fff" width={18} />
        </motion.div>
        <motion.div
          animate={resolvedTheme === 'light' ? 'hidden' : 'visible'}
          className={styles['background-icon']}
          initial={false}
          transition={resolvedTheme === 'light' ? { delay: 0 } : { delay: 0.2 }}
          variants={variants.starFirst}
        >
          <Star fill="#cdc6bd" width={7} />
        </motion.div>
        <motion.div
          animate={resolvedTheme === 'light' ? 'hidden' : 'visible'}
          className={styles['background-icon']}
          initial={false}
          transition={resolvedTheme === 'light' ? { delay: 0 } : { delay: 0.4 }}
          variants={variants.starSecond}
        >
          <Star fill="#cdc6bd" width={11} />
        </motion.div>
        <motion.div
          animate={resolvedTheme === 'light' ? 'hidden' : 'visible'}
          className={styles['background-icon']}
          initial={false}
          transition={resolvedTheme === 'light' ? { delay: 0 } : { delay: 0.6 }}
          variants={variants.starThird}
        >
          <Star fill="#cdc6bd" width={14} />
        </motion.div>
        <div className={styles.pin}>
          {resolvedTheme === 'light' ? (
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
