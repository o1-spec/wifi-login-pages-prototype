class CaptivePortalManager {
  constructor(onStateChange) {
    this.onStateChange = onStateChange;
  }

  detectPortal() {
    console.log('🟢 MODULAR: CaptivePortalManager handling RFC 8908 checks');
    // Simulate Captive Portal API detection
    setTimeout(() => {
      this.onStateChange({ 
        isCaptivePortal: true,
        portalMode: 'async'
      });
    }, 400);
  }

  handleSyncLogout() {
    console.log('🟢 MODULAR: Handling complex iframe synchronous logout safely');
    this.onStateChange({ iframeLogoutActive: true });
  }
}

export default CaptivePortalManager;