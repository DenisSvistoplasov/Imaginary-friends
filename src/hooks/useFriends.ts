import { useEffect } from "react";
import { friendsAPI } from "../firebaseAPI";
import { FormData } from "../types";
import { FriendData } from "../types";
import { createId } from "../utils/createId";
import { addFriend, deleteFriend, editFriend, getFriends, selectFriendsData, selectFriendsMeta, useAppDispatch, useAppSelector } from "../store";

export function useFriends() {
  const dispatch = useAppDispatch();
  const friends = useAppSelector(selectFriendsData);
  const { isLoading } = useAppSelector(selectFriendsMeta);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  const create = (data: FormData) => {
    const friend = {
      ...data,
      id: createId()
    };

    dispatch(addFriend(friend));
    friendsAPI.createFriend(friend);
  };

  const update = (friend: FriendData) => {
    dispatch(editFriend(friend));
    friendsAPI.editFriend(friend);
  };

  const remove = (id: string) => {
    dispatch(deleteFriend(id));
    friendsAPI.deleteFriend(id);
  };


  return {
    friends,
    isLoading,
    create,
    update,
    remove
  };
}