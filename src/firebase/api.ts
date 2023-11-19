import { auth, db } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, updateDoc, getDoc, collection, query, getDocs } from "firebase/firestore/lite";
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
  async createFriend(friend: Partial<IFriend>) {
    const id = createId();
    return setDoc(doc(friendsRef, id), { ...friend, id });
  }
};