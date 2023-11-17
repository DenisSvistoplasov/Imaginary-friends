import styles from './Settings.module.scss';

interface ISettingsProps{
}

export function Settings({}: ISettingsProps) {
  return (
    <div className={styles.wrapper}>
      Settings
    </div>
  );
}