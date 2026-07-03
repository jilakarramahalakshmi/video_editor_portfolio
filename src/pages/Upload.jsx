import { useState } from "react";
import { uploadToCloudinary } from "../services/cloudinaryUpload";

function Upload() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async (e) => {
    const f = e.target.files[0];
    setFile(f);

    const uploadedUrl = await uploadToCloudinary(f);
    setUrl(uploadedUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />

      {url && (
        <img src={url} width="200" />
      )}
    </div>
  );
}

export default Upload;