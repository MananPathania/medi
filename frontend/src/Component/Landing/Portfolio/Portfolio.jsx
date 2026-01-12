import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="profile-page">

 
      <section className="portfolio">
        <div className="portfolio-container">

          <div className="portfolio-text">
            <h1>
              Hello, I am <span>Manan Pathania</span>
            </h1>
            <p>
              I am from Basnoor (Himachal Pradesh) and I am 20 years old.
              <br />
              I have done my schooling from Our Own English School, Shahpur.
              <br />
              Currently pursuing Bachelor of Computer Application at
              Dronacharya PG College of Education, Rait.
            </p>

            <button
              className="portfolio-button"
              
            >
              View Resume
            </button>
          </div>

          <div className="portfolio-image">
            <img
              src="/image.jpg"
              alt="Manan Pathania"
              className="profile-img"
            />
          </div>

        </div>
      </section>

      <section className="skills">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Technical Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Flutter</li>
              <li>MS Excel</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Team Work</li>
              <li>Leadership</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className="projects">
        <h2>My Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <img src="/image.png" alt="Flutter App" className="project-img" />
            <h3>Flutter Student App</h3>
            <p>
              Flutter-based mobile app for managing student data with
              clean UI and smooth navigation.
            </p>
          </div>

          <div className="project-card">
            <img
              src="/cal.png"
              alt="Python Calculator"
              className="project-img"
            />
            <h3>Python Calculator</h3>
            <p>
              Calculator application developed using Python for basic
              arithmetic operations.
            </p>
          </div>

          <div className="project-card">
            <img
              src="/portfolio.png"
              alt="Portfolio Website"
              className="project-img"
            />
            <h3>Portfolio Website</h3>
            <p>
              Personal portfolio website built using HTML, CSS and React
              showcasing skills and projects.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Portfolio;
