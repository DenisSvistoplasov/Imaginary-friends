import { friendsAPI } from "../firebase/api";
import { useAppDispatch } from "../store/store";
import { addFriend } from "../store/friends";
import { IFriend } from "../types/friend";

export function useAddFriend() {
  const dispatch = useAppDispatch();

  return (friend: IFriend) => {
    // friendsAPI.createFriend(friend);
    console.log('friendsAPI.createFriend(friend);: ', friendsAPI.createFriend(friend));
    dispatch(addFriend(friend));
  };
};