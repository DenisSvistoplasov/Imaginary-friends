import styles from './Friend.module.scss';
import { IFriend } from '../../types/friend';
import { IconDelete } from '../IconDelete';
import defaultImg from '../../assets/images/defaultFriendImage.webp';


interface IFriendProps {
  friend: IFriend;
  onFriendClick: (friend: IFriend) => void;
  onDeleteClick: (friend: IFriend) => void;
}

export function Friend({ friend, onFriendClick, onDeleteClick }: IFriendProps) {

  return (
    <div className={styles.wrapper}>
      <button className={styles.itemBtn} onClick={() => onFriendClick(friend)}>
        <img src={friend.img || defaultImg} alt="friend avatar" className={styles.img} />
        <div className={styles.name}>{friend.name}</div>
      </button>

      <button className={styles.deleteBtn} onClick={() => onDeleteClick(friend)}>
        <IconDelete/>
      </button>
    </div>
  );
}