'use client';

import ButtonComponent from '@/components/ui/Button';
import TextInput from '@/components/ui/Input';
import { removeWhitespace, validateString, wordsPattern } from '@/shared/utils/form';
import { useState } from 'react';

import styles from './index.module.scss';

export default function HomeComponent() {
  const [multilineValue, setMultilineValue] = useState('');
  const [multilineError, setMultilineError] = useState<null | string>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);
  // const
  const validateAndThrowErrors = () => {
    const isMultilineValid = validateString({
      patternError: 'Допустим только текст',
      regexp: wordsPattern,
      requiredError: 'Поле пусто',
      setError: setMultilineError,
      value: multilineValue,
    });

    return isMultilineValid;
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
              multiline: removeWhitespace(multilineValue),
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
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Home</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            error={multilineError}
            label="Мультилайн инпут"
            multiline
            name="multiline"
            onChange={(evt) => setMultilineValue(evt.target.value)}
            placeholder="Текст"
            value={multilineValue}
          />
          <ButtonComponent type="submit">
            {isLoading ? 'Loading...' : error || success || 'Подтвердить'}
          </ButtonComponent>
        </form>
      </div>
    </section>
  );
}
