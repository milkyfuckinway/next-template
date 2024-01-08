import { Loader } from '@/shared/assets/svg/index.svg';

import styles from './index.module.scss';

export default function SplashScreen({
  reference,
}: {
  reference?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className={styles.container} ref={reference}>
      <Loader fill="var(--spinner)" />
    </div>
  );
}
