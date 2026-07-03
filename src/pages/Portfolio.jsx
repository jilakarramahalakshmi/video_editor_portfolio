import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listenProjects } from "../services/fetchService";
import heroBg from "../assets/images/hero-bg.jpg";
import AEbg from "../assets/images/AE-bg.jpg";
import AIbg from "../assets/images/AI-bg.jpg";
import newsbg from "../assets/images/news-bg.jpg";
import posterbg from "../assets/images/poster-bg.jpg";
import reelbg from "../assets/images/reel-bg.jpg";
import adsbg from "../assets/images/ads-bg.jpg";
import trailerbg from "../assets/images/trailer-bg.jpg";
import creativebg from "../assets/images/creative-bg.jpg";



function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 1, name: "AE Projects", image: AEbg },
    { id: 2, name: "AI Videos", image: AIbg },
    { id: 3, name: "News", image: newsbg },
    { id: 4, name: "Poster", image: posterbg },
    { id: 5, name: "Reels", image: reelbg },
    { id: 6, name: "Ads", image: adsbg },
    { id: 7, name: "Trailers", image: trailerbg },
    { id: 8, name: "Creative works", image: creativebg },
  ];

  useEffect(() => {
  const unsubscribe = listenProjects((data) => {
    setProjects(data);
  });

  return () => unsubscribe();
}, []);

  return (
    <div className="portfolio">
      <h1>MY Works</h1>

      <div className="portfolio-grid">
        {categories.map((category) => {
          
          // filter projects by category
         const filteredProjects = projects.filter(
  (p) => p.category === category.name
); 
          return (
            <Link
              key={category.id}
              to={`/category/${category.name}`}
              className="category-card"
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />

              <h2>{category.name}</h2>

              {/* count display (optional but useful) */}
              <p>{filteredProjects.length} Projects</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;