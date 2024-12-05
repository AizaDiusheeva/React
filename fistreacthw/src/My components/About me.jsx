import React from 'react';
import './Style.css';

const About  = ({ name, description }) => {
  return (
    <section className="about">
      <h2>О себе</h2>
      <p><strong>Aiza Diusheeva:</strong> {name}</p>
      <p>{description}</p>
    </section>
  );
};

export default About;
