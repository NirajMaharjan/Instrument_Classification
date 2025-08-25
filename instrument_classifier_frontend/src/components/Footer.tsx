import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="traditional-border" />
        <div className="footer-content">
          <div className="footer-section">
            <h3>TradInstrument.ai</h3>
            <p>Preserving and celebrating traditional Nepali musical heritage through AI technology.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="/#instruments">Instruments</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Instruments</h4>
            <ul>
              <li><Link to="/instruments/sarangi">Sarangi</Link></li>
              <li><Link to="/instruments/dhime">Dhime</Link></li>
              <li><Link to="/instruments/madal">Madal</Link></li>
              <li><Link to="/instruments/tabla">Tabla</Link></li>
              <li><Link to="/instruments/bansuri">Bansuri</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@tradinstrument.ai</p>
            <p>Preserving musical traditions since 2024</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TradInstrument.ai. Honoring Nepali musical heritage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
