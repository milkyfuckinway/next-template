'use client';

import SectionComponent from '@/components/layout/Container';
import { useAppSelector } from '@/shared/store/store';
import { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

type IWidthHeight = {
  height: number;
  width: number;
};

export default function HomeComponent() {
  const text = useRef<HTMLParagraphElement>(null);
  const textDynamic = useRef<HTMLParagraphElement>(null);

  const [textHeight, setTextHeight] = useState<IWidthHeight | null>(null);
  const [textDynamicHeight, setTextDynamicHeight] = useState<IWidthHeight | null>(null);
  const width = useAppSelector((state) => state.document.width);

  useEffect(() => {
    if (text.current && textDynamic.current) {
      setTextHeight({
        height: text.current.getBoundingClientRect().height,
        width: text.current.getBoundingClientRect().width,
      });
      setTextDynamicHeight({
        height: textDynamic.current.getBoundingClientRect().height,
        width: textDynamic.current.getBoundingClientRect().width,
      });
    }
  }, [width]);

  return (
    <SectionComponent>
      <div className={styles.test_container}>
        <div className={styles.text_wrapper}>
          <p className={styles.text} ref={text}>
            Test
          </p>
          <p className={styles.text_dynamic} ref={textDynamic}>
            Test
          </p>
        </div>
        <div className={styles.test_wrapper}>
          <div>{textHeight?.height}</div>
          <div>{textHeight?.width}</div>
          <div>{textDynamicHeight?.height}</div>
          <div>{textDynamicHeight?.width}</div>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>1111</div>
        <div className={styles.column}>2222</div>
        <div className={styles.column}>3333</div>
        <div className={styles.column}>4444</div>
      </div>
    </SectionComponent>
  );
}
