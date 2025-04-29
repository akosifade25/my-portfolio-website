import React from 'react';
import { FaGithub, FaFacebook, FaEnvelope, FaInstagram } from 'react-icons/fa';

function Contacts() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-icons">
        <a href="https://github.com/akosifade25" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/aaron.faderagao" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="mailto:faderagao.aaron.dll@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/ako_si_fade/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

export default Contacts;
