import clsx from 'clsx';

import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={clsx('section', styles.section)}>
      <div className={clsx('container', styles.container)}>
        <h2>Главная</h2>
      </div>
    </section>
  );
}
