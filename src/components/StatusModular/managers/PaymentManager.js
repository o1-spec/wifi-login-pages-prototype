class PaymentManager {
  constructor(onStateChange) {
    this.onStateChange = onStateChange;
  }

  checkPlanStatus() {
    console.log('🟢 MODULAR: PaymentManager checking subscription status');
    // Simulate API call to check user plan
    setTimeout(() => {
      this.onStateChange({ 
        userPlan: { planName: 'Premium WiFi', exhausted: false },
        showUpgradeBtn: false 
      });
    }, 600);
  }

  upgradePlan() {
    console.log('🟢 MODULAR: PaymentManager handling plan upgrade');
    this.onStateChange({ isUpgrading: true });
    
    setTimeout(() => {
      this.onStateChange({ 
        isUpgrading: false,
        upgradeMessage: 'Plan upgraded successfully!' 
      });
    }, 1000);
  }
}

export default PaymentManager;