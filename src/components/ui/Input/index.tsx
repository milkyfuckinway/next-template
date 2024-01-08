import InputMask from '@mona-health/react-input-mask';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import { useState } from 'react';

import styles from './index.module.scss';

interface InputProps {
  autoComplete?: string;
  autoFocus?: boolean;
  error: null | string;
  label: string;
  mask?: string;
  multiline?: boolean;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder: string;
  type?: string;
  value: string;
}

export default function TextInput({
  autoComplete = 'off',
  autoFocus = false,
  error,
  label,
  mask = '+7 (999) 999-9999',
  multiline = false,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <label
      className={clsx(
        styles.input,
        error ? styles.input__error : '',
        isFocused ? styles.input__focused : ''
      )}
    >
      <span className={styles.input__label}>{label}</span>
      {multiline && type === 'text' && (
        <TextField
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          multiline
          name={name}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          onFocusCapture={() => setIsFocused(true)}
          placeholder={placeholder}
          spellCheck="false"
          type={type}
          value={value}
        />
      )}
      {!multiline && type === 'text' && (
        <input
          autoComplete={autoComplete}
          name={name}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          onFocusCapture={() => setIsFocused(true)}
          placeholder={placeholder}
          spellCheck="false"
          type={type}
          value={value}
        />
      )}
      {type === 'tel' && (
        <InputMask
          autoComplete={autoComplete}
          mask={mask}
          name={name}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          onFocusCapture={() => setIsFocused(true)}
          placeholder={placeholder}
          spellCheck="false"
          type={type}
          value={value}
        />
      )}
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
