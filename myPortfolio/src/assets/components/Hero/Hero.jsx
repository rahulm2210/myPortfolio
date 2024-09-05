import TypeIt from "typeit-react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero bg-image">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Rahul Mejari</h1>
            <p className="hero-subtitle">
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("UI Developer")
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type("Front End Developer");
                  return instance;
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
