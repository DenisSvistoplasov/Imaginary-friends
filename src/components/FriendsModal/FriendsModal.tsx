import { IFormData } from '../../types/formData';
import { IFriend } from '../../types/friend';
import { DeletionConfirm } from '../DeletionConfirm/DeletionConfirm';
import { FriendForm } from '../FriendForm/FriendForm';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import styles from './FriendsModal.module.scss';

interface IFriendsModalProps {
  currentFriend: IFriend | null;
  isDeletion: boolean;
  closeModal: () => void;
  create: (friend: IFormData) => void;
  update: (friend: IFriend) => void;
  remove: (id: string) => void;
}

export function FriendsModal({ isDeletion, closeModal, currentFriend, create, update, remove }: IFriendsModalProps) {
  const onSubmit = currentFriend ?
    (data: IFormData) => { update({ ...data, id: currentFriend.id }); closeModal(); } :
    (data: IFormData) => { create(data); closeModal(); };

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