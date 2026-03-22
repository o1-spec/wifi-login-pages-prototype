import React, { useState, useEffect } from 'react';

function CaptivePortalDetector({ timeout, simulateState }) {
  const [status, setStatus] = useState('checking');
  const [venueInfo, setVenueInfo] = useState(null);

  useEffect(() => {
    setStatus('checking');
    setVenueInfo(null);

    // Simulate the AbortController and Fetch API behavior for RFC 8908
    const checkCaptivePortal = async () => {
      try {
        console.log(`Checking captive portal with timeout: ${timeout}ms...`);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (simulateState === 'internet') {
          setStatus('internet-mode');
        } else if (simulateState === 'captive') {
          setStatus('portal-required');
          setVenueInfo({
            name: "OpenWISP Demo Network",
            url: "https://wifi.openwisp.io"
          });
        } else if (simulateState === 'timeout') {
          throw new Error('API Timeout');
        }
      } catch (error) {
        console.warn('Captive Portal API failed/timed out, falling back to legacy check...');
        setStatus('fallback-mode');
      }
    };

    checkCaptivePortal();
  }, [timeout, simulateState]);

  return (
    <div className="detector-card" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Portal Status: 
        <span style={{ marginLeft: '10px', color: status === 'checking' ? 'gray' : '#3498db' }}>
          {status.toUpperCase()}
        </span>
      </h3>
      
      {status === 'checking' && <p>🔍 Polling RFC 8908 API...</p>}
      
      {status === 'internet-mode' && (
        <p>✅ Direct internet access detected. No login required.</p>
      )}
      
      {status === 'portal-required' && (
        <div>
          <p>⚠️ Captive portal login is required for internet access.</p>
          <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '4px' }}>
            <p><strong>Venue:</strong> {venueInfo?.name}</p>
            <button style={{ background: '#2ecc71', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Proceed to Login
            </button>
          </div>
        </div>
      )}
      
      {status === 'fallback-mode' && (
        <p>🔄 API not supported or timed out ({timeout}ms). Using existing legacy internet check fallback.</p>
      )}
    </div>
  );
}

export default CaptivePortalDetector;