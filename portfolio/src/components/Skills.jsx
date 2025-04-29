import React from 'react';
import { FaPaintBrush, FaFigma, FaCameraRetro } from 'react-icons/fa';

function Skills() {
  const skills = [
    {
      title: 'Graphic Design',
      description:
        'Create visually compelling designs that communicate messages effectively through typography, color, and layout.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'UI/UX Design',
      description:
        'Design intuitive, user-centered interfaces that enhance digital experiences and improve usability across platforms.',
      icon: <FaFigma />,
    },
    {
      title: 'Photo Editing',
      description:
        'Enhance and retouch images with precision to achieve high-quality, visually striking results.',
      icon: <FaCameraRetro />,
    },
  ];

  return (
    <section id="skills" className="skill">
      <h1 className="skill-title">My Skills</h1>
      <div className="skill-cards">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h2 className="skill-name">{skill.title}</h2>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
