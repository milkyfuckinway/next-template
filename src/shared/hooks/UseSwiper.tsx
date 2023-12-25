import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { type Swiper as SwiperRef } from 'swiper';
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

import styles from './index.module.scss';

export default function UseSwiper({
  breakpoints,
  children,
  controlsClass,
  setSwiperInstance,
  slidesPerView,
  swiperClass,
  swiperInstance,
  wrapperClass,
}: {
  breakpoints: {
    [ratio: string]: SwiperOptions;
    [width: number]: SwiperOptions;
  };
  children: React.ReactNode;
  controlsClass?: string;
  setSwiperInstance: Dispatch<SetStateAction<SwiperRef | null>>;
  slidesPerView?: 'auto' | number;
  swiperClass?: string;
  swiperInstance: SwiperRef | null;
  wrapperClass?: string;
}) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleNextSlide = () => {
    swiperInstance?.slideNext();
  };
  const handlePrevSlide = () => {
    swiperInstance?.slidePrev();
  };

  return (
    <Swiper
      breakpoints={breakpoints}
      className={clsx(styles.swiper, swiperClass)}
      grabCursor
      modules={[Mousewheel, Keyboard]}
      mousewheel={{ forceToAxis: true }}
      onBreakpoint={() => {
        swiperInstance?.setProgress(0);
      }}
      onSwiper={(swiper) => {
        setSwiperInstance(swiper);
        setIsBeginning(swiper.progress <= 0);
        setIsEnd(swiper.progress >= 1);
        swiper.on('progress', () => {
          setIsBeginning(swiper.progress <= 0);
          setIsEnd(swiper.progress >= 1);
        });
      }}
      slidesPerView={slidesPerView}
      wrapperClass={clsx(styles.swiper__wrapper, wrapperClass)}
    >
      {children}
      <div className={clsx(styles.swiper__controls, controlsClass)}>
        <button
          aria-label="Предыдущий слайд."
          className={clsx(styles.swiper__button, styles['swiper__button--prev'])}
          disabled={isBeginning}
          onClick={handlePrevSlide}
          type="button"
        >
          {'<'}
        </button>
        <button
          aria-label="Следующий слайд."
          className={clsx(styles.swiper__button, styles['swiper__button--next'])}
          disabled={isEnd}
          onClick={handleNextSlide}
          type="button"
        >
          {'>'}
        </button>
      </div>
    </Swiper>
  );
}
