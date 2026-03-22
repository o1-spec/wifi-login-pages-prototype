class AuthenticationManager {
  constructor(onStateChange) {
    this.onStateChange = onStateChange;
  }

  validateAndInit() {
    console.log('🟢 MODULAR: AuthenticationManager handles only auth logic');
    // Simulate auth validation
    setTimeout(() => {
      this.onStateChange({ username: 'demo-user', authenticated: true });
    }, 500);
  }

  logout() {
    console.log('🟢 MODULAR: Clean logout logic');
    this.onStateChange({ loggedOut: true });
  }
}

export default AuthenticationManager;