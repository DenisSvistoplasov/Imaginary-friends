import styles from './Footer.module.scss';

interface IFooterProps{
}

export function Footer({}: IFooterProps) {
  return (
    <div className={styles.wrapper}>
      2023
    </div>
  );
}