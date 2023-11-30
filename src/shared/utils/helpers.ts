import { scrollbarWidth } from '@xobotyi/scrollbar-width';
import UAParser from 'ua-parser-js';

export function convertStringToUrl(string: string) {
  return `url(${string})`;
}

export function calculateDocumentHeight() {
  function calcDvh() {
    document.documentElement.style.setProperty('--dvh', `${window.innerHeight}px`);
  }

  calcDvh();

  window.addEventListener('resize', calcDvh);
}

export function calculateScrollbarWidth() {
  function calcSbw() {
    document.documentElement.style.setProperty('--sbw', `${scrollbarWidth()}px`);
  }
  calcSbw();
  window.addEventListener('resize', calcSbw);
}

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
export const lockedBodyStyle = {
  WebkitOverflowScrolling: 'none',
  overflow: 'hidden',
  paddingRight: 'var(--sbw)',
};

export const defaultBodyStyle = {
  WebkitOverflowScrolling: '',
  overflow: '',
  paddingRight: '',
};

export const wordsPattern =
  /^([A-Za-zА-ЯЁа-яё]+(?:-[A-Za-zА-ЯЁа-яё]+)?(?:\s[A-Za-zА-ЯЁа-яё]+(?:-[A-Za-zА-ЯЁа-яё]+)?)?(?:\s[A-Za-zА-ЯЁа-яё]+(?:-[A-Za-zА-ЯЁа-яё]+)?)?)$/;

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const phonePattern = /^\+[7] \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const COUNTRY_CODE: string = '+7';

export const replacePhoneValue = (value: string): string => {
  const matrix = `${COUNTRY_CODE} (___) ___-__-__`;
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let val = value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  return matrix.replace(/./g, (a) => {
    // eslint-disable-next-line no-nested-ternary
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
  });
};

export const onKeydownPhoneInput = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
  const maxLength = 18;

  const { selectionEnd, selectionStart, value } = evt.currentTarget;

  if (evt.key !== 'Backspace' && evt.key !== 'Delete' && !/^\d$/.test(evt.key)) {
    evt.preventDefault();
    return;
  }

  if (
    selectionStart !== null &&
    selectionEnd !== null &&
    selectionStart === 0 &&
    selectionEnd === value.length &&
    (evt.key === 'Backspace' || evt.key === 'Delete')
  ) {
    evt.preventDefault();

    evt.currentTarget.value = value.charAt(0);
    return;
  }

  if (value.length >= maxLength && evt.key !== 'Backspace' && evt.key !== 'Delete') {
    if (!selectionStart || selectionStart === value.length) {
      evt.preventDefault();
      return;
    }
  }

  if (
    selectionStart !== null &&
    selectionStart <= COUNTRY_CODE.length &&
    evt.key !== 'Backspace' &&
    evt.key !== 'Delete'
  ) {
    evt.currentTarget.setSelectionRange(COUNTRY_CODE.length, COUNTRY_CODE.length);
  }

  if (
    selectionStart !== null &&
    (selectionStart === COUNTRY_CODE.length || selectionStart === 1) &&
    evt.key === 'Backspace'
  ) {
    evt.preventDefault();
  }

  if (selectionStart !== null && selectionStart === 1 && evt.key === 'Delete') {
    evt.preventDefault();
  }
};

export const removeWhitespace = (str: string) => {
  return str.replace(/\s+/g, ' ').trim();
};

export const validateString = ({
  maxLen = 255,
  maxLenError = 'Слишком много символов',
  minLen = 2,
  minLenError = 'Слишком мало символов',
  patternError = 'Проверьте правильность заполнения поля',
  regexp,
  requiredError = 'Поле обязательно для заполнения',
  setError,
  value,
}: {
  maxLen?: number;
  maxLenError?: string;
  minLen?: number;
  minLenError?: string;
  pattern?: boolean;
  patternError?: string;
  regexp: RegExp;
  requiredError?: string;
  setError: React.Dispatch<null | string>;
  value: string;
}) => {
  const validateMaxLen = value.length <= maxLen;
  const validateMinLen = value.length >= minLen || value.length === 0;
  const validatePattern = regexp.test(removeWhitespace(value));
  const validateRequired = value.length !== 0;

  let currentError = 'null';

  if (!validateRequired) {
    currentError = 'requiredError';
  }
  if (!validateMaxLen) {
    currentError = 'maxLenError';
  }
  if (!validateMinLen) {
    currentError = 'minLenError';
  }
  if (!validatePattern && value.length > 0) {
    currentError = 'patternError';
  }
  if (validateMaxLen && validatePattern && validateMinLen && validateRequired) {
    currentError = 'null';
  }

  switch (currentError) {
    case 'requiredError':
      setError(requiredError);
      return false;
    case 'minLenError':
      setError(minLenError);
      return false;
    case 'maxLenError':
      setError(maxLenError);
      return false;
    case 'patternError':
      setError(patternError);
      return false;
    default:
      setError(null);
      return true;
  }
};
