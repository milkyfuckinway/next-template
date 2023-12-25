import styles from './index.module.scss';

interface InputProps {
  checked: boolean;
  error: null | string;
  label: React.ReactNode | string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default function CheckboxInput({ checked, error, label, name, onChange }: InputProps) {
  return (
    <label className={styles.checkbox}>
      <input
        autoComplete="off"
        checked={checked}
        className={styles.checkbox__input}
        name={name}
        onChange={onChange}
        spellCheck="false"
        type="checkbox"
      />
      <div className={styles.pin} />
      <div className={styles.checkbox__label}>{label}</div>
      {error && <span className={styles.checkbox__error}>{error}</span>}
    </label>
  );
}
