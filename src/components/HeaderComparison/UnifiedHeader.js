import React from 'react';
import './header.css';

function UnifiedHeader({ isMobile }) {
  return (
    <div className={`header-box ${isMobile ? 'simulate-mobile' : ''}`}>
      <div style={{ padding: '10px', background: '#2ecc71', color: 'white', fontSize: '12px' }}>
        Proposed Approach: 1 HTML structure styled via flexbox/media queries
      </div>
      
      {/* SINGLE STRUCTURE FOR BOTH DESKTOP & MOBILE */}
      <header className="unified-header">
        <div className="brand" style={{ fontWeight: 'bold' }}>📡 OpenWISP Login</div>
        <nav className="unified-nav" style={{ display: 'flex', gap: '15px' }}>
          <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#status" style={{ color: 'white', textDecoration: 'none' }}>Status</a>
          <a href="#logout" style={{ color: 'white', textDecoration: 'none' }}>Logout</a>
        </nav>
      </header>
    </div>
  );
}

export default UnifiedHeader;