import styles from './Profile.module.scss';

interface IProfileProps{
}

export function Profile({}: IProfileProps) {
  return (
    <div className={styles.wrapper}>
      Profile
    </div>
  );
}