let cachedScrollbarWidth: null | number = null;

const getActualScrollbarWidth = () => {
  const outer = document.createElement('div');
  const customOuter = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  customOuter.style.visibility = 'hidden';
  customOuter.style.overflow = 'scroll';
  customOuter.classList.add('custom-scrollbar');
  document.body.appendChild(customOuter);

  const inner = document.createElement('div');
  const customInner = document.createElement('div');
  outer.appendChild(inner);
  customOuter.appendChild(customInner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  const customScrollbarWidth = customOuter.offsetWidth - customInner.offsetWidth;

  outer.remove();
  customOuter.remove();

  return { customScrollbarWidth, scrollbarWidth };
};

function getScrollbarWidth() {
  if (cachedScrollbarWidth !== null) {
    return cachedScrollbarWidth;
  }

  const { customScrollbarWidth, scrollbarWidth } = getActualScrollbarWidth();

  const resultScrollbarWidth = scrollbarWidth === 0 ? 0 : customScrollbarWidth;

  cachedScrollbarWidth = resultScrollbarWidth;

  return resultScrollbarWidth;
}

export default function calculateScrollbarWidth() {
  const scrollBarWidth = getScrollbarWidth();
  document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
  return scrollBarWidth;
}
