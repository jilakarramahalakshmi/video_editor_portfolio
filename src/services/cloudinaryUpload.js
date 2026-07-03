import axios from "axios";

const CLOUD_NAME = "dnytp93nh";
const UPLOAD_PRESET = "editing";

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
    formData
  );

  return res.data.secure_url;
};