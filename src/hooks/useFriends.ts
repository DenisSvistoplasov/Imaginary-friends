import { useEffect } from "react";
import { selectFriendsData, selectFriendsMeta, getFriends } from "../store/friends";
import { useAppDispatch, useAppSelector } from "../store/store";

export function useFriends() {
  const dispatch = useAppDispatch();
  const friends = useAppSelector(selectFriendsData);
  const { isLoading } = useAppSelector(selectFriendsMeta);

  useEffect(() => {
    dispatch(getFriends());
  }, []);

  return {
    friends,
    isLoading
  };
}