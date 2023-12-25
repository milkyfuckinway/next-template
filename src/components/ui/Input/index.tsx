import InputMask from '@mona-health/react-input-mask';
import TextField from '@mui/material/TextField';

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
  return (
    <label className={styles.input}>
      <span className={styles.input__label}>{label}</span>
      {multiline && type === 'text' && (
        <TextField
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          multiline
          name={name}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          placeholder={placeholder}
          spellCheck="false"
          type={type}
          value={value}
        />
      )}
      {error && <span className={styles.input__error}>{error}</span>}
    </label>
  );
}
