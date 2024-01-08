import styles from './index.module.scss';

export default function GridComponent() {
  return (
    <div className={styles.grid}>
      {[...Array(12).keys()].map((i) => (
        <div className={styles.column} key={i} />
      ))}
    </div>
  );
}
