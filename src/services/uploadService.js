import { uploadToCloudinary } from "./cloudinaryUpload";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const uploadMedia = async (file, title, category, description) => {
  // 1. Upload to Cloudinary
  const mediaUrl = await uploadToCloudinary(file);

  // 2. Save to Firebase Firestore
  await addDoc(collection(db, "projects"), {
    title,
    category,
    description,
    mediaUrl,
    createdAt: Date.now(),
  });

  return true;
};