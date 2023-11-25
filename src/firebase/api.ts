import { auth, db } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, updateDoc, getDoc, collection, query, getDocs, deleteDoc } from "firebase/firestore/lite";
import { loginToEmail } from "../utils/login_email";
import { IFriend } from "../types/friend";
import { createId } from "../utils/createId";

const friendsRef = collection(db, 'friends');;


export const friendsAPI = {
  async getFriends() {
    let snapshot = await getDocs(friendsRef);
    let res: IFriend[] = [];
    snapshot.forEach(doc => res.push(doc.data() as IFriend));
    return res;
  },
  async createFriend(friend: IFriend) {
    return setDoc(doc(friendsRef, friend.id), friend);
  },
  async editFriend(friend: IFriend) {
    return setDoc(doc(friendsRef, friend.id), friend);
  },
  async deleteFriend(id: string) {
    return deleteDoc(doc(friendsRef, id));
  },
};