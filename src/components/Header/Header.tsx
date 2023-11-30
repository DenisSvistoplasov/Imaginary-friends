import styles from './Header.module.scss';

interface HeaderProps {
}

export function Header({}: HeaderProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Imaginary friends</h1>
    </div>
  );
}