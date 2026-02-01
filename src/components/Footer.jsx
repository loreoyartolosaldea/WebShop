import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} LAU-OIN. Eskubide guztiak erreserbatuta.</p>
        <div className="footer-links">
          <a href="#">Pribatutasun Politika</a>
          <a href="#">Erabilera Baldintzak</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
