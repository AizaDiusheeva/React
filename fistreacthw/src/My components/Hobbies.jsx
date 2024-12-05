import React from 'react';
import './Style.css';

const Hobbies = ({ hobbies }) => {
  return (
    <section className="hobbies">
      <h2>Увлечения</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
