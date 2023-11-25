import styles from './Friends.module.scss';
import { WithPreloader } from '../WithPreloader/WithPreloader';
import { Friend } from '../Friend/Friend';
import { useFriends } from '../../hooks/useFriends';
import { useMemo, useState } from 'react';
import { IFriend } from '../../types/friend';
import { FriendsModal } from '../FriendsModal/FriendsModal';

interface IFriendsProps {
}

export function Friends({}: IFriendsProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentFriend, setCurrentFriend] = useState<IFriend | null>(null);
  const [isDeletion, setIsDeletion] = useState(false);
  const { friends, isLoading, create, update, remove } = useFriends();

  const openModal = () => setIsModalOpened(true);

  const closeModal = () => {
    setCurrentFriend(null);
    setIsDeletion(false);
    setIsModalOpened(false);
  };

  const onFriendClick = (friend: IFriend) => {
    setCurrentFriend(friend);
    openModal();
  };

  const onDeleteClick = (friend: IFriend) => {
    setCurrentFriend(friend);
    setIsDeletion(true);
    openModal();
  };

  const list = useMemo(() => friends.map(friend => (
    <li className={styles.item} key={friend.id}>
      <Friend
        friend={friend}
        onFriendClick={onFriendClick}
        onDeleteClick={onDeleteClick}
      />
    </li>
  )), [friends]);

  const isEmpty = !list.length;


  return (
    <div className={styles.wrapper}>
      <WithPreloader isLoading={isLoading && isEmpty}>
        <button
          className={styles.addBtn}
          onClick={openModal}
        >
          Make up a&nbsp;new friend
        </button>
        <ul className={styles.list}>
          {list}
        </ul>
      </WithPreloader>

      {isModalOpened &&
        <FriendsModal
          currentFriend={currentFriend}
          isDeletion={isDeletion}
          closeModal={closeModal}
          create={create}
          update={update}
          remove={remove}
        />
      }
    </div>
  );
}