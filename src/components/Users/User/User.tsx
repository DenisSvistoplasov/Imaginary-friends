import styles from './User.module.scss';
import { IUser } from '../../../types/user';

interface IUserProps {
  data: IUser;
}

export function User({ data }: IUserProps) {
  const {
    avatar = '',
    email = '',
    first_name = '',
    id,
    last_name = ''
  } = data;
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt="user avatar" className={styles.img} />
      <div className={styles.name}>{last_name} {first_name}</div>
      <div className={styles.email}>{email}</div>
    </div>
  );
}