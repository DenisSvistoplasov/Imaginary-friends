import styles from './Friend.module.scss';
import { FriendData } from '../../types';
import { IconDelete } from '../Icons/IconDelete';
import { FallbackedImage } from '../FallbackedImage/FallbackedImage';

interface FriendProps {
  friend: FriendData;
  onFriendClick: (friend: FriendData) => void;
  onDeleteClick: (friend: FriendData) => void;
}

export function Friend({ friend, onFriendClick, onDeleteClick }: FriendProps) {

  return (
    <div className={styles.wrapper}>
      <button className={styles.itemBtn} onClick={() => onFriendClick(friend)}>
        <FallbackedImage src={friend.img} alt="friend avatar" className={styles.img} />
        <div className={styles.name}>{friend.name}</div>
      </button>

      <button className={styles.deleteBtn} onClick={() => onDeleteClick(friend)}>
        <IconDelete />
      </button>
    </div>
  );
}