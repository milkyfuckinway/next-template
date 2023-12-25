import UAParser from 'ua-parser-js';

export const isTouchDevice = function () {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
};

const uaParser = new UAParser();
const ua = uaParser.getResult();

export const isSafari = () => ua.browser.name === 'Safari' || ua.browser.name === 'Mobile Safari';

export const isIos = () =>
  // @ts-expect-error window.MSStream cf. https://racase.com.np/javascript-how-to-detect-if-device-is-ios/
  (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
  ['iPad', 'iPad Simulator', 'iPhone', 'iPhone Simulator', 'iPod', 'iPod Simulator'].includes(
    navigator.platform
  ) ||
  // iPad on iOS 13 detection
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
