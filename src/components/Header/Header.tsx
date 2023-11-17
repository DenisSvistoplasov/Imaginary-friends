import styles from './Header.module.scss';

interface IHeaderProps{
}

export function Header({}: IHeaderProps) {
  let isLogin=true;
  let userName=''
  return (
    <div className={styles.wrapper}>
      <div className="user">{userName}</div>

      <div className="logout">Exit</div>
    </div>
  );
}