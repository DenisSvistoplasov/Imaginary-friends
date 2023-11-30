import styles from './Friends.module.scss';
import { WithPreloader } from '../../components/WithPreloader/WithPreloader';
import { Friend } from '../../components/Friend/Friend';
import { useFriends } from '../../hooks';
import { useMemo, useState } from 'react';
import { FriendData } from '../../types';
import { FriendsModal } from '../../components/FriendsModal/FriendsModal';

interface FriendsProps {
}

export function Friends({}: FriendsProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentFriend, setCurrentFriend] = useState<FriendData | null>(null);
  const [isDeletion, setIsDeletion] = useState(false);
  const { friends, isLoading, create, update, remove } = useFriends();

  const openModal = () => setIsModalOpened(true);

  const closeModal = () => {
    setCurrentFriend(null);
    setIsDeletion(false);
    setIsModalOpened(false);
  };

  const onFriendClick = (friend: FriendData) => {
    setCurrentFriend(friend);
    openModal();
  };

  const onDeleteClick = (friend: FriendData) => {
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