import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="hero-content">
          <h1>Shri Shanmukha Edits</h1>

          <p>
            Turning moments into memories.
            Professional video editing services for
            Instagram Reels, YouTube Videos,
            Weddings and Commercial Ads.
          </p>

          <div className="buttons">
            <Link to="/portfolio">
              <button>View Portfolio</button>
            </Link>

            <Link to="/contact">
              <button>Hire Me</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="services">

        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            Instagram Reels Editing
          </div>

          <div className="service-card">
            YouTube Video Editing
          </div>

          <div className="service-card">
            Wedding & Event Editing
          </div>

          <div className="service-card">
            Motion Graphics
          </div>

          <div className="service-card">
            Logo Animation
          </div>

          <div className="service-card">
            AI Video Enhancement
          </div>

          <div className="service-card">
            Green Screen Editing
          </div>

          <div className="service-card">
            Short Films
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;