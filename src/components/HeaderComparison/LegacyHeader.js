import React from 'react';
import './header.css';

function LegacyHeader({ isMobile }) {
  return (
    <div className={`header-box ${isMobile ? 'simulate-mobile' : ''}`}>
      <div style={{ padding: '10px', background: '#e74c3c', color: 'white', fontSize: '12px' }}>
        Current Approach: 2 separate HTML structures rendered conditionally
      </div>
      
      {/* Structure 1: DESKTOP */}
      <div className="legacy-desktop-header" style={{ justifyContent: 'space-between', padding: '15px', background: '#34495e', color: 'white' }}>
        <div className="logo">📡 OpenWISP Desktop</div>
        <div className="menu">
          <span>Home</span> | <span>Status</span> | <span>Logout</span>
        </div>
      </div>

      {/* Structure 2: MOBILE (DUPLICATED CODE) */}
      <div className="legacy-mobile-header" style={{ padding: '15px', background: '#34495e', color: 'white', alignItems: 'center' }}>
        <div className="logo" style={{ marginBottom: '10px' }}>📡 OpenWISP Mobile</div>
        <div className="menu">
          <div>Home</div>
          <div>Status</div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default LegacyHeader;