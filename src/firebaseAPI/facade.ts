import { db } from "./init";
import { setDoc, doc, collection, getDocs, deleteDoc } from "firebase/firestore/lite";
import { FriendData } from "../types";

const friendsRef = collection(db, 'friends');

export const friendsAPI = {
  async getFriends() {
    let snapshot = await getDocs(friendsRef);
    let res: FriendData[] = [];
    snapshot.forEach(doc => res.push(doc.data() as FriendData));
    return res;
  },
  async createFriend(friend: FriendData) {
    return setDoc(doc(friendsRef, friend.id), friend);
  },
  async editFriend(friend: FriendData) {
    return setDoc(doc(friendsRef, friend.id), friend);
  },
  async deleteFriend(id: string) {
    return deleteDoc(doc(friendsRef, id));
  },
};