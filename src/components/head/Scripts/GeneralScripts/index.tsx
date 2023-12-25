import { setHeight, setScrollbarWidth, setWidth, setY } from '@/shared/store/document.slice';
import calculateScrollbarWidth from '@/shared/utils/scrollbar-width';
import { useThrottle, useWindowSize } from '@reactuses/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowScroll } from 'react-use';

const THROTTLE_TIME = 50;

export default function GeneralScripts() {
  const dispatch = useDispatch();
  const { y } = useWindowScroll();
  const { height, width } = useWindowSize();
  const throttledY = useThrottle(y, THROTTLE_TIME);
  const throttledHeight = useThrottle(height, THROTTLE_TIME);
  const throttledWidth = useThrottle(width, THROTTLE_TIME);

  useEffect(() => {
    const scrolbarWidth = calculateScrollbarWidth();

    dispatch(setWidth(throttledWidth));
    dispatch(setScrollbarWidth(scrolbarWidth));
  }, [dispatch, throttledWidth]);

  useEffect(() => {
    dispatch(setY(throttledY));
  }, [dispatch, throttledY]);

  useEffect(() => {
    dispatch(setHeight(throttledHeight));
    document.documentElement.style.setProperty('--document-height', `${throttledHeight}px`);
  }, [dispatch, throttledHeight]);

  return null;
}
