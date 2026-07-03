import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const listenProjects = (callback) => {
  return onSnapshot(collection(db, "projects"), (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(data);
  });
};