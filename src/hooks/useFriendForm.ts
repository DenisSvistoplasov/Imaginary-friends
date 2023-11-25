import { friendsAPI } from "../firebase/api";
import { addFriend, editFriend, deleteFriend } from "../store/friends";
import { useAppDispatch } from "../store/store";
import { IFormData } from "../types/formData";
import { IFriend } from "../types/friend";
import { createId } from "../utils/createId";

export function useFriendForm() {
  const dispatch = useAppDispatch();

  const create = (data: IFormData) => {
    const friend = {
      ...data,
      id: createId()
    };

    dispatch(addFriend(friend));
    friendsAPI.createFriend(friend);
  };

  const update = (friend: IFriend) => {
    dispatch(editFriend(friend));
    friendsAPI.editFriend(friend);
  };

  const remove = (id: string) => {
    dispatch(deleteFriend(id));
    friendsAPI.deleteFriend(id);
  };

  return {
    create,
    update,
    remove
  };
}