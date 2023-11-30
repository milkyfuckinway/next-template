import ThemeButton from '@/components/ui/ThemeButton';
import Link from 'next/link';

import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
        </nav>
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
