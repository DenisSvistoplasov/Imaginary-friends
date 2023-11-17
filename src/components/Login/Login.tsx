import { useAppDispatch } from '../../store/store';
import styles from './Login.module.scss';

interface ILoginProps{
}

export function Login({}: ILoginProps) {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.wrapper}>
      <form className="form">
        <h1 className="title">Login</h1>
        <input type="text" className="login" />
        <input type="password" className="password" />
        <button>OK</button>
      </form>
    </div>
  );
}
