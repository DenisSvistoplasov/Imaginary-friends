import { FormData } from '../../types';
import { FriendData } from '../../types';
import { DeletionConfirm } from '../DeletionConfirm/DeletionConfirm';
import { FriendForm } from '../FriendForm/FriendForm';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

interface FriendsModalProps {
  currentFriend: FriendData | null;
  isDeletion: boolean;
  closeModal: () => void;
  create: (friend: FormData) => void;
  update: (friend: FriendData) => void;
  remove: (id: string) => void;
}

export function FriendsModal({ isDeletion, closeModal, currentFriend, create, update, remove }: FriendsModalProps) {
  const onSubmit = currentFriend ?
    (data: FormData) => { update({ ...data, id: currentFriend.id }); closeModal(); } :
    (data: FormData) => { create(data); closeModal(); };

  const onRemove = () => {
    remove(currentFriend?.id || '');
    closeModal();
  };

  return (
    <>
      <ModalWrapper close={closeModal}>
        {(() => {
          if (isDeletion) return (
            <DeletionConfirm
              name={currentFriend?.name || ''}
              img={currentFriend?.img || ''}
              onYes={onRemove}
              onNo={closeModal}
            />);

          if (currentFriend) return (
            <FriendForm
              onSubmit={onSubmit}
              currentFriend={currentFriend}
              close={closeModal}
            />);

          return <FriendForm
            onSubmit={onSubmit}
            close={closeModal}
          />;
        })()}
      </ModalWrapper>
    </>
  );
}