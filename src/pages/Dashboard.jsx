import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { uploadMedia } from "../services/uploadService";
import { listenProjects } from "../services/fetchService";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Dashboard() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("AE Projects");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // 🔥 Logout
   const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};



  useEffect(() => {
    const unsubscribe = listenProjects((data) => {
      setProjects(data);
    });

    return () => unsubscribe();
  }, []);

  
  // 🔥 Add Project (Upload → Firebase)
 const handleAddProject = async () => {
  if (!file) {
    alert("Please select file");
    return;
  }
  

  try {
    await uploadMedia(
      file,
      title,
      category,
      description
    );

    setTitle("");
    setDescription("");
    setFile(null);

   

  } catch (err) {
    console.log(err);
    alert("Upload Failed");
  }
};

  // 🔥 Delete (frontend only now)
  const deleteProject = async (id) => {
  try {
    await deleteDoc(doc(db, "projects", id));
    console.log("Deleted from Firebase successfully");
  } catch (error) {
    console.error("Delete failed:", error);
  }
};

  // 🔥 Edit (basic UI only for now)
  const startEdit = (index) => {
    const project = projects[index];

    setTitle(project.title || "");
    setCategory(project.category || "AE Projects");
    setDescription(project.description || "");
    setFile(null);

    setEditingIndex(index);
  };

  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
  <h1>Admin Dashboard</h1>
  <button onClick={handleLogout}>Logout</button>
</div>

      {/* UPLOAD SECTION */}
      <div className="upload-section">

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="AE Projects">AE Projects</option>
          <option value="AI Videos">AI Videos</option>
          <option value="News">News</option>
          <option value="Poster">Poster</option>
          <option value="Reels">Reels</option>
          <option value="Ads">Ads</option>
          <option value="Trailers">Trailer cuts</option>
          <option value="Creative works">Creative works</option>
        </select>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleAddProject}>
          {editingIndex !== null ? "Update Project" : "Add Project"}
        </button>

      </div>

      <hr />

      <h2>Uploaded Projects</h2>

      {/* FEED */}
      <div className="project-list">

        {projects.map((project, index) => (
          <div key={project.id || index} className="project-card">

          <div className="project-content">
  <p>{project.title}</p>
  <small>{project.category}</small>
  <p>{project.description}</p>
</div>

<div className="project-media">
  {project.mediaUrl &&
    (project.category === "Poster" ? (
      <img src={project.mediaUrl} alt={project.title} />
    ) : (
      <video controls width="300">
        <source src={project.mediaUrl} />
      </video>
    ))}
</div>

<div className="project-actions">
  <button onClick={() => deleteProject(project.id)}>Delete</button>
  <button onClick={() => startEdit(index)}>Edit</button>
</div>
      

      </div>

        ))}
      </div>
    </div>
  );
}


export default Dashboard;