import React from 'react';
import './Style.css';

const Contact = ({ email, phone, children }) => {
  return (
    <section className="contact">
      <h2>Контакты</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Телефон:</strong> {phone}</p>
      {children}
    </section>
  );
};

export default Contact;
