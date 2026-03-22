import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import StatusComparison from './demos/StatusComparison';
import PortalAPIDemo from './demos/PortalAPIDemo';
import MigrationDemo from './demos/MigrationDemo';
import UIImprovementsDemo from './demos/UIImprovementsDemo';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="demo-nav">
          <h1>OpenWISP WiFi Login Pages - GSoC Prototype</h1>
          <div className="nav-links">
            <Link to="/status-comparison">Status Component Refactoring</Link>
            <Link to="/portal-api">Captive Portal API</Link>
            <Link to="/react-migration">React 19 Migration</Link>
            <Link to="/ui-improvements">UI Improvements</Link>
          </div>
        </nav>

        <main>
          <Routes>
            {/* Status Component - Modular vs Monolithic */}
            <Route path="/status-comparison" element={<StatusComparison />} />
            
            {/* RFC 8908 Captive Portal API configuration logic */}
            <Route path="/portal-api" element={<PortalAPIDemo />} />
            
            {/* React 19 / Testing Library Migration Examples */}
            <Route path="/react-migration" element={<MigrationDemo />} />
            
            {/* Unified UI & Redirect Logic Improvements */}
            <Route path="/ui-improvements" element={<UIImprovementsDemo />} />
            
            {/* Default Route */}
            <Route path="/" element={<StatusComparison />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;