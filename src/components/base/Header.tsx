import Link from 'next/link';
import ChangeThemeButton from '../ChangeThemeButton';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <ul className={styles.list}>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <ChangeThemeButton />
        </div>
      </section>
    </header>
  );
}

export default Header;
