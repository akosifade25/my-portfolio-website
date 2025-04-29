import React from 'react';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>
            WELCOME TO<br />
            MY <span className="highlight">PORTFOLIO</span>
          </h1>
          <p>
            Hello, I’m <strong>Aaron Faderagao</strong> an aspiring <span className="highlight">UI/UX Designer </span> 
            with a passion for creating intuitive, human-centered digital experiences.
          </p>
        </div>
        <div className="home-image">
          <img src="/assets/flylovebot.gif" alt="Me" />
        </div>
      </div>
    </section>
  );
}

export default Home;
