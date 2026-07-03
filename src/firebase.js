import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2DU-r49LOdYNgd_bq8X8Y1nJ_Q67NACo",
  authDomain: "as-editor-portfolio.firebaseapp.com",
  projectId: "as-editor-portfolio",
  storageBucket: "as-editor-portfolio.appspot.com", // 🔥 MUST BE THIS
  messagingSenderId: "332125541851",
  appId: "1:332125541851:web:7cf5005bb4a785282c03fe",
  measurementId: "G-VGFX7SSM7C"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
/// 🔥 ADD THIS (IMPORTANT PART)
if (typeof window !== "undefined") {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      console.log("Login session stored (persistent)");
    })
    .catch((error) => {
      console.log("Persistence error:", error);
    });
}