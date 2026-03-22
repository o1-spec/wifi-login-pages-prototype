// src/components/StatusModular/Status.js
import React, { Component } from 'react';
import AuthenticationManager from './managers/AuthenticationManager';
import SessionManager from './managers/SessionManager';
import PaymentManager from './managers/PaymentManager';
import { formatBytes } from './utils/uiUtilities';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      activeSessions: [],
      userPlan: null,
      loggedOut: false,
      dataUsed: 15485760 // ~14.7 MB for demo
    };

    // Instantiate isolated managers
    this.authManager = new AuthenticationManager(this.handleStateChange);
    this.sessionManager = new SessionManager(this.handleStateChange);
    this.paymentManager = new PaymentManager(this.handleStateChange);
  }

  componentDidMount() {
    // Clean, readable orchestration
    this.authManager.validateAndInit();
    this.sessionManager.setupMonitoring();
    this.paymentManager.checkPlanStatus();
  }

  // Single state updater for all managers
  handleStateChange = (newState) => {
    this.setState(newState);
  };

  render() {
    const { username, activeSessions, loggedOut, userPlan, dataUsed, isUpgrading, upgradeMessage } = this.state;

    if (loggedOut) return <div className="logged-out">Successfully logged out</div>;

    return (
      <div className="status-modular">
        <h2>Status Component (Modular)</h2>
        
        <div className="user-info">
          <p><strong>User:</strong> {username || 'Loading...'}</p>
          <p><strong>Active Sessions:</strong> {activeSessions.length}</p>
          <p><strong>Plan:</strong> {userPlan ? userPlan.planName : 'Loading...'}</p>
          <p><strong>Data Used:</strong> {formatBytes(dataUsed)}</p>
        </div>

        {upgradeMessage && (
          <div className="badge-success" style={{ marginBottom: '20px', padding: '10px' }}>
            {upgradeMessage}
          </div>
        )}

        <div className="actions">
          <button onClick={() => this.authManager.logout()}>Logout</button>
          <button 
            onClick={() => this.paymentManager.upgradePlan()}
            disabled={isUpgrading}
          >
            {isUpgrading ? 'Upgrading...' : 'Upgrade Plan'}
          </button>
        </div>
      </div>
    );
  }
}

export default Status;