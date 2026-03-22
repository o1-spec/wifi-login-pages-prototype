class SessionManager {
  constructor(onStateChange) {
    this.onStateChange = onStateChange;
  }

  setupMonitoring() {
    console.log('🟢 MODULAR: SessionManager handles only session logic');
    // Simulate session fetching
    setTimeout(() => {
      this.onStateChange({ activeSessions: ['session1', 'session2'] });
    }, 500);
  }

  logoutSession(sessionId) {
    console.log('🟢 MODULAR: Clean session logout');
    this.onStateChange({ sessionLoggedOut: sessionId });
  }
}

export default SessionManager;