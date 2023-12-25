export const wordsPattern =
  /^([A-Za-zА-ЯЁа-яё]+(?:-[A-Za-zА-ЯЁа-яё]+)?(?:\s[A-Za-zА-ЯЁа-яё]+(?:-[A-Za-zА-ЯЁа-яё]+)?)?(?:\s[A-Za-zА-ЯЁа-яё]+(?:-[A-Za-zА-ЯЁа-яё]+)?)?)$/;

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const phonePattern = /^\+[7] \(\d{3}\) \d{3}-\d{4}$/;

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
