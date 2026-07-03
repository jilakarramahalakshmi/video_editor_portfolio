import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listenProjects } from "../services/fetchService";




function Category() {
  const { name } = useParams();
  const navigate = useNavigate();

  const decodedName = decodeURIComponent(name);

  const [firebaseProjects, setFirebaseProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔥 Firebase realtime
  useEffect(() => {
    const unsubscribe = listenProjects((data) => {
      setFirebaseProjects(data);
    });

    return () => unsubscribe();
  }, []);

 

  

  // 🔥 merge firebase + static
  const dashboardProjects = firebaseProjects.filter(
    (p) => p.category === decodedName
  );

  const allProjects = [...dashboardProjects];
  

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="category-page">
      <h1>{decodedName}</h1>

      {/* GRID */}
      <div className="grid">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>

            {project.video && <video src={project.video} />}
            {project.image && <img src={project.image} alt="" />}

            {project.mediaUrl &&
  (project.category === "Poster" ? (
    <img
      src={project.mediaUrl}
      alt={project.title}
    />
  ) : (
    <video
      src={project.mediaUrl}
    />
  ))}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>

            <h2>{selectedProject.title}</h2>

            {selectedProject.video && (
              <video src={selectedProject.video} controls autoPlay />
            )}

            {selectedProject.image && (
              <img src={selectedProject.image} alt="" />
            )}

            {selectedProject.mediaUrl &&
  (selectedProject.category === "Poster" ? (
    <img
      src={selectedProject.mediaUrl}
      alt={selectedProject.title}
    />
  ) : (
    <video
      src={selectedProject.mediaUrl}
      controls
      autoPlay
    />
  ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;