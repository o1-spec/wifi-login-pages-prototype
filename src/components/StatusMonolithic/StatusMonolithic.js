import React, { Component } from 'react';

class StatusMonolithic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Simulate the 20+ state properties
      username: '',
      password: '',
      activeSessions: [],
      pastSessions: [],
      userInfo: {},
      userPlan: {},
      modalActive: false,
      loggedOut: false,
      // ... many more properties
      loading: true
    };
  }

  componentDidMount() {
    // Simulate the complex 180+ line componentDidMount
    console.log('🔴 MONOLITHIC: Complex componentDidMount with mixed responsibilities');
    
    setTimeout(() => {
      this.setState({ username: 'demo-user', loading: false });
    }, 1000);
  }

  // Simulate multiple responsibilities mixed together
  handleAuthentication = () => {
    console.log('🔴 MONOLITHIC: Auth logic mixed with UI updates');
    this.setState({ loggedOut: true });
  }

  handleSessionManagement = () => {
    console.log('🔴 MONOLITHIC: Session logic mixed with component state');
    this.setState({ activeSessions: ['session1', 'session2'] });
  }

  handlePaymentLogic = () => {
    console.log('🔴 MONOLITHIC: Payment logic mixed with rendering');
    this.setState({ userPlan: { exhausted: true } });
  }

  render() {
    const { loading, username, activeSessions, userPlan } = this.state;

    if (loading) {
      return <div className="loading">🔴 Loading... (monolithic style)</div>;
    }

    return (
      <div className="status-monolithic">
        <h2>Status Component (Monolithic - 1,551 lines)</h2>
        
        <div className="user-info">
          <p>Username: {username}</p>
          <p>Active Sessions: {activeSessions.length}</p>
          <p>Plan Status: {userPlan.exhausted ? 'Exhausted' : 'Active'}</p>
        </div>

        <div className="actions">
          <button onClick={this.handleAuthentication}>Logout (Auth Logic)</button>
          <button onClick={this.handleSessionManagement}>Manage Sessions</button>
          <button onClick={this.handlePaymentLogic}>Check Payment</button>
        </div>

        <div className="code-sample">
          <h3>Issues Demonstrated:</h3>
          <ul>
            <li>Multiple responsibilities in one component</li>
            <li>Mixed concerns (auth + UI + sessions + payments)</li>
            <li>Hard to test individual features</li>
            <li>Complex state management</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StatusMonolithic;