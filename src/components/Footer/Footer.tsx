import styles from './Footer.module.scss';

interface FooterProps {
}

export function Footer({}: FooterProps) {
  return (
    <div className={styles.wrapper}>
      2023
    </div>
  );
}