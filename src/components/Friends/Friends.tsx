import styles from './Friends.module.scss';
import { WithPreloader } from '../WithPreloader/WithPreloader';
import { Friend } from '../Friend/Friend';
import { useFriends } from '../../hooks/useFriends';

interface IFriendsProps {
}

export function Friends({}: IFriendsProps) {
  const { friends, isLoading } = useFriends();

  const list = friends.map(friend => (
    <li className={styles.item} key={friend.id}>
      <Friend data={friend} />
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <WithPreloader isLoading={isLoading}>
        <ul className={styles.list}>
          {list}
        </ul>
      </WithPreloader>
    </div>
  );
}