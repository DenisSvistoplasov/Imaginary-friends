import styles from './Header.module.scss';

interface IHeaderProps{
}

export function Header({}: IHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Imaginary friends</h1>
    </div>
  );
}