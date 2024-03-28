import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Gig Boss</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
