import React from 'react';
import './Style.css';

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
};

export default Footer;
