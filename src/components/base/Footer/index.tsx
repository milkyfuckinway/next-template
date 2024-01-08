import ContainerComponent from '@/components/layout/Container';

import styles from './index.module.scss';

export default function FooterComponent() {
  return (
    <ContainerComponent
      containerClassName={styles.container}
      maxWidth={false}
      wrapperClassName={styles.footer}
    >
      <div className={styles.year}>2024</div>
    </ContainerComponent>
  );
}
