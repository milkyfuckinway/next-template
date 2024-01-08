'use client';

import ContainerComponent from '@/components/layout/Container';
import ButtonComponent from '@/components/ui/Button';
import TextInput from '@/components/ui/Input';
import { phonePattern, removeWhitespace, validateString, wordsPattern } from '@/shared/utils/form';
import { useState } from 'react';

import styles from './index.module.scss';

export default function FormComponent() {
  const [multilineValue, setMultilineValue] = useState('');
  const [multilineError, setMultilineError] = useState<null | string>(null);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState<null | string>(null);
  const [telValue, setTelValue] = useState('');
  const [telError, setTelError] = useState<null | string>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);

  const validateAndThrowErrors = () => {
    const isMultilineValid = validateString({
      patternError: 'Допустим только текст',
      regexp: wordsPattern,
      requiredError: 'Поле пусто',
      setError: setMultilineError,
      value: multilineValue,
    });
    const isInputValid = validateString({
      patternError: 'Допустим только текст',
      regexp: wordsPattern,
      requiredError: 'Поле пусто',
      setError: setInputError,
      value: inputValue,
    });
    const isTelValid = validateString({
      patternError: 'Проверьте правильность номера',
      regexp: phonePattern,
      requiredError: 'Поле пусто',
      setError: setTelError,
      value: telValue,
    });

    return isMultilineValid && isInputValid && isTelValid;
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (validateAndThrowErrors()) {
      (async () => {
        try {
          setIsLoading(true);
          const REQUEST_URL = process.env.NEXT_PUBLIC_SEND_REQUEQUEST_URL as string;
          const response = await fetch(REQUEST_URL, {
            body: JSON.stringify({
              input: removeWhitespace(inputValue),
              multiline: removeWhitespace(multilineValue),
              tel: removeWhitespace(telValue),
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });
          if (response.ok) {
            setSuccess('Успешно');
            setTimeout(() => {
              setSuccess(null);
            }, 3000);
          } else {
            throw new Error('Произошла ошибка');
          }
        } finally {
          setIsLoading(false);
        }
      })().catch((err) => {
        setError('Произошла ошибка');
        setTimeout(() => {
          setError(null);
        }, 3000);
        // eslint-disable-next-line no-console
        console.error('Произошла ошибка:', err);
      });
    }
  };
  return (
    <ContainerComponent containerClassName={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextInput
          error={multilineError}
          label="Мультилайн текст"
          multiline
          name="multiline"
          onChange={(evt) => setMultilineValue(evt.target.value)}
          placeholder="Текст"
          value={multilineValue}
        />
        <TextInput
          error={inputError}
          label="Текст"
          name="multiline"
          onChange={(evt) => setInputValue(evt.target.value)}
          placeholder="Текст"
          value={inputValue}
        />
        <TextInput
          error={telError}
          label="Номер"
          name="multiline"
          onChange={(evt) => setTelValue(evt.target.value)}
          placeholder="Текст"
          type="tel"
          value={telValue}
        />
        <ButtonComponent className={styles.button} type="submit">
          {isLoading ? 'Loading...' : error || success || 'Подтвердить'}
        </ButtonComponent>
      </form>
    </ContainerComponent>
  );
}
