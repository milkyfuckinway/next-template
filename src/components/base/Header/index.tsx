import ContainerComponent from '@/components/layout/Container';
import ThemeButton from '@/components/ui/ThemeButton';
import Link from 'next/link';

import styles from './index.module.scss';

export default function HeaderComponent() {
  return (
    <ContainerComponent
      containerClassName={styles.container}
      layout="flex-row"
      maxWidth={false}
      wrapperClassName={styles.header}
    >
      <nav className={styles.nav}>
        <Link href="/">Главная</Link>
        <Link href="/form">Форма</Link>
        <Link href="/text">Текст</Link>
      </nav>
      <ThemeButton />
    </ContainerComponent>
  );
}
