import React, { useState } from 'react';
import StatusMonolithic from '../components/StatusMonolithic/StatusMonolithic';
import StatusModular from '../components/StatusModular/Status';

function StatusComparison() {
  const [view, setView] = useState('monolithic');

  return (
    <div className="comparison-container">
      <h1>Status Component Architecture Comparison</h1>
      
      <div className="view-toggle">
        <button 
          onClick={() => setView('monolithic')}
          className={view === 'monolithic' ? 'active' : ''}
        >
          Current (Monolithic - 1,551 lines)
        </button>
        <button 
          onClick={() => setView('modular')}
          className={view === 'modular' ? 'active' : ''}
        >
          Proposed (Modular - ~350 lines)
        </button>
      </div>

      <div className="architecture-info">
        {view === 'monolithic' ? (
          <div className="info-panel">
            <h3>Current Architecture Issues:</h3>
            <ul>
              <li>6-7 mixed responsibilities</li>
              <li>Hard to test independently</li>
              <li>Complex componentDidMount (180+ lines)</li>
              <li>Scattered state management</li>
            </ul>
          </div>
        ) : (
          <div className="info-panel">
            <h3>Proposed Architecture Benefits:</h3>
            <ul>
              <li>Single responsibility per manager</li>
              <li>Easy to test in isolation</li>
              <li>Clear data flow and separation</li>
              <li>Maintainable and extensible</li>
            </ul>
          </div>
        )}
      </div>

      <div className="component-demo">
        {view === 'monolithic' ? (
          <StatusMonolithic />
        ) : (
          <StatusModular />
        )}
      </div>
    </div>
  );
}

export default StatusComparison;