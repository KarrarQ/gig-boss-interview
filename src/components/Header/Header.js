import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <a href="/" className="gigboss-logo">
          <img
            src="//images.squarespace-cdn.com/content/v1/5b9952a7e7494023089aea6b/32beac78-6099-459e-9725-4f812358216a/Gig+Boss_Logo_Nov22_Logotype_White.png?format=1500w"
            alt="Gig Boss logo"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
