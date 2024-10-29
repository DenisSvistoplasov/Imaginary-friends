import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Imaginary friends!</h1>
    </div>
  );
}