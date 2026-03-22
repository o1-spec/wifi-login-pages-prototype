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

      <div className="controls" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h3>Configuration (Simulating YAML Settings)</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}><strong>Configurable Timeout (ms):</strong></label>
          <input 
            type="number" 
            value={timeout} 
            onChange={(e) => setTimeoutVal(Number(e.target.value))}
            step="500"
            min="500"
            style={{ padding: '5px' }}
          />
        </div>

        <div>
          <label style={{ marginRight: '10px' }}><strong>Simulate Network State:</strong></label>
          <select 
            value={simulateState}
            onChange={(e) => setSimulateState(e.target.value)}
            style={{ padding: '5px' }}
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

      <div className="explanation" style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
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