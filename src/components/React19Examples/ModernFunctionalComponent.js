import React, { useState, useEffect, useCallback } from 'react';

function ModernFunctionalComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setData({ name: 'Demo User', role: 'Guest' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div style={{ border: '1px solid #2ecc71', padding: '15px', borderRadius: '4px' }}>
      <h3 style={{ color: '#2ecc71', marginTop: 0 }}>React 19 (Hooks & Async)</h3>
      
      {error && <p>Error: {error}</p>}
      
      {loading ? (
        <p>⏳ Loading data...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {data?.name}</p>
          <p><strong>Role:</strong> {data?.role}</p>
        </div>
      )}
      
      <button 
        onClick={fetchData}
        disabled={loading}
        style={{ marginTop: '10px', padding: '5px 10px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Refresh Data
      </button>
    </div>
  );
}

export default ModernFunctionalComponent;