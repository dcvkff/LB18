import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/about">Про мене</Link></li>
          <li><Link to="/my-city">Моє місто</Link></li>
          <li><Link to="/my-future">Мій розвиток</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
