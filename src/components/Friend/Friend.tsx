import styles from './Friend.module.scss';
import { IFriend } from '../../types/friend';

interface IFriendProps {
  data: IFriend;
}

export function Friend({ data:{id, name, img} }: IFriendProps) {
  
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="friend avatar" className={styles.img} />
      <div className={styles.name}>{name}</div>
    </div>
  );
}