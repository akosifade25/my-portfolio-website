import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image-box">
            <img src="/assets/runbot.gif" alt="Me" />
          </div>
        </div>
        <div className="about-text">
          <p>
            Hello! I’m Aaron Faderagao, a BSIT student at Dalubhasaan ng Lungsod ng Lucena.
            I am an aspiring UI/UX Designer with a strong interest in creating user-centered,
            visually appealing, and intuitive digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
