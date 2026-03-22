import React, { useState } from 'react';
import CaptivePortalDetector from '../components/CaptivePortalDemo/CaptivePortalDetector';

function PortalAPIDemo() {
  const [timeout, setTimeoutVal] = useState(2000);
  const [simulateState, setSimulateState] = useState('captive');

  return (
    <div className="demo-container">
      <h2>RFC 8908 Captive Portal API Implementation</h2>
      <p>
        This prototype demonstrates the configurable Captive Portal API workflow. 
        It supports variable timeouts, internet mode detection, and fallback mechanisms 
        for older unsupported browsers.
      </p>

      <div className="controls-panel">
        <h3>Configuration (Simulating YAML Settings)</h3>
        
        <div className="control-group">
          <label>Configurable Timeout (ms):</label>
          <input 
            type="number" 
            value={timeout} 
            onChange={(e) => setTimeoutVal(Number(e.target.value))}
            step="500"
            min="500"
          />
        </div>

        <div className="control-group">
          <label>Simulate Network State:</label>
          <select 
            value={simulateState}
            onChange={(e) => setSimulateState(e.target.value)}
          >
            <option value="captive">Captive Portal is present (Requires Login)</option>
            <option value="internet">Direct Internet Mode (No Login)</option>
            <option value="timeout">Simulate Unsupported / Timeout (Fallback)</option>
          </select>
        </div>
      </div>

      <CaptivePortalDetector 
        timeout={timeout} 
        simulateState={simulateState} 
      />

      <div className="explanation">
        <h3>Why this approach?</h3>
        <ul>
          <li><strong>Organization Configurable:</strong> Timeout can be adjusted per organization.</li>
          <li><strong>Robust Fallback:</strong> Reverts to old method if fetch hits the AbortController timeout.</li>
          <li><strong>Performance:</strong> Prevents hanging on networks that drop packets.</li>
        </ul>
      </div>
    </div>
  );
}

export default PortalAPIDemo;